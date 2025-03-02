Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the concat method as a way to merge arrays into a new array without mutating the original arrays. Compare concat to the push method. push adds items to the end of the same array it is called on, which mutates that array. Here's an example:

const arr = [1, 2, 3];
arr.push(4, 5, 6);
arr would have a modified value of [1, 2, 3, 4, 5, 6], which is not the functional programming way.

concat offers a way to merge new items to the end of an array without any mutating side effects.

Change the nonMutatingPush function so it uses concat to merge newItem to the end of original without mutating original or newItem arrays. The function should return an array.


//********************************************


  Solution :

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
