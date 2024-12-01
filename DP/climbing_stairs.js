/*
'''
When climbing flights of stairs, sometimes a person takes one step at a time, sometimes two steps at a time, skipping a position. In other situations, someone may sometimes take one step and other times skip a step, intermingling them.

If one only ever moves one or two steps at a time, what are the number of unique ways to climb a flight of N stairs?

Example(s)
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Problem: Find the number of unique ways to climb a flight of n stairs if we can either take 1 or 2 steps at a time.

Explore
- no zeros or negatives
- minimum value is 1

Approach 1 -- DP
For each step n, we get the number of ways to reach it by the sum of the ways it takes to reach the previous step n-1 and the steps before that
n-2

0 --> 1 n-3
1 --> 1 n-2
2 --> 2 n-1
3 --> 3 (2+1)
'''
*/
function climbing_stairs(n) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    if (n === 1) return 1;
    let nArray = new Array(n+1).fill(0);
    nArray[0] = 1;
    nArray[1] = 1;
    for (let i=2; i<=n; i++) {
        nArray[i] = nArray[i-1] + nArray[i-2];
    };
    return nArray[n]
};

console.log(climbing_stairs(3));