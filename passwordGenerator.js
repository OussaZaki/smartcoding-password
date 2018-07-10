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
// where to return the generated password and how?
// Math.floor = integer.
// Math.random = generate an random float between 0 and 1, that's why we need the m.floor.
// *26 = alphabet.
function randomString(length) {
    var newString = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random()*26);
        newString += letters[randomNumber];
    }
    return newString;
}