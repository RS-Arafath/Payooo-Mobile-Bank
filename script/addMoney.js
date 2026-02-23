document.getElementById('btn-add-money').addEventListener('click', function () {
  //1) get bank account
  const bankAccount = getValueFromInput('add-money-bank');
  if (bankAccount == 'Select a bank') {
    alert('Please Select a Bank');
    return;
  }

  //2) get bank account number
  const accNo = getValueFromInput('add-money-number');
  if (accNo.length !== 11 || !/^\d{11}$/.test(accNo)) {
    alert('Invalid account Number,Entere correct Number');
    return;
  }

  //3 get amount
  const addMoneyAmount = getValueFromInput('add-money-amount');

  //4) current blance
  const currentAmount = getBlance();

  //5)calculate current blance
  const currentBlance = currentAmount + Number(addMoneyAmount);

  //6)condition check
  if (
    addMoneyAmount === '' ||
    isNaN(addMoneyAmount) ||
    currentBlance < 0 ||
    addMoneyAmount < 0
  ) {
    alert('Invalid Amount');
    return;
  }

  //7) pin validation check
  const addMoneyPIn = document.getElementById('add-money-pin');
  const pin = addMoneyPIn.value;
  if (pin === '1234') {
    //true:: show an alert> set blance
    alert(`Add Money Successfull From ${bankAccount} at ${new Date()}`);
    setBlance(currentBlance);
    addMoneyPIn.value = '';
    /*   ~~~~~~~adding transaction history~~~~~~~~~ */
    // 1) get history-container
    const history = document.getElementById('history-container');

    //2)creat a div
    const newHistory = document.createElement('div');

    //3) inner html in new div
    newHistory.innerHTML = `
     <div class="transaction-card bg-base-100 p-5 rounded-xl leading-6">
     Add Money <span class="font-semibold">$${addMoneyAmount}
      </span> Successfull From ${bankAccount};
     <span class="font-semibold">
      ACC-No ${accNo} </span>, 
     at ${new Date()}
     </div>
     `;
    //4) new div append in history container
    history.appendChild(newHistory);
  } else {
    //false:: show an error alert > return
    alert('Invalid Pin');
    addMoneyPIn.value = '';
    return;
  }
});
