// convert data from process.stdin to upper-case data on process. stdout using the through2 module
var through = require('through2');
var stream = through(function (buffer, encoding, next ){
  this.push(buffer.toString().toUpperCase());
  next();
});

var input = process.stdin.pipe(stream);
input.pipe(process.stdout);
