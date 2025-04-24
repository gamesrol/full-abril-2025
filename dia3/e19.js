var asciify = require('asciify-image');

var options = {
  fit:    'box',
  width:  200,
  height: 100
}

// Asciify the image
// The image will be resized to fit in a box of 200x100 characters  

asciify('img/1.png', options, function (err, asciified) {
  if (err) throw err;

  // Print to console
  console.log(asciified);
});