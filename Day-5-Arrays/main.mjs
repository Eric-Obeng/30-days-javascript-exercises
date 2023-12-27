import countries from "./countries.js";
import webTechs from "./web_techs.js";

/***************************
 * 1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
 *
 * 2. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
 */

if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

if (webTechs.includes("Sass")) {
  console.log(`Sass is a CSS preprocess`);
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

/*************************
 * Concatenate the following two variables and store it in a fullStack variable.

    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
    console.log(fullStack)
    *  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
 */

// Solution
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);
