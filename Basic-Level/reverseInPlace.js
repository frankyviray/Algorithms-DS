
// function reverseInPlace(str){
//     return str.split(' ').reverse().join(' ').split('').reverse().join('');
//   }

const reverseInPlace = (str) => str.split(' ').reverse().join(' ').split('').reverse().join('')
/*
1. First split places sentences separated into each word inside array
2. Reverses the order of the sentence backwards inside array
3. Join converts array into string format
4. Split converts each word into its own character inside an array
5. Second reverse reverses original order of words back into its original positions
6. Second join converts the array of words/characters back into a string while the words are in same order the characters are reversed
*/
console.log(reverseInPlace('I am the good boy'));