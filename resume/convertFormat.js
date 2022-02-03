const fs = require('fs');
const pdf = require('html-pdf');
const html = fs.readFileSync('./index.html', 'utf8');
const options = { format: 'Letter' };

const timestamp = new Date().toLocaleString();
const filename = `./Daniel Hall-Eardley ${timestamp}.pdf`

pdf.create(html, options).toFile(filename, function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});