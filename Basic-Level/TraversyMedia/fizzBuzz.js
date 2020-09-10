function fizzBuzz() {
// for loop running from 1-100
    for (let i=1; i<=100; i++) {
    // checks if 3, 5 are divisible to 0 then returns fizzbuzz
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
    // checks if 3 is divisible to 0 then returns fizz
        } else if(i % 3 === 0) {
            console.log('Fizz');
    // checks if 5 is divisible to 0 then returns buzz
        } else if (i % 5 === 0 ) {
            console.log('Buzz')
        } else {
    // displays numbers w/o fizz, buzz, fizzbuzz
            console.log(i)
        }
    }
}

console.log(fizzBuzz())