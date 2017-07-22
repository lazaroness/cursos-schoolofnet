var list = [
  {"desc": "E-book: PostgreSQL: Banco de dados para aplicações web modernas", "amount": "1", "value": "29.90"},
  {"desc": "PostgreSQL: Banco de dados para aplicações web modernas", "amount": "1", "value": "69.90"},
  {"desc": "E-book: Construindo APIs REST com Node.js", "amount": "1", "value": "29.90"},
  {"desc": "E-book: Node.js Aplicações web real-time com Node.js", "amount": "1", "value": "29.90"},
  {"desc": "E-book: Ionic Framework - Construa aplicativos para todas as plataformas mobile", "amount": "1", "value": "29.90"},
  {"desc": "E-book: Primeiros passos com Node.js", "amount": "1", "value": "29.90"},
  {"desc": "E-book: Xamarin Forms - Desenvolvimento de aplicações móveis multiplataforma", "amount": "1", "value": "29.90"},
  {"desc": "E-book: Orientação a Objetos - Aprenda seus conceitos e suas aplicabilidades de forma efetiva", "amount": "1", "value": "29.90"},
  {"desc": "E-book: Ruby - Aprenda a programar na linguagem mais divertida", "amount": "1", "value": "29.90"},
  {"desc": "E-book: Crie aplicações com Angular - O novo framework do Google", "amount": "1", "value": "29.90"},
  {"desc": "Crie aplicações com Angular - O novo framework do Google", "amount": "1", "value": "69.90"},
  {"desc": "E-book: Segurança em aplicações web", "amount": "1", "value": "29.90"}
];

function getTotal(list){
  var total = 0;
  for(var key in list){
    total += parseFloat(list[key].amount) * parseFloat(list[key].value);
  }
  document.getElementById('totalValue').innerHTML = formatValue(total);
}

function setList(list){
  var table = '<thead><tr>';
  table += '<td style="text-align: center;"><strong>Description</strong></td>';
  table += '<td style="text-align: center;"><strong>Amount</strong></td>';
  table += '<td style="text-align: center;"><strong>Value</strong></td>';
  table += '<td style="text-align: center;"><strong>Action</strong></td>';
  table += '</tr></thead><tbody>';
  for(var key in list){
    table += '<tr>';
    table += '<td style="color: #4248f4;">'+ formatDesc(list[key].desc) +'</td>';
    table += '<td style="text-align: center;">'+ formatAmount(list[key].amount) +'</td>';
    table += '<td style="text-align: center;color: #4248f4;">'+ formatValue(list[key].value) +'</td>';
    table += '<td style="text-align: center;">';
    table += '<button class="btn btn-default" onclick="setUpdate(' + key + ');">Edit</button>';
    table += '&nbsp;'
    table += '<button class="btn btn-default" onclick="deleteData(' + key + ');">Delete</button>';
    table += '</td>';
    table += '</tr>';
  }
  table += '</tody>';
  document.getElementById('listTable').innerHTML = table;
  getTotal(list);
  saveListStorage(list);
}

function formatDesc(desc){
  var str = desc.toLowerCase();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}

function formatValue(value){
  var str = parseFloat(value).toFixed(2) + "";
  str = str.replace(".", ",");
  str = "R$ " + str;
  return str;
}

function formatAmount(amount){
  return parseInt(amount);
}

function addData(){
  if(!validation()){
    return;
  }
  var desc   = document.getElementById('desc').value;
  var amount = document.getElementById('amount').value;
  var value  = document.getElementById('value').value;
  list.unshift({"desc": desc, "amount": amount, "value": value});
  resetForm();
  setList(list);
}

function setUpdate(id){
  var obj = list[id];
  document.getElementById('desc').value = obj.desc;
  document.getElementById('amount').value = obj.amount;
  document.getElementById('value').value = obj.value;

  document.getElementById('btnUpdate').style = 'display: inline-block';
  document.getElementById('btnAdd').style = 'display: none';

  document.getElementById('inputIdUpdate').innerHTML = '<input type="hidden" value="'+ id + '" id="idUpdate" />';
}

function resetForm(){
  document.getElementById('desc').value = "";
  document.getElementById('amount').value = "";
  document.getElementById('value').value = "";
  document.getElementById('btnUpdate').style = 'display: none';
  document.getElementById('btnAdd').style = 'display: inline-block';
  document.getElementById('inputIdUpdate').innerHTML = "";
}

function updateData(){
  if(!validation()){
    return;
  }
  var id     = document.getElementById('idUpdate').value;
  var obj    = list[id];
  obj.desc   = document.getElementById('desc').value;
  obj.amount = document.getElementById('amount').value;
  obj.value  = document.getElementById('value').value;
  resetForm();
  setList(list);
}

function deleteData(id){
  if(confirm("Delete this item?")){
    if(id === list.length -1){
      list.pop();
    }else if(id === 0){
      list.shift();
    }else{
      var arrAuxIni = list.slice(0, id);
      var arrAuxEnd = list.slice(id+1);
      list = arrAuxIni.concat(arrAuxEnd);
    }
    setList(list);
  }
}

function validation(){
  var desc   = document.getElementById('desc').value;
  var amount = document.getElementById('amount').value;
  var value  = document.getElementById('value').value;
  var errors = "";
  document.getElementById('errors').style.display = "none";

  if(desc === ""){
    errors += '<p>Fill out description</p>';
  }

  if(amount === ""){
    errors += '<p>Fill out a quantity</p>';
  }else if(amount != parseInt(amount)){
    errors += '<p>Fill out a valid amount</p>';
  }

  if(value === ""){
    errors += '<p>Fill out a value</p>';
  }else if(value != parseFloat(value)){
    errors += '<p>Fill out a valid value</p>';
  }

  if(errors != ""){
    var divErrors = document.getElementById('errors');
    divErrors.style.display = "block";
    divErrors.style.backgroundColor = "rgba(85, 85, 85, 0.3)";
    divErrors.style.color = "white";
    divErrors.style.padding = "10px";
    divErrors.style.margin  = "10px";
    divErrors.style.borderRadius = "13px";
    divErrors.innerHTML = "<h3>Error:</h3>" + errors;
    return 0;
  }else{
    return 1;
  }
}

function deleteList(){
  if(confirm("Delete this list?")){
    list = [];
    setList(list);
  }
}

function saveListStorage(list){
  var jsonStr = JSON.stringify(list);
  localStorage.setItem("javascriptAvancado", jsonStr);
}

function initListStorage(){
  var testList = localStorage.getItem("javascriptAvancado");
  if(testList){
    list = JSON.parse(testList);
  }
  setList(list);
}

initListStorage();
