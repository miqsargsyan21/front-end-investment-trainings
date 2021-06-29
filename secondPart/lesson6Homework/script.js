//exercise 1 function
function produceNumbers (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

//exercise 2 function
function helloText (name) {
    console.log("Hello, " + name +"!");
    return 0;
}

//exercise 3 function
function multiplesOfNumber (x = 100) {
    if (x === 1000) {
        return 0;
    }
    if (!(x % 5)) {
        return x + multiplesOfNumber(x + 1);
    }
    return multiplesOfNumber(x + 1);
}

//exercise 1 output
console.log(produceNumbers (5, 4));

//exercise 2 output
helloText(prompt("Please enter your name..."));

//exercise 3 output
console.log(multiplesOfNumber());