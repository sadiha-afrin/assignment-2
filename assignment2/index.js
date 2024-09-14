// 1. Function to calculate the difference between two arguments
function calculateDifference(a, b) {
    return a - b;
}
console.log(`Difference: ${calculateDifference(35, 5)}`);


// 2. Function to check if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}
console.log(`Is 11 odd?: ${isOdd(11)}`);


// 3. Function to find the smallest number in an array
function findMin(numbers) {
    return Math.min(...numbers);
}
console.log(`Smallest number: ${findMin([45, 15, 71, 36])}`);


// 4. Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
console.log(`Even numbers: ${filterEvenNumbers([1, 2, 3, 4, 5]).join(', ')}`);


// 5. Function to sort an array in descending order
function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}
console.log(`Array in descending order: ${sortArrayDescending([15, 21, 39, 14]).join(', ')}`);


// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(`String with lowercase first letter: ${lowercaseFirstLetter("Sadiha")}`);


// 7. Function to count the number of vowels and show the vowels found
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const foundVowels = str.split('').filter(char => vowels.includes(char));
    const count = foundVowels.length;
    return { count, vowelsFound: foundVowels };
}

// Example usage
const result = countVowels("Sadiha Afrin");
console.log(`Number of vowels: ${result.count}, Vowels: ${result.vowelsFound.join(', ')}`);


// 8. Function to find the average of numbers in an array
function findAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log(`Average of array numbers: ${findAverage([1, 2, 3, 4, 5])}`);
