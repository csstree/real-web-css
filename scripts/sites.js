var fs = require('fs');
var TOP = 250;

module.exports = fs.readFileSync(__dirname + '/../data/sites.csv', 'utf8')
    .split(/\r\n?|\n/)
    .map(function(line) {
        return line.split(',')[1];
    })
    .slice(0, TOP);
