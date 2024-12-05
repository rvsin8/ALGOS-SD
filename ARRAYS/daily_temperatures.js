/*
'''
You are given a list of daily temperatures, T, where each element represents the temperature of a single day. Your task is to return a list such that, for each day in the input, it tells you how many days you would have to wait until a you reach a day with a warmer temperature. If there is no future day for which this is possible, put 0 instead. For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72], your output should be [1, 1, 0, 2, 1, 0].

Example(s)
Given the list of temperatures T = [73, 74, 75, 71, 69, 72], your output should be [1, 1, 0, 2, 1, 0].
 
function dailyTemperatures(temps) {
def dailyTemperatures(self, temps: List[int]) -> List[int]:

Explore
- what should we return if there is no future day with a warmer temperature?
    - return 0 for that day

Approach 1 - Brute Force wt Nested Loops
- for each day, check the temperature of the following days
- count how many days it takes to find a warmer temperature
- if no warmer day is found, return 0 for that day

Approach 2 - Stack
- we'll use a stack to store indices of temperatures
- as we iterate through the list, we'll compare the current temperature with the temperature at the index that is stored at the top of the stack
- if the current temperature, if warmer, we'll pop the stack and calculate the number of days between the current index and the popped index.
- we'll continue this process until the stack is empty or the current temperature is not warmer
- finally, we'll push the current index onto the stack
'''
*/
function dailyTemperatures(input) {
    if (!input) return null;
    let result = new Array(input.length).fill(0);
    const stack = [];
    for (let i=0; i<input.length; i++) {
        while (stack.length && input[i] > input[stack[stack.length-1]]) {
            let index = stack.pop();
            result[index] = i-index;
        }
        stack.push(i);
    }
    return result;   
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72])); // Output: [1, 1, 0, 2, 1, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // Output: [1, 1, 1, 0]
console.log(dailyTemperatures([30, 20, 10])); // Output: [0, 0, 0]

