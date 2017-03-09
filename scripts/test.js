var path = require('path');
var fs = require('fs');
var csstree = require('css-tree');
var syntax = csstree.lexer;
var testStat = require('./lib/test-stat');
var sites = require('./lib/sites');
var cssDir = path.join(__dirname, '../data/css');
var resultFile = path.join(__dirname, '../data/test-result.json');
var patches = require('./lib/parse-patch');

function validate(ast) {
    var errors = [];

    try {
        csstree.walkDeclarations(ast, function(node) {
            if (!syntax.matchProperty(node.property, node.value)) {
                var error = syntax.lastMatchError;
                var message = error.rawMessage || error.message || error;

                if (message === 'Mismatch') {
                    message = 'Invalid value for `' + node.property + '`';
                } else if (message === 'Uncomplete match') {
                    message = 'The rest part of value can\'t to be matched on `' + node.property + '` syntax';
                }

                errors.push({
                    node: node,
                    loc: error.loc || node.loc,
                    line: error.line || node.loc && node.loc.start && node.loc.start.line,
                    column: error.column || node.loc && node.loc.start && node.loc.start.column,
                    property: node.property,
                    message: message,
                    error: syntax.lastMatchError
                });
            }
        });
    } catch (e) {
        return e;
    }

    return errors;
}

function formatErrors(errors) {
    var output = [];

    if (Array.isArray(errors)) {
        var map = errors.reduce(function(map, item) {
            var msg = String(item.error.message || item.error)
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
    var patch = patches[url] || {};
    var report = {
        name: url,
        downloaded: false,
        error: null,
        errorComment: false,
        patch: false,
        fixedError: null,
        validation: null
    };

    // if (url !== 'mail.ru') return report;
    console.log('Test #' + idx + ' ' + url);

    if (fs.existsSync(fullfn)) {
        report.downloaded = true;

        var css = fs.readFileSync(fullfn, 'utf8');
        var host = css.match(/^\/\*\s*([^*]+)\s*\*\//)[1];

        try {
            var ast;

            try {
                ast = csstree.parse(css, { filename: fullfn, positions: true });
            } catch (e) {
                if (typeof patch.patch === 'function') {
                    parseError(e, report, true);
                    if (patch.comment) {
                        report.errorComment = patch.comment;
                        console.log('  NOTE: ' + patch.comment);
                    }
                    console.log('  Patch CSS and parse again');
                    report.patch = true;
                    ast = csstree.parse(patch.patch(css), { filename: fullfn, positions: true });
                } else {
                    throw e;
                }
            }

            console.log('  Parsed successful');

            if (patch.patch) {
                report.patch = 'No patch needed';
            }

            var errors = validate(ast);
            if (errors.length) {
                report.validation = formatErrors(errors);
                console.log('  Warnings: ' + report.validation.length);
            } else {
                console.log('  No warnings');
            }
        } catch (e) {
            if (patch.comment) {
                report.errorComment = patch.comment;
            }
            parseError(e, report, false);
        }
    } else {
        console.log('  Missed');
    }

    console.log();

    return report;
});

fs.writeFileSync(resultFile, JSON.stringify(reports.map(function(report) {
    if (report.error) {
        report.error = {
            message: report.error.message,
            details: report.error.details || report.error.message
        };
    }

    if (report.fixedError) {
        report.fixedError = {
            message: report.fixedError.message,
            details: report.fixedError.details || report.fixedError.message
        };
    }

    return report;
}, {}), null, 2), 'utf8')

var stat = testStat(reports);
console.log('Sites:', stat.total);
console.log('Downloaded:', (stat.total - stat.missed), '(' + stat.missed + ' failed)');
console.log('Parsed:', stat.total - stat.missed - stat.parseError, '(' + stat.parseError + ' failed)');
console.log('Validation passed:', stat.passed, '(' + (stat.total - stat.missed - stat.parseError - stat.passed) + ' failed)');
