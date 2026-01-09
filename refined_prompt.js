/**
 * Module for string case conversion utilities.
 * Provides functions to convert strings to various case formats (camelCase, dot.case, etc).
 * 
 * @module stringCaseConversion
 * @version 1.0.0
 * 
 * @example
 * const { toCamelCase, toDotCase } = require('./refined_prompt');
 * 
 * toCamelCase('hello-world'); // 'helloWorld'
 * toDotCase('hello-world');   // 'hello.world'
 */

/**
 * Converts a given string to camelCase format.
 * 
 * The function processes the input by:
 * 1. Trimming leading/trailing whitespace
 * 2. Replacing consecutive spaces, hyphens, and underscores with single spaces
 * 3. Removing special characters (keeping only alphanumeric and spaces)
 * 4. Converting the first word to lowercase
 * 5. Capitalizing the first letter of subsequent words
 * 6. Joining all words without separators
 * 
 * @function toCamelCase
 * @param {string} input - The string to convert to camelCase format.
 *                         Can contain spaces, hyphens, underscores, or mixed case.
 * @returns {string} The input string converted to camelCase format.
 * @throws {Error} Throws an error if the input parameter is not a string.
 * 
 * @example
 * toCamelCase("hello world");                           // Returns: "helloWorld"
 * toCamelCase("  multiple   spaces  ");                 // Returns: "multipleSpaces"
 * toCamelCase("hyphen-separated-string");               // Returns: "hyphenSeparatedString"
 * toCamelCase("underscore_separated_string");           // Returns: "underscoreSeparatedString"
 * toCamelCase("123 mixed CASE & special! characters");  // Returns: "123MixedCaseSpecialCharacters"
 * 
 * @see {@link toDotCase} for dot.case conversion
 */

/**
 * Converts a given string to dot.case format.
 * 
 * The function processes the input by:
 * 1. Trimming leading/trailing whitespace
 * 2. Replacing consecutive spaces, hyphens, and underscores with single spaces
 * 3. Removing special characters (keeping only alphanumeric and spaces)
 * 4. Converting all words to lowercase
 * 5. Joining all words with dot (.) separators
 * 
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case format.
 *                         Can contain spaces, hyphens, underscores, or mixed case.
 * @returns {string} The input string converted to dot.case format (all lowercase with dots).
 * @throws {Error} Throws an error if the input parameter is not a string.
 * 
 * @example
 * toDotCase("hello world");                           // Returns: "hello.world"
 * toDotCase("  multiple   spaces  ");                 // Returns: "multiple.spaces"
 * toDotCase("hyphen-separated-string");               // Returns: "hyphen.separated.string"
 * toDotCase("underscore_separated_string");           // Returns: "underscore.separated.string"
 * toDotCase("123 mixed CASE & special! characters");  // Returns: "123.mixed.case.special.characters"
 * 
 * @see {@link toCamelCase} for camelCase conversion
 */

    // Convert all words to lowercase and join them with dots
    return words.map(word => word.toLowerCase()).join('.'); // Join the words to form the dot.case string


// Example inputs and expected outputs
console.log(toDotCase("hello world")); // "hello.world"
console.log(toDotCase("  multiple   spaces  ")); // "multiple.spaces"
console.log(toDotCase("hyphen-separated-string")); // "hyphen.separated.string"
console.log(toDotCase("underscore_separated_string")); // "underscore.separated.string"
console.log(toDotCase("123 mixed CASE & special! characters")); // "123.mixed.case.special.characters"


