// (function() {
//     let a = b = 100;
// })();

// console.log(b);
// 100 since b is not specified by 'let' it is global
// console.log(a);
// a is not defined
// console.log(b);

(function() {
    let b = 100;
    let a = b;

console.log(b);
console.log(a);
})();

// 100
// 100
