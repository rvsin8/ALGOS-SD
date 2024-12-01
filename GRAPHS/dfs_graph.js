/* https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1 */
function dfsOfGraph(V, adj) {
    const visited = new Array(V).fill(false);
    const result = [];
    function dfs (node) {
        visited[node] = true;
        result.push(node);
        for (let neighbor of adj[node]) {
            if (!visited[neighbor]) dfs(neighbor);
        };
    };
    dfs(0);
    return result
};

const adj1 = [[2, 3, 1], [0], [0, 4], [0], [2]];
const adj2 = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]];

console.log(dfsOfGraph(adj1.length, adj1)); // Output: [0, 2, 4, 3, 1]
console.log(dfsOfGraph(adj2.length, adj2)); // Output: [0, 1, 2, 3, 4]


