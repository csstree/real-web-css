var http = require('http');
var path = require('path');
var fs = require('fs');
var unzip = require('unzip-stream');
var TOP = 250;
var url = 'http://s3.amazonaws.com/alexa-static/top-1m.csv.zip';
var outputFile = path.join(__dirname, '../data/sites.csv');
var topFile = path.join(__dirname, '../data/top-sites.csv');

console.log('Download ' + url + ' ...');
http.get(url, function(response) {
    var size = response.headers['content-length'];
    var lastDownload = 0;
    var downloaded = 0;

    var timer = setInterval(function() {
        if (lastDownload === downloaded) {
            return;
        }

        lastDownload = downloaded;
        console.log((100 * downloaded / size).toFixed(1) + '% ' + downloaded);
    }, 1000);

    response
        .pipe(unzip.Parse())
        .on('entry', function (entry) {
            if (entry.path === 'top-1m.csv') {
                entry.pipe(fs.createWriteStream(outputFile));
            } else {
                entry.autodrain();
            }
        });

    response
        .on('data', function (chunk) {
            downloaded += chunk.length;
        })
        .on('end', function() {
            clearInterval(timer);

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
