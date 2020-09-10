// Write two functions that finds the factorial of any number.  One should use recursive, the other should just use a for loop.

// O(n)
function findFactorialRecursive(number){
    // base case
    if (number === 2){
        return 2;
    }
    // always get lower number (number - 1)
    return number * findFactorialRecursive(number - 1);
}

// O(n)
function findFactorialIterative(number){
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (let i = 2; i < number; i++){
        answer = answer * i;
    }
    return answer;
}

console.log(findFactorialIterative(5)) // 24
console.log(findFactorialRecursive(10)) // 3628800