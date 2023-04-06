let botones = document.getElementsByClassName("btn-outline-info");
let result = document.getElementById("result");
let data = [];

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    addCharacter(botones[i].innerText);
  });
}

function addCharacter(char) {
  if (data.at(-1) === ".") {
    if (char != ".") {
      data += char;
      result.value = data;
    }
  }
  //   data += char;
  //   result.value = data;
}

function clearResult() {
  result.value = "";
}
