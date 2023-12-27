/****************************
 * 1. Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm
 */

const now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDay();
let hour = now.getHours();
let minutes = now.getMinutes();

if (month < 10) {
  month = "0" + month;
}

if (day < 10) {
  day = "0" + day;
}

console.log(`${year}-${month}-${day} ${hour}:${minutes}`);
console.log(`${day}-${month}-${year} ${hour}:${minutes}`);
console.log(`${day}/${month}/${year} ${hour}:${minutes}`);

/************************************
 * 2. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
   1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
 */

{
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  month < 10 ? (month = "0" + month) : month;
  day ? (day = "0" + day) : day;
  hour < 10 ? (hour = "0" + hour) : hour;
  minutes < 10 ? (minutes = "0" + minutes) : minutes;

  let today = `${year}-${month}-${day}`;
  let time = `${hour}:${minutes}`;
  console.log(`${today} ${time}`);
}
