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
    }

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(170))
console.log(tree.lookup(20))
console.log(tree.remove(170))
console.log(JSON.stringify(traverse(tree.root)))

//      9
//  4       20
//1   6   15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}