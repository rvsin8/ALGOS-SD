/*
Given a binary tree, return the sum of all root-to-leaf paths.

Example(s)
     1 <--- root
  2      3
4   5  6   7
sumAllTreePaths(root) == 36

Explanation:
* The leftmost path: 1 + 2 + 4 = 7
* The left-middle path: 1 + 2 + 5 = 8
* The right-middle path: 1 + 3 + 6 = 10
* The rightmost path: 1 + 3 + 7 =  11

Aggregating the paths: 7 + 8 + 10 + 11 = 36
*/
class TreeNode {
    constructor(value, left = null, right = null) { 
      this.value = value;
      this.left = left;
      this.right = right;
    }
};
  
function sumAllTreePaths(node) {
    if (!node) return 0;
    if (!node.left && !node.right) return node.value;
    let leftSum = sumAllTreePaths(node.left);
    let rightSum = sumAllTreePaths(node.right);
    return node.value + leftSum + rightSum;
};