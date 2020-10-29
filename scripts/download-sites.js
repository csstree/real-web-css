const http = require('http');
const path = require('path');
const fs = require('fs');
const unzip = require('unzip-stream');
const TOP = 250;
const url = 'http://s3.amazonaws.com/alexa-static/top-1m.csv.zip';
const outputFile = path.join(__dirname, '../data/sites.csv');
const topFile = path.join(__dirname, '../data/top-sites.csv');

console.log('Download ' + url + ' ...');
http.get(url, function(response) {
    const size = response.headers['content-length'];
    let lastDownload = 0;
    let downloaded = 0;

    const timer = setInterval(function() {
        if (lastDownload === downloaded) {
            return;
        }

        lastDownload = downloaded;
        console.log((100 * downloaded / size).toFixed(1) + '% ' + downloaded);
    }, 200);

    response
        .pipe(unzip.Parse())
        .on('entry', function(entry) {
            if (entry.path === 'top-1m.csv') {
                entry.pipe(fs.createWriteStream(outputFile));
            } else {
                entry.autodrain();
            }
        });

    response
        .on('data', function(chunk) {
            downloaded += chunk.length;
        })
        .on('end', function() {
            clearInterval(timer);

            console.log('100% ' + downloaded);
            console.log('DONE');
            console.log('');

            console.log('Write to ' + topFile);
            fs.writeFileSync(
                topFile,
                fs.readFileSync(outputFile, 'utf8')
                    .split(/\r\n?|\n/)
                    .map(function(line) {
                        return line.split(',')[1];
                    })
                    .slice(0, TOP)
                    .join('\n'),
                'utf8'
            );
        });
});
