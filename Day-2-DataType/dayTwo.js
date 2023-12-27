// Template Literals
let name = "Eric";
console.log(`My name is ${name}`);

// String methods
/*
1. length - the returns the number of characters a string has including empty spaces.
*/

let js = "JavaScript";
console.log(js.length);

let firstName = "Deborah";
console.log(firstName.length);

/* 
2. Accessing character in a string using it's index.
*/
{
  let string = "JavaScript";
  let firstString = string[0];
  console.log(firstString);

  let lastIndex = string.length - 1;
  console.log(lastIndex);
  let lastLetter = string[lastIndex];
  console.log(lastLetter);
}

/**
 * 3. toUpperCase()
 * This method changes the string to uppercase letter
 */

{
  let string = "JavaScript";
  let role = "frontend developer";
  console.log(string.toUpperCase());
  console.log(role.toUpperCase());
}

/**
 * 4. toLowerCase()
 * This method changes the string to lowercase letter
 */

{
  let pet = "DOG";
  let petFood = "BONES";

  console.log(pet.toLowerCase());
  console.log(petFood.toLowerCase());
}

/**
 * 5. substr()
 * it takes two arguments, the starting index and the number of characters to slice (length).
 * this is currently deprecated
 */

{
  let string = "JavaScript";
  let slice = string.substr(2, 5);
  console.log(slice);
}

/**
 * 6. substring()
 * This takes 2 arguments, the starting index and the stopping index but it doesn't include the character at the stoppig index.
 */

{
  let string = "JavaScript";
  console.log(string.substring(0, 4));
  console.log(string.substring(4, 10));
}

/**
 * 7. split()
 * This method split string at a specific place
 * it changes the string to Array
 */

{
  let string = "30 Days of JavaScript";
  console.log(string.split(" "));
}

/**
 * 8. trim()
 * This removes trailing space in the beginning or the end of a string
 */

{
  let string = "  30 Days of JavaScript  ";
  console.log(string);
  console.log(string.trim(" "));

  let fullName = " Obeng ";
  console.log(fullName);
  console.log(fullName.trim(" "));
}

/**
 * 9. includes()
 * it takes a substring argument and it checks if the substring argument exists in the string
 * includes() return a boolean. If a substring exist in a string, it retunrs true, otherwise returns false.
 */

{
  let string = "30 Days Of JavaScript";
  let string2 = "JavaScript";
  let check = string.includes("30 Days");
  let check2 = string2.includes("Java");
  console.log(check);
  console.log(check2);
}

/**
 * 10.replace()
 * takes two arguments, the old substring and a new substring
 * example, string.replace(oldsubstring, newsubstring)
 */

{
  let string = "30 Days of JavaScript";
  let newString = string.replace("JavaScript", "Python");
  console.log(string);
  console.log(newString);

  let country = "Finland";
  let newCountry = country.replace("Fin", "Ire");
  console.log(newCountry);
}

/**
 * 11. charAt()
 * Takes index and it returns the value at that index
 */
{
  let lastName = "Obeng";
  console.log(lastName.charAt(1).toUpperCase());
}

/**
 * 12. charCodeAt()
 * it takes index and it returns char code (ASCII number) of the value at that index
 */
{
  let string = "JavaScript";
  console.log(string.charCodeAt(0));
}

/**
 * 13. indexOf()
 * Takes a substring and if the substring exist in a string it returns the first position of the substring, if it does not exist it returns -1
 *
 */
{
  let string = "30 Days Of JavaScript";
  console.log(string.indexOf("JavaScript"));
}

/**
 * 14. lastIndexOf()
 * takes a substring and if it exist in a string it returns the last position of the substring, it it does not exits it returns -1
 */
{
  let string =
    "I love JavaScript. If you do not love JavaScript what else can you love.";
  console.log(string.lastIndexOf("love"));
}

/**
 * 15. concat()
 * it takes many substrings and join them.
 */
{
  let days = "30";
  console.log(days.concat(" Days", " Of", " Python"));
}

/**
 * 16. startsWith()
 * it takes a substring as an argument and it checks if a string starts witht the substring
 * it returns a boolean (true or false)
 */
{
  let quote = "Love is sweet";
  console.log(quote.startsWith("Love"));
}

/**
 * 17. endsWith()
 * it takes substring as argument and it checks if a specific string ends with the substring
 * it returns a boolean (true or false)
 */
{
  let quote = "Love is beautiful";
  console.log(quote.endsWith("Love"));
  console.log(quote.endsWith("beautiful"));
}

/**
 * 18. search()
 * it takes a substring as an argument and it returns the index of the first match
 */
{
  let string = `I love JavaScript. If you do not love JavaScript what else can you love.`;

  console.log(string.search("love"));
  console.log(string.search("JavaScript"));
}

/**
 * 19. match()
 * it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null.
 * regular expression patterns looks like (/love/) where it starts with / nad ends with /
 */

{
  let string = "Love";
  let regex = /Love/;
  let regex2 = /Love/gi;
  // g - means to search in the whole text
  // i - means case insensitive
}

// Match syntax
// string.match(substring)

{
  let string =
    "I love JavaScript. If you do not love JavaScript what else can you love.";
  console.log(string.match("love"));
  let regex = /love/gi;
  console.log(string.match(regex));
}

{
  let txt =
    "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
  let regEx = /\d+/g;

  console.log(txt.match(regEx));
}

/**
 * repeat()
 * it takes a number as argument and it returns the repeated version of the string per the number
 */

{
  let string = "love";
  console.log(string.repeat(5));
}

// Cheacking Data Type and Casting
/**
 * we use the typeof method to check the DataType of a certain variable.
 */

let fullName = "Eric Obeng";
let age = 200;
let job;
let wife = null;

console.log(typeof fullName);

// Type casting
/**
 * casting means converting one data type to another data type. we use
 * _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_
 *
 */

/**
 * String to Int
 * we can convert string into number by using the following
 * parseInt()
 * Number()
 * Plus sign(+)
 */

// Using parseInt
{
  let num = "10";
  let numInt = parseInt(num);
  console.log(typeof num);
  console.log(typeof numInt);
}

// using Number
{
  let num = "200";
  let numInt = Number(num);
  console.log(typeof num);
  console.log(typeof numInt);
}

//using Plus sign(+)
{
  let num = "100";
  let numInt = +num;
  console.log(typeof numInt);
}

/**
 * String to Float
 * we can convert a string float number to a float number. Any float number inside a quote is a string.
 * we can convert string float to floating number using the following
 * parseFloat()
 * Number()
 * Plus sign(+)
 */

// using parseFloat
{
  let num = '9.81'
  let numFloat = parseFloat(num)
  console.log(numFloat)
  console.log(typeof numFloat)
}
