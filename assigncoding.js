/*function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capitalCity is ${capitalCity} `;
}

const descPortugal = describeCountry("Portugal", 10, "Lisbon");

const descFinland = describeCountry("Finland", 6, "Helsinki");

const descGermany = describeCountry("Germany", 83, "Berlin");

console.log(descPortugal);
console.log(descFinland);
console.log(descGermany);*/

// Function declaration
/*function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percPortugal1 = percentageOfWorld1(1000);
const percChina1 = percentageOfWorld1(1441);
const percGermany1 = percentageOfWorld1(900);

console.log(percPortugal1, percChina1, percGermany1);*/

// Function expression
/*const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percPortugal2 = percentageOfWorld2(1000);
const percChina2 = percentageOfWorld2(1441);
const percGermany2 = percentageOfWorld2(900);

console.log(percPortugal2, percChina2, percGermany2);*/

// Functions calling other functions
/*const describePopulation = function (country, population) {
  const percentage = percentageOfWorld2(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
};

describePopulation("Portugal", 100);
describePopulation("China", 2500);
describePopulation("Germany", 1500);*/

// Coding Challenge 2
//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

// Arrays
/*const populations1 = [100, 2500, 1500, 830];
console.log(populations1.length === 4);
const percentages = [
  percentageOfWorld2(populations1[0]),
  percentageOfWorld2(populations1[1]),
  percentageOfWorld2(populations1[2]),
  percentageOfWorld2(populations1[3]),
];
console.log(percentages);*/

//Array Methods
/*const neighbours = ["Norway", "Sweden", "Russia"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European Country");
}

neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
console.log(neighbours);

// Objects
const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Telugu & Hindi",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],
};
console.log(myCountry);

console.log(
  `${myCountry.country} has ${myCountry.population} million 
  ${myCountry.language} speaking people,
  ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);*/

// Challenge
/*const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}) `
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}) `
  );
}

// Assignment
const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Telugu & Hindi",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million 
    ${this.language} speaking people,
    ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);*/

// for loop
for (let h = 1; h <= 50; h++) {
  console.log(`Voter number ${h} is currently voting`);
}

let nums = [1, 10, 5, -9, -1];

for (let i = 0; i < nums.length; i++) {
  console.log("nums[" + i + "]:" + nums[i]);
}

/*let nums = [1, 10, 5, -9, -1];

for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}*/

/*console.log("-----------------------------------");
// for Loop Best version with function and an array
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

// const populations1 = [100, 2500, 1500, 830];
// const percentages = [
//   percentageOfWorld2(populations1[0]),
//   percentageOfWorld2(populations1[1]),
//   percentageOfWorld2(populations1[2]),
//   percentageOfWorld2(populations1[3]),
// ];
// console.log(percentages);

const populations = [100, 2500, 1500, 830];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld2(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);*/

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let x = 0; x < listOfNeighbours[i].length; x++) {
    console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
  }
}

const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

for (let i = 0; i < temps.length; i++) {
  console.log(temps[i]);
}
