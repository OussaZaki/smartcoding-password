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
