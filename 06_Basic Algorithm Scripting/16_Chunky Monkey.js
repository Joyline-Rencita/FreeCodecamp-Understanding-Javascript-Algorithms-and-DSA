Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//****************************************************************

  Solution :

function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

>> [ [ 'a', 'b' ], [ 'c', 'd' ] ]
