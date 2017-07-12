var click_me     = document.getElementById('click_me');
var input        = document.getElementsByClassName('number_val_input');
var btn_generate = document.getElementById('generate_btn');
var body1        = document.getElementsByTagName('body');

var title = document.getElementById('h1');
title.style.color = '#fff000';


var select = document.createElement('select');
select.style.background = '#000000';
select.style.color      = '#CCCCCC';
body1[0].appendChild(select);

for (var i = 0; i < 10; i++) {
  var option = document.createElement('option');
  option.id = 'option_' + i;
  option.value = i;
  option.innerHTML = i;

  select.appendChild(option);
}

btn_generate.addEventListener('click', generate);

function generate() {
  var value = input[0].value;
  for (var i = 0; i < parseInt(value); i++) {
    var inpt = document.createElement('input');
    inpt.id = "btn_" + i;

    var body = document.getElementsByTagName('body');
    body[0].appendChild(inpt);
  }
}

click_me.addEventListener('click', fnClinkMe);

function fnClinkMe() {
  alert('You clicked me');
}

function validateNumber() {
  var number = document.getElementById("number_val").value;
  if (isNaN(number) || (number >= 1 && number <= 10)) {
    alert('input is not valid');
  } else {
    alert('input is valid');
  }
}

function over(obj){
  obj.innerHTML = 'OVER ME JS';
  obj.style.background = "#ffffff";
}

function out(obj){
  obj.style.color = '#CCCCCC';
  obj.style.background = "#fff000";
}
