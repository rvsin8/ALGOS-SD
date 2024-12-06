/*
47. Permutations II
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example 1:
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

Example 2:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

Constraints:
1 <= nums.length <= 8
-10 <= nums[i] <= 10

Explore
- should the output be in a specific order, or is any order fine?
    - can be in any order

Approach 1 - Backtracking
- init result
- sort nums
- create visited array
- init helper backtrack
    - base case: if the current permutation is the same length as the input list
        - add to result
        - return
    - recursive case: iterate through the numbers
        - skipping duplicates
        - set visited to true
        - push to path
        - backtrack
        - set visited to false
        - path pop 
- init backtrack
- return result

*/
function permuteUnique(nums) { //DRY RUN FOR REVIEW
    nums.sort((a,b) => a-b);
    const result = [];
    const visited = new Array(nums.length+1).fill(false);
    function backtrack(path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        };
        for (let i=0; i<nums.length; i++) {
            if (visited[i] || (i >0 && nums[i] === nums[i-1] && !visited[i-1])) continue;
            visited[i] = true;
            path.push(nums[i]);
            backtrack(path);
            visited[i] = false;
            path.pop();
        }
    }
    backtrack([]);
    return result;
};

console.log(permuteUnique([1, 1, 2]));
// Output: [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
console.log(permuteUnique([1, 2, 3]));
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]