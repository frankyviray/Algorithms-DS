Dynamic Programming Notes:

- It is an optimization technique.  Do you have something you can cache? If you have something you can cache then you can use dynamic programming.
- Think of DP as: Divide & Conquer + Memoization
- Way to solve problems by breaking it down to a sub problems and solving each sub problems just once and storing their solutions in case next time same problem appears.
- With dynamic programming, the pattern is usually the same when solving a problem.

Steps to follow to check if Dynamic Programming is a viable solution:
1. Can be divided into subproblem (Is it a treelike structure where each problem is broken down into smaller problems which indicates a recursive solution)
2. Recursive Solution
3. Are there repetitive subproblems?
4. Memoize subproblems (Improves performance, time complexity)
5. Demand a raise from your boss! (Since code becomes very efficient)

 - Memoization ~~~~~ Caching
    - Caching is a way to store values to use later on and way to speed up programs.
    - Memoization is simply a way to remember a solution to a solved problem so you don't have to calculate again.
    - Reduce space and time complexity by using memoization; O(n).

*Another approach is called Bottom Up method.

POPULAR INTERVIEW QUESTIONS:
- https://leetcode.com/problems/house-robber/
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
- https://leetcode.com/problems/climbing-stairs/