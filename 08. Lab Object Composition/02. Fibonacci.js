let fib = (function getFib(){
    let firstNumber = 0;
    let secondNumber = 1;

    return () => {
        let nextNum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNum;
        return firstNumber;
    }
})();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());