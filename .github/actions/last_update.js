var fs = require('fs');
var date = new Date();
const archiver = require('archiver');


fs.readFile('main/data.json', (err, data) => {
  let pojistovny = JSON.parse(data);
  let zip_name_all = pojistovny.logos_zip_file_all;
  let zip_name_automobil = pojistovny.logos_zip_file_automobil;

  var outputAll = fs.createWriteStream('main/' + zip_name_all);
  var archiveAll = archiver('zip', {
    zlib: { level: 9 } 
  });
  archiveAll.pipe(outputAll);

  var logos = [];
  for (index in pojistovny.insurers) {
    var pojistovna = pojistovny.insurers[index];
    if (logos[pojistovna.logo] != 1) {
      archiveAll.file('main/logo/' + pojistovna.logo, { name: pojistovna.logo });
      logos[pojistovna.logo] = 1;
    }
  //  console.log(pojistovna.logo);
  }

  archiveAll.finalize();
});


fs.writeFile('main/update.json', '{"update":"' + date.toISOString() + '"}', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});