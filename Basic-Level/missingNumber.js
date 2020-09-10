function missingNumber(arr) {
    const n = arr.length + 1; // n represents the amount of indexes in array + 1
    let sum = 0; // sum equals 0 (counter)
    let expectedSum = n* (n+1)/2;
    // n multipled by (n + 1)/2 (i.e.: [1,2,4] = n = 4; 4 *(5/2) = 10)
    for(let i = 0; i < arr.length; i++) { // for loop running through amount of indexes in array
        sum += arr[i];
    // adds each index of the array into sum counter (i.e.: [1,2,4]; 7 = sum)
    }
    return expectedSum - sum;
// returns the value of expectedSum subtracted by sum finding the missing number (i.e.: 10-7 = 3)
}
console.log(missingNumber([1,2,4]));
// 3
console.log(missingNumber([5, 2, 6, 1, 3]));
// 4
console.log(missingNumber([5, 2, 6, 1, 3, 4, 9, 7]));
// 8