// function sumOfTwo(arr, sum) {
//     const len = arr.length; // counts total arr length (indexes)

//     for(let i=0; i < len-1; i++) { // for loop running through array length except last number
//         for(let j=i +1; j<len; j++){ // inner for loop running through 'j' starting at 1
//             if(arr[i] + arr[j] == sum) // checks if index of array added by index of inner array equals sum
//                 return true; // returns true if it is the case
//         }
//     }
//     return false; // otherwise returns false
// }
// console.log(sumOfTwo([6,4,3,2,1,7], 9));
// // true
// console.log(sumOfTwo([6,4,3,2,1,7], 2));
// // false

function sumFinder(arr, sum){
    let differ = {}; // differ equals empty obj
    const len = arr.length; // len represents length of the array (total characters)

    for(let i = 0; i<len; i++){ // for loop runs through array's length
        let subtract = sum - arr[i]; // subtract sum (2nd argument/property) and index of array

        if(differ[subtract]) // checks if object contains subtract's value as an index inside
            return true; // return true if case
        else
            differ[arr[i]] = true;  // return the index of the array inside object (differ) as true
    }
    return false;
}

console.log(sumFinder([6,4,3,2,1,7], 9));
// true
console.log(sumFinder([6,4,3,2,1,7], 2));
// false