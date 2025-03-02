Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

//**********************************

Solution :

function palindrome(str) {
  let strLowerCase = str.toLowerCase();
  let editedStr = strLowerCase.replace(/[^0-9a-z]/gi, ''); 
  let characters = editedStr.split("");
  let charactersReversed = characters.slice(0).reverse();
  let result = true;

  for (let i = 0; i < characters.length; i++){
    if (characters[i] != charactersReversed[i]){
      result = false;
    }
  }

  return result;
}

palindrome("eye");
