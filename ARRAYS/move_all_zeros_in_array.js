/*
'''
Given an array of integers, move all 0's to the end of the list while maintaining the relative order of the non-zero elements.

Note: that you must do this in-place without making a copy of the array.

Example(s)
**Input:** [0, 1, 0, 3, 1]
**Output:** [1, 3, 1, 0, 0]

**Input:** [0, 5, 3, 0, 2]
**Output:** [5, 3, 2, 0, 0]

'''
*/
function moveZeros(nums) {
    let j=0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++;
        }
    }
    return nums;
};

console.log(moveZeros([0, 1, 0, 3, 1])); // Output: [1, 3, 1, 0, 0]
console.log(moveZeros([0, 5, 3, 0, 2])); // Output: [5, 3, 2, 0, 0]
