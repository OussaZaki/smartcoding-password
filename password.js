// #include<utils>
var hasValidLength =  require('./utils').hasValidLength;
var hasMixedCase =  require('./utils').hasMixedCase;
var hasDigit =  require('./utils').hasDigit;
var hasSpecial =  require('./utils').hasSpecial;


var passwordInput = document.getElementById('password');

var lengthText = document.getElementById('length-text');
var caseText = document.getElementById('case-text');
var digitText = document.getElementById('digit-text');
var specialText = document.getElementById('special-text');


passwordInput.addEventListener('input', function() {
    validate(passwordInput.value);
});

function singleValidation(element, isValid) {
    if(isValid) {
        element.classList.remove("error");
    } else {
        element.classList.add("error");
    }
}

function validate(password) {
    if (password === "") {
        disable();
    } else {
        reset();
    }

    singleValidation(lengthText, hasValidLength(password));
    singleValidation(caseText, hasMixedCase(password));
    singleValidation(digitText, hasDigit(password));
    singleValidation(specialText, hasSpecial(password));
}

const reset = function() {
    lengthText.classList.remove("disabled");
    caseText.classList.remove("disabled");
    digitText.classList.remove("disabled");
    specialText.classList.remove("disabled");
}

const disable = function() {
    lengthText.classList.add("disabled");
    caseText.classList.add("disabled");
    digitText.classList.add("disabled");
    specialText.classList.add("disabled");
}