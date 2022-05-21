const sumAll = function(num1, num2) {
    if (!(Number.isInteger(num1)) || !(Number.isInteger(num2))){
        return 'ERROR'
    } 
    if (num1 < 0 || num2 < 0){
        return 'ERROR'
    }
    let temp = 0;
    if (num1 > num2){
        temp = num2;
        num2 = num1;
        num1 = temp;
    }
    let numAfter;
    for(let i = num1; i < num2; i++){
        numAfter = i + 1;
        num1 += numAfter
    }
    return num1;
};

// Do not edit below this line
module.exports = sumAll;
