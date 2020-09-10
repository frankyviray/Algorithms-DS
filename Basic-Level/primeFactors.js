function primeFactors(n) {
    var factors = [], // factors = empty array
        divisor = 2; // divisor represents 2
    while (n > 2) { // loop runs while number greater than 2
        if (n % divisor === 0) { // if number divided by 2 returns 0 instead of another number
            factors.push(divisor); // push the divisor into empty array
            n = n/divisor; // number equals number divided by 2
        } else {
            return factors; // return the factors array
        }
    }
}

const returnIntoString = (n) => primeFactors(n).join()

console.log(returnIntoString(69))
