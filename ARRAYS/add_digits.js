var addDigits = function(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            console.log('sum', sum);
            num = Math.floor(num/10);
        }
        num = sum;
    }
    return num;
};

const num = 55;
console.log(addDigits(num));