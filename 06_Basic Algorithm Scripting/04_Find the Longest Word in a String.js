Return the length of the longest word in the provided sentence.

Your response should be a number.

  //****************************

  Solution :

function findLongestWordLength(str) {
  let arrStr = str.split(' ');
  let result = 0;
  for(let str of arrStr){
    if(str.length > result){
      result = str.length;
    }
  }
  return result;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
