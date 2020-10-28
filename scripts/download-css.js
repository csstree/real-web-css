var path = require('path');
var url = require('url');
var http = require('http');
var https = require('https');
var zlib = require('zlib');
var fs = require('fs');
const puppeteer = require('puppeteer');

var sites = require('./lib/sites');
var seedFile = path.join(__dirname, '../data/idx.txt');
var outputDir = path.join(__dirname, '../data/css');
var awaitTimer;

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// where are we in the list of URLs
var siteIdx = fs.existsSync(seedFile) ? parseInt(fs.readFileSync(seedFile)) : 0;
if (siteIdx >= sites.length) {
    siteIdx = 0;
}

console.log('Start with #' + siteIdx);

// create a browser
puppeteer.launch({
    ignoreHTTPSErrors: true
})
    .then(function(instance) {
        process.on('exit', async function() {
            await browser.close();
        });
        onError = onError.bind(instance);
        visit = visit.bind(instance);
        downloadNext();
    });


var onError = function(err) {
    clearInterval(awaitTimer);
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
    return visit('http://' + domain);
}

function visit(siteUrl) {
    clearInterval(awaitTimer);
    return this.newPage().then(async function(page) {
        var awaitRequests = new Map();
        var completeRequests = 0;
        var externalStylesheets = [];
        var id = 1;
        
        awaitTimer = setInterval(function() {
            var requests = [...awaitRequests.keys()];
            var longRequests = requests.filter(function(request) {
                return Date.now() - new Date(awaitRequests.get(request).time) > 5000
            });

            console.log('    ⏳  Await ' + requests.length + ' requests (' + completeRequests + ' done)');
            longRequests.forEach(function(request) {
                console.log('        🐢  #' + awaitRequests.get(request).id + ' ' + request.url());
            });
        }, 1000);

        await page.setRequestInterception(true);
        page.on('request', function(request) {
            // console.info('Requesting', request.url)
            awaitRequests.set(request, { id: id++, time: Date.now() });
            if (request.resourceType() === 'image') {
                request.abort();
            } else {
                request.continue();
            }
        });
        page.on('requestfinished', function(request) {
            // console.info('Recieved', request.url)
            completeRequests++;
            awaitRequests.delete(request);
        });
        page.on('response', async function(response) {
            if (response.request().resourceType() === 'stylesheet') {
                const href = response.url();

                console.log('    ✅  ' + href);
                externalStylesheets.push(
                    response.text().then(function(content) {
                        return { href, content };
                    })
                );
            }
        })
        page.on('requestfailed', function(request) {
            // console.info('Recieved', request.url)
            completeRequests++;
            awaitRequests.delete(request);
        });

        return page.goto(siteUrl).then(function() {
            clearInterval(awaitTimer);
            console.log('    ✅  Page loaded');
            return Promise.all(externalStylesheets)
                .then(function(stylesheets) {
                    extractCSS(page, siteUrl, stylesheets);
                });
        }, onError);
    }, onError);
}

function extractCSS(page, siteUrl, external) {
    return page.evaluate(function() {
        // collect stylesheets
        return [].slice.call(document.styleSheets).map(function(sheet) {
            return sheet.ownerNode.textContent;
        });
    }).then(function(inline) {
        inline = inline.reduce(function(result, content) {
            if (content) {
                result.push(
                    '/**** inline ****/\n' +
                    content
                );
            }

            return result;
        }, [])

        external = external.reduce(function(result, sheet) {
            return result.concat(
                '/**** ' + sheet.href + ' ****/\n' +
                sheet.content
            );
        }, []);

        return page.close()
            .then(function() {
                var css = inline.concat(external).join('\n');

                if (css) {
                    fs.writeFileSync(path.join(outputDir, (siteIdx - 1) + '.css'), '/* ' + siteUrl + ' */\n' + css, 'utf8');

                    console.log(`    🔸  Stylesheets: ${[
                        external.length ? external.length + ' external' : '',
                        inline.length ? inline.length + ' inline' : ''
                    ].filter(Boolean).join(', ') || 'none'}`);

                    console.log('    🎉  DONE');
                    console.log();
                    // remember the place in the likely scenario that
                    fs.writeFileSync(seedFile, String(siteIdx));
                } else {
                    console.log('    ❌  No CSS found');
                    console.log();
                }

                return downloadNext();
            })
            .catch(function(error) {
                console.error('    ❌  ', error);
                process.exit();
            });
    }, onError);
}
