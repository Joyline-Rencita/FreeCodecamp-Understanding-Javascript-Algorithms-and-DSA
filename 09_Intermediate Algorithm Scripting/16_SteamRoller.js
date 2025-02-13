Flatten a nested array. You must account for varying levels of nesting.

//*****************************************


  Solution :

function steamrollArray(arr) {
    // Recursion is the breakfast of champions. ― Don Stewart
    var steamrolled = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            var subArray = steamrollArray(arr[i]);
            steamrolled = steamrolled.concat(subArray);
        } else {
            steamrolled.push(arr[i]);
        }
    }
    return steamrolled;
}

// Test here
steamrollArray([[["a"]], [["b"]]]) // should return ["a", "b"].
steamrollArray([1, {}, [3, [[4]]]]) // should return [1, {}, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) // should return [1, 3, 4]. 
