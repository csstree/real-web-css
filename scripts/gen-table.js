var path = require('path');
var fs = require('fs');
var reports = require(__dirname + '/../data/test-result.json');
var readmeFile = path.join(__dirname, '../README.md');
var readme = fs.readFileSync(readmeFile, 'utf-8');
var testStat = require('./lib/test-stat');
var stat = testStat(reports);

function inject(name, text) {
    var parts = readme.split(new RegExp('(<!-- /?' + name + ' -->)'));
    parts[2] = '\n\n' + text + '\n\n';
    readme = parts.join('');
}

function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function validationErrorStat(errors) {
    var viewed = {};
    return errors.reduce(function(stat, error) {
        stat.total++;

        if (!viewed.hasOwnProperty(error)) {
            stat.unique++;
            viewed[error] = true;
        }

        return stat;
    }, {
        total: 0,
        unique: 0
    });
}

var details = ['#Analysis of CSS of Alexa TOP ' + reports.length, ''];
var detailsTOC = [];

// table
inject('date', 'Update date: ' + new Date().toISOString());
inject('table',
    '* Sites: `' + stat.total + '`\n' +
    '* Downloaded: `' + (stat.total - stat.missed) + '` (' + stat.missed + ' failed)\n' +
    '* Parsed: `' + (stat.total - stat.missed - stat.parseError) + '` (' + stat.parseError + ' failed)\n' +
    '* Validation passed: `' + stat.passed + '` (' + (stat.total - stat.missed - stat.parseError - stat.passed) + ' failed)\n\n' +

    '<table>\n' +
    '<thead>\n' +
      '<tr><th>' + ['#', '', 'Site', 'Parsing', 'Validation'].join('</th><th>') + '</th></tr>\n' +
    '</thead>\n' +
    reports.map(function(report, idx) {
        var detailsRef = (idx + 1) + '-' + report.name.replace(/[^a-z0-9]/g, '');
        var cells = [
            idx + 1,
            report.downloaded && !report.error && !report.validation ? '🆗' : '⚠️',
            report.name
        ];

        detailsTOC.push('1. [' + report.name + '](#' + detailsRef + ')')
        details.push('', '## #' + (idx + 1) + ' ' + report.name, '');
        details.push('');

        if (report.downloaded) {

            details.push('<a name"' + detailsRef + '-parsing">');
            details.push('### Parsing');
            if (report.parsing) {
                details.push(report.parsing.length + (report.parsing.length > 1 ? ' parsing errors' : 'parsing error') + ':');
                details.push('```');
                details.push(escapeHTML(report.parsing.map(function(e) {
                    var lines = e.details.split('\n');
                    var numLength = lines[1].indexOf('|');
                    var offset = lines[2].length - numLength - 1;

                    if (offset > 15) {
                        lines[2] = lines[2].slice(lines[2].length - numLength - 18);
                        lines[1] = lines[1].slice(0, numLength + 1) + '…' + lines[1].slice(numLength + offset - 15);
                    }

                    if (lines[1].length > (numLength + 30)) {
                        lines[1] = lines[1].substr(0, numLength + 30) + '…';
                    }

                    return lines.join('\n');
                }).join('\n')));
                details.push('```');
            } else {
                details.push('No errors');
                details.push('');
            }

            details.push('<a name"' + detailsRef + '-validation">');
            details.push('### Validation');
            if (report.validation) {
                details.push(report.validation.length + (report.validation.length > 1 ? ' syntax errors' : ' syntax error') + ':');
                details.push('```');
                details.push(escapeHTML(report.validation.join('\n')));
                details.push('```');
            } else {
                details.push('No errors');
                details.push('');
            }

            cells.push(
                report.parsing
                    ? '[' + report.parsing.length + (report.parsing.length > 1 ? ' errors' : 'error') + ']' + 
                      '(test-details.md#' + (idx + 1) + '-' + report.name.replace(/[^a-z0-9]/g, '') + '-parsing)'
                    : '✅',
                report.validation
                    ? '[' + report.validation.length + (report.validation.length > 1 ? ' errors' : ' error') + ']' +
                      '(test-details.md#' + (idx + 1) + '-' + report.name.replace(/[^a-z0-9]/g, '') + '-validation)'
                    : '✅'
            );

            return '<tr><td>' + cells.join('</td><td>') + '</td></tr>';
        } else {
            return '<tr><td>' + cells.join('</td><td>') + '</td><td colspan="2">–</td></tr>';
        }
        
    }).join('\n') + '</table>'
);

details.splice(2, 0, detailsTOC.join('\n'));

fs.writeFileSync('./test-details.md', details.join('\n'), 'utf8');
fs.writeFileSync(readmeFile, readme, 'utf8');
