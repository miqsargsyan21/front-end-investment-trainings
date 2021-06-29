//exercise 1
function numberOfFibonaci (number) {
    if(number === 1 || number === 2) { return 1; }
    return numberOfFibonaci(number - 1) + numberOfFibonaci(number - 2);
}
function showNumbersOfFibonacci (number) {
    let stringForFibonacciNumbers = "";
    if (number > 0) {
        for (let i = 1; i <= number; i++) {
            stringForFibonacciNumbers += numberOfFibonaci(i) + " ";
        }
    } else {
        stringForFibonacciNumbers = "Input correct number!";
    }
    return stringForFibonacciNumbers;
}
console.log(showNumbersOfFibonacci(6));
console.log("---------------------------");

//exercise 2
let number = 7,
    i = 1;
if (number > 1) {
    while (number > 1) {
        i *= number--;
    }
    console.log("Result is " + i); 
} else {
    console.log("Input correct number!");
}
console.log("---------------------------");

//exercise 3
let firstNumber = +prompt("Enter first number!"),
    secondNumber = +prompt("Enter second number!"),
    stringForResult = "";

if (firstNumber <= secondNumber) {
    for (let i = 1; i < firstNumber; i++) {
        stringForResult += i.toString() + " ";
    }
    for (let i = secondNumber + 1; i <= 100; i++) {
        stringForResult += i.toString() + " ";
    }
} else {
    stringForResult = "Please input correct numbers.";
}
if (!stringForResult) {
    stringForResult = "There are no such numbers for output.";
}

console.log(stringForResult);
console.log("---------------------------");

//exercise 4
let stringForOutput = "";
for (let i = 100; i < 1000; i++) {
    if (i % 3 === 1 && i % 4 === 2) {
        stringForOutput += i.toString() + " ";
    }
}
if (!stringForOutput) {
    stringForOutput = "There are no such numbers for output.";
}
console.log(stringForOutput);
console.log("---------------------------");