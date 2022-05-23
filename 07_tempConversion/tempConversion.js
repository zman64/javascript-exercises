const ftoc = function(num) {
  let Celsius;
  Celsius = (num - 32) * (5/9.0)
  return Math.round(Celsius * 10) / 10
};

const ctof = function(num) {
  let Fahren;
  Fahren = (num * (9/5) + 32)
  return Math.round(Fahren * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name

function multiplyNumeric(obj) {
  for (let key in obj){
    if (typeof (obj[key]) === "number"){
      obj[key] *= 2
    }
  }
}