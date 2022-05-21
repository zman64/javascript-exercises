const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
  for (el of arr){
    sum += el;
  }
	return sum
};

const multiply = function(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++){
    sum *= arr[i]

  }
  return sum

};

const power = function(base, power) {
  let total = base;
  for(let i = 2; i <= power; i++){
    total *= base
  }
  return total;
  
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  }
  let total = 1;
  for (let i = num; i >= 1; i--){
    total *= i;
  }
  return total;
	
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
