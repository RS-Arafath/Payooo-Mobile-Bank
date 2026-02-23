//** shortcut way */
document.getElementById('btn-cashout').addEventListener('click', function () {
  //get agent number
  const cashOutNumber = getValueFromInput('agent-number');

  /* ~~~~~~varify number~~~~~~~ */
  if (cashOutNumber.length !== 11 || !/^\d{11}$/.test(cashOutNumber)) {
    alert('Invalid Agent Number,Entere correct Number');
    cashOutNumber.value = '';
    return;
  } else {
    cashOutNumber.value = '';
  }

  //get the amount
  const cashoutMoney = getValueFromInput('cashout-amount');
  /*  ~~~~~validation check~~~~~~~~~ */

  //current blance
  const currentAmount = getBlance();

  //calculate current blance
  const currentBlance = currentAmount - Number(cashoutMoney);

  /*  ~~~~~ amount validation check~~~~~~~~ */
  if (
    cashoutMoney === '' ||
    isNaN(cashoutMoney) ||
    currentBlance < 0 ||
    cashoutMoney < 0
  ) {
    alert('Invalid Amount');
    return;
  }

  //5) varify pin
  const cashOutPIn = document.getElementById('cashout-pin');
  const pin = cashOutPIn.value;
  if (pin === '1234') {
    //true:: show an alert> set blance
    alert(`Cash Out Successfull From ${cashOutNumber} at ${new Date()}`);
    setBlance(currentBlance);
    cashOutPIn.value = '';

    /*   ~~~~~~~adding transaction history~~~~~~~~~ */
    // 1) get history-container
    const history = document.getElementById('history-container');

    //2)creat a div
    const newHistory = document.createElement('div');

    //3) inner html in new div
    newHistory.innerHTML = `
     <div class="transaction-card bg-base-100 p-5 rounded-xl leading-6">
     Cash Out- <span class="font-semibold">$${cashoutMoney} </span> Successfull, Account No:  
     <span class="font-semibold">
     ${cashOutNumber};</span>
       at ${new Date()}
     </div>
     `;
    //4) new div append in history container
    history.appendChild(newHistory);
  } else {
    //false:: show an error alert > return
    alert('Invalid Pin');
    cashOutPIn.value = '';
    return;
  }
});
