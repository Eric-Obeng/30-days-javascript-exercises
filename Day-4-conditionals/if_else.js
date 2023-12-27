/*******************
 * If Else
 * If condition is true the first block executes, if not the else condition will be executed
 *
 * if (condition) {
 *  //this part executes for true        condition
 * } else {
 *   //this part execute for false condition
 * }
 */

{
  let num = -3;
  if (num > 0) {
    console.log(`${num} is a positive number`);
  } else {
    console.log(`${num} is a negative number`);
  }
}

/*************************
 * If Else if Else
 */
{
  let a = 0;

  if (a > 0) {
    console.log(`${a} is a positive number`);
  } else if (a == 0) {
    console.log(`${a} is equal to zero`);
  } else {
    console.log(`${a} is a negative number`);
  }
}
