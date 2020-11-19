module.exports = {
    getSiteList(count = 10) {
        return require('fs')
            .readFileSync(__dirname + '/../data/top-sites.csv', 'utf8')
            .trim()
            .split(/\r\n?|\n/)
            .slice(0, count);
    }
};
