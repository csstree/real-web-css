const { get } = require('https');
const path = require('path');
const fs = require('fs');
const url = 'https://downloads.majestic.com/majestic_million.csv';
const outputRawFile = path.join(__dirname, '../data/sites-raw.csv');
const outputFile = path.join(__dirname, '../data/sites.csv');

function bytes(n) {
    const units = ['bytes', 'Kb', 'MB'];

    while (n > 1000 && units.length > 1) {
        n /= 1000;
        units.shift();
    }

    return `${Number.isInteger(n) ? n : n.toFixed(1)}${units[0]}`;
}

console.log('Download ' + url + ' ...');
get(url, function(response) {
    const size = response.headers['content-length'];
    let lastDownload = 0;
    let downloaded = 0;

    const timer = setInterval(function() {
        if (lastDownload === downloaded) {
            return;
        }

        lastDownload = downloaded;
        console.log(`${(100 * downloaded / size).toFixed(1).padStart(4)}% (${bytes(downloaded)})`);
    }, 200);

    response
        .pipe(fs.createWriteStream(outputRawFile));

    response
        .on('data', function(chunk) {
            downloaded += chunk.length;
        })
        .on('end', function() {
            clearInterval(timer);

            console.log(' 100% (' + bytes(downloaded) + ')');
            console.log('DONE');
            console.log('');

            console.log('Write to ' + outputFile);
            fs.writeFileSync(
                outputFile,
                fs.readFileSync(outputRawFile, 'utf8')
                    .split(/\r\n?|\n/)
                    .slice(1)
                    .map((line) => line.split(',')[2])
                    .join('\n'),
                'utf8'
            );
        });
});
