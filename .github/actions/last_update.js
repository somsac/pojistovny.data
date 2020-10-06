var fs = require('fs');
var date = new Date();
const archiver = require('archiver');

var output = fs.createWriteStream('main/example.zip');
var archive = archiver('zip', {
  zlib: { level: 9 } 
});
archive.pipe(output);
archive.file('main/logo/ace.png', { name: 'ace.png' });
archive.file('main/logo/aegon.png', { name: 'aegon.png' });
archive.finalize();

fs.readFile('main/data.json', (err, data) => {
  let pojistovny = JSON.parse(data);
  for (index in pojistovny.data) {
    var pojistovna = pojistovny.data[index];
    console.log(pojistovna.logo);
  }
});


fs.writeFile('main/update.json', '{"update":"' + date.toISOString() + '"}', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});