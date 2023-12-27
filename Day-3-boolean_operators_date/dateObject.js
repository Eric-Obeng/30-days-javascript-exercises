// Date Object
/****
 * getFullYear()
 * getMonth()
 * getDate()
 * getDay()
 * getHours()
 * getMinutes()
 * getSeconds()
 * getMilliseconds()
 * getTime()
 *
 */
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

{
  let fullDate = new Date();
  let year = fullDate.getFullYear();
  let date = fullDate.getDay();
  console.log(fullDate);
  console.log(year);
  console.log(date);
  console.log(days[date]);
}

{
  const now = new Date();
  console.log(now);
  let date = now.getDate();
  console.log(date);
  console.log(now.getTime());
}
