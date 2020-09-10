const arr = [1, 2, 3, 44, 5, 14, 12, 79, 33]

console.log(arr.sort((a, b) => {
    return a > b;
}))
//[ 1, 2, 3, 5, 12, 14, 33, 44, 79 ]

console.log(arr.sort((a, b) => {
    return a < b;
}))
// [ 79, 44, 33, 14, 12, 5, 3, 2, 1 ]