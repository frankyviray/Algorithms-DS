// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2+3

// For example: fibonacciRecursive(6) should return 8

// O(n): iterating through the loop
function fibonacciIterative(n){
    let arr = [0, 1];
    for(let i = 2; i < n + 1; i++){
        // adding the 2 previous values and pushing the value into arr
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n]
}
console.log('fibonacciIterative', fibonacciIterative(3));
console.log('fibonacciIterative', fibonacciIterative(8));
console.log('fibonacciIterative', fibonacciIterative(5));


// O(2^N) Exponential - recursive algorithms that solve a problem of N (time complexity is horrible worse than O(n^2))
function fibonacciRecursive(n){
// if n index is less than 2 return its current number
    if (n < 2) {
        return n
    }
    // the pattern is that each value is the sum of the 2 previous values
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(6)) // 8
console.log(fibonacciRecursive(8)) // 21
console.log(fibonacciRecursive(1)) // 1
