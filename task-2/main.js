const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  let a = (result.input)
  let b = 6*a**2
  let c = a**3
  console.log(b,c);
    
  
});
