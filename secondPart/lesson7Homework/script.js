//exercise 1
console.log(
(function () {
    return "Hello, my name is Alex!";
})()
);

//exercise 2
let maxOfNumbers = function (firstNumber, secondNumber, thirdNumber, fourthNumber) {
    return Math.max(firstNumber, secondNumber, thirdNumber, fourthNumber);
}
console.log(maxOfNumbers(2, 1, 4, 0));

//exercise 3
function minOfDigits (number) {
    let firstNumber = number % 10,
        secondNumber = parseInt(number / 10) % 10,
        thirdNumber = parseInt(number / 100);
    return Math.min(firstNumber, secondNumber, thirdNumber);
}
console.log(minOfDigits(103));

//exercise 4
function factorialOfNumber (number) {
    if (number === 1) {return 1;}
    return number * factorialOfNumber(number - 1);
}
console.log(factorialOfNumber(5));