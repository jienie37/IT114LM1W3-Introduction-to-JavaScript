/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
const squares = numbers.map(num => num * num);
console.log("Squares: ", squares);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers: ", evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log("Sum: ", sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
const bigLetter = words.map(word => word.toUpperCase());
console.log("Uppercase Words: ", bigLetter);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const fourLetterWord = words.filter(word => word.length > 4);
console.log("Words with More Than Four Letters: ", fourLetterWord);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
const concatenatedString = words.reduce((accumulator, word) => accumulator + ' ' + word, '');
console.log("Concatenated String: ", concatenatedString.trim());

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// map = creates a new array by applying a function to the elemnts
// filter = creates a new array elements that has a specific condition
// reduce = applies a function to each element of the array, reducing it to a single value. It takes an accumulator and the current element as parameters
