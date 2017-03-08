module.exports = function(reports) {
    var missedCount = reports.filter(function(report) {
        return !report.downloaded;
    }).length;
    var parseErrorCount = reports.filter(function(report) {
        return report.error;
    }).length;
    var passedCount = reports.filter(function(report) {
        return report.downloaded && !report.error && !report.validation;
    }).length;

    return {
        total: reports.length,
        missed: missedCount,
        parseError: parseErrorCount,
        passed: passedCount
    };
};
