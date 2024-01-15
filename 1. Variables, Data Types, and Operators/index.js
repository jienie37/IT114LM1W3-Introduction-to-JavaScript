/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/
// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var f = 5;
var e = 10;

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let c = 10 + 12;
let b = 16 - c;

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const a = 75 - b;
const d = 5 + a;

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: the answer would be the scope of things they use


// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const answer = a + d - e * 100 / 10;

// Checkpoint 1.2 What operators did you use?
// Answer: + - / *


// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
console.log("it114l a54 " + "Jien " + `answer is ${answer}`);



// Checkpoint 1.3 What operators did you use?
// Answer: +

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const a2 = a > 5 && b > 10;
const a1 = b <= 7 || c >= 16;
console.log(`${a1} and ${a2}`);
// Checkpoint 1.4 What operators did you use?
// Answer: > < >= <=


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const classs = ["teacher", "student", "chair", "dean", "professor"];
0 in classs; 
3 in classs;
6 in classs;
"man" in classs;

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: empty brackets are considered as false
// Your code here
console.log([] == false);