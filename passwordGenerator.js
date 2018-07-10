var generate = document.getElementById('generator'); 
var passInput = document.getElementById('password');

generate.addEventListener("click", function() {
    var password = createPassword(); // saving the password.
    passInput.value = password; // changing the original value to the new password.
});

function createPassword() {
    var length = 7;
    var newPassword = randomString(length);
    console.log(newPassword);
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
        newString += letters[randomNumber];
    }
    return generatedLowerCase;
}

function randomUpperCase(length) {
    var generatedUpperCase = "";
    var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random()*26);
        newString += upperLetters[randomNumber];
    }
    return generatedUpperCase;
}

function randomNumber(length) {
    var generatedNumber = "";
    var numbers = "0123456789";
    for (let i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random()*10);
        newString += numbers[randomNumber];
    }
    return generatedNumber;
}

function randomSpecial(length) {
    var generatedSpecial = "";
    var special = "!@#$%^&*_-+=";
    for (let i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random()*12);
        newString += special[randomNumber];
    }
    return generatedSpecial;
}

function scramble() {

}