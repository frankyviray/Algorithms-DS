// Reverse a singly linked list. Do it in-place.
// The function should take one input (head of the list) and return the new head of the list.

// Single Linked List Class
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
  }

// Iterative Solution:
// We iterate through the list once, changing the next pointer of each node to the previous node.
// The order of operations is important: we copy node.next into tmp before setting node.next to previous.
// Otherwise when we “step forward” at the end of the list we’d actually step back to the previous node.

// O(n) time & O(1) space
function reverse(head) {
    let node = head,
        previous,
        tmp;

    while (node) {
      // save next before we overwrite node.next!
      tmp = node.next;

      // reverse pointer
      node.next = previous;

      // step forward in the list
      previous = node;
      node = tmp;
    }

    return previous;
  }

// When we exit the list tmp is null, which means the last node visited previous was the tail of the original list.
// Therefore it is the head of our new reversed list.


// Recursive Solution:
// A recursive approach is more concise but takes up more space since functions accumulate on the call stack.

// O(n) time & O(n) space
function reverse(head) {
    if (!head || !head.next) {
      return head;
    }
    let tmp = reverse(head.next);
    head.next.next = head;
    head.next = undefined;
    return tmp;
  }

// When reverse() reaches the end of the list, it will grab the last node as the new head and reference each node backwards.