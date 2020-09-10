Trees Notes:

- Trees contain hierarchal structure and can have 0 or more child nodes (example would be an inverse tree).  Generally starts off with a root node, parent, child, leaf, sibling (ex. facebook comments, chess games).
- Same principle as Linked Lists (also type of Trees): can contain any type of info.
- Many types of Tree Data Structures for each specific use case.

Binary Tree:

- Each node can have only 0,1,2 nodes and each child can have only one parent.

    function BinaryTreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

Binary Search Tree (subset of BT):
- Really good at searching and comparing things.
- Preserves relationships.
- Keep going to the right the number increases and to the left is decreasing.
- A node can only have two children.
- Compared to Hash Tables, BST contains sorted data and structure of parent-child relationship.
- An array or object will have faster operations on avg.

Binary Search Tree Methods:
- lookup O(logN)
- insert O(logN)
- delete O(logN)

    Level 0: 2^0 = 1;
    Level 1: 2^1 = 2;
    Level 2: 2^2 = 4;
    Level 3: 2^3 = 8;

    # of nodes = 2^h - 1
    log nodes = height
    10^2 = 100;

    if we know how many levels (height) then we can find how many total nodes there are
    Log n simply means that based on the height the max number of decisions (divide & conquer approach in a phonebook: you look for the alphabet and then search)

Pros:
- Better than O(n) assuming that the BST is balanced
- Ordered
- Flexible Size (can place node anywhere in memory, flexible side)
- Inserts/Deletes are also faster than an array unless the array is adding to the end (arrays have to shift)

Cons:
- No O(1) Operations (usually have to do some sort of traversal through the tree for any lookup)
- Not the fastest for anything usually O(log n).

Perfect Binary Tree:

- Number of total nodes on each level doubles as we move down tree.
- Number of nodes on the last level is equal to the sum of the number of nodes on all the other levels plus 1.

Full Binary Tree

AVL (Production Level) for Balanced Trees:
- https://visualgo.net/en/bst (AVL)
- https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7
- Will always balance out the levels of the tree.
- Usually popular for balancing BST.

Red Black Tree (Production Level):
- Nodes are Red and Black to keep track of what is needed to balance.
- Usually popular for balancing BST.
- https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
- https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5

Binary Heap:
- Every child has a parent with a greater priority or value (this is called the Max Heap).
- Binary Heaps are great at comparative operations (data storage, sorting algorithms).
- Heap can be used in any algorithm where ordering is important (commonly used in priority queues).
- Inserted values gets evaluated from left to right and then bubbles up if value is higher.
- Inserts can still take O(log n) whereas best case would be O(1).
- Unlike a BST there is no order from left to right.
- Take up least amount of space possible since it's always left to right insertion (no concept of unbalanced and preserve order of insertion).
- Can be implemented using arrays as well instead of just nodes.
- Memory Heap != Heap Data Structure
- In priority queues, each element has a value of priority (think of emergency room or club line for vip event).
- Slower than BST but there is an idea of priority, insertion order, bubble up inserts based on priority (most of the time fast inserts).
- Good for finding Max or Min Heap (findMax or findMin: O(N)).

Trie:
- Most often associated with text and most cases can outperform BST, Hash Tables and most other DS based on search types.
- Allows if word or part of word exists in a body of a text.
- Usually has an empty root node and can have multiple children.
- Power of Trie comes from searching for something for instance letter N returns two words associated with it.
- Pre-fix Trie: a tree-like DS geared towards solving a problem specific to strings (auto-completion for words, searching words in a Dictionary or IP routing).
- Big(O) of finding a word: O(Find the length of the word)
- Space complexity: Major advantage due to prefixes since we do not store it multiple times while children link letters to multiple words (Do have not store the letters not in use).

Common Interview Questions:
- Why a unbalanced search tree is bad?
- Long Linked List and instead of being able to do O(log N) searches are O(n) linear time, loop through more items. AVL and Red Black Trees allows us to balanced a BST for performance optimizations.

Helpful Links:
- https://visualgo.net/en/bst
- https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree (RBT vs AVLT)