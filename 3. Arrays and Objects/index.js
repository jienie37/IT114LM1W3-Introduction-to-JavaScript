/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
let firstNum = numbers[0];
console.log("First: ", firstNum);
let fifthNum = numbers[4];
console.log("Fifth: ", fifthNum);
let lastNum = numbers[14];
console.log("Last: ", lastNum);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let min = Math.min(...numbers);
console.log("Min: ", min);
let max = Math.max(...numbers);
console.log("Max: ", max);
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log("Average: ", average);


// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Both are used to store ordered collection of items. but python is more flexible being able to store different data types

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let IT114L = {
    courseCode: 'IT114L',
    name: 'WEB SYSTEMS AND TECHNOLOGIES',
    units: 1,
    studentSize: 34
};


// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.profName = "Job Lipat";

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let courseList = [
    { courseCode: 'CS107', name: 'INFORMATION MANAGEMENT', units: 3 },
    { courseCode: 'IT132', name: 'LOGIC DESIGN AND SWITCHING', units: 3 },
    { courseCode: 'IT114', name: 'WEB SYSTEMS AND TECHNOLOGIES', units: 3 }
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = courseList.reduce((sum, { units }) => sum + units, 0);
console.log("Total Units: ", totalUnits);


// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: the equivalent would most likely be dictionaries, both are used to store and organize data with the value pairs

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let moreNumbers = [...numbers, 99];


// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let { courseCode, units } = IT114L;
console.log(courseCode, units);

