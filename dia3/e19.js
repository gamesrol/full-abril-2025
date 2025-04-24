var asciify = require('asciify-image');

var options = {
  fit:    'box',
  width:  200,
  height: 100
}

asciify('img/1.png', options, function (err, asciified) {
  if (err) throw err;

  // Print to console
  console.log(asciified);
});