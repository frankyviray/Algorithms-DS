Array Notes:

- Really good at having sorted data (in memory in sequential order according to their index).

Pros:
- Fast Lookups just accessing information based on index.
- Fast at push/pop (adding and removing items at end of array).
- Ordered (close in memory).

Cons:
- Slow inserts (since we have to shift the array if it's not at the end).
- Slow deletes (since we have to shift the array if it's not at the end).
- Fixed size (sometimes you have to declare array ahead of time but can be avoided using dynamic arrays).

String Question?
- Turn it into an Array ~ split() then join()

Static Methods:
- lookup: O(1)
- push: O(1)
- insert: O(n)
- delete: O(n)

Dynamic Methods:
- lookup: O(1)
- append*: O(1)
- insert: O(n)
- delete: O(n)

* can be O(n) on expanding memory

Is it Sorted?
- Yes - Divide and Conquer - Binary Search O(log N)
- No. Will sorting make it faster? If still no, Linear Search.
- No. Is it a String? See if a Trie data structure helps.

