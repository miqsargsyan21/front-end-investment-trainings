//exercise 1
console.log("Exercise 1.")
let fruits = {
    appleWeight: 350,
    pearWeight: 145
};

console.log("Start weights of fruits.");
console.log("Apple weight = ", fruits.appleWeight);
console.log("Pear weight = ", fruits.pearWeight);

//in the morning after adding
fruits.appleWeight += 150;
fruits.pearWeight += 25;
console.log("In the morning after adding.");
console.log("Apple weight = ", fruits.appleWeight);
console.log("Pear weight = ", fruits.pearWeight);

//in the evening after decrease
fruits.appleWeight += 85;
fruits.pearWeight += 26;
console.log("in the evening after decrease.")
console.log("Apple weight = ", fruits.appleWeight);
console.log("Pear weight = ", fruits.pearWeight);
console.log("--------------------------------");


//exercise 2
console.log("Exercise 2")
let age = 21,
    name = "John",
    maried = false,
    email = null,
    city;

console.log(Object.keys({age})[0], " ", age, " ", typeof(age));
console.log(Object.keys({name})[0], " ", name, " ", typeof(name));
console.log(Object.keys({maried})[0], " ", maried, " ", typeof(maried));
console.log(Object.keys({email})[0], " ", email, " ", typeof(email));
console.log(Object.keys({city})[0], " ", city, " ", typeof(city));
console.log("--------------------------------");


//exercise 3
console.log("Exercise 3");
let dateOfBirth = {
    john: 1968,
    jully: 2001,
    ignasio: 1988,
    rose: 1999
},
    curentYear = 2021;

console.log("John is ", curentYear - dateOfBirth.john, " years old.");
console.log("Jully is ", curentYear - dateOfBirth.jully, " years old.");
console.log("Ignasio is ", curentYear - dateOfBirth.ignasio, " years old.");
console.log("Rose is ", curentYear - dateOfBirth.rose, " years old.");