// @ts-check

const findTheOldest = function (people) {
    
    const yearDifference = people.map((el) => {
    if (!(el.hasOwnProperty('yearOfDeath'))){
        el["yearOfDeath"] = new Date().getFullYear() 
    }
      return el.yearOfDeath - el.yearOfBirth
})
const oldestYear = yearDifference.indexOf(Math.max(...yearDifference));
//    const oldestPerson = people.filter(function(el) {
//        return el.yearOfBirth === oldestYear
//    })[0]
//    const max = people
return people[oldestYear];
};

// Do not edit below this line
module.exports = findTheOldest;
