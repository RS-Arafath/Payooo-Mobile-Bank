document.getElementById('btn-cashout').addEventListener('click', function () {
  /* work simulation */
  //1) get the agent number and validate
  //2) get the amount and validate and convert to number
  //3) get the current blance ,validate and convert to number
  //4) calculate new blance
  //5) get the pin and verify
  //6) true:: show an alert> set blance
  //7)false:: show an error alert > return
  // =====================================

  //1) get the agent number
  const agentNumber = document.getElementById('agent-number');
  const cashoutNumber = agentNumber.value;

  //2)get cashout amount
  const cashoutAmount = document.getElementById('cashout-amount');
  const cashoutMoney = cashoutAmount.value;

  //3)current blance
  const totalBlance = document.getElementById('blance');
  const blance = totalBlance.innerText;

  //4)varify agent number
  if (cashoutNumber.length !== 11 || !/^\d{11}$/.test(cashoutNumber)) {
    alert('Invalid Agent Number,Entere correct Number');
    agentNumber.value = '';
    return;
  } else {
    agentNumber.value = '';
  }

  //4)calculate new blance
  const currentBlance = Number(blance) - Number(cashoutMoney);
  if (currentBlance < 0 || cashoutMoney < 0) {
    alert('Invalid Amount');
    cashoutAmount.value = '';
    return;
  } else {
    cashoutAmount.value = '';
  }

  //5) varify pin
  const cashOutPIn = document.getElementById('cashout-pin');
  const pin = cashOutPIn.value;
  if (pin === '123456') {
    //true:: show an alert> set blance
    alert('CashOut Successfull');
    totalBlance.innerText = currentBlance;
   cashOutPIn.value = '';
    return;
  
    
  } else {
    //false:: show an error alert > return
    alert('Invalid Pin');
     cashOutPIn.value = '';
    return;
  }
 
});
