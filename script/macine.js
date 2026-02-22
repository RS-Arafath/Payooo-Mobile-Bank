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