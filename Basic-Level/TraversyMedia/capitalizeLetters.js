// function capitalizeLetters(str){
// // split(' ') separates the words not the characters
//     const strArr = str.toLowerCase().split(' ');

//     for(let i = 0; i < strArr.length; i++) {
// // substring(0,1) grabs the first letter from each word and uppercases then adding in the remainder of the word
//         strArr[i] = strArr[i].substring(0,1).toUpperCase() +
//         strArr[i].substring(1);
//     }
// // ' ' separates the words into arrays not the characters
//     return strArr.join(' ');
// }

// console.log(capitalizeLetters('i love javascript'))

function capitalizeLetters(str){
    return str
        .toLowerCase()
        .split(' ')
        // returns another array mapping out each item
        .map(word => word[0].toUpperCase() + word.substr(1)).join(' ')
// substr similar to substring
// returns first word letter capitalized added w/ the rest of the word and converts back into string (join)
}

console.log(capitalizeLetters('i love javascript'))

function capitalizeLetters(str){
    return str.replace(/\b[a-z]/gi, function(char){
        return char.toUpperCase()
    });
}

console.log(capitalizeLetters('i love javascript'))
