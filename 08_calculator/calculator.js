const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length == 0) {
    return 0;
  }
	return arr.reduce((total, a) => total + a);
};

const multiply = function(arr) {
  return arr.reduce((total, a) => total* a);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let k = 1;
  for (let i = 2; i <= a; i++) {
    k *= i;
  }
  return k;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
