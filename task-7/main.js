const prompt = require('prompt');
const { parentPort } = require('worker_threads');
prompt.start();


prompt.get('input', function (err, result) {
  let n = parseInt(result.input); // 3456
  let b = parseInt(n%10);//6
  let c = parseInt((n%100)/10);//5
  let d = parseInt((n%1000)/100);//4
  let e = parseInt(n/1000);//3
  let x =  (b*1000)+(c*100)+(d*10)+(e*1);
  console.log(x);
});
