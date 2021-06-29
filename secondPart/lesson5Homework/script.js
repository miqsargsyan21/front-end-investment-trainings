const number = +prompt('Enter a number'),
      numberForExTwo = 457,
      firstNumber = parseInt(numberForExTwo / 100),
      secondNumber = parseInt(numberForExTwo / 10) % 10,
      thirdNumber = numberForExTwo % 10,
      n = 10;

let isPrime = true,
    t = false,
    y = 0,
    numberForExThree = 3456,
    sumForExFour = 0,
    numberForExFive = 0;

//Exercise 1
for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
  if (!(number % i)) {
    isPrime = false;
    break;
  }
}
console.log("isPrime", isPrime);
console.log("------------------------");

//exercise 2
if (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
    t = true;
}
console.log(t);
console.log("------------------------");

//exercise 3
for(let i = 3; i >= 0; i--) {
    numberForExThree = parseInt(numberForExThree / 10) + ((numberForExThree % 10) * (10 ** i));
}
if (numberForExThree > 20) {
    y = 1;
}
console.log(y);
console.log("------------------------");

//exercise 4
for (let i = 3; i < n; i++) {
    if(n % i === 2) {
        sumForExFour += i;
    }
}
console.log("Summary is", sumForExFour);
console.log("------------------------");

//exercise 5
if (n < 1) {
    console.log("It's not natural number!!!");
} else if(n < 10) {
    console.log("100");
} else if (n > 31) {
    console.log("Wrong number!!!");
} else {
    console.log((n ** 2) + 1);
}