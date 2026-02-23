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
//macine id> hide all >show id
function showOnly(id) {
 
  const addMoney = document.getElementById('add-money');
  const cashOut = document.getElementById('cashout');
  // firstly all hide
  addMoney.classList.add('hidden');
  cashOut.classList.add('hidden');

  //match id show
  const selected = document.getElementById(id);
  selected.classList.remove('hidden')

}