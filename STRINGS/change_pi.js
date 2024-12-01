/*
Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".

Example(s)
changePi("xpix") == "x3.14x"
changePi("pipi") == "3.143.14"
changePi("pip") == "3.14p"

*/
function changePiRecursive(string) {
    if (string.length < 2) return string;
    if (string.substring(0,2) === 'pi') return '3.14' + changePiRecursive(string.substring(2));
    else return string[0] + changePiRecursive(string.substring(1))
};

console.log(changePiRecursive('xpix'));

function changePiIterative(string) {
    let result = '';
    for (let i=0; i<string.length; i++) {
        if (i<string.length-1 && string[i] === 'p' && string[i+1] === 'i') {
            result += '3.14';
            i++;
        } else result += string[i];
    }
    return result;
};

console.log(changePiIterative('xpix')); // Output: 'x3.14x'
console.log(changePiIterative('pipixxpi')); // Output: '3.143.14xx3.14'
console.log(changePiIterative('xppix')); // Output: 'xp3.14x'
