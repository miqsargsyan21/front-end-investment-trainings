let x = prompt("Enter number x...");
const y = prompt("Enter number y..."),
      z = prompt("Enter number z...");

//exercise 1 output
console.log(((x ** 2 - 4) / (y ** 2 + 2)) + (2 ** Math.sin(Math.sqrt((x ** 2) + 1))));
console.log("------------------------");

//exercise 2 output
console.log(Math.sin((Math.PI / 12 + x)) * Math.cos((y + z) / (Math.PI + z ** 2)) + (Math.E ** (z + 4)));
console.log("------------------------");

//exercise 3 output
if (x % 2 == 0 || x % 3 == 0) {
    console.log("True");
} else {
    console.log("False");
}
console.log("------------------------");

//exercise 4 output
if (x > 1) {
    let i = 1;
    while (i <= x) {
        console.log(i++ + " ");
    }
} else {
    console.log("Null");
}
console.log("------------------------");

//exercise 5 output
do {
    if (x < 1) {
        console.log("Null");
    } else {
        console.log(x);
    }
} while (x-- > 1);
console.log("----The---------End-----");