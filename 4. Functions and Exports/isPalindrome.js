// Todo 4.6a Create a funciton called isPalindrome function which checks if the given word is a palindrome
function isPalindrome(word) {
    // Convert the word to lowercase to make the comparison case-insensitive
    const lowercasedWord = word.toLowerCase();

    // Remove non-alphanumeric characters from the word
    const cleanWord = lowercasedWord.replace(/[^a-z0-9]/g, '');

    // Reverse the cleaned word and compare it with the original cleaned word
    const reversedWord = cleanWord.split('').reverse().join('');

    return cleanWord === reversedWord;
}


// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation

// Todo 4.6b Set the isPalindrome function as the default export of the module
module.exports = isPalindrome;


// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx