module.exports = {
    getSiteList(count = 25) {
        return require('fs')
            .readFileSync(__dirname + '/../data/sites.csv', 'utf8')
            .trim()
            .split(/\r\n?|\n/)
            .slice(0, count);
    }
};
