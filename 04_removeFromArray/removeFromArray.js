const removeFromArray = function(arr, ...arg) {
    let indexes = [];
    for (let i = 0; i < arg.length; i++) {
        if (arr.indexOf(arg[i]) != -1) {
            indexes.push(arr.indexOf(arg[i]));
        }
    }
    indexes.sort();
    for (let i = indexes.length - 1; i >= 0; i--) {
        arr.splice(indexes[i], 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
