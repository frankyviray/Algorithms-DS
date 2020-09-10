// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1,2,3,4,5,6,7]

// SOLUTION 1:
// function flattenArray(arrays) {
    // a represents starting point and b represents each iteration
    // b concats to each a
    // return arrays.reduce((a, b) =>  a.concat(b));
// }

// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))


// SOLUTION 2:
// function flattenArray(arrays) {
// // apply takes a single array and passes all array elements (similar to call except takes array)
//     return [].concat.apply([], arrays);
// }

// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))

// SOLUTION 3:
function flattenArray(arrays) {
// use of spread operator and passes in arrays
    return [].concat(...arrays);
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))