var http = require('http');
var path = require('path');
var fs = require('fs');
var unzip = require('unzip');
var url = 'http://s3.amazonaws.com/alexa-static/top-1m.csv.zip';
var outputFile = path.join(__dirname, '../data/sites.csv');

console.log('Download ' + url + ' ...');
http.get(url, function(response) {
    var chunks = [];
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
            var fileName = entry.path;
            var type = entry.type; // 'Directory' or 'File' 
            var size = entry.size;

            if (fileName === 'top-1m.csv') {
                entry.pipe(fs.createWriteStream(outputFile));
            } else {
                entry.autodrain();
            }
        });

    response
        .on('data', function (chunk) {
            chunks.push(chunk);
            downloaded += chunk.length;
        })
        .on('end', function() {
            clearInterval(timer);

            console.log('DONE');
            console.log('');

            console.log('Write to ' + outputFile);
        });
});
