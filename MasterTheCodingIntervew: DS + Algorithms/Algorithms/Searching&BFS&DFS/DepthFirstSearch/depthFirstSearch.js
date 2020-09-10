// DFS Methods (most of the time use recursion):

// Inorder - Everything is in order
// Preorder - Useful when we want to recreate a tree easily
// Postorder - Start from left side children then to next level, repeat and return the root.
// Memory consumption is O(h) which would give us worst case scenario; h equals height of tree.

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            // make root node our newNode
            this.root = newNode
        } else {
            let currentNode = this.root;
            while (true) {
                // if value is less than the currentNode's value go left
                if (value < currentNode.value) {
                    // left
                    // if currentNode.left does not exist
                    if (!currentNode.left) {
                        // make newNode left
                        currentNode.left = newNode;
                        // return this to stop looping
                        return this;
                    }
                    currentNode = currentNode.left
                } else {
                    // Right
                    // if currentNode.right does not exist
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        // return this to stop looping
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
        // checks if root doesn't exist
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        // looping using 'divide and conquer' not the entire thing (dividing up so we don't visit all the nodes)
        while (currentNode) {
            // if value is less than currentNode value go left
            if (value < currentNode.value) {
                currentNode = currentNode.left
                // if value is greater than currentNode value go right
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        // return false if we don't find anything
        return false;
    }
    // remove (advanced)
    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        // keep track of parentNode
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            // keep track of parentNode
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            // keep track of parentNode
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //Option 1: No right child:
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {

                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;

                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }

            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {

                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;

                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }

            //Option 3: Right child that has a left child
            } else {

              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }

              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;

              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
    }
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        // queue can get pretty large since it has to keep references to child nodes
        let queue = [];
        queue.push(currentNode);
        // as long queue exists
        while(queue.length > 0) {
            // shift simply means that we take the very item in the queue
            // returns and removes the first item in the queue
            currentNode = queue.shift();
            console.log(currentNode.value);
            // push '9' into list
            list.push(currentNode.value);
            // does the '9' node have a left child? then add to queue
            if (currentNode.left) {
                // added '4' to the queue
                queue.push(currentNode.left);
            }
            if (currentNode.right){
                // added '20' to the queue
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    breadthFirstSearchRecursive(queue, list) {
        // base case
        if (!queue.length) {
            return list;
        }
        // to grab the current node
        // we don't need this before queue since queue is just a parameter
        let currentNode = queue.shift();
        list.push(currentNode.value)
        if (currentNode.left) {
            queue.push(currentNode.left);
        } if (currentNode.right) {
            queue.push(currentNode.right);
        }
        // recursion (this is needed since its inside a class)
        return this.breadthFirstSearchRecursive(queue, list)
    }
    DFSInOrder() {
        // starts from 'this.root' and give it a list where answers will be entered
        return traverseInOrder(this.root, [])
    }
    DFSPreOrder() {
        return traversePreOrder(this.root, [])
    }
    DFSPostOrder() {
        return traversePostOrder(this.root, [])
    }
}

function traverseInOrder(node, list) {
    // console.log(node.value)
    // if left child exists
    if (node.left){
        // keep going left until node has no more children
        traverseInOrder(node.left, list);
    }
    // once there is no child nodes then push into list
    list.push(node.value)
    if (node.right){
        // keep going right until node has no more children
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    // console.log(node.value)
    // need to push at beginning since we want to push the parent node first before traversal
    list.push(node.value)
    // if left child exists
    if (node.left){
        // keep going left until node has no more children
        traversePreOrder(node.left, list);
    }
    // once there is no child nodes then push into list
    if (node.right){
        // keep going right until node has no more children
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    // console.log(node.value)
    // if left child exists
    if (node.left){
        // keep going left until node has no more children
        traversePostOrder(node.left, list);
    }
    // once there is no child nodes then push into list
    if (node.right){
        // keep going right until node has no more children
        traversePostOrder(node.right, list);
    }
    // we check 1, 6 then 4, 15, 170, 20 then 9 (start at the end)
    list.push(node.value)
    return list;
}


//      9
//  4       20
//1   6   15  170

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.DFSPostOrder()); // [ 1, 6, 4, 15, 170, 20, 9 ]
console.log(tree.DFSPreOrder()); // [ 9, 4, 1, 6, 20, 15, 170 ]
console.log(tree.DFSInOrder()); // [ 1, 4, 6, 9, 15, 20, 170 ]


function traverse(node) {
    const tree = { value: node.value };
    tree.left = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}