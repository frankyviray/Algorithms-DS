Linked List Notes

Two Types of Linked Lists:

- Singly Linked Lists: contains a set of nodes, these nodes have value of the data and the pointer to the next node in line (first node is called the head and last node is called the tail).

- Doubly Linked Lists: Contains extra blocks carrying extra data which also links to the previous node and allows backwards traversal.  In a singly linked lists there is noway to know to find out what comes before a specified node.  Searching through a doubly linked lists can actually be more efficient (A lookup can technically be O(n/2)).  A downside can be holding the additional memory.

Background as to why Linked Lists are important:

With Static Arrays, we only have a certain amount of data or memory that can be allocated next to each other in memory but both dynamic arrays and static arrays can increase their memory.
Once it hits a certain limit and double up that memory in another location but that operation every once in awhile of doubling up the array in order to create more memory had a performance implication and it cost us O(n).
Additionally, arrays also had bad performance for any sort of operations like insert and delete that had to shift indexes over especially when you inserted or deleted any word that wasn't the end of the array.

- Linked Lists can be used to solve Hash Table collisions.
- Linked Lists are null terminated which signifies that we're at the end of the list (points to null after the tail).
- Java has Linked Lists but not Javascript (pre-built) but you CAN build one in JS.
- Linked Lists travel by using traversal instead of iteration since we do not know when the linked list will end.
- Linked Lists have reference to head and tail which is why traversal is used instead of iteration.

Linked List actions:
- Prepend O(1)
- Append O(1)
- Lookup O(n)
- Insert O(n)
- Delete O(n)

What is a Pointer?
It is a reference to another place in memory (ex: object, node).

Example:
        let obj1 = { a: true };
        let obj2 = obj1;
        obj1.a = 'booya'
        delete obj1
        // console.log('1', obj1)
        console.log('2', obj2) -> still references obj1 even though obj1 is deleted

        // computers will delete memory that is unused
        /* obj2 is still being used. In JS we have something called garbage collection where memory is managed automatically.

        In low level languages you have to manually delete unreferenced store of memory but you get to also manage your own memory and make it fast and efficient.
        */

Single vs Double Linked Lists?
- Pros of Singly Linked Lists
    - Less memory, less operations (a little bit faster).
    - Fast insertion and deletion.
- Cons of Singly Linked Lists
    - Can not traversed backwards (if we ever lose reference to this.head node then we can lose list in memory forver).

- Pros of Doubly Linked Lists
    - Can be iterated or traversed from front or back (good when no limit of memory use and searching purposes)
    - If you need to delete a prev node you don't need to traverse from head node and find what the prev node is which a singly linked list has no concept of.
- Cons of Doubly Linked Lists
    - Fairly complex to implement and requires more memory/storage.
    - Extra operations to perform for insert/delete.

INTERVIEW TIPS:
 - Draw out step by step, think about the steps.
 - Most of the time Singly Linked Lists are asked in interviews.

USEFUL LINK: https://visualgo.net/en/list
