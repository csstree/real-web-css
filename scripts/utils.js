module.exports = {
    getSiteList() {
        return require('fs')
            .readFileSync(__dirname + '/../../data/top-sites.csv', 'utf8')
            .trim()
            .split(/\r\n?|\n/);
    }
};
