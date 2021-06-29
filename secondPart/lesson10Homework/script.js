//exercise 1
let Person = {
    name: "John",
    surname: "Fernandez",
    address: "California",
    age: "21",
};

function deleteProperty (key) {
    if (key in Person) {
        delete Person[key];
    } else {
        console.log("Please enter correct key for object");
    }
    return 0;
}

console.log(Person);
deleteProperty(prompt("Enter key!"));
console.log(Person);
console.log("--------------------------");

//exercise 2
function showObject (obj) {
    for (key in obj) {
        console.log(key, obj[key]);
    }
}
showObject(Person);
console.log("--------------------------");

//exercise 3
const salaries = {
    John: 100,
    Ann: 160,
    Tina: 130,
}

salaries.showSalaries = function () {
    let sumOfSalaries = 0;
    for (let key in this) {
        if (typeof(this[key]) !== typeof(this.showSalaries)) {
            sumOfSalaries += this[key];
        }
    }
    return sumOfSalaries;
};

console.log(salaries.showSalaries());
console.log("--------------------------");

//exercise 4
let user = { name: "John" };
let admin = { name: "Admin" };       
function sayHi () {
    console.log(this.name);
}
user.greetingKey =  sayHi;
admin.greetingKey = sayHi;
sayHi();
user.greetingKey();
admin.greetingKey();
console.log("--------------------------");

//exercise 5
let object = { location: "20 Mashtots ave, Yerevan, Armenia" };       
function getLocation() {
    console.log(this.location);
}
object.getLocation = getLocation;
getLocation();
object.getLocation();

//exercise 6
let a = 4,
    b = 5,
    c = 7,
    d = 6;

function foo (a, b, c, d) {
    if (a + b === c + d || a + c === b + d || a + d === b + c) { return true; }
    return false;
}
console.log(foo(a, b, c, d));