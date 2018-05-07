var path = require('path');
var fs = require('fs');
var csstree = require('css-tree');
var syntax = csstree.lexer;
var testStat = require('./lib/test-stat');
var sites = require('./lib/sites');
var cssDir = path.join(__dirname, '../data/css');
var resultFile = path.join(__dirname, '../data/test-result.json');

function validate(ast) {
    var errors = [];

    try {
        csstree.walk(ast, {
            visit: 'Declaration',
            enter: function(node) {
                var error = syntax.matchDeclaration(node).error;

                if (error) {
                    var message = error.rawMessage || error.message || error;

                    if (message === 'Mismatch') {
                        message = 'Invalid value for `' + node.property + '`';
                    } else if (message === 'Uncomplete match') {
                        message = 'The rest part of value can\'t be matched to `' + node.property + '` grammar';
                    }

                    errors.push({
                        node: node,
                        loc: error.loc || node.loc,
                        line: error.line || node.loc && node.loc.start && node.loc.start.line,
                        column: error.column || node.loc && node.loc.start && node.loc.start.column,
                        property: node.property,
                        message: message,
                        error: error
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

function formatErrors(errors) {
    var output = [];

    if (Array.isArray(errors)) {
        var map = errors.reduce(function(map, item) {
            var msg = String(item.error.message || item.error)
                        .replace(/\n\s+syntax: .+?\n/, '\n')
                        .replace(/^[^\n]+/, item.message)
                        .replace(/\n/g, '\n  ')
            map[msg] = (map[msg] || 0) + 1;
            return map;
        }, {});

        for (var key in map) {
            key = map[key] > 1
                ? key.replace(/\n|$/, ' × ' + map[key] + '$&')
                : key;

            output.push(
                key
                    .split(/\n/)
                    .map(function(line) {
                        return line.length < 80 ? line : line.substr(0, 79) + '…';
                    })
                    .join('\n')                
            );
        }
    } else {
        output.push('[ERROR] ' + errors);
    }

    return output;
}

function parseError(e, report, fixed) {
    console.log('  [ERROR] Parsing: ' + e.message);
    report[fixed ? 'fixedError' : 'error'] = {
        message: e.message,
        details: e.formattedMessage || e.message
    };
}

var reports = sites.map(function(url, idx) {
    var fullfn = cssDir + '/' + idx + '.css';
    var report = {
        idx: idx,
        name: url,
        downloaded: false,
        parsing: null,
        validation: null
    };

    console.log('Test #' + idx + ' ' + url);

    if (fs.existsSync(fullfn)) {
        report.downloaded = true;

        var css = fs.readFileSync(fullfn, 'utf8');
        var host = css.match(/^\/\*\s*([^*]+)\s*\*\//)[1];
        var ast = null;
        var parseErrors = [];

        try {
            ast = csstree.parse(css, {
                filename: fullfn,
                positions: true,
                onParseError: function(e) {
                    console.log('  [ERROR] Parsing: ' + e.message);
                    parseErrors.push({
                        message: e.message,
                        details: typeof e.sourceFragment === 'function'
                            ? e.message + '\n' + e.sourceFragment(0)
                            : e.formattedMessage || e.message
                    });
                }
            });

            if (parseErrors.length) {
                report.parsing = parseErrors;
            }
        } catch (e) {
            throw e;
        }

        console.log('  Parsing done');

        if (ast !== null) {
            var errors = validate(ast);
            if (errors.length) {
                report.validation = formatErrors(errors);
                console.log('  Warnings: ' + report.validation.length);
            } else {
                console.log('  No warnings');
            }
        }
    } else {
        console.log('  Missed');
    }

    console.log();

    return report;
});

fs.writeFileSync(resultFile, JSON.stringify(reports, null, 2), 'utf8')

var stat = testStat(reports);
console.log('Sites:', stat.total);
console.log('Downloaded:', (stat.total - stat.missed), '(' + stat.missed + ' failed)');
console.log('Parsed:', stat.total - stat.missed - stat.parseError, '(' + stat.parseError + ' failed)');
console.log('Validation passed:', stat.passed, '(' + (stat.total - stat.missed - stat.passed) + ' failed)');
