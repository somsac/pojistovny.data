var fs = require('fs');
var archiver = require('jszip.js');
var date = new Date();

/*var zip = archiver('zip');
zip.pipe('main/update.zip')
zip.append('main/update.json')
zip.finalize();*/

fs.writeFile('main/update.json', '{"update":"' + date.toISOString() + '"}', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});