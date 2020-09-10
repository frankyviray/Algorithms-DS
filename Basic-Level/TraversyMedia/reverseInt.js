function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int);
// parseInt takes a string converts into integer and Math.sign recognizes negative numbers
}

// const output = reverseInt(12345)
console.log(reverseInt(12345))
console.log(reverseInt(-12345))
