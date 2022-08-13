const { lstat } = require('fs');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input = (result.input);
  let a = input.split(",");
  let b = parseInt(a[0]);
  let c = parseInt(a[1]);
  let d = parseInt(b/c);
  console.log(d);
});

