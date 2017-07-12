var prop1 = prompt('Model ?');
var prop2 = prompt('Name ?');
var prop3 = prompt('Color ?');

var obj = {
  model: prop1,
  name : prop2,
  color: prop3
};
console.log(JSON.stringify(obj));
console.log(obj);

var obj2   = {};
obj2.model = prop1;
obj2.name  = prop2;
obj2.color = prop3;
console.log(JSON.stringify(obj2));
console.log(obj2);

var obj3   = new Object();
obj3.model = prop1;
obj3.name  = prop2;
obj3.color = prop3;
console.log(JSON.stringify(obj3));
console.log(obj3);

var obj4   = {};
obj4["model"] = prop1;
obj4["name"]  = prop2;
obj4["color"] = prop3;
console.log(JSON.stringify(obj4));
console.log(obj4);

obj4.start = function(){
  console.log('I m ready');
}

obj4.start();
