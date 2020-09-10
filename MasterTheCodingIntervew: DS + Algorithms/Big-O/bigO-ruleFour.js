function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) {
        console.log(number);
    }); // O(n)

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    }); // O(n^2)
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])

// O(n + n^2) -> O(n^2)
// If we had another loop inside another loop then we'd get O(n^3); 3 nested layers (usually bad idea)