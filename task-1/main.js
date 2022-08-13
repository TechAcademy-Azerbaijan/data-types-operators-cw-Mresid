const prompt = require('prompt');
const { parentPort } = require('worker_threads');
prompt.start();


prompt.get('input', function (err, result) {
  let input = (result.input);//2,3,100
  let a = input.split(",");
  let b = parseInt(a[0]);//2
  let c = parseInt(a[1]);//3
  let d = parseInt(a[2]);//100
  let x = b**c%d;
  console.log(x);
});
