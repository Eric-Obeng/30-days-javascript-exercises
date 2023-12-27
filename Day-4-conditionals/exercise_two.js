/******************
 * 1. Write a code which  can give grades to students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
 */
{
  let score = Number(prompt("Enter your score: "));

  if (score >= 80) {
    console.log(`Yu had Grade A`);
  } else if (score >= 70) {
    console.log(`Your had Grade B`);
  } else if (score >= 60) {
    console.log(`You had Grade C`);
  } else if (score >= 50) {
    console.log(`You had Grade D`);
  } else {
    console.log(`You had Grade F`);
  }
}

/********************
 * 2. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer
 */
{
  const autumn = ["September", "October", "November"];
  const winter = ["December", "January", "February"];
  const spring = ["March", "April", "May"];
  const summer = ["June", "July", "August"];

  let month = prompt("Enter the current month: ");

  if (autumn.includes(month)) {
    console.log(`The season is Autumn`);
  } else if (winter.includes(month)) {
    console.log(`The season is Winter`);
  } else if (spring.includes(month)) {
    console.log(`The season is Spring`);
  } else {
    console.log(`The season is Summer`);
  }
}

/*************************
 * 3. Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
  ```
 */
{
  let weekendDays = ["satuday", "sunday"];
  let workingDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

  let userDay = prompt("What day is today: ");
  let inputDay = userDay.toLowerCase();
  const day =
    inputDay[0].toUpperCase() + inputDay.substring(1, inputDay.length);

  workingDays.includes(inputDay)
    ? console.log(`${day} is a working day.`)
    : console.log(`${day} is a weekend`);
}
