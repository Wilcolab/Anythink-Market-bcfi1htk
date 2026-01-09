function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[-_\s](.)/g, (match, char) => char.toUpperCase())
        .replace(/^(.)/, (match, char) => char.toLowerCase());
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber

// Write a JavaScript function addNumbers that adds two numbers and returns their sum. Include error handling for non-numeric inputs, throw an error with a descriptive message if inputs are invalid. Handle edge cases like undefined or null values. For example, addNumbers(5, 3) should return 8, but addNumbers('5', 3) should throw an error.

function addNumbers(a, b) {
    if (a == null || b == null) {
        throw new Error('Inputs cannot be null or undefined.');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both inputs must be numbers.');
    }
    return a + b;
}

// Test cases
console.log(addNumbers(5, 3));        // 8
console.log(addNumbers(10, 20));      // 30
console.log(addNumbers('5', 3));      // Error: Both inputs must be numbers.
console.log(addNumbers(null, 3));     // Error: Inputs cannot be null or undefined.

