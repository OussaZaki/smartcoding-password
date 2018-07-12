var passwordInput = document.getElementById('password');
var confirmInput = document.getElementById('confirm');
var theLight = document.getElementById('confirm-icon');

confirmInput.addEventListener('input', function() {
  if (confirmInput.value === "") {
    theLight.classList.add("disabled");
  } else {
    theLight.classList.remove("disabled");
  }
  if (passwordInput.value === confirmInput.value) {
    theLight.classList.remove("error");
    theLight.classList.add("identical");
  } else {
    theLight.classList.remove("identical");
    theLight.classList.add("error");
  }
});
