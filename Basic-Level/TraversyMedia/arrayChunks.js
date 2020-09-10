// Split an array into chunked arrays of a specified length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]


// SOLUTION #1:

// function chunkArray(arr, len) {
//     // Initialize chunked arr
//     const chunkedArr = [];
//     // Set index
//     let i = 0;

//     // Loop while index is less than the array length
//     while( i < arr.length) {
//     // Slice out from the index to the index + the chunk length and push onto the chunked arr
//         chunkedArr.push(arr.slice(i, i + len));
//         // Increment by chunk length
//         i += len;
//     }

//     return chunkedArr;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 4))
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))


// SOLUTION #2:

function chunkArray(arr, len) {
// Init chunked arr
const chunkedArr = [];

// Loop through arr
arr.forEach((val) => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if(!last || last.length === len) {
        chunkedArr.push([val]);
    } else {
        last.push(val);
    }
});

return chunkedArr;
}

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 4))
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))