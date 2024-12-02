/*
Given two sorted arrays, return the median of all the numbers.

Example(s)
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Input: nums1 = [1, 2, 3, 4], nums2 = [5, 6, 7]
Output: 4.00000
Explanation: merged array = [1,2,3,4,5,6,7] and median is 4.

Problem: Find the median of two sorted arrays after merging them into one sorted array?

Explore
- are the input arrays always sorted? - yes
- can the inner arrays be different lengths? - yes

Approach 1 - Merging Arrays T(m+n) S(m+n)
- Combine the arrays first, then compute the median.

Approach 2 - Binary Search T(Math.min(n,m)) S(1)
- Locate the median by narrowing down the search space.
*/
var findMedianSortedArrays = function (a, b) {
    const totalLength = a.length + b.length;

    function findKth(k, aStart, aEnd, bStart, bEnd) {
        // Handle cases where one array is exhausted
        if (aStart > aEnd) return b[bStart + k];
        if (bStart > bEnd) return a[aStart + k];

        // Middle indices and values of both arrays
        const aMid = Math.floor((aStart + aEnd) / 2);
        const bMid = Math.floor((bStart + bEnd) / 2);
        const aValue = a[aMid];
        const bValue = b[bMid];

        // If the combined number of elements processed is less than k
        if ((aMid - aStart) + (bMid - bStart) < k) {
            // Discard smaller left-half
            if (aValue > bValue) {
                return findKth(k - (bMid - bStart + 1), aStart, aEnd, bMid + 1, bEnd);
            } else {
                return findKth(k - (aMid - aStart + 1), aMid + 1, aEnd, bStart, bEnd);
            }
        } else {
            // Discard larger right-half
            if (aValue > bValue) {
                return findKth(k, aStart, aMid - 1, bStart, bEnd);
            } else {
                return findKth(k, aStart, aEnd, bStart, bMid - 1);
            }
        }
    }

    const middle = Math.floor(totalLength / 2);
    if (totalLength % 2 === 1) {
        // Odd case: only one median
        return findKth(middle, 0, a.length - 1, 0, b.length - 1);
    } else {
        // Even case: average of two medians
        return (
            findKth(middle - 1, 0, a.length - 1, 0, b.length - 1) +
            findKth(middle, 0, a.length - 1, 0, b.length - 1)
        ) / 2;
    }
};