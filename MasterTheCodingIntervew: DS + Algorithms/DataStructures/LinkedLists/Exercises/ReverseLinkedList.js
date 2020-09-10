// 1 --> 10 --> 99 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// instantiate the Node class with a value property and next property
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

class LinkedList {
    constructor(value) {
        // keeps track of the head
        this.head = {
            value,
            next: null
        }
        // this refers to the LinkedList we create
        // currently we only have one item the head is also the tail
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value,
            next: null
        };
        // grabs tail and then the next value (pointer) and points to newNode
        this.tail.next = newNode; // still currently until it is updated tail: { value: 10, next: null },
        // set this.tail is the newNode;
        this.tail = newNode;
        this.length++; // 2
        return this; // LinkedList reference
    }
    prepend(value){
        const newNode = {
            value,
            next: null
        };
        // created a pointer which points to the very first item on the list
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    // prints out LinkedList values in array
    printList() {
        const array = [];
        let currentNode = this.head;
        // as long as there is a current node and not pointing to a null terminator
        while (currentNode !== null) {
        // push currentNode value into array
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        // check params
        // as long as index is greater than or equal to this.length
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value,
            next: null
        };
        // points to the leader of the list
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next;
        // deleted reference of '5' but saved the reference to it with 'holdingPointer'
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList()
    }
    traverseToIndex(index){
        // check params but we can assume that the index is a valid number/index
        let counter = 0;
        let currentNode= this.head;
        // O(n) due to loop
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        // check params
        // grab the leader
        const leader = this.traverseToIndex(index-1);
        // grabs unwanted node  with leader.next
        const unwantedNode = leader.next;
        // get the pointer after the unwanted node to equal the new pointer
        leader.next = unwantedNode.next;
        // decrease node by 1
        this.length--;
        // returns values in LinkedList
        return this.printList();
    }
    reverse(){
    // if this is only node and there's only a head node
    // if (this.length === 1) -> similar to if statement below
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        // first item becomes tail before loop
        this.tail = this.head;
        let second = first.next;
        // as long as 'second' is not null
        while(second) {
        // create a temp variable (or third)
            const temp = second.next;
            // 1 to 10 switch places [1, 10, ...] to [10, 1, ...]
            second.next = first;
            // first variable which was the head becomes second
            first = second;
            // second item then becomes third
            second = temp;
        }
        // 1 points to null [1, 10, ...]
        this.head.next = null;
        // [1, 10, 16, 88] once while loop finishes this.head equals first and fully reversed
        this.head = first;
        // do not forget to return
        return this
    }
}

// instantiate a LinkedList
const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.remove(2); // 99 gets deleted
myLinkedList.remove(2); // 5 gets deleted
console.log(myLinkedList.reverse()); // [ 88, 16, 10, 1 ]
// console.log(myLinkedList.printList(2));
// console.log(myLinkedList)