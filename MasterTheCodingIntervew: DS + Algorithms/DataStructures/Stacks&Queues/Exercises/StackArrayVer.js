class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class StackArrVer {
    constructor(){
        this.array = [];
    }
    // see the very top element/node
    peek() {
        return this.array[this.array.length-1];
    }
    // add node to top of stack
    push(value) {
        // push is pre-built with arrays
       this.array.push(value);
       return this;
    }
    // remove node to top of stack
    pop() {
        // pop is pre-built with arrays
        this.array.pop();
        return this;
    }
    // isEmpty
}

const myStack = new StackArrVer();
console.log(myStack.push('Google')) // StackArrVer { array: [ 'Google' ] }
console.log(myStack.push('Udemy'))
console.log(myStack.push('Discord'))
myStack.peek();
myStack.pop();
console.log(myStack.pop());
console.log(myStack.pop());