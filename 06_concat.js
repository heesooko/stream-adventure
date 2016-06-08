var concat = require('concat-stream');

// given a text on process.stdin
// buffer text and reverse it using concat-stream module before writing it to stdout

// var concatStream = function(buffer){
//   var input = buffer.toString();
//   input.pipe(concat(function(body){
//     var word= '';
//     for (var i = body.length - 1; i >= 0; i--){
//       word += body[i];
//       return word;
//     }
//   }));
// };
// var reverse = process.stdin.pipe(concat(function(buffer){
//   var string = buffer.toString();
//   var word = '';
//   for (var i = string.length - 1; i >= 0; i--){
//     word += string[i];
//     return word;
//   }
// }));

var reverse = process.stdin.pipe(concat(function(word){
  var string = word.toString().split('').reverse().join('');
  console.log(string);
}));


