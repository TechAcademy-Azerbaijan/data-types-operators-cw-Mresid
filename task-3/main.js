const prompt = require('prompt');
prompt.start();


prompt.get('a', function (err, result) {
let a = result.a;
let b = a.split(",");
let c = parseInt(b[0]);
let d = parseInt(b[1]);
let e = c**d;
console.log(e);
});
