Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

  //********************************************


  Solution :


function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  // Only change code below this line
  return collection.filter(prop => {
    return keys.every(key => {
      return prop.hasOwnProperty(key) && prop[key] == source[key]
    });
  });

  // Only change code above this line

}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

>> [ { first: 'Tybalt', last: 'Capulet' } ]
