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
  } else {
    
  }
});
