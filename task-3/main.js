const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
let input = result.input;
let b = input.split(",");
let c = parseInt(b[0]);
let d = parseInt(b[1]);
let e = c**d;
console.log(e);
});
