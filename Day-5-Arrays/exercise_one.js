const countries = [
  "Albania",
  "Bolivia",
  "canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungry",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTMl",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

//1. Declare an _empty_ array.
const emptyArr = [];

//2. Declare an array with more than 5 number of elements
const numberArr = [1, 2, 4, 7, 3, 8, 9, 14, 10];

//3. Find the length of your array
const lengthOfArray = numberArr.length;
console.log(lengthOfArray); // 9

//4. Get the first item, the middle item, and the last item of the array
{
  const firstItem = numberArr[0];
  let middleIndex = (lengthOfArray - 1) / 2;
  const middleItem = numberArr[middleIndex];
  const lastItem = numberArr[lengthOfArray - 1];

  console.log(
    `first item: ${firstItem}, Middle item: ${middleItem} lastItem: ${lastItem}`
  );
}

/***************************
 * 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
 */
{
  const mixedDataTypes = [
    25,
    9,
    { name: "Eric Obeng", Job: "Certified Frontend DEveloper" },
    "Adjoa Osei",
    true,
    ["love", "23", { boyfriend: "Eric" }],
    { girlfriend: "Debbie" },
  ];

  const arryLength = mixedDataTypes.length;
  console.log(arryLength);
}

/******************************
 * 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
 */
{
  const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];
  // 7. Print the array using _console.log()
  console.log(itCompanies);

  //8. Print the number of companies in the array
  console.log(itCompanies.length);

  //9. Print the first company, middle and last company
  let firstCompany = itCompanies[0];
  console.log("First company is : ", firstCompany);

  let middleIndex = Math.floor(itCompanies.length / 2);
  let middleCompany = itCompanies[middleIndex];
  console.log(middleCompany);

  let lastCompany = itCompanies.length - 1;
  console.log(itCompanies[lastCompany]);

  console.log("\n");

  //10. Print out each company
  itCompanies.map((company) => console.log(company));
  console.log("\n");

  //11. Change each company name  to uppercase one by one and print them out
  itCompanies.map((company) => console.log(company.toUpperCase()));
  console.log("\n");

  //12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
  let companySentence = itCompanies.join(", ");
  console.log(companySentence);
  console.log("\n");

  //13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
  if (itCompanies.includes("Amalitech")) {
    console.log("Oracle");
  } else {
    console.log("Not found");
  }

  //14. Filter out companies which have more than one 'o' without the filter method
  itCompanies.map((company) => {
    if (company.includes("o") >= 1) {
      console.log(company);
    }
  });
  console.log("\n");

  //15. Sort the array using _sort()_ method
  let sorted = itCompanies.sort();
  console.log(sorted);

  //16. Reverse the array using _reverse()_ method
  let reversed = itCompanies.reverse();
  console.log(reversed);

  //17. Slice out the first 3 companies from the array
  let slicedTask = itCompanies.slice(0, 3);
  console.log(slicedTask);

  //18. Slice out the last 3 companies from the array
  let lastThree = itCompanies.slice(4, lastCompany + 1);
  console.log(lastThree);

  //19. Slice out the middle IT company or companies from the array
  const sliceMiddleCompany = itCompanies.slice(
    middleCompany,
    itCompanies.length === 0 ? 2 : 1
  );
  console.log(sliceMiddleCompany);
  console.log("\n");

  //20. Remove the first IT company from the array
  let firstItemRemoved = itCompanies.shift();
  console.log(firstItemRemoved);
  console.log(itCompanies);
  console.log("\n");

  //22. Remove the last IT company from the array
  let lastItemRemoved = itCompanies.pop();
  console.log(lastItemRemoved);
  console.log(itCompanies);
  console.log("\n");

  //23. Remove all IT companies
  let newArray = itCompanies.splice(0, itCompanies.length);

  console.log(newArray);
  console.log("\n");

  console.log(itCompanies);
}
