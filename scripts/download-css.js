var path = require('path');
var parseUrl = require('url').parse;
var http = require('http');
var https = require('https');
var zlib = require('zlib');
var fs = require('fs');
var urls = require('./sites');
var seedFile = path.join(__dirname, '../data/idx.txt');
var outputDir = path.join(__dirname, '../data');

// where are we in the list of URLs
var idx = fs.existsSync(seedFile) ? parseInt(fs.readFileSync(seedFile)) : 0;
if (idx >= urls.length) {
    idx = 0;
}

console.log('Start with #' + idx);

// create a browser
require('phantom').create(['--load-images=no'], { logger: {} })
    .then(function(instance) {
        process.on('exit', function() {
            instance.exit();
        });
        download(idx, instance);
    });


// main task 
function download(idx, phantom) { 
    function onError(err) {
        console.log('    ❌  Failed ' + (err || ''));
        console.log();
        return download(idx + 1, phantom);
    }

    var url = urls[idx];
 
    if (!url) {
        // we're done!
        console.log('DONE 🎉');
        process.exit();
    }

    console.log('Visit site #' + idx + ' 🚀  ' + url);

    phantom.createPage().then(function(page) {
        page.open('http://' + url).then(function(status) {
            if (status !== 'success') {
                return onError();
            }
     
            page.evaluate(function() {
                // collect all CSS, external and inline
                return [].slice.call(document.styleSheets).map(function(sheet) {
                    return sheet.href
                        ? { type: 'external', href: sheet.href }
                        : { type: 'inline', css: sheet.ownerNode.textContent };
                });
            }).then(function(styles) {
                var host = parseUrl(url).host;
                var external = [];
                var inline = [];

                styles.forEach(function(sheet) {
                    if (sheet.type === 'inline') {
                        if (sheet.css) {
                            inline.push('/**** inline ****/');
                            inline.push(sheet.css);
                            console.log('    🔸  inline style');
                        }
                    } else {
                        if (!sheet.href || /^data:/i.test(sheet.href)) {
                            return;
                        }

                        console.log('    ⚡  Fetch ' + sheet.href);
                        external.push(
                            fetch(sheet.href)
                                .then(function(content) {
                                    console.log('    ✅  ' + sheet.href);
                                    return '/**** ' + sheet.href + ' ****/\n' + content;
                                })
                                .catch(function(error) {
                                    console.log('    ❌  ' + sheet.href + ' Error:' + error);
                                })
                        );
                    }
                });

                Promise.all(external)
                    .then(function(sheets) {
                        var css = inline.concat(sheets).join('\n');

                        if (css && !/\/rinet.ru/.test(css)) {
                            fs.writeFileSync(path.join(outputDir, idx + '.css'), '/* ' + url + '*/\n' + css, 'utf8');
                            console.log('    🎉  DONE');
                            console.log();
                            // remember the place in the likely scenario that
                            fs.writeFileSync(seedFile, idx + 1);
                        } else {
                            console.log('    ❌  No CSS found');
                            console.log();
                        }

                        page.stop();
                        page.close();
                        download(idx + 1, phantom); // next!
                    })
                    .catch(function(error) {
                        console.log('    ❌  Error: ' + error + '\n');
                        process.exit();
                    });
            }, onError);
        }, onError);
    }, onError);
};

function fetch(url) {
    return new Promise(function(resolve, reject) {
        (parseUrl(url).protocol === 'http:' ? http : https).get(url, function(response) {
            var chunks = [];

            // console.log(response)
            if (response.statusCode < 200 && response.statusCode >= 400) {
                return reject('Bad response code: ' + response.statusCode);
            }

            if (response.headers.location) {
                return fetch(response.headers.location).then(resolve, reject);
            }

            response
                .on('data', function (chunk) {
                    chunks.push(chunk);
                })
                .on('end', function() {
                    var buffer = Buffer.concat(chunks);

                    try {
                        if (response.headers['content-encoding'] === 'gzip') {
                            buffer = zlib.gunzipSync(buffer);
                        } else if (response.headers['content-encoding'] === 'deflate') {
                            buffer = zlib.inflateSync(buffer);
                        }

                        resolve(buffer.toString());
                    } catch(e) {
                        reject(e);
                    }
                });
        });
    });
}
