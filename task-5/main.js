const { log } = require('console');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  let input = result.input
  let a = input.split(",");
  let b = parseInt(a[0]);
  let c = parseInt(b%10);
  console.log(c);
});
