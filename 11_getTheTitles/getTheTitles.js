const getTheTitles = function(books) {
   const titles = books.map(function(el) {
        return (el.title);
    })
    return titles;
};
//  const getTheTitles1 = function(array) {
//      return array.map(book => book.title);
//  }

// Do not edit below this line
module.exports = getTheTitles;
