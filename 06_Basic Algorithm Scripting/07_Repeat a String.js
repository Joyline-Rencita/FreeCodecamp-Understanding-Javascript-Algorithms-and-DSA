Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, 
do not use the built-in .repeat() method.

  //*************************************
  Solution :

function repeatStringNumTimes(str, num) {
  if (num < 0) return '';
  let newStr = '';
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));
