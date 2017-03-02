var path = require('path');
var parseUrl = require('url').parse;
var Zombie = require('zombie');
var fs = require('fs');
var seedFile = path.join(__dirname, '../data/idx.txt');
var outputDir = path.join(__dirname, '../data');
var TOP = 100;
 
// read site list
var urls = fs.readFileSync(__dirname + '/../data/sites.csv', 'utf8')
    .split(/\n/)
    .map(function(line) {
        return line.split(',')[1];
    })
    .slice(0, TOP);
 
// where are we in the list of URLs
var idx = fs.existsSync(seedFile) ? parseInt(fs.readFileSync(seedFile)) : 0;
if (idx >= urls.length) {
    idx = 0;
}

// create a browser
var browser = new Zombie();
browser.silent = true

console.log('Start with #' + idx);

// main task 
(function download(idx) { 
    var url = urls[idx];
 
    if (!url) {
        // we're done!
        console.log('DONE 🎉');
        process.exit();
    }

    console.log('Visit site #' + idx + ' 🚀  ' + url);
 
    browser.visit('http://' + url, function () {
        if (!browser.success) {
            console.log('    ❌  Skipped');
            console.log();
            return download(idx + 1);
        }
 
        // collect all CSS, external and inline
        var host = parseUrl(url).host;
        var external = [];
        var inline = [];

        [].slice.call(browser.querySelectorAll('link[rel=stylesheet], style'))
            .forEach(function(e) {
                if (e.nodeName.toLowerCase() === 'style') {
                    inline.push('/**** inline ****/');
                    inline.push(e.textContent);
                } else {
                    if (!e.href || /^data:/i.test(e.href)) {
                        return;
                    }

                    console.log('    ⚡  Fetch ' + e.href);
                    external.push(
                        browser.fetch(e.href)
                            .then(function(response) {
                                console.log('    ✅  ' + e.href + ' ', response.status);
                                if (response.status === 200)
                                    return response.text();
                            })
                            .then(function(text) {
                                return '/**** ' + e.href + ' ****/\n' + text;
                            })
                            .catch(function(error) {
                                console.log('❌  ' + e.href + ' Network error:' + error);
                            })
                    );
                }
            });

        Promise.all(external)
            .then(function(sheets) {
                var css = inline.concat(sheets).join('\n');

                if (css) {
                    fs.writeFileSync(path.join(outputDir, idx + '.css'), '/* ' + url + '*/\n' + css);
                    console.log('    ✅  DONE');
                    console.log();
                    // remember the place in the likely scenario that
                    fs.writeFileSync(seedFile, idx + 1);
                } else {
                    console.log('    ❌  No CSS found');
                    console.log();
                }

                download(idx + 1); // next!
            })
            .catch(function(error) {
                console.log('    ❌  Error: ' + error + '\n');
                process.exit();
            });
    });
})(idx);
