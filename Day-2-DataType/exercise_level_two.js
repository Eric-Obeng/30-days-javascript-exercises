/**
 * 1. Using console.log() print out the following statement:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```
 */
console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);

/**
 * 2. Using console.log() print out the following quote by Mother Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```
 */
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

/**
 * 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
 */
console.log(typeof 10);

/**
 * 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
 */
let num1 = Math.ceil(parseFloat("9.8"));
let num2 = 10;
console.log(num1 == num2);

/**
 * 5. Check if 'on' is found in both python and jargon
 */
{
  let string1 = "python";
  let string2 = "jargon";
  console.log(string1.includes("on"));
  console.log(string2.includes("on"));
}

/**
 * 6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
 */
{
  let string = "I hope this course is not full of jargon";
  console.log(string.includes("jargon"));
}

/**
 * 7. Generate a random number between 0 and 100 inclusively.
 */
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

/**
 * 8. Generate a random number between 50 and 100 inclusively.
 */
{
  let randomNumber = Math.ceil(Math.random() * (100 - 50) + 50);
  console.log(randomNumber);
}

/**
 * 9. Generate a random number between 0 and 255 inclusively.
 */
{
  let randomNumber = Math.floor(Math.random() * 255 + 1);
  console.log(randomNumber);
}

/**
 * 10. Access the 'JavaScript' string characters using a random number.
 */
{
  let string = "JavaScript";
  let char = Math.floor(Math.random() * 10);
  console.log(string[char]);
}

/**
 * 11. Use console.log() and escape characters to print the following pattern.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ``
 */
console.log(`
    1 1 1 1 1\n
    2 1 2 4 8\n
    3 1 3 9 27\n
    4 1 4 16 64\n
    5 1 5 25 125
`);

/**
 * 12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
 */
{
  let string =
    "You cannot end a sentence with because because because is a conjunction";

  let newString = string.substr(31, 23);
  console.log(newString);
}


