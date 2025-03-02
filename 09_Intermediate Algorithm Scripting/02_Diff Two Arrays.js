Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

//*******************************************************************************

  Solution :

function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(value => !arr1.includes(value) || !arr2.includes(value))
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

>> [ 4 ]
