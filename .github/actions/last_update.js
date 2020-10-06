var fs = require('fs');
//var JSZip = require('./jszip');
var date = new Date();
const archiver = require('archiver');

var output = fs.createWriteStream('main/example.zip');
var archive = archiver('zip', {
  zlib: { level: 9 } 
});
archive.pipe(output);
archive.file('main/update.json', { name: 'file4.txt' });
archive.finalize();

/*var zip = new JSZip()
var data = fs.readFile('main/update.json')
zip.file('updatein.json', data, {base64: true})


zip.generateNodeStream({type:'nodebuffer',streamFiles:true})
   .pipe(fs.createWriteStream('main/update.zip'))  */


fs.writeFile('main/update.json', '{"update":"' + date.toISOString() + '"}', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});