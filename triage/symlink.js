var path = require('path');

module.exports = {
    server: function(api) {
        api.addSymlink('/data', path.resolve(__dirname, '../data'));
    }
};
