const reverseString = function(str) {
    const n = str.length;
    let finalString  = "";
    if (str === "") {
        return "";
    }
    for (let i = n - 1; i >= 0; i--) {
        finalString += str[i];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
