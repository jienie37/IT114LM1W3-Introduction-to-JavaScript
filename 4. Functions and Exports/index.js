/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Call the 'greet' function with your name as the argument
greet('Jien');

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: A function declaration is hoisted, meaning it can be called before its declaration in the code. A function expression is not hoisted and must be defined before it is called

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
const calculateArea = function(length, width) {
    return length * width;
};

// Call the 'calculateArea' function with any length and width as arguments
let area = calculateArea(5, 10);
console.log("Area: ", area);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function passed as an argument to another function and is executed after a certain task is completed. An example is the `forEach` method in JavaScript, where you pass a callback function to be executed for each element in an array

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
function modifyArray(arr, modifier) {
    return arr.map(modifier);
}

// Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
let modifiedNumbers = modifyArray(numbers, (num) => num + 1);
console.log("Modified Numbers:", modifiedNumbers);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
const mathUtils = require('./mathUtils');

// Call the add method
let sum = mathUtils.add(5, 10);
console.log("Sum:", sum);

// Display the value of the PI constant
console.log("PI Constant:", mathUtils.PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
const isPalindrome = require('./isPalindrome');

// Call the isPalindrome method
let result = isPalindrome("radar");
console.log("Is Palindrome:", result);

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: In Node.js, the `require` function is used to import modules, and `module.exports` is used to define what should be exported from a module. In modern JavaScript (ES6+), `import` and `export` keywords are used for module importing and exporting. The choice between them depends on the environment. In Node.js or CommonJS environments, you use `require` and `module.exports`, while in modern JavaScript environments (like using tools like Babel), you can use `import` and `export`.
