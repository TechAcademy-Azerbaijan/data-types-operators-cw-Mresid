const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  let a = parseInt(result.input);
  let b = parseInt(a%10);//3
  let c = parseInt(a/10);//12
  let d = b*100+c;
  console.log(d);
});
