const removeFromArray = function(arr, ...nums) {
    let newArr = [];
    newArr = arr.filter( item => !(nums.includes(item)))
        
  
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
