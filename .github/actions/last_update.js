var fs = require('fs');
var date = new Date();

fs.writeFile('version.json', '{"last_update":"' + date.toISOString() + '"}', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
