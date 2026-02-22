//macine id -> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value.trim();
  return value;
}

//macine -> blance
function getBlance() {
  const blanceElement = document.getElementById('blance');
  const blance = blanceElement.innerText;
  return Number(blance);
}

//macine value -> set blance
function setBlance(value) {
  const blanceElement = document.getElementById('blance');
  blanceElement.innerText = value;
  
}

// function empty(id) {
//   const doEmpty = document.getElementById(id);
//   const empty = doEmpty.value;
//   return empty;

// }