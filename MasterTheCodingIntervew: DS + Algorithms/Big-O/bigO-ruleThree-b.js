// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairsOfArray(boxes)

// O(n^2) -> nested loops are multiplied instead of adding the n values
// Quadratic Time: everytime number of elements increase we have 4 operations if 3 then we have 9 operations (3 elements to the power of 2)
// Pretty slow as number operations increase significantly with increase of elements.
// Many interview questions will start of with O(n^2) while asking to improve the performance.