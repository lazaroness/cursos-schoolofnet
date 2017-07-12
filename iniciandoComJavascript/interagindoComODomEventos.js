var click_me = document.getElementById('click_me');
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

function over(){
  console.log('over me');
}
