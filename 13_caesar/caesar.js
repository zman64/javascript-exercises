// const caesar = function(str, num) {
//     let newStr = "";
//     let charNumber = 0;
//     for (char of str){

//     charNumber = char.charCodeAt(0);

//     if (charNumber >= 65 && charNumber <= 90){
//         charNumber += num;
//         if ( charNumber > 90) {
//             charNumber = (num % 26) + 64
//         } else if ( charNumber < 65) {
//             charNumber = 91 - (65 % charNumber)
//         }
//         newStr += String.fromCharCode(charNumber)
//     } else if (charNumber >= 97 && charNumber <= 122){
//         charNumber += num;
//         if ( charNumber > 122) {
//             charNumber = (charNumber % 122) + 96
//         } else if ( charNumber < 97) {
//             charNumber = 123 - (97 % charNumber)
//         }
//         newStr += String.fromCharCode(charNumber)
//     } else {
//         newStr += String.fromCharCode(charNumber)
//     }
    
//     }
//     return newStr;

// };

// // Do not edit below this line
// module.exports = caesar;

const caesar = function(string, shift) {
    return string
        .split("")
        .map(char => shiftChar(char, shift))
        .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            mod(code + shift - codeSet(code), 26) + codeSet(code)
        );
    }
    return char;
};

module.exports = caesar;