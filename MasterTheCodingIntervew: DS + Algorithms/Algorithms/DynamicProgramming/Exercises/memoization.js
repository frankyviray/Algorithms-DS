// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233....

// Time complexity: O(2^n)
let calculations = 0;
function fibonacci(n){
    calculations++;
    // base case
    if(n < 2){
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Time complexity: O(n); trade off space complexity for better time complexity
function fibonacciMaster(){
    // add result to 'cache' hash table
    let cache = {};
    // closures
    return function fib(n){
    // calculations++;
    // if parameter is the same, we check in the cache first for the result
        if (n in cache){
            return cache[n]
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}
// Bottom Up Approach: Start from simplest solution from the bottom and slowly work your way up higher towards more complex problems
// easier to see but harder to figure out when to use
// Avoids recursion
function fibonacciMaster2(n){
   let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer.pop();
}


const fasterFib = fibonacciMaster();
console.log('Slow', fibonacci(10));
console.log('DP', fasterFib(10));
console.log('DP_2', fibonacciMaster2(10));

console.log('we did ' + calculations + ' calculations');
// we did 177 calculations (Slow)
// we did 19 calculations (DP)