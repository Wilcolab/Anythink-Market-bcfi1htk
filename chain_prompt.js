/**
 * Converts a string to kebab-case format
 * @param {string} input - The input string to convert
 * @returns {string} The kebab-case formatted string
 * @throws {Error} If input is not a valid string
 */
function toKebabCase(input) {
    // Step 1: Input validation
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }
    if (typeof input !== "string") {
        throw new Error(`Input must be a string, received ${typeof input}`);
    }

    // Step 2: Trim leading and trailing whitespace
    let result = input.trim();

    // Replace underscores and hyphens with spaces for normalization
    result = result.replace(/[_-]/g, " ");

    // Replace multiple spaces with a single space
    result = result.replace(/\s+/g, " ");

    // Insert hyphens before uppercase letters (camelCase/PascalCase handling)
    result = result.replace(/([a-z])([A-Z])/g, "$1 $2");

    // Convert all spaces to hyphens
    result = result.replace(/\s+/g, "-");

    // Convert to lowercase
    result = result.toLowerCase();

    // Remove any leading or trailing hyphens
    result = result.replace(/^-+|-+$/g, "");

    return result;
}

// Example usage with test cases
const testCases = [
    {
        input: "Hello World",
        expected: "hello-world",
        description: "Basic two-word sentence"
    },
    {
        input: "HelloWORLD mixed CASE",
        expected: "hello-world-mixed-case",
        description: "Mixed casing with camelCase"
    },
    {
        input: "multiple   spaces  between",
        expected: "multiple-spaces-between",
        description: "Multiple consecutive spaces"
    },
    {
        input: "snake_case and hyphen-case",
        expected: "snake-case-and-hyphen-case",
        description: "Underscores and hyphens normalization"
    },
    {
        input: "  leading and trailing spaces  ",
        expected: "leading-and-trailing-spaces",
        description: "Leading and trailing whitespace"
    }
];

// Run test cases
testCases.forEach(({ input, expected, description }) => {
    try {
        const result = toKebabCase(input);
        const passed = result === expected;
        console.log(
            `${passed ? "✓" : "✗"} ${description}\n  Input: "${input}"\n  Expected: "${expected}"\n  Got: "${result}"\n`
        );
    } catch (error) {
        console.log(`✗ ${description}\n  Error: ${error.message}\n`);
    }
});