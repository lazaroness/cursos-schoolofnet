console.log('hello from external script');

var number  = 0;
var number1 = 1;
var bool    = true;
var double  = 0.0;

// typeof -> retorna o tipo do atributo
console.log(typeof number);

number = "0";
console.log(typeof number);

number = "0" + number1;
console.log(number);

function myFunction() {
  var number = 0.1 + 1;
  console.log(number);
}
myFunction();

var myFunction2 = function() {
  var number = 0.2 + 1;
  console.log(number);
}
myFunction2();
