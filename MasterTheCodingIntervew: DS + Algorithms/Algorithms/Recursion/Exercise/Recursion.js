// Recursive functions have two paths:

// 1. Call the function again and run it.
// 2. A base case that will stop calling the function.
let counter = 0;

function inception(){
    console.log(counter)
    if(counter > 3) {
        return 'done!';
    }
        counter++;
    // will allow the next inception call to pass 'done!' otherwise will return undefined
        return inception();
}
console.log(inception())

// 1. Identify the base case.
// 2. Identify the recusive case.
// 3. Get closer and closer and return when needed. Usually when you have 2 returns (base case and recursive case).