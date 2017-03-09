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
        var cells = [
            idx + 1,
            report.downloaded && !report.error && !report.validation ? '🆗' : '⚠️',
            report.name
        ];

        if (report.downloaded) {
            cells.push(
                report.error || report.fixedError
                    ? '<details>' +
                        '<summary>Error' + (report.fixedError ? ' (patched)' : '') + '</summary>' +
                        '<pre>' + escapeHTML((report.fixedError || report.error).details) + '</pre>' +
                      '</details>' +
                      (report.errorComment ? '<em>' + report.errorComment + '</em>' : '')
                    : 'OK' + (report.patch ? '<br><em>' + report.patch + '</em>' : ''),
                report.validation
                    ? '<details>' +
                        '<summary>' +
                            report.validation.length + (report.validation.length > 1 ? ' warnings' : ' warning') +
                        '</summary>' +
                        '<pre>' + escapeHTML(report.validation.join('\n')) + '</pre>' +
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
