module.exports = function() {
    const sites = require('../data/test-result.json');
    const usage = require('../scripts/usage').dictionaries;

    return {
        sites,
        usage
    };
};
