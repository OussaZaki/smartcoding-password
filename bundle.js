(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./utils":3}],2:[function(require,module,exports){
var showIcon = document.getElementById('icon'); // Gets the show/hide icon element.
var passwordInput = document.getElementById('password'); // Get the password input element.

showIcon.addEventListener('click', function () {
    showHidePassword();
});

function showHidePassword() {
    if (passwordInput.type === 'password') {
        passwordInput.setAttribute('type', 'text');
        // showIcon.innerHTML = "Hide";
        showIcon.className = "fa fa-eye show-icon";
    } else {
        passwordInput.setAttribute('type', 'password');
        // showIcon.innerHTML = "Show";
        showIcon.className = "fa fa-eye-slash show-icon";
    }
}



},{}],3:[function(require,module,exports){
const hasValidLength = function(text) {
    return text.length > 6;
}
module.exports.hasValidLength = hasValidLength;

const hasMixedCase = function(text) {
    var lowerCase = false;
    var upperCase = false;

    for (i = 0, len = text.length; i < len; i++) {
        var c = text.charAt(i);
        if (c >= 'a' && c <= 'z') {
            lowerCase = true;
        } else if (c >= 'A' && c <= 'Z') {
            upperCase = true;
        }
    }

    return lowerCase && upperCase;
}
module.exports.hasMixedCase = hasMixedCase;

const hasDigit = function(text) {
    for (i = 0, len = text.length; i < len; i++) {
        var c = text.charAt(i);
        if (c >= '0' && c <= '9') {
            return true;
        }
    }
    return false;
}
module.exports.hasDigit = hasDigit;

const hasSpecial = function(text) {
    for (i = 0, len = text.length; i < len; i++) {
        var c = text.charAt(i);
        if ('!@#$%^&*_-+=;'.indexOf(c) !== -1) {
            return true;
        }
    }
    return false;
}
module.exports.hasSpecial = hasSpecial;

},{}]},{},[1,2]);
