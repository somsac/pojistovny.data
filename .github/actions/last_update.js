var fs = require('fs');
var JSZip = require('./jszip');
var date = new Date();

var zip = new JSZip();
zip.file('main/update.json')
zip.generateNodeStream({type:'nodebuffer',streamFiles:true})
   .pipe(fs.createWriteStream('main/update.zip'))

/*var zip = archiver('zip');
zip.pipe('main/update.zip')
zip.append('main/update.json')
zip.finalize();*/

fs.writeFile('main/update.json', '{"update":"' + date.toISOString() + '"}', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});