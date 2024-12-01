function bfsOfGraph(V, adj) {
    const visited = new Array(V).fill(false);
    const result = [];
    const queue = [];
    queue.push(0);
    visited[0] = true;
    while (queue.length) {
        const currentNode = queue.shift();
        result.push(currentNode);
        for (let neighbor of adj[currentNode]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    return result;
};

const adj1 = [[2, 3, 1], [0], [0, 4], [0], [2]];
const adj2 = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]];
const adj3 = [[1], [0, 2, 3], [1], [1, 4], [3]];

console.log(bfsOfGraph(adj1.length, adj1)); // Output: [0, 2, 3, 1, 4]
console.log(bfsOfGraph(adj2.length, adj2)); // Output: [0, 1, 2, 3, 4]
console.log(bfsOfGraph(adj3.length, adj3)); // Output: [0, 1, 2, 3, 4]
