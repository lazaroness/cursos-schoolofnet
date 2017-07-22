var list = [
  {"desc": "rice", "amount": "1", "value": "5.40"},
  {"desc": "beer", "amount": "12", "value": "1.99"},
  {"desc": "meat", "amount": "1", "value": "15.00"}
];

function getTotal(list){
  var total = 0;
  for(var key in list){
    total += parseFloat(list[key].amount) * parseFloat(list[key].value);
  }
  return total;
}

function setList(list){
  var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
  for(var key in list){
    table += '<tr>';
    table += '<td>'+ formatDesc(list[key].desc) +'</td>';
    table += '<td>'+ list[key].amount +'</td>';
    table += '<td>'+ formatValue(list[key].value) +'</td>';
    table += '<td>';
    table += '<button class="btn btn-default" onclick="setUpdate(' + key + ');">Edit</button>';
    table += '&nbsp;'
    table += '<button class="btn btn-default" onclick="deleteData(' + key + ');">Delete</button>';
    table += '</td>';
    table += '</tr>';
  }
  table += '</tody>';
  document.getElementById('listTable').innerHTML = table;
}

function formatDesc(desc){
  var str = desc.toLowerCase();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}

function formatValue(value){
  var str = parseFloat(value).toFixed(2) + "";
  str = str.replace(".", ",");
  str = "$ " + str;
  return str;
}

function addData(){
  var desc   = document.getElementById('desc').value;
  var amount = document.getElementById('amount').value;
  var value  = document.getElementById('value').value;
  list.unshift({"desc": desc, "amount": amount, "value": value});
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

setList(list);
console.log(getTotal(list));
