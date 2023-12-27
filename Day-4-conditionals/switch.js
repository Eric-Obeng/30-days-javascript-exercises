/*********************
 * Switch is an alternative of if else if else
 *
 */

{
  let weather = "cloudy";

  switch (weather) {
    case "rainy":
      console.log(`You need a rain coat`);
      break;
    case "cloudy":
      console.log(`You might be cold, you need a jaket`);
      break;
    case "sunny":
      console.log(`Go out freely`);
      break;
    default:
      console.log(`You need a rain coat`);
  }
}

{
  let userInputDay = prompt(`What day is today ?`);
  let day = userInputDay.toLowerCase();

  switch (day) {
    case "monday":
      console.log(`Today is Monday`);
      break;
    case "tuesday":
      console.log(`Today is Tuesday`);
      break;
    case "wednesday":
      console.log(`Today is Wednesday`);
      break;
    case "thursday":
      console.log(`Today is Thursday`);
      break;
    case "friday":
      console.log(`Today is Friday`);
      break;
    case "saturday":
      console.log(`Today is Saturday`);
      break;
    case "sunday":
      console.log(`Today is Sunday`);
      break;
    default:
      console.log(`Please enter day`);
  }
}

