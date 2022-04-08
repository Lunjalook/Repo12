function sumFibonacci(num) {
    if (num < 1) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    var fibonacci = [1, 1];
    var broj = 0;
    var fibonacciBrojevi;

    while (num > broj) {
        fibonacciBrojevi = fibonacci[broj] + fibonacci[broj + 1];
        if (fibonacciBrojevi <= num) {
            fibonacci.push(fibonacciBrojevi);
        }
        broj++
    }
    return fibonacci.filter(n => n % 2 !== 0).reduce((a, b) => a + b);
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;