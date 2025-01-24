The inequality operator (!=) is the opposite of the equality operator. Inequality means not equal. The inequality operator returns false when the equality operator would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

//***********************************************************

SOLUTION:

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(99);
testNotEqual("99");
testNotEqual(12);
testNotEqual("12");
testNotEqual("bob");
