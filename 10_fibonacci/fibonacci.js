// @ts-check
const fibonacci = function(num) {
    if (num < 0){
        return "OOPS"
    }
    if (!Number.isInteger(num)){
       num = parseInt(num)
    }
    let num1 = 1;
    let num2 = 1;
    let num3 = 0;
    let arr = [];
    arr[0] = 1;
    arr[1] = 1;
    for (let i = 2; i < num; i++){
        num3 = num2 + num1;
        arr[i] = num3;
        num1 = num2;
        num2 = num3;
    }
    return arr[num - 1];
};
// Do not edit below this line
module.exports = fibonacci;
