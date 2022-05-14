const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {
        return "OOPS";
    }
    let fibList = [1,1]
    while (num > fibList.length) {
        fibList.push(fibList[fibList.length - 1] + fibList[fibList.length - 2]);
    }
    return fibList[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
