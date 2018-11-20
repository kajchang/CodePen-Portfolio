var list_1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

document.body.innerHTML += "List 1 Before Loop:<br/>";
document.body.innerHTML += JSON.stringify(list_1, null, 2) + "<br/>";

for (let i = 0; i < list_1.length; i++) {
  list_1[i] += 10000000;  
}

document.body.innerHTML += "<br/>List 1 After Loop:<br/>";
document.body.innerHTML += JSON.stringify(list_1, null, 2) + "<br/>";

var list_2 = [];

for (let i = 0; i < 4; i++) {
  var placeholder_list = [0, 0, 0, 0];
  placeholder_list[i] = 1;
  list_2[i] = [placeholder_list];
}

document.body.innerHTML += "<br/>Identity Matrix:<br/>";
document.body.innerHTML += JSON.stringify(list_2, null, 2) + "<br/>";

var list_3 = [0, 1];

do {
  list_3.push(list_3[list_3.length - 1] + list_3[list_3.length - 2]);
} while (list_3.length < 50)

document.body.innerHTML += "<br/>First 50 Numbers of the Fibonacci Sequence:<br/>";
document.body.innerHTML += JSON.stringify(list_3, null, 2) + "<br/>";