const strings = ['a', 'b', 'c', 'd'];
// 4 * 4 = 16 bytes of storage (storing in sequential order in our RAM)
// with a 32 bit system we ave 4 shelfs to store one variable
console.log(strings[2]) // c

// push - allows to add end of array
strings.push('e'); // O(1) -> only one operation
console.log(strings) // [ 'a', 'b', 'c', 'd', 'e' ]

// pop - removes last item off array
strings.pop(); // O(1) -> removing last item
console.log(strings) // [ 'a', 'b', 'c', 'd' ]

// unshift - adds item to beg of array
strings.unshift('x') // O(n) -> reiterated using loop to realign array
console.log(strings) // [ 'x', 'a', 'b', 'c', 'd' ]

// splice
strings.splice(2, 0, 'alien'); // O(n/2) -> looped through half the array -> O(n) (simplifies)
console.log(strings) // [ 'x', 'a', 'alien', 'b', 'c', 'd' ]
