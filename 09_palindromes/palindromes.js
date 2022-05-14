function isLetter(c) {
    if (c == " ") {
        return false;
    }
    return c.toLowerCase() != c.toUpperCase();
  }

const palindromes = function (str) {
    str = str.toLowerCase();
    let clean = "";
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (isLetter(letter)) {
            clean += letter;
        }
    }
    let isPalindrome = true;
    for (let i = 0; i < Math.floor(clean.length / 2); i++) {
        const letter = clean[i];
        if (letter != clean[clean.length - 1 - i]) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
