console.log('Trabalhando com funções');

function myFunction(name) {
  console.log('Name => ', name);
}

var nameDigitado = prompt("what's your name?");
myFunction(nameDigitado);

(function(age){
  console.log('Age =>', age);
})(prompt("How old are you?"));

(function howOldAreYou(age){
  console.log('Age =>', age);
})(prompt("How old are you?"));
