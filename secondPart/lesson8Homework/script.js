//exercise 1
function fooPow (a, b) {
    if (b < 0) {
        if (b === -1) { return 1 / a; }
        return (1 / a) * fooPow(a, b + 1);
    } else if (b === 0) { return 1; }
    if (b === 1) { return a; }
    return a * fooPow (a, b-1);
}

console.log(fooPow(2, 10));
console.log(fooPow(2, -4));
console.log(fooPow(2, 1));
console.log(fooPow(2, -1));
console.log(fooPow(2, 0));
console.log("---------------------------");

//exercise 2
function factorialOfNumber (number) {
    if (number <= 1) { return 1; }
    return number * factorialOfNumber(number - 1);
}
console.log(factorialOfNumber(5));
console.log("---------------------------");

//exercise 3
function foo1 (n, m = 1) {
    let k = m;
    if (n === 2) {
        return k;
    }
    return foo1(n / 2, ++k);
}
console.log(foo1(1024));
console.log("---------------------------");

//exercise 4
function numbersOfFibonaci (number) {
    if(number === 1 || number === 2) { return 1; }
    return numbersOfFibonaci(number - 1) + numbersOfFibonaci(number - 2);
}

console.log(numbersOfFibonaci(2));
console.log(numbersOfFibonaci(7));
console.log(numbersOfFibonaci(8));
console.log("---------------------------");

//exercise 5
function calculate (firstNumber, secondNumber, operation) {
    switch (operation) {
        case "plus":
            return firstNumber + secondNumber;
        case "mult":
            return firstNumber * secondNumber;
        case "div":
            return firstNumber / secondNumber;
        case "minus":
            return firstNumber - secondNumber;
        default:
            return "Wrong operation!!";
    }
}

console.log(calculate(5, 6, "plus"));
console.log(calculate(5, 6, "minus"));
console.log(calculate(5, 6, "div"));
console.log(calculate(5, 6, "mult"));