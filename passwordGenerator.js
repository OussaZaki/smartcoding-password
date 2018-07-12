var generate = document.getElementById('generator'); 
var passInput = document.getElementById('password');

generate.addEventListener("click", function() {
    var password = createPassword(); // saving the password.
    passInput.value = password; // changing the original value to the new password.
});

function createPassword() {
    var newPassword = randomize(letters, 3);
    newPassword += randomize(upperLetters, 3);
    newPassword += randomize(numbers, 1);
    newPassword += randomize(special, 1);
    return scramble(newPassword);
}

// Math.floor = integer.
// Math.random = generate an random float between 0 and 1, that's why we need the m.floor.
// *26 = alphabet.

var letters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*_-+=";

function randomize (stringToRandom, length) {
    var randomGenerated = "";
    for (let i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random()*stringToRandom.length);
        randomGenerated += stringToRandom[randomNumber];
    }
    return randomGenerated;
}

function scramble(stringToScramble) {
    var stringToArray = stringToScramble.split(""); // convert to array to scramble.
    for (let i = 0; i < stringToScramble.length; i++) {
        var randomNumber = Math.floor(Math.random()*stringToScramble.length);
        var swappedChar = stringToArray[i];
        stringToArray[i] = stringToArray[randomNumber];
        stringToArray[randomNumber] = swappedChar;
    }
    var scrambled = stringToArray.join(""); // return to string.
    return scrambled;
}

// function randomLowerCase(length) {
//     var generatedLowerCase = "";
//     var letters = "abcdefghijklmnopqrstuvwxyz";
//     for (let i = 0; i < length; i++) {
//         var randomNumber = Math.floor(Math.random()*26);
//         generatedLowerCase += letters[randomNumber];
//     }
//     return generatedLowerCase;
// }

// function randomUpperCase(length) {
//     var generatedUpperCase = "";
//     var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     for (let i = 0; i < length; i++) {
//         var randomNumber = Math.floor(Math.random()*26);
//         generatedUpperCase += upperLetters[randomNumber];
//     }
//     return generatedUpperCase;
// }

// function randomNumber(length) {
//     var generatedNumber = "";
//     var numbers = "0123456789";
//     for (let i = 0; i < length; i++) {
//         var randomNumber = Math.floor(Math.random()*10);
//         generatedNumber += numbers[randomNumber];
//     }
//     return generatedNumber;
// }

// function randomSpecial(length) {
//     var generatedSpecial = "";
//     var special = "!@#$%^&*_-+=";
//     for (let i = 0; i < length; i++) {
//         var randomNumber = Math.floor(Math.random()*12);
//         generatedSpecial += special[randomNumber];
//     }
//     return generatedSpecial;
// }
