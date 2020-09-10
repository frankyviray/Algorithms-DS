function countZero(n) {
    let count = 0; // count equals '0'
    while(n > 0){ // while loop runs if number is greater than 0
        count += Math.floor(n/10); // number is divided by 10 passed into Math.floor() which reduces number down to its largest integer (i.e: 5.93 => 5) and then this is added to the 'count'
        n = n/10; // number equals number divided by 10
    }
    return count; // return count
}

console.log(countZero(220));
// 24
console.log(countZero(110));
// 12
console.log(countZero(30));
// 3