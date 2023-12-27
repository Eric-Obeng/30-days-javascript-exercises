const arr = Array();
console.log(arr);

const arr1 = [];
console.log(arr1);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["mango", "pear", "banana", "lemon"]; //array of strings, fruits

console.log("Numbers: ", numbers);
console.log(`Number of numbers:`, numbers.length);
console.log("Fruits: ", fruits);
console.log(`Number of fruits:`, fruits.length);

/**************************************
 * Arrays can have items of different data types
 */

const profile = [
  "Eric",
  27,
  true,
  { country: "Ghana", city: "Takoradi" },
  { skills: ["HTML", "CSS", "JS", "REACT", "Python"] },
];
console.log(profile);

/**************************************
 * Creating an arrat using split
 */
let js = "JavaScript";
const charsInJavascript = js.split("");
console.log(charsInJavascript);

let companiesString = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`;
const companies = companiesString.split(", ");
console.log(companies);

/************************************
 * Modifying array elements
 */
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungry",
  "Ireland",
  "Japan",
  "Kenya",
];

countries[0] = "Afghanistan";
let lastIndex = countries.length - 1;
countries[lastIndex] = "Korea";
countries.push("Ghana");
countries.push("Mali");

console.log(countries);

/**********************************
 * Methods to manipulate array
 * Array, lenght, concat, indexOf, slice splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift
 */

const demoSplice = [1, 2 , 3, 4, 5, 6]
demoSplice.splice(3, 3, 7, 8, 9)
console.log(demoSplice)