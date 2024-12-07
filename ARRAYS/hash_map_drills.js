/* 
This function solves a problem where you need to simulate a custom hashmap that supports four operations:

Insert: Adds a key-value pair to the hashmap.
Get: Retrieves the value associated with a key.
AddToKey: Adds a specified number to all keys in the hashmap.
AddToValue: Adds a specified number to all values in the hashmap.
The goal is to apply these operations based on input queries and compute the sum of all results from the get operations.
*/
function solution(queryType, query) {
    let hashMap = new Map();
    let keyOffset = 0;
    let valueOffset = 0;
    let resultSum = 0;

    for (let i=0; i<queryType.length; i++) {
        const type = queryType[i];
        const args = query[i];
        if (type === 'insert') {
            const [x, y] = args;
            hashMap.set(x-keyOffset, y-valueOffset);
        } else if (type === 'get') {
            const [x] = args;
            if (hashMap.has(x-keyOffset, y-valueOffset)) resultSum += hashMap.get(x-keyOffset) + valueOffset;
        } else if (type === 'addToKey') {
            const [x] = args;
            keyOffset += x;
        } else if (type === 'addToValue') {
            const [y] = args;
            valueOffset += y;
        }
    }

    return resultSum;
};

console.log(solution(
    ["insert", "insert", "addToValue", "addToKey", "get"],
    [[1, 2], [2, 3], [2], [1], [3]]
)); // Output: 5
