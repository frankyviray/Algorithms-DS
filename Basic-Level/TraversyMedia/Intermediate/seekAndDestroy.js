// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array.
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1 - arguments, indexOf, filter
function seekAndDestroy(arr) {
    const args = Array.from(arguments); // [ [ 2, 3, 4, 6, 6, 'hello' ], 2, 6 ]

    function filterArr(arr) {
        // Return true if NOT in array
        return args.indexOf(arr) === -1;
    }

    return arr.filter(filterArr);
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))
// [ 3, 4, 'hello' ] -> removes 2, 6

// Solution 2 - ...rest, filter and includes
function seekAndDestroy(arr, ...rest) {
    // includes checks to see if inside array but '!' checks if its NOT in array
    return arr.filter(val => !rest.includes(val))
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))

