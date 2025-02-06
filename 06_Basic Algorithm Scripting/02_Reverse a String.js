Reverse the provided string and return the reversed string.
For example, "hello" should become "olleh".

  //***********************************************************

  Solution :

function reverseString(str) {
  let result = '';
  for(let i=str.length -1; i>=0; i--){
    result += str[i];
  }
  return result;
}

reverseString('hello');
