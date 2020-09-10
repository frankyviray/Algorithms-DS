function booooo(n) {
    for (let i  = 0; i < n.length; i++) {
        console.log('booooooo!');
    }
}

booooo([1,2,3,4,5])  // O(1) (space complexity)

function arrayOfHiNTimes(n) {
    let hiArray = []; // created new array and filled array with 'n' loops
    for (let i  = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

console.log(arrayOfHiNTimes(6)) // O(n) -> created new data structures and each item is a memory space 'n'