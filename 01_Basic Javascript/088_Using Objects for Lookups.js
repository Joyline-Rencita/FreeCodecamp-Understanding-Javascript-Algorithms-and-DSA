Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of an article object:

const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
articleAuthor is the string Kaashan Hussain, articleLink is the string https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/, and valueLookup is the string How to create objects in JavaScript.

Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

//*********************************************************************

  Solution :

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

   var obj = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };

  result = obj[val];

  // Only change code above this line
  return result;

}

console.log(phoneticLookup("charlie"));
