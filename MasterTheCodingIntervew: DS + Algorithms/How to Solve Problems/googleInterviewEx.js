// Naive
function hasPairWithSum(arr, sum) {
    // create a separate variable to store arr.length saves memory use in for loop
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) { // for loop
        for (var j = i + 0; j < len; j++) { // nested for loops
            if (arr[i] + arr[j] === sum) // if index of first array and 2nd array index equals the given sum return true
                return true;
        }
    }
    return false; // otherwise return false
}

// Better
function hasPairWithSum2(arr, sum) {
    const mySet = new Set(); // creates a new 'Set' object which lets you store unique values of any type (primitive values, object references)
    const len = arr.length; // creates 'len' so arr.length can be called once saving memory inside for loop
    for (let i = 0; i < len; i++) { // for loop
        if (mySet.has(arr[i])) { // calls 'Set' and checks if current index from arr exists
            return true; // returns true if index exists
        }
        mySet.add(sum - arr[i]); // adds the value of 'sum - current index of array' into 'mySet' object
    }
    return false; // otherwise return false
}

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9)