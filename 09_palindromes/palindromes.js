const palindromes = function (str) {
    str = str.toLowerCase();
    let arr = Array.from(str)
    const filArr = arr.filter(char => {
        if (char === ',' || char === '.' || char === '!' || char === ' '){
            return false;
        }
        return true;

    })
    for (let i = 0; i < filArr.length / 2; i++){
        if (!(filArr[i] === filArr[filArr.length - 1 - i])){
            return false;
        }
    }
    return true;

};

// const palindromes1 = function(string) {
//     processedString = string.toLowerCase().replace(/[^a-z]/g, "");

//     return (
//         processedString
//             .split("")
//             .reverse()
//             .join("") == processedString
//     )
// }

// Do not edit below this line
module.exports = palindromes;
