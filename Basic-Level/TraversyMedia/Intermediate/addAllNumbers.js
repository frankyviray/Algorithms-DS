// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2, 5, 6, 7) === 20

// Solution 1 - ES5 using arguments object and for loop
function addAll() {
    // return arguments: [Arguments] { '0': 2, '1': 5, '2': 6, '3': 7 }
    var args = Array.prototype.slice.call(arguments);
    // console.log(args) -> [ 2, 5, 6, 7 ]
    var total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

console.log(addAll(1, 2, 5, 6, 7));

// Solution 2 - ...rest & reduce/forEach (ES6)

function addAll(...numbers) {
    let total = 0;
    numbers.forEach(num => (total += num));
    return total;
}

console.log(addAll(1, 2, 5, 6, 7));

// Solution 3 - Reduce
function addAll(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur)
}

console.log(addAll(1, 2, 5, 6, 7));

