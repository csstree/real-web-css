module.exports = require('fs')
    .readFileSync(__dirname + '/../data/top-sites.csv', 'utf8')
    .split(/\r\n?|\n/);
