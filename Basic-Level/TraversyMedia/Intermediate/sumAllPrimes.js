// Pass in a number to loop up to and all of the prime numbers.  A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17;

function sumAllPrimes(num) {
    let total = 0;

    function checkForPrime(i) {
        for(let j = 2; j < i; j++) {
            if (i % j === 0) {
                return false;
            }
        }
        return true; // if this isn't called then fn will keep running
    }

    for(let i = 2; i <= num; i++) {
        if (checkForPrime(i)) {
            total += i;
        }
    }
    return total;
}

console.log(sumAllPrimes(100)); // 1060 (adds all prime number leading up to 1000)
console.log(sumAllPrimes(10)); // 17