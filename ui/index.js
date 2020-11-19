module.exports = {
    name: 'Real Web CSS',
    data: () => require('./data')(),
    prepare: __dirname + '/prepare.js',
    view: {
        basedir: __dirname,
        assets: [
            'page/default.css',
            'page/default.js'
            // 'view/sidebar.js'
        ]
    }
};
