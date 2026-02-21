document.getElementById('btn-login').addEventListener('click', function () {
  // 1)get the mobile number
  const loginNumber = document.getElementById('login-number');
  const number = loginNumber.value;
  
  //2)get the pin
  const loginPin = document.getElementById('login-pin');
  const PIN = loginPin.value;

  //3 match number and pin
  if (number == '01893176269' && PIN == '1234') {
    alert('Login Successfull')
    //destination after login

    window.location.assign('home.html');
  } else {
    alert('login faild');
    loginNumber.value = '';
    PIN = '';
    return;

  }
  
});
