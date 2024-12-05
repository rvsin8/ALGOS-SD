/* https://leetcode.com/problems/split-array-largest-sum/description/ */
var splitArray = function(nums, k) {
    function canSplit(maxSum) {
        let currentSum = 0;
        let subarrays = 1;
        for (let num of nums) {
            if (currentSum + num > maxSum) {
                subarrays++;
                currentSum = num;
                if (subarrays > k) return false;
            } else currentSum += num;
        }
        return true;
    }

    let left = Math.max(...nums);
    let right = 0;
    for (let num of nums) right += num;
    let result = right;

    while (left <= right) {
        let mid = Math.floor(((left+right)/2));
        if (canSplit(mid)) {
            result = mid;
            right = mid-1;
        } else left = mid+1; 
    }

    return result;
};