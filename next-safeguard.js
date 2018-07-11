/*The program only allows user to proceed to confrim-password.html when they provide a valid
password*/
/*Bug: After the alert, the anchor link still opens. */
var passwordInput = document.getElementById('password');
var nextIcon = document.getElementById('next');
var lengthText = document.getElementById('length-text');
var caseText = document.getElementById('case-text');
var digitText = document.getElementById('digit-text');
var specialText = document.getElementById('special-text');
// var nextLink = document.getElementById('link');

nextIcon.addEventListener('click', function() {
  if (passwordInput.value === "") {
    alert('Psst! You have\'t typed anything!');
    return false;
  }
  if (!nextSafeguard(lengthText)) {
    alert('The length is invalid!');
    return false;
  }
  if (!nextSafeguard(caseText)) {
    alert('The password has to have both upper- and lowercase!');
    return false;
  }
  if (!nextSafeguard(digitText)) {
    alert('You need at least one digit!');
    return false;
  }
  if (!nextSafeguard(specialText)) {
    alert('You need at least one special character, including: !@#$%^&*_-+=;');
    return false;
  }
  openTab('confirm-password.html');
});

function nextSafeguard(element) {
  if (element.className !== 'error' && element.className !== 'disabled') {
    return true;
  } else {
    return false;
  }
}

function openTab(url) {
  window.open(url, '_blank');
}