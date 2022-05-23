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

// const findTheOldest1 = function(array) {
//     return array.reduce((oldest, currentPerson) => {
//         const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//         const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//         return oldestAge < currentAge ? currentPerson : oldest;
//     })
// }

// const getAge = function(birth, death){
//     if (!death) {
//         death = new Date().getFullYear();
//     }
//     return death - birth;
// };

// Do not edit below this line
module.exports = findTheOldest;
