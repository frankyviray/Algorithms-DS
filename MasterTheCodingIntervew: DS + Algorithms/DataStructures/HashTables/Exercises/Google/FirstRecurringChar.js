// Google Question

// Give an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]:
// It should return 2

// Given an array = [1, 5, 1, 2, 3, 5, 1, 2, 4]:
// It should return 1

// Given an array = [2, 3, 4, 5]:
// It should return undefined

// Naive approach:
function firstRecurringChar(input){
    for (let i = 0; i < input.length; i++) {
        // start at j = 1 to compare with 2nd index instead of the same first
        // i + 1 will always move one to the right where i is so that '5' in the given example will not always be called
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
} // O(n^2) since we have nested loops

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringChar([1, 5, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(firstRecurringChar([2, 3, 4, 5])); // undefined

// Improved version using Hashtables:
function firstRecurringChar2(input){
    // creating a new object which keeps track of all items in array
    let map = {};
    for (let i = 0; i < input.length; i++) {
        // due to type coercion in JS we need to specify '!== undefined'
        if(map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i
        }
        console.log(map)
    }
    // return undefined in case none of the items match
    return undefined;
} // O(n)
console.log(firstRecurringChar2([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringChar2([1, 5, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(firstRecurringChar2([2, 3, 4, 5])); // undefined

// Best approach:
function firstDuplicate(a) {
    for (let i of a) {
      let posi = Math.abs(i) - 1
      if (a[posi] < 0) return posi + 1
      a[posi] = a[posi] * -1
    }

    return -1
  }

  firstDuplicate([2, 1, 3, 5, 3, 2])

  // https://stackoverflow.com/questions/44732552/speeding-up-this-code-for-codefighters-javascript-firstduplicate-function

