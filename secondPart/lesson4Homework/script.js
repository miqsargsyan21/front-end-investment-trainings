let x = 7,
    y = 4,
    multiplyXY = 0,
    sumForExTwo = 0;

const z = 4;

//exercise 1
if (x > y) {
    // I moved x and y for optimize loop
    x += y; 
    y = x - y;
    x -= y;
}
for (let i = 0; i < x; i++) {
    multiplyXY += y;
}
console.log("x * y = " + multiplyXY);
console.log("----------------------");

//exercise 2
for(let i = 1; i <= 500; i++) {
    if (!(i % 7) || !(i % 3)) {
        sumForExTwo += i;
    }
}
console.log("Sum for 1-500 numbers is " + sumForExTwo);
console.log("----------------------");

//exercise 3
if (x <= y && x <= z) {
    console.log("Minimum is " + x);
} else if (y <= x && y <= z) {
    console.log("Minimum is " + y);
} else {
    console.log("Minimum is " + z);
}
console.log("----------------------");

//exercise 4
if (x === y || x === z || y === z) {
    console.log("True");
} else {
    console.log("False");
}