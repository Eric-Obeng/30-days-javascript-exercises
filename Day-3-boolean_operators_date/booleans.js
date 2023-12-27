// Booleans
/**
 * Boolean data type represent either true or false
 */
let isLightOn = true;
let isRaining = false;
let trueValue = 6 > 2;
let falseValue = 2 > 6;

/**
 * Truthy Values
 * All numbers(positive and negative) are truthy except zero
 * All strings are truthy except an empty string(' ')
 * the boolean true
 */

/**
 * Falsy Values
 * 0
 * 0n
 * null
 * undefined
 * NaN
 * the boolean false
 * empty strings
 */

// Undefined
/***************
 * if we declare a variable with assigning a value to it, the value is undefined.
 * if a function is not return the value, its undefined
 */
let firstName;
console.log(firstName);

// Null
/****************
 * Null means no value
 */
let empty = null;
console.log(empty);

// Operators

/********************
 * Assignment operators
 * An equal sign in JavaSceipt is an assignment operator.. it uses to assign a variable.
 */
{
  let firstName = "Eric";
  let country = "Ghana";
}

/*************************
 * Arithmetic Operators
 * Arithmetic Operators are mathematical operators
 *
 * Addition(+): a + b
 * Subtraction(-): a - b
 * Multiplication(*): a * b
 * Division(/): a / b
 * Modulus(%): a % b
 * Exponential(**): a ** b
 */

let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum);
console.log(diff);
console.log(mult);
console.log(remainder);
console.log(powerOf);

{
  // Area of a circle
  const PI = Math.PI;
  let radius = 100;

  const areaOfCircle = PI * radius * radius;
  console.log(Math.floor(areaOfCircle));
}

{
  // Weight of an object
  const gravity = 9.81;
  let mass = 72;

  const weight = mass * gravity;
  console.log(weight);
}

// Comparison Operators
/********************
 * In programming we compare values, we use comparison operators to compare two values. we check if a value is greater or less or equall to other value.
 */

// Lofical operators
/*************
 * && (ampersand) - AND
 * || (pipe) - OR
 * ! (negation) - NOT
 */

// Increment Operators
/***************
 * In JavaScript we use the increment operator to increase a value stored in a variable. the increament could be:
 * pre increment
 * post increment
 */

// Pre-increment
let count = 0;
console.log(++count);
console.log(count);

// Post-increment
{
  let count = 0;
  console.log(count++);
  console.log(count);
}

// Decrement Operator
/***************
 * In JavaScript we use the decrement operator to decrease a value stored in a variable. the decreament could be:
 * pre decrement
 * post decrement
 */

// Ternary Operator
/**************
 * Ternary operator allows to write  a condition
 * Another way to write conditionals is using ternary operators.
 */
{
  let isRaining = true;
  isRaining
    ? console.log("You need a rain coat")
    : console.log("No need for a rain cot");

  isRaining = false;
  isRaining
    ? console.log("You need a rain coat")
    : console.log("No need for a rain cot");
}

{
  let number = 5;
  number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`);

  number = -5;
  number > 0
    ? console.log(`${number} is positive`)
    : console.log(`${number} is negative`);
}


