function redirectFuncAdmin() {
  var person = prompt('Please enter your admin password:');
  if (person == 'ADMIN123') {
    alert('WELCOME ADMIN');
    window.location.href = 'admin.html';
  } else {
    alert('WRONGPASSWORD');
  }
}

function redirectFuncCustomer() {
  window.location.href = 'customer.html';
}
