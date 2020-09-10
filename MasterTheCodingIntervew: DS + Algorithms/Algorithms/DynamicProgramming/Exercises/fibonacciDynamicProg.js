// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233....

let calculations = 0;
function fibonacci(n){
    calculations++;
    // base case
    if(n < 2){
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// with recursion we're adding every nested function call which adds to the stack increasing memory complexity (expensive)
// with dynamic programming this is avoidable and make it O(n) (reduce space and time complexity by using memoization)
console.log(fibonacci(6)) // 8
console.log(fibonacci(7)) // 13
console.log(fibonacci(10)) // 55