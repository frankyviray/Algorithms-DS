### BIG O, Space Complexity ###

**What is good code?**

 - Readable
 - Scalable
    - Speed (Time Complexity)
    - Memory (Space Complexity)

 - In programming there's usually a tradeoff between space and time complexities.
 - When a program executes there are two ways to remember things: the heap and the stack.
 - The heap is where we store variables.
 - The stack is where we keep track of the function calls.

 - Big-O Complexity revolves around Operations needed for Elements (Algorithmic efficiency).
 - Big-O allows us and concerns us with how many steps it takes in a function.
 - With Big O, we're worried about scale as things grow larger and larger.
 - Readability sometimes may be more important at times. Sometimes optimizing for time and space can negatively affect the readability of code (i.e. in a startup readability may be more important long term due to less budget and working product).

    O(n) - Linear: Number of operations x Elements
    O(1) - Constant Time: Same number of operations
    O(n!) - "oh no", most expensive and least likely to be used (i.e. means adding a nested loop for every input that we have).

**Calculating Big O**

**Rule Book**

- Rule 1: Worst Case
    - Big O describes the upper bounds of our estimates by measuring the worst case scenario to be prepared.

- Rule 2: Remove Constants
    - During interviews we generally drop the constants as the long the line is linear then Big O should be represented as o(n).

- Rule 3: Different terms for inputs
    - Make sure to know that we have different arrays or notations for each array (different inputs have different variables).  Any step that happens in same indentation you add if nested then you multiply.

- Rule 4: Drop Non Dominants
    - We are worried about scale so we drop smaller figures (i.e. O(n + n^2) simplified to O(n^2))

**What causes Space complexity?**
 - Variables
 - Data Structures
 - Function Call
 - Allocations

- When we discuss space complexity, we're talking about additional space not the space taken up by the input.  We have control of what happens inside the function so we have to ask if we're adding any space (i.e. setting up and filling an empty array running 'n' times).

- Realizing that programming has limits with space and speed makes us more aware of the decisions made for long term scalability ultimately giving us a better idea of what is good code.