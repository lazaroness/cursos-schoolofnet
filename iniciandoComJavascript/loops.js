console.log('Trabalhando com loops');

// while
var i = 0;
while (i < 10) {
  console.log(i + " - while");
  i++;
}

// for
for(var a = 0; a < 10; a++) {
  console.log(a + " - for");
}

// foreach
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].forEach(function(value, key){
  // value = valor da possicao
  // key = numero da possicao
  console.log(key + " - " + value);
});

var age       = prompt('number ?');
var ageParser = parseInt(age);
for(var a = 0; a < ageParser; a++) {
  console.log(a + " / " + ageParser);
}
