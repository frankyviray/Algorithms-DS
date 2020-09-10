// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count - 1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek()); // shows 2 in stack
console.log(myStack.pop()); // pop off 2 and shows 2
console.log(myStack.peek()); // peek shows only 1 thing in stack
myStack.push("freeCodeCamp"); // pushed string
console.log(myStack.size()); // check size of stack equals 2: 1 on bottom, 'freeCodeCamp' on top
console.log(myStack.peek()); // shows 'freeCodeCamp'
console.log(myStack.pop()); // pops off 'freeCodeCamp' and shows 'freeCodeCamp'
console.log(myStack.peek()); // peek shows 1



