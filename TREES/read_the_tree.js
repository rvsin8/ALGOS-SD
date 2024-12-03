/*
'''
In many but not all languages, humans read from top to bottom, left to right. This problem is convert a tree to a list of values in this reading order. Since computer scientists draw trees with the root at the top, the first node we read is that one, followed by the nodes at the first level down (only at most two nodes), then the third level, etc. For example:

      a
    /  \
   b     c
 /
d

We would read this as [a, b, c, d].

Write a function that generates a list of the values in a binary tree in this reading order.

Example(s)
treeToArray(new BTNode("a")) - returns ['a']
treeToArray(new BTNode("a", new BTNode("b"))) - only left child, returns ['a', 'b']
treeToArray(new BTNode("a", null, new BTNode("b"))) - only right child, returns ['a', 'b']
treeToArray(new BTNode("a", new BTNode("b"), new BTNode("c"))) - basic tree with both left and right children, , returns ['a', 'b', 'c']

'''
*/
class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
};

function treeToArray(root) {
    if (!root) return null;
    const queue = [root];
    const result = [];
    while (queue.length) {
        const node = queue.shift();
        result.push(node.value)
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return result;
};

const root = new TreeNode(
    1,
    new TreeNode(2, 
        new TreeNode(4, null, null), 
        null
    ),
    new TreeNode(3, null, null)
);

console.log(treeToArray(root));

function treeToArray(root) {
    if (!root) return [];
    const worklist = [root];
    const array = [];
  
    for (let index = 0; index < worklist.length; index++) {
      const node = worklist[index];
      array.push(node.value);
      if (node.left) {
        worklist.push(node.left);
      }
      if (node.right) {
        worklist.push(node.right);
      }
    };
  
    return array;
};