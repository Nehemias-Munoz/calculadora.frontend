let botones = document.getElementsByClassName("btn-outline-info");
let botones_operadores = document.getElementsByClassName("operator");
let result = document.getElementById("result");
let data = [];

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    addCharacter(botones[i].innerText);
  });
}

for (let i = 0; i < botones_operadores.length; i++) {
  botones_operadores[i].addEventListener("click", function () {
    addCharacter(botones_operadores[i].innerText);
  });
}

function addCharacter(char) {
  if (data.at(-1) === ".") {
    if (char != ".") {
      data.push(char);
    }
  } else {
    data.push(char);
  }
  refresh();
}

function clearTotalChars() {
  data = [];
  refresh();
}

function clearOneChar() {
  data.pop();
  refresh();
}

function convertToString() {
  new_data = data.join("");
  return new_data;
}

function refresh() {
  result.value = convertToString();
}

function getResult() {
  operation_result = eval(result.value);
  result.value = operation_result;
  data = [];
  data.push(operation_result);
}
