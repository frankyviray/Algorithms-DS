function topSum(arr){
    const len = arr.length; // len equals the indexes inside array
    let biggest = arr[0]; // biggest equals 1st index of array
    let second = arr[1]; // second equals 2nd index of array
    let i = 2;

    if (len < 2) return null; // checks if length of array is less than 2 then return null

    if(biggest < second){ // checks if biggest is less than second then
        biggest = arr[1]; // biggest equals 2nd index of array
        second = arr[0]; // second equals 1st index of array
    }
    for( ;i<len; i++){ // for loop runs through length of array
        if (arr[i] > biggest){ // checks if index of array is greater than biggest
        second = biggest; // then second equals biggest
        biggest = arr[i]; // biggest equals index of array
        }
        else if (arr[i] > second){ // else if index of array is greater than second
        second = arr[i]; // if so then second equals index of array
        }
    }
    return biggest + second; // return the biggest and second combined this will equal the largest sum
}

console.log(topSum([6,4,3,2,1,7,10]))
// 17
console.log(topSum([1,2,12,7,11]))
// 23
