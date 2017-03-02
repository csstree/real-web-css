var path = require('path');
var fs = require('fs');
var csstree = require('css-tree');
var syntax = csstree.lexer;
var dir = path.join(__dirname, '../data');
var sites = require('./sites');
var readmeFile = path.join(__dirname, '../README.md');
var readme = fs.readFileSync(readmeFile, 'utf-8');
var patches = require('./parse-patch');

function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function inject(name, text) {
    var parts = readme.split(new RegExp('(<!-- /?' + name + ' -->)'));
    parts[2] = '\n\n' + text + '\n\n';
    readme = parts.join('');
}

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

function validationErrorStat(errors) {
    var viewed = {};
    return errors.reduce(function(stat, error) {
        stat.total++;

        if (!viewed.hasOwnProperty(error.message)) {
            stat.unique++;
            viewed[error.message] = true;
        }

        return stat;
    }, {
        total: 0,
        unique: 0
    });
}

function formatErrors(error) {
    var output = [];

    if (Array.isArray(error)) {
        output.push.apply(output, error.map(function(item) {
            return '* ' +
                String(item.error.message || item.error)
                    .replace(/^[^\n]+/, item.message)
                    .replace(/\n/g, '\n  ');
        }));
    } else {
        output.push('[ERROR] ' + error);
    }

    return output.join('\n');
}

function parseError(e, report, fixed) {
    console.log('  [ERROR] Parsing: ' + e.message);
    report[fixed ? 'fixedError' : 'error'] = {
        e: e,
        message: e.message,
        details: e.formattedMessage || e.message
    };
}

var reports = sites.map(function(url, idx) {
    var fullfn = dir + '/' + idx + '.css';
    var patch = patches[url] || {};
    var report = {
        url: url,
        downloaded: false,
        error: null,
        errorComment: false,
        patch: false,
        fixedError: null,
        validation: null
    };

    console.log('Test #' + idx + ' ' + url);

    if (fs.existsSync(fullfn)) {
        report.downloaded = true;

        var css = fs.readFileSync(fullfn, 'utf8');
        var host = css.match(/^\/\*\s*([^*]+)\s*\*\//)[1];

        try {
            var ast;

            try {
                ast = csstree.parse(css, { positions: true });
            } catch (e) {
                if (typeof patch.patch === 'function') {
                    parseError(e, report, true);
                    if (patch.comment) {
                        report.errorComment = patch.comment;
                        console.log('  NOTE: ' + patch.comment);
                    }
                    console.log('  Patch CSS and parse again');
                    report.patch = true;
                    ast = csstree.parse(patch.patch(css), { positions: true });
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
                console.log('  Warnings: ' + errors.length);
                report.validation = errors;
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

// totals
var missedCount = reports.filter(function(report) {
    return !report.downloaded;
}).length;
var parseErrorCount = reports.filter(function(report) {
    return report.error;
}).length;
var passed = reports.filter(function(report) {
    return report.downloaded && !report.error && !report.validation;
}).length;

console.log('Sites:', reports.length);
console.log('Downloaded:', (reports.length - missedCount), '(' + missedCount + ' failed)');
console.log('Parsed:', reports.length - missedCount - parseErrorCount, '(' + parseErrorCount + ' failed)');
console.log('Validation passed:', passed, '(' + (reports.length - missedCount - parseErrorCount - passed) + ' failed)');

// table
inject('date', 'Update date: ' + new Date().toISOString());
inject('table',
    '* Sites: `' + reports.length + '`\n' +
    '* Downloaded: `' + (reports.length - missedCount) + '` (' + missedCount + ' failed)\n' +
    '* Parsed: `' + (reports.length - missedCount - parseErrorCount) + '` (' + parseErrorCount + ' failed)\n' +
    '* Validation passed: `' + passed + '` (' + (reports.length - missedCount - parseErrorCount - passed) + ' failed)\n\n' +

    '<table>\n' +
    '<thead>\n' +
      '<tr><th>' + ['#', 'Site', '', 'Parsing', 'Validation'].join('</th><th>') + '</th></tr>\n' +
    '</thead>\n' +
    reports.map(function(report, idx) {
        var cells = [
            idx,
            report.downloaded && !report.error && !report.validation ? '🆗' : '⚠️',
            report.url
        ];

        if (report.downloaded) {
            cells.push(
                report.error || report.fixedError
                    ? '<details>' +
                        '<summary>Error</summary>' +
                        '<pre>' + escapeHTML((report.fixedError || report.error).details) + '</pre>' +
                      '</details><em>' +
                      (report.errorComment ? report.errorComment + '<br>' : '') +
                      (report.fixedError ? 'Error is patched' : '') + '</em>'
                    : 'OK' + (report.patch ? '<br><em>' + report.patch + '</em>' : ''),
                report.validation
                    ? '<details>' +
                        '<summary>' +
                            report.validation.length + (report.validation.length > 1 ? ' warnings' : ' warning') +
                            ' (unique: ' + validationErrorStat(report.validation).unique + ')' +
                        '</summary>' +
                        '<pre>' + escapeHTML(formatErrors(report.validation)) + '</pre>' +
                      '</details>'
                    : (report.error ? '–' : 'OK')
            );
            return '<tr><td>' + cells.join('</td><td>') + '</td></tr>';
        } else {
            return '<tr><td>' + cells.join('</td><td>') + '</td><td colspan="2">–</td></tr>';
        }
        
    }).join('\n') + '</table>'
);

fs.writeFileSync(readmeFile, readme, 'utf8');
