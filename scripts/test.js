const path = require('path');
const fs = require('fs');
const { URL } = require('url');
const csstree = require('css-tree');
const { validate } = require('csstree-validator');
const { dictionaries } = require('./usage/');
const cssDir = path.join(__dirname, '../data/css');
const resultFile = path.join(__dirname, '../data/test-result.json');
const startTime = Date.now();

const dataFiles = fs.readdirSync(cssDir)
    .filter(filename => path.extname(filename) === '.json')
    .sort();

const reports = dataFiles.map(filename => {
    const { id, url: siteUrl, datetime, stylesheets } = require(path.join(cssDir, filename));
    const startTime = Date.now();

    console.log('');
    console.log('Site #' + id + ' ' + siteUrl);
    console.log(
        '  ' +
        stylesheets.length + ' stylesheet(s), ' +
        stylesheets
            .reduce((size, { content }) => size + (content || '').length, 0) +
            'bytes'
    );

    const report = {
        id,
        domain: siteUrl,
        fetchedAt: datetime,
        validatedAt: new Date(),
        validationTime: 0,
        stylesheets: stylesheets.map(({ type, url, content = '', error }) => {
            // console.log(`  * ${type}${url ? ' ' + url : ''}`);
            const errors = [];

            if (error) {
                errors.push({ name: 'FetchError', message: error });
            }

            const beforeParse = Date.now();
            const ast = csstree.parse(content, {
                filename: url || '<inline>',
                positions: true,
                onParseError: function(e) {
                    // console.log('    [ERROR] Parsing: ' + e.message);
                    errors.push({
                        name: 'ParseError',
                        message: e.message,
                        details: typeof e.sourceFragment === 'function'
                            ? e.message + '\n' + e.sourceFragment(0)
                            : e.formattedMessage || e.message
                    });
                }
            });
            const parseTime = Date.now() - beforeParse;
            const validateErrors = validate(ast);
            const validateTime = Date.now() - parseTime - beforeParse;
            const usage = Object.create(null);
            const addUsageEntry = (type, name) => {
                if (type in usage === false) {
                    usage[type] = {
                        [name]: 1
                    };
                } else {
                    if (name in usage[type] === false) {
                        usage[type][name] = 1;
                    } else {
                        usage[type][name] += 1;
                    }
                }
            };

            csstree.walk(ast, (node) => {
                if (node.type in dictionaries === false) {
                    return;
                }

                let name;

                if (node.type === 'Declaration') {
                    name = csstree.property(node.property);

                    if (name.hack) {
                        addUsageEntry('Declaration hacks', name.hack, node.loc.start.offset);
                    }

                    if (name.custom) {
                        return;
                    }

                    name = name.name;// + (name.hack ? ' (with hack: ' + name.hack + ')' : '');
                } else if (node.type === 'Dimension') {
                    name = node.unit.toLowerCase();
                } else {
                    name = node.name.toLowerCase();
                    if (node.type === 'PseudoClassSelector' ||
                        node.type === 'PseudoElementSelector' ||
                        node.type === 'Function') {
                        if (node.children !== null) {
                            name += '()';
                        }
                    }
                }

                addUsageEntry(node.type, name, node.loc.start.offset);
            });

            return {
                type,
                url,
                domain: url && new URL(url).hostname,
                size: content.length,
                usage,
                parseTime,
                validateTime,
                errors: [...errors, ...validateErrors].map(error => ({
                    name: error.name,
                    message: error.message,
                    ...error
                }))
            };
        })
    };

    report.anlysisTime = Date.now() - startTime;

    const errors = report.stylesheets.reduce((res, stylesheet) => {
        for (const error of stylesheet.errors) {
            if (error.name === 'ParseError') {
                res.parse++;
            } else {
                res.syntax++;
            }
        }
        return res;
    }, { parse: 0, syntax: 0 });

    console.log(
        errors.parse
            ? '  😢  Parse errors: ' + errors.parse
            : '  ✅  No parse errors'
    );
    console.log(
        errors.syntax
            ? '  😢  Syntax errors: ' + errors.syntax
            : '  ✅  No syntax errors'
    );

    console.log('  ⏳  Finished in ' + report.anlysisTime + 'ms');

    return report;
});

fs.writeFileSync(resultFile, JSON.stringify(reports, null, 0), 'utf8');

console.log();
console.log('Sites:', reports.length);
console.log('DONE in ' + (Date.now() - startTime) + 'ms');
