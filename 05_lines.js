var split = require('split');
var through = require('through2');
var lineCount = 0;

// var stream = through(function(buffer, encoding, next){
//   var line = buffer.toString();
//   this.push(lineCount % 2 === 0
//   ? line.toLowerCase() + '\n'
//   : line.toUpperCase() + '\n'
//   );
// lineCount ++;
// next();
// });

var stream = through(function(buffer, encoding, next){
  var line = buffer.toString();
  if (lineCount % 2 === 0){
    this.push(buffer.toString().toLowerCase() + '\n');
  } else {
    this.push(buffer.toString().toUpperCase() + '\n');
  } 
  lineCount ++;
  next();
});


process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
