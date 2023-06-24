"use strict";

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const interface = "audio";
//const private = 564;*/

// Functions
/*function logger() {
  console.log("My name is John");
}

// Calling / Running / Invoking Function
logger();
logger();

function fruitprocessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitprocessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitprocessor(8, 20);
console.log(appleOrangeJuice);

// Built-in Function
// convert string to a number
const num = Number("23");*/

// Function Declaration
/*function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function Expression - Anonymus Func
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1980);
console.log(age2);

// difference b/w declaration & expression - decalaration(  Call function before they are defined in the code)
const age3 = calcAge3(1890);

function calcAge3(birthYear) {
  return 2037 - birthYear;
}
console.log(age3);*/

// Arrow Function
// single parameter
/*const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1985);
console.log(age3);

// single Parameter & more than 1 line of code
const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991));

// double parameters
const yearsUntilRetirement1 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement1(1991, "Jonas"));
console.log(yearsUntilRetirement1(1980, "Zoro"));*/

// function callig other functions
/*function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitprocessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} of apples and ${orangePieces} of orange.`;
  return juice;
}

console.log(fruitprocessor(2, 3));*/

// Reviewing Functions
/*const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "George"));*/

/*function calcAge(birthYear, firstName) {
  const age = 2037 - birthYear;
  console.log(`${firstName} is ${age} years old`);
  return age;
}

const age = calcAge(1991, "Jonas");*/

// Arrays
/*const friends = ["Michael", "Stefan", "Damon"];
console.log(friends);
console.log(friends[2]);
console.log(friends[0]);

console.log(friends.length);
console.log(friends.length - 1);
console.log(friends[friends.length - 1]);

friends[0] = "Elena";
console.log(friends);

const firstName = "Katherine";
const Katherine = [firstName, "Pierce", 2009 - 1864, "vampire", friends];
console.log(Katherine);
console.log(Katherine.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1985, 1975, 2005, 2019];*/

/*const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);*/

/*const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);*/

// Array Operators [Methods]
// Add Elements
/*const friends = ["Michael", "Stefan", "Damon"];
friends.push("Joe");
console.log(friends);

const friends2 = ["Michael", "Stefan", "Damon"];
const newLength = friends2.push("Joe");
console.log(friends2);
console.log(newLength);

friends.unshift("Daisy");
console.log(friends);

// Remove Elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Stefan"));
console.log(friends.indexOf("Bruce"));

friends.push(23);
console.log(friends.includes("Stefan"));
console.log(friends.includes("Bruce"));
console.log(friends.includes("23"));

if (friends.includes("Stefan")) {
  console.log("You have a friend called Stefan");
}*/

/*const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
console.log(jonasArray);

// Objects
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

// Retrieve Elements from Objects
console.log(jonas.lastName); // Dot Notation (use for final property name & not a computed property name)
console.log(jonas["lastName"]); // Bracket Notation

// difference b/w them is in bracket notation, we could put any expression.

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// How to use both (dots & bracket notation) to add new properties to the object
jonas.location = "Italy";
jonas["twitter"] = "@dangerzone123";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);*/

// Object Methods
// VERSION 1
/*const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

console.log(jonas.calcAge(1991));
console.log(jonas["calcAge"](1991));*/

/*const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //Version 2
  /*calcAge: function () {
    //console.log(this);
    return 2037 - this.birthYear;
  }

  // Version 3
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    //return this.age;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);*/

// for Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting Weights repetition ${rep}`);
// }

/*const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // Reading from jonas array
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array
  //types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1864, 1490, 1350, 1979, 2022];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

// Continue and Break
console.log("-- Only Strings --");

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("-- Breaks With Number --");

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}*/

// Looping Backwards
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------- Starting Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

// While Loop
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end....");
}
