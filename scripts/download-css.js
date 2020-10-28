const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');
const sites = require('./lib/sites');
const seedFile = path.join(__dirname, '../data/idx.txt');
const outputDir = path.join(__dirname, '../data/css');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadSiteCSS(browser, siteIdx, siteUrl) {
    const page = await browser.newPage();
    const styleSheetResponses = [];
    const requests = new Set();
    const awaitRequests = new Map();

    // set up page listeners
    await page.setRequestInterception(true);
    page.on('request', request => {
        // console.info('Requesting', request.url)

        if (['image', 'font', 'other'].includes(request.resourceType())) {
            return request.abort();
        }

        request.continue();
        requests.add(request);
        awaitRequests.set(request, {
            id: requests.size - 1,
            startTime: Date.now()
        });
    });
    page.on('requestfinished', request => {
        // console.info('requestfinished', request.url)
        awaitRequests.delete(request);
    });
    page.on('requestfailed', request => {
        // console.info('requestfailed', request.url)
        awaitRequests.delete(request);
    });
    page.on('response', response => {
        if (response.request().resourceType() === 'stylesheet') {
            const url = response.url();
            const isDataUrl = /^data:/i.test(url);

            console.log('    ✅  ' + (isDataUrl ? '<dataurl>' : url));
            styleSheetResponses.push(response.text()
                .then(
                    content => ({ content }),
                    error => ({ error })
                )
                .then(payload => {
                    if (isDataUrl) {
                        return {
                            type: 'dataurl',
                            ...payload
                        };
                    }

                    return {
                        type: 'external',
                        url,
                        ...payload
                    };
                })
            );
        }
    });

    // timer to track long requests
    const trackRequestsIntervalTimer = setInterval(() => {
        console.log(`    ⏳  Await ${awaitRequests.size} requests (${requests.size - awaitRequests.size} done)`);

        for (const [request, { id, startTime }] of awaitRequests) {
            if (Date.now() - startTime > 5000) {
                console.log(`        🐢  #${id} ${request.url()} ${((Date.now() - startTime) / 1000).toFixed(1)}s`);
            }
        }
    }, 1000);

    // load page
    try {
        await page.goto(siteUrl);
        console.log('    🏁  Page loaded');

        // some requests may occur after page.goto(), await such requests but 15 sec max
        const maxAwaitTime = Date.now() + 15000;
        do {
            await new Promise(r => setTimeout(r, 200));
        } while (awaitRequests.size > 0 && Date.now() < maxAwaitTime);
    } catch (e) {
        console.error('    ❌ Page.goto failed', e);
    } finally {
        clearInterval(trackRequestsIntervalTimer);
    }

    // extract CSS content
    const externalStyleSheets = await Promise.all(styleSheetResponses);
    const inlineStyleSheets = await page.evaluate(() =>
        // eslint-disable-next-line no-undef
        [...document.styleSheets]
            .map(sheet => sheet.ownerNode.textContent)
            .filter(Boolean)
            .map(content => ({
                type: 'inline',
                content
            }))
    );

    if (externalStyleSheets.length || inlineStyleSheets.length) {
        console.log(`    🔸  Stylesheets: ${[
            externalStyleSheets.length ? `${externalStyleSheets.length} external` : '',
            inlineStyleSheets.length ? `${inlineStyleSheets.length} inline` : ''
        ].filter(Boolean).join(', ') || 'none'}`);
    } else {
        console.log('    ❌  No CSS found');
    }

    // close page to free resources
    await page.close();

    return externalStyleSheets.concat(inlineStyleSheets);
}

async function main() {
    // where are we in the list of URLs
    let siteIdx = fs.existsSync(seedFile) ? parseInt(fs.readFileSync(seedFile)) : 0;
    if (siteIdx >= sites.length) {
        siteIdx = 0;
    }

    console.log('Start with site #' + siteIdx);
    console.log();

    // create a browser
    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true
    });

    process.on('exit', async () => await browser.close());

    for (const siteUrl of sites.slice(siteIdx)) {
        console.log('Visit site #' + siteIdx + ' 🚀 ' + siteUrl);

        try {
            const outputFilename = path.join(outputDir, String(siteIdx).padStart(3, '0') + '.json');
            const styleSheets = await downloadSiteCSS(browser, siteIdx, 'http://' + siteUrl);

            // write data to file
            console.log('    💾  Write data to ' + path.relative(process.cwd(), outputFilename));
            fs.writeFileSync(outputFilename, JSON.stringify({
                id: siteIdx,
                url: siteUrl,
                datetime: new Date(),
                styleSheets
            }), 'utf8');

            console.log('    🎉  DONE');
            console.log();
        } catch (e) {
            console.error('    ❌  Failed ', e);
            console.error();
        }

        // remember the place in the likely scenario that
        fs.writeFileSync(seedFile, String(++siteIdx));
    }

    // we're done!
    console.log('DONE 🎉');
    process.exit();
}

main();
