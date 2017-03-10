var path = require('path');
var url = require('url');
var http = require('http');
var https = require('https');
var zlib = require('zlib');
var fs = require('fs');
var sites = require('./lib/sites');
var seedFile = path.join(__dirname, '../data/idx.txt');
var outputDir = path.join(__dirname, '../data/css');

if (!fs.existsSync(outputDir)) {
    fs.mkdir(outputDir);
}

// where are we in the list of URLs
var siteIdx = fs.existsSync(seedFile) ? parseInt(fs.readFileSync(seedFile)) : 0;
if (siteIdx >= sites.length) {
    siteIdx = 0;
}

console.log('Start with #' + siteIdx);

// create a browser
require('phantom').create(['--load-images=false', '--ignore-ssl-errors=true'], { logger: {} })
    .then(function(instance) {
        process.on('exit', function() {
            instance.exit();
        });
        onError = onError.bind(instance);
        visit = visit.bind(instance);
        downloadNext();
    });


var onError = function(err) {
    console.log('    ❌  Failed ' + (err || ''));
    console.log();
    return downloadNext();
}

// main task 
function downloadNext() { 
    var domain = sites[siteIdx++];
 
    if (!domain) {
        // we're done!
        console.log('DONE 🎉');
        process.exit();
    }

    console.log('Visit site #' + (siteIdx - 1) + ' 🚀  ' + domain);
    visit('http://' + domain);
}

function visit(siteUrl) {
    this.createPage().then(function(page) {
        var awaitRequests = {};
        var completeRequests = 0;
        var awaitTimer = setInterval(function() {
            var requests = Object.keys(awaitRequests).map(function(id) {
                return awaitRequests[id];
            });
            var longRequests = requests.filter(function(request) {
                return Date.now() - new Date(request.time) > 5000
            });

            console.log('    ⏳  Await ' + requests.length + ' requests (' + completeRequests + ' done)');
            longRequests.forEach(function(request) {
                console.log('        🐢  #' + request.id + ' ' + request.url);
            });
            if (completeRequests > 0 && longRequests.length === requests.length) {
                page.stop();
            }
        }, 1000);

        page.on('onResourceRequested', function(requestData, request) {
            // console.info('Requesting', requestData.url)
            awaitRequests[requestData.id] = requestData;
        });
        page.on('onResourceReceived', function(requestData) {
            // console.info('Recieved', requestData.url)
            completeRequests++;
            delete awaitRequests[requestData.id];
        });

        page.open(siteUrl).then(function() {
            page.stop();
            clearInterval(awaitTimer);
            console.log('    ✅  Page loaded');

            page
                .evaluate(function() {
                    var refresh = document.querySelector('meta[http-equiv="refresh"]');
                    return refresh ? refresh.content.split(/;url=/i)[1] : false;
                })
                .then(function(redirect) {
                    if (redirect) {
                        console.log('    ⚠️️  Redirect to ' + redirect);
                        page.close();
                        visit(redirect);
                    } else {
                        extractCSS(page, siteUrl);
                    }
                }, onError);
        }, onError);
    }, onError);
}

function extractCSS(page, siteUrl) {
    page.evaluate(function() {
        // collect stylesheets
        return [].slice.call(document.styleSheets).map(function(sheet) {
            return sheet.href
                ? { type: 'external', href: sheet.href }
                : { type: 'inline', css: sheet.ownerNode.textContent };
        });
    }).then(function(styles) {
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
                            content = content.replace(/^[\uFEFF\uFFFE]/, '');
                            return (
                                '/**** ' + sheet.href + ' ****/\n' +
                                content
                            );
                        })
                        .catch(function(error) {
                            console.log('    ❌  ' + sheet.href + ' Error: ' + error);
                        })
                );
            }
        });

        page.close();

        Promise.all(external)
            .then(function(sheets) {
                var css = inline.concat(sheets).join('\n');

                if (css && !/\/rinet.ru/.test(css)) {
                    fs.writeFileSync(path.join(outputDir, (siteIdx - 1) + '.css'), '/* ' + siteUrl + ' */\n' + css, 'utf8');
                    console.log('    🎉  DONE');
                    console.log();
                    // remember the place in the likely scenario that
                    fs.writeFileSync(seedFile, siteIdx);
                } else {
                    console.log('    ❌  No CSS found');
                    console.log();
                }

                downloadNext();
            })
            .catch(function(error) {
                console.log('    ❌  Error: ' + error + '\n');
                process.exit();
            });
    }, onError);
}

function fetch(resourceUrl) {
    return new Promise(function(resolve, reject) {
        (url.parse(resourceUrl).protocol === 'http:' ? http : https).get(resourceUrl, function(response) {
            var contentType = response.headers['content-type'] || '';
            var chunks = [];

            if (!/^\s*text\/css(\s*;|$)/i.test(contentType)) {
                return reject('Bad content type: ' + contentType);
            }

            if (response.statusCode < 200 && response.statusCode >= 400) {
                return reject('Bad response code: ' + response.statusCode);
            }

            if (response.headers.location) {
                return fetch(url.resolve(resourceUrl, response.headers.location)).then(resolve, reject);
            }

            response
                .on('data', function (chunk) {
                    chunks.push(chunk);
                })
                .on('error', function(){})
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
