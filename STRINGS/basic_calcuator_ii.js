/* https://leetcode.com/problems/basic-calculator-ii/description/ */
function calculate(s) {
    let stack = [];
    let currentNumber = 0; 
    let operator = '+'; 

    for (let i=0; i<s.length; i++) {
        let char = s[i];
        if (char >= '0' && char <= '9') currentNumber = currentNumber * 10 + (char-'0');
        if ((char < '0' && char !== ' ') || i === s.length-1) {
            if (operator === '+') stack.push(currentNumber);
            else if (operator === '-') stack.push(-currentNumber);
            else if (operator === '/') stack.push(Math.trunc(stack.pop() / currentNumber));
            else if (operator === '*') stack.push(stack.pop() * currentNumber);
            operator = char;
            currentNumber = 0;
        };
    };
    let result = 0;
    for (let num of stack) result += num;
    return result;
};

const s = "3 + 5 * 2 - 8 / 4";

console.log(calculate(s))