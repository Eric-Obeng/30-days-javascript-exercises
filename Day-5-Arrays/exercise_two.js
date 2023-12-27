/***************************
 * First remove all the punctuations and change the string to array and count the number of words in the array
 * 
 *  let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
 */

// Solution
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let word = text.replace(/[^\w\s]/g, "").toLowerCase();
let wordArray = word.split(" ");
console.log(wordArray);
console.log(wordArray.length);

/****************************
 * In the following shopping cart add, remove, edit items

    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```

   - add 'Meat' in the beginning of your shopping cart if it has not been already added
   - add Sugar at the end of you shopping cart if it has not been already added
   - remove 'Honey' if you are allergic to honey
   - modify Tea to 'Green Tea'
 */

{
  const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

  if (!shoppingCart.includes("Meat")) {
    shoppingCart.unshift("Meat");
  }

  if (!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar");
  }

  const allergicToHoney = true;
  if (allergicToHoney) {
    const honeyIndex = shoppingCart.indexOf("Honey");
    if (honeyIndex !== -1) {
      shoppingCart.splice(honeyIndex, 1);
    }
  }

  const teaIndex = shoppingCart.indexOf("Tea");
  if (teaIndex !== -1) {
    shoppingCart[teaIndex] = "Green Tea";
  }
  console.log(shoppingCart);
}
