module.exports = function() {
    const sites = require('../data/test-result.json');
    const usageDict = require('../scripts/usage').dictionaries;

    return {
        sites,
        usageDict
    };
};
