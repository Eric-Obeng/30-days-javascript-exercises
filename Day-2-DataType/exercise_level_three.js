/**
 * 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.
 */
{
  let string =
    "Love is the best thing in this world. Some found their love and some are still looking for their love.";

  let numOfLove = string.match(/love/gi).length;
  console.log(numOfLove);
}

/**
 * 2. Use __match()__ to count the number of all __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
 */
{
  let string =
    "You cannot end a sentence with because because because is a conjunction";
  let count = string.match(/because/g);
  console.log(count);
}

/**
 * 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```
 */
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const newSentence = sentence.replace(/[^a-zA-Z0-9\s]/g, "");
console.log(newSentence);

/**
 * 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
 */
{
  let txt =
    "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

  let figure = txt.match(/\d+/g);
  let arr = figure.map((str) => parseInt(str));
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(arr);
  console.log(`Annual income: ${sum}`);
}
