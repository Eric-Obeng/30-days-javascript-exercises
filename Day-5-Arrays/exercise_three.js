/****************************
 * The following is an array of 10 students ages:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use _abs()_ method
 */
// Solution
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedAge = ages.sort((a, b) => a - b);
const minAge = sortedAge[0];
const maxAge = sortedAge[sortedAge.length - 1];
console.log(`Sorted age = ${sortedAge}`);
console.log("\n");
console.log(`min age = ${minAge}`);
console.log("\n");
console.log(`max age = ${maxAge}`);
console.log("\n");

const middleIndex = Math.floor(sortedAge.length / 2);

if (sortedAge % 2 === 1) {
  const medianAge = sortedAge[middleIndex];
  console.log(medianAge);
} else {
  const medianAge = (sortedAge[middleIndex - 1] + sortedAge[middleIndex]) / 2;
  console.log("Median Age:", medianAge);
}

const averageAge = sortedAge.reduce((a, b) => a + b, 0) / sortedAge.length;
console.log(averageAge);
