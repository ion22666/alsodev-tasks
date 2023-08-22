export const uniqueSortedArray = (arr) => {
    // Create a Set to store unique elements and spread it back into an array.
    return [...new Set(arr)].sort((a, b) => a - b);
};
// Define test cases and their expected outputs.
console.log('RUNNING TESTS...');
// Array of test cases and their expected results.
const tests = [
    { input: [1, 3, 2, 2, 4, 3, 5, 6, 5], expectedOutput: [1, 2, 3, 4, 5, 6] },
    { input: [9, 9, 9, 9, 9], expectedOutput: [9] },
    { input: [0, 0, 1, 1], expectedOutput: [0, 1] },
    { input: [5, 4, 3, 3], expectedOutput: [3, 4, 5] },
    { input: [], expectedOutput: [] },
    { input: [1], expectedOutput: [1] },
    { input: [1, 2, 3, 4, 5], expectedOutput: [1, 2, 3, 4, 5] },
];
// Run tests and display results.
tests.forEach((test, index) => {
    // Call the uniqueSortedArray function with the test input.
    const result = uniqueSortedArray(test.input);
    // Check if the obtained result matches the expected output for this test.
    const status = JSON.stringify(result) === JSON.stringify(test.expectedOutput) ? 'PASSED' : 'FAILED';
    // Display the test status.
    console.log(`Test ${index + 1}: ${status}`);
});
//# sourceMappingURL=uniqueSortedArray.js.map