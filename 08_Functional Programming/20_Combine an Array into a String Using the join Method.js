The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

const arr = ["Hello", "World"];
const str = arr.join(" ");
str would have a value of the string Hello World.

Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.


  //*********************************************


  Solution :

function sentensify(str) {
  // Only change code below this line
  return str.split(/\W/).join(' ');

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
