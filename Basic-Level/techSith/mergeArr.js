let x = [1, 2, 3] + [4, 5, 6]

console.log(x)
// 1,2,34,5,6 does not merge properly but adds into a string (note: 34 combines into one character)

let y = [...[1, 2, 3], ...[4, 5, 6]]

console.log(y)
// [ 1, 2, 3, 4, 5, 6 ] merges into one big array

let z = String([...[1, 2, 3], ...[4, 5, 6]])
console.log(z)
// 1,2,3,4,5,6 returns String version