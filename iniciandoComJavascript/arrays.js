console.log('Trabalhando com arrays');

// var ft = new Array(1, 2, 3, 4, 5);
// var ft = [1, 2, 3, 4, 5];

var ft = [
  'Lazarone',
  'Lazaro',
  'Lavinia'
];

// push = adicionar um item no final do array
ft.push('Lais');

// unshift = adicionar um item no inicio do array
ft.unshift('Lucia');

console.log("Tamanho do array: ", ft.length);

console.log(ft);
// pop = remover o ultimo item do array
ft.pop();

// shift = remover o primeiro item do array
ft.shift();

// splice = remove o item da posicao indica no primeito parametro, o segundo paramentro é a quantidade de itens a serem removido
ft.splice(1, 1);

// indexOf = retorna a posicao do elemento indicado
console.log(ft.indexOf('Lazarone'));

var posicao = ft.indexOf('Lazarone')

ft[posicao] = "Lazarone Santos Santana"

console.log(ft);

// concat = junta dois arrays

var ft1 = [
  "Leticia"
];

var result = ft.concat(ft1);
console.log(result);
