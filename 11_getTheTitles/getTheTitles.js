const getTheTitles = function(books) {
   const titles = books.map(function(el) {
        return (el.title);
    })
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
