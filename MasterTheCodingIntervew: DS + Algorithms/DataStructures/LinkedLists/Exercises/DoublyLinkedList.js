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
class DoublyLinkedList {
    constructor(value) {
        // keeps track of the head
        this.head = {
            value,
            next: null,
        // doubly linked lists requires prev
            prev: null
        }
        // this refers to the LinkedList we create
        // currently we only have one item the head is also the tail
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value,
            next: null,
        // doubly linked lists requires prev
            prev: null
        };
        newNode.prev = this.tail;
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
            next: null,
            prev: null
        };
        // created a pointer which points to the very first item on the list
        newNode.next = this.head;
        // prev should now point to the new node since it is no longer the head
        this.head.prev = newNode;
        // update head to be the newNode
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
            next: null,
            prev: null
        };
        // points to the leader of the list
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next;
        // get leader to point to the newNode
        leader.next = newNode;
        // newNode should point to the leader
        newNode.prev = leader;
        // newNode should point to the follower
        newNode.next = follower;
        // follower will point back the newNode
        follower.prev = newNode;
        this.length++;
        console.log(this)
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
        const follower = leader.next;
        // get leader to point to the newNode
        leader.next = newNode;
        // newNode should point to the leader
        newNode.prev = leader;
        // newNode should point to the follower
        newNode.next = follower;
        // follower will point back the newNode
        follower.prev = newNode;
        // grabs unwanted node  with leader.next
        const unwantedNode = leader.next;
        // get the pointer after the unwanted node to equal the new pointer
        leader.next = unwantedNode.next;
        // decrease node by 1
        this.length--;
        // returns values in LinkedList
        return this.printList();
    }
}

// instantiate a LinkedList
const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList.printList());
myLinkedList.insert(1, 99)
// myLinkedList.insert(20, 88)
// myLinkedList.remove(2); // 99 gets deleted
// myLinkedList.remove(2); // 5 gets deleted
// console.log(myLinkedList.printList(2));
// console.log(myLinkedList)