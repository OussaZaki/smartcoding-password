var generate = document.getElementById('generator'); 
var passInput = document.getElementById('password');

generate.addEventListener("click", function() {
    var password = createPassword(); // saving the password.
    passInput.value = password; // changing the original value to the new password.
});

function createPassword() {
    var newPassword = randomLowerCase(3);
    newPassword += randomUpperCase(3);
    newPassword += randomNumber(1);
    newPassword += randomSpecial(1);
    return newPassword;
}

// Math.floor = integer.
// Math.random = generate an random float between 0 and 1, that's why we need the m.floor.
// *26 = alphabet.
function randomLowerCase(length) {
    var generatedLowerCase = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random()*26);
        generatedLowerCase += letters[randomNumber];
    }
    return generatedLowerCase;
}

function randomUpperCase(length) {
    var generatedUpperCase = "";
    var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random()*26);
        generatedUpperCase += upperLetters[randomNumber];
    }
    return generatedUpperCase;
}

function randomNumber(length) {
    var generatedNumber = "";
    var numbers = "0123456789";
    for (let i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random()*10);
        generatedNumber += numbers[randomNumber];
    }
    return generatedNumber;
}

function randomSpecial(length) {
    var generatedSpecial = "";
    var special = "!@#$%^&*_-+=";
    for (let i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random()*12);
        generatedSpecial += special[randomNumber];
    }
    return generatedSpecial;
}