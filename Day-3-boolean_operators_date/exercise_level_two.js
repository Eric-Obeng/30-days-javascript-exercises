/********************************
 * 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```
 */

// {
//   let b = prompt("Enter base: ");
//   let h = prompt("Enter height: ");
//   let area = 0.5 * b * h;
//   alert(`The area of the triangle is ${area}`);
// }

/*****************************
 * 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```

 */
{
  let a = Number(prompt(`Enter side a: `));
  let b = Number(prompt(`Enter side b: `));
  let c = Number(prompt(`Enter side c: `));
  let perimeter = a + b + c;
  alert(`The perimeter of the triangle is ${perimeter}`);
}

/****************************
 * 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
 */
{
  let length = Number(prompt(`Enter length: `));
  let width = Number(prompt(`Enter width: `));
  let area = length * width;
  let perimeter = 2 * (length + width);
  console.log(`Area is ${area} and Perimeter is ${perimeter}`);
}

/********************************
 * 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
 */
{
  let radius = Number(prompt(`Enter radius: `));
  let pi = 3.14;
  let circleArea = pi * radius ** 2;
  let circumference = 2 * pi * radius;
  alert(`Area of a circle is: ${circleArea}`);
  alert(`Circumference of a circle is: ${circumference}`);
}

/**************************
 * 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
 */
{
  let x = 0;
  let y = 2 * x - 2;
  console.log(`y intercept is (${x}, ${y})`);
  y = 0;
  x = 2 / -2;
  console.log(`x intercept is (${x}, ${y})`);
}

/***************************
 * 6. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.

 */
let secondsInYear = 31536000;
let yearsLived = Number(prompt(`Enter number of years you live: `));
let numberOfSecondsLived = yearsLived * secondsInYear;
alert(`You lived ${numberOfSecondsLived} seconds`);
