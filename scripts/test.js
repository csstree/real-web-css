const path = require('path');
const fs = require('fs');
const csstree = require('css-tree');
const syntax = csstree.lexer;
const cssDir = path.join(__dirname, '../data/css');
const resultFile = path.join(__dirname, '../data/test-result.json');
const startTime = Date.now();

function validate(ast) {
    const errors = [];

    try {
        csstree.walk(ast, {
            visit: 'Declaration',
            enter: function(node) {
                const { error } = syntax.matchDeclaration(node);

                if (error) {
                    let message = error.rawMessage || error.message || error;

                    if (error.name !== 'SyntaxMatchError' &&
                        error.name !== 'SyntaxReferenceError') {
                        return;
                    }

                    errors.push({
                        message,
                        property: node.property,
                        css: error.css,
                        mismatchOffset: error.mismatchOffset,
                        line: error.line,
                        column: error.column,
                        offset: error.offset
                    });
                }
            }
        });
    } catch (e) {
        console.error('Error on validation', e);
        process.exit();
    }

    return errors;
}

const dataFiles = fs.readdirSync(cssDir)
    .filter(filename => path.extname(filename) === '.json')
    .sort();

const reports = dataFiles.map(filename => {
    const { id, url, datetime, stylesheets } = require(path.join(cssDir, filename));
    const startTime = Date.now();

    console.log('');
    console.log('Site #' + id + ' ' + url);
    console.log(
        '  ' +
        stylesheets.length + ' stylesheet(s), ' +
        stylesheets
            .reduce((size, { content }) => size + (content || '').length, 0) +
            'bytes'
    );

    const report = {
        id,
        url,
        dataDatetime: datetime,
        reportDatetime: new Date(),
        anlysisTime: 0,
        stylesheets: stylesheets.map(({ type, url, content, error }) => {
            // console.log(`  * ${type}${url ? ' ' + url : ''}`);

            if (error) {
                return { type, url, size: 0, error };
            }

            const parseErrors = [];
            const ast = csstree.parse(content, {
                filename: url || '<inline>',
                positions: true,
                onParseError: function(e) {
                    // console.log('    [ERROR] Parsing: ' + e.message);
                    parseErrors.push({
                        message: e.message,
                        details: typeof e.sourceFragment === 'function'
                            ? e.message + '\n' + e.sourceFragment(0)
                            : e.formattedMessage || e.message
                    });
                }
            });

            return {
                type,
                url,
                size: content.length,
                parseErrors,
                syntaxErrors: validate(ast)
            };
        })
    };

    report.anlysisTime = Date.now() - startTime;

    const errors = report.stylesheets.reduce((res, stylesheet) => {
        res.parse += (stylesheet.parseErrors || []).length;
        res.syntax += (stylesheet.syntaxErrors || []).length;
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
