class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    // see the very top element/node
    peek() {
        return this.top;
    }
    // add node to top of stack
    push(value) {
        // instantiate new Node
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
        // hold reference to what was top originally
            const holdingPointer = this.top;
        // replaces newNode as top
            this.top = newNode;
        // top.next points to value next to the newNode
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    // remove node to top of stack
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        // const holdingPointer = this.top;
        // replaces top with the next node
        this.top = this.top.next;
        this.length--;
        return this;
    }
    // isEmpty
}

const myStack = new Stack();
myStack.push('Google')
myStack.push('Udemy')
myStack.push('Discord')
// console.log(myStack.peek());
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())