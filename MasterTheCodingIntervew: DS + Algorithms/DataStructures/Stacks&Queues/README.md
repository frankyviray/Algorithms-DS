Stacks and Queues Notes:

Stacks: Think of them as plates stacked on top of each other vertically and can only touch the top plate and not the bottom (LIFO - Last In First Out).

- Most programming languages are modeled after Stack models (LIFO).

Stack Methods:
- lookup O(n)
- pop O(1)
- push O(1)
- peek O(1)

Queues: Think of them as an entrance to a roller coaster, first person gets to go then the next up until the last one (FIFO - First In First Out) which is opposite of Stacks.

- Used often in programming interviews and problems (ex. Restaurant app, Uber or Lyft, printers often use Queues for waiting in line situations).
- Arrays are not recommended since shifting all the indexes for Queues/Stacks is not a logical method.
- Javascript does not contain its own Stacks/Queues.

Queues Methods:
- lookup O(n)
- enqueue O(1)
- dequeue O(1) / similar to pop except taking the first person out
- peek O(1)

How Javascript Works?

What is a program?
 - allocate memory
 - parse and execute

Javascript Engine
 - Single Threaded that can be non-blocking (only one call stack, one at a time, FILO)
 - Chrome -> V8 which change into machine readable language
 - Memory Heap (allocate memory; const a = 1;)
 - Call Stack (where code is read in the program)
 - Memory Leaks are often caused by global variables and variables unused

Call Stack
    runs in order and removes once completed (pops after fn is run)
``console.log('1')``
``console.log('2')``
``console.log('3')``

    const one = () => {
        const two = () => {
            console.log('4')
        }
        two();
    }

Recursion (function that calls itself)
// Stack Overflow since there's no stop (breaks browser)
function foo() {
    foo()
}

Asynchronous (image processing, API calls need something more than a synchronous calls)

Example:

// call stack
```
console.log('1')
setTimeout(() => {
    console.log('2')
}, 2000)
console.log('3')
```

Javascript Run-Time Environment (included in the browser):

- Web APIs
    - DOM(document)
    - AJAX(XMLHttpRequest)
    - Timeout(setTimeout)
- Event Loop
- Callback Queue

INTERVIEW TIPS:
- One of the most common interview questions is "Implement Queue using Stacks" (https://leetcode.com/problems/implement-queue-using-stacks/description/).
- https://repl.it/@aneagoie/Data-Structures-Queues-2-stacks (Solution)
- Do not use Arrays with Queues (Common Interview Question).