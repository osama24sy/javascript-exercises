const repeatString = function(str, num) {
    let f = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        f += str;
    }
    return f;
};

// Do not edit below this line
module.exports = repeatString;
