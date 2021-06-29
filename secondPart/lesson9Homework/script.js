//exercise 1
let Person = {
    name: "John",
    surname: "Fernandez",
    address: "California",
    age: "21",
};
for (key in Person) {
    console.log(key + " is " + Person[key]);
}
console.log("----------------");

//exercise2
let Car = new Object();

Car.color = "Black";
Car.model = "Mercedes";
Car.year = 2021;

for (key in Car) {
    console.log(key + " is " + Car[key]);
}
console.log("----------------");

//exercise 3
function foo (name, age) {
    return {
        name,
        age,
    };
}
console.log(foo("Michael", 21));
console.log("----------------");

//exercise 4
let keyName = prompt("Enter key...");
if (keyName in Person) {
    console.log(Person[keyName]);
} else {
    console.log("Wrong key");
}
console.log("----------------");

//exercise 5
let inputNumber = 1234567890,
    outputNumber = "";
while (inputNumber > 0) {
    outputNumber += (inputNumber % 10).toString();
    inputNumber = parseInt(inputNumber / 10);
}
console.log("After reverse: " + outputNumber);