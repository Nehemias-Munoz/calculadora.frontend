let botones = document.getElementsByClassName("btn");
let result = document.getElementById("result");
let data = [];

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    if (botones[i].innerText === "=") {
      getResult();
    }
    addCharacter(botones[i].innerText);
    // if (botones[i].innerText != "DEL") {
    // }
    if (botones[i].innerText == "AC") {
      clearTotalChars();
    }
    if (botones[i].innerText == "DEL") {
      clearOneChar();
    }
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
  result.value = eval(result.value);
}
