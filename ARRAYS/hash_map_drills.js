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
            if (hashMap.has(x-keyOffset)) resultSum += hashMap.get(x-keyOffset) + valueOffset;
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
)); //5

// {
//     2: 4,
//     3: 5,
// }

/*
Question:
Given an array of characters chars and an integer k, find the k most frequent elements in the array, sorted by:

Frequency in descending order (most frequent first).
Original appearance order in case of a frequency tie (elements that appear earlier in the array come first).
Example Input:
chars = ['a', 'b', 'b', 'b', 'a', 'c', 'a'], k = 2

Example Output:
['a', 'b']
Explanation:
'a' and 'b' both appear 3 times, but 'a' comes before 'b' in the original array.
*/
function countDuplicates(array) {
    const frequencyMap = new Map();
    let duplicates = 0;
    for (let i=0; i < array.length; i++) {
        const num = array[i];
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        if (frequencyMap.get(num) === 2) duplicates++;
    };
    return duplicates;
};

console.log(countDuplicates(['a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c']));

// Count Unique Strings
function countUniqueStrings(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size;
};
console.log(countUniqueStrings(["apple", "banana", "apple", "orange"])); 

// Count Squares in Rectangles
function countSquares(squares, rects) {
    const squareSet = new Set(squares);
    let count = 0;

    for (const char of rects) {
        if (squareSet.has(char)) {
            count++;
        }
    }

    return count;
};

console.log(countSquares("3kra", "3rka")); // Output: 4
console.log(countSquares("3kra", "3RKa")); // Output: 2



