module.exports = {
    name: 'Real Web CSS',
    basedir: __dirname,
    data: './data',
    prepare: './prepare',
    view: {
        assets: [
            './page/default.css',
            './page/default.js',
            './page/usage.css',
            './page/usage.js',
            './view/chart.css',
            './view/chart.js'
            // 'view/sidebar.js'
        ]
    }
};
