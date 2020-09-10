// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    let evenSum = 0; // set evenSum equal to 0
    let oddSum = 0; // set oddSum equal to 0
    // takes in array and for each number checks if its divisible by 2 to equal to 0 if so then evenSum adds with this number
    // otherwise oddSum adds to this number
    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
    // return the evenSum, oddSum totals in an array
    return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 60, 45, 71]));
// [ 170, 116 ]