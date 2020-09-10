// 1
function reverseString(str) {
    let revString = '';
    for(let i=str.length - 1; i >= 0; i--){
        revString =  str[i] + revString;
    }
    return revString;
}

console.log(reverseString('hello'))

// 2
function reverseString(str) {
    let revString = '';
    for(let i=0; i <= str.length - 1; i++){
        revString =  str[i] + revString;
    }
    return revString;
}

console.log(reverseString('good bye'))

// 3
function reverseString(str) {

let revString = '';

for(let char of str){
    console.log('char:', char)
    revString = char + revString;
}
    return revString;
}

console.log(reverseString('Winston!'))

// 4
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('Winston'))

// 5
function reverseString(str) {

    let revString = '';
    str.split('').forEach(char => revString = char + revString);

    return revString;
}

console.log(reverseString('Anthony Davis'))

// 6
function reverseString(str) {
    return str.split('').reduce((revString, char) => char + revString, '')
}

console.log(reverseString('Red'))
