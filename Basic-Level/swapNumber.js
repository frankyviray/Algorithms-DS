function swapNumb(a, b){
    console.log('before swap: ', 'a: ', a, 'b: ', b); // shows what a, b is before swap
    b = b -a; // b equals b minus a (i.e: 1=3-2)
    a = a+ b; // a equals a plus b (i.e: 3=2+1) -> a: 3
    b = a-b; // b equals a minus b (i.e: 2=3-1) -> b: 2 takes precedence over prev. 'b' since it is most current
    console.log('after swap: ', 'a: ', a, 'b: ', b); // shows what a, b is after swap
}

console.log(swapNumb(2, 3))
/*
before swap:  a: 2, b: 3
after swap:  a: 3, b: 2
 */