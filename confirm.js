var passwordInput = document.getElementById('password');
var confirmInput = document.getElementById('confirm');
var theLight = document.getElementById('confirm-icon');

confirmInput.addEventListener('input', function() {
  if (confirmInput.value === "") {
    theLight.classList.add("disabled");
  } else {
    theLight.classList.remove("disabled");
  }
  if (match(passwordInput, confirmInput)) {
    theLight.classList.remove("error");
    theLight.classList.add("identical");
  } else {
    theLight.classList.remove("identical");
    theLight.classList.add("error");
  }
});

function match(string1, string2) {
  if (string1.value === string2.value) {
    return true;
  } else {
    return false;
  }
}
