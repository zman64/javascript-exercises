const reverseString = function (str) {
    let templ
    let Array = str.split("")
    for(i = 0; i < Array.length / 2; i++){
        templ = Array[i]
        Array[i] = Array[Array.length - i - 1]
        Array[Array.length - i - 1] = templ;
    }
    return Array.join("");

};

// Do not edit below this line
module.exports = reverseString;
