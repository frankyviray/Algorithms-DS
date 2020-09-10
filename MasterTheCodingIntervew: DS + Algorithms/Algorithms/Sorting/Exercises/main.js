const letters = ['a', 'd', 'z', 'e', 'r','b'];
const basket = [2, 65, 34, 2, 1, 7, 8];

basket.sort(function(a, b){
    return a - b;
});

console.log(basket) // [ 1, 2, 2, 7, 8, 34, 65 ]

console.log('2'.charCodeAt(0)) // 50
console.log('65'.charCodeAt(0)) // 54
console.log('34'.charCodeAt(0)) // 51