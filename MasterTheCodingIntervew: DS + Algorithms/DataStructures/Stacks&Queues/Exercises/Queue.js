class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    // see the very first element/node
    peek() {
        return this.first;
    }
    // add node to first of Queue
    enqueue(value) {
        // instantiate new Node
        const newNode = new Node(value);
        if (this.length === 0) {
        // since there's only one node in list newNode becomes first, last
            this.first = newNode;
            this.last = newNode;
        } else {
        // points newNode to last in line
            this.last.next = newNode;
        // update last to newNode
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    // remove node to first of Queue
    dequeue() {
        // if there is no first item/queue
        if (!this.first) {
            return null;
        }
        // if this is the last node (we can also check length)
        if (this.first === this.last) {
            this.last = null;
        }
        // const holdingPointer = this.first; (reference pointer and still have access to removed memory)
        // the node after first node now becomes first
        this.first = this.first.next;
        this.length--;
        return this;
    }
    // isEmpty
}

const myQueue = new Queue();
myQueue.enqueue('Jim')
myQueue.enqueue('Cody')
myQueue.enqueue('Derek')
// console.log(myQueue.peek());
console.log(myQueue.dequeue()) // loses memory of 'Jim' since there's no reference point (garbage collector)
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())