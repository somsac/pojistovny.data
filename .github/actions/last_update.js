var fs = require('fs');
var date = new Date();

fs.writeFile('main/version.json', '{"last_update":"' + date.toISOString() + '"}', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
