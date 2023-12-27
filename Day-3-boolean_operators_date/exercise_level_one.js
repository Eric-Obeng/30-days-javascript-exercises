/********************************
 * 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
 */
{
  let firstName = "Eric";
  let lastName = "Obeng";
  let country = "Ghana";
  let city = "Takoradi";
  let age = 26;
  let isMarried = false;
  let year = new Date().getFullYear();

  console.log(typeof isMarried);
  console.log(typeof city);
  console.log(typeof year);
}

/*********************************
 * 2. Check if type of '10' is equal to 10
 */
{
  let num = typeof "10" == 10;
  console.log(num); // false
}

/*********************************
 * 3. Check if parseInt('9.8') is equal to 10
 */
{
  let check = parseInt("9.8") == 10;
  console.log(check); // false
}

/*********************************
 * 4. Boolean value is either true or false.
 * 1. Write three JavaScript statement which provide truthy value.
 * 2. Write three JavaScript statement which provide falsy value.
 */

{
  let programmingLanguage = "JavaScript";

  programmingLanguage
    ? console.log(`Yes I love ${programmingLanguage}`)
    : console.log("My bad that's not what i really love");

  let programmingLanguage2 = "";

  programmingLanguage2
    ? console.log(`Yes I love ${programmingLanguage}`)
    : console.log("Please Enter a programming language");
}

/******************************
 * 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Find the length of python and jargon and make a falsy comparison statement.
 */
{
  let string1 = "python";
  let string2 = "jargon";
  console.log(string1.length > string2.length);
}

/*******************************
 * 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python
 */

console.log(4 > 3 || 10 < 12);
console.log(!(4 < 3));
console.log(!("python".includes("on") && "dragon".includes("on")));

/**************************
 * 7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */
{
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let day = now.getDay();
  let hour = now.getHours();

  console.log(now);
}
{
  let now = new Date();
  let secondsElapsed = Math.floor(now.getTime() / 1000);
  console.log(`seconds elapsed from 1970 to now is : ${secondsElapsed}`);
}
