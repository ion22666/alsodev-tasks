export const areConsecutive = (arr) => {
    // If the array has 0 or 1 elements, it is considered consecutive.
    if (arr.length <= 1) {
        return true;
    }
    // Sort the array in ascending order.
    arr.sort((a, b) => a - b);
    // Check if each element is consecutive to its previous element.
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return false;
        }
    }
    // If all elements are consecutive, return true.
    return true;
};
export default areConsecutive;
// Define test cases and expected outputs.
console.log('RUNNING TESTS...');
const tests = [
    { input: [1, 2, 3, 4], expectedOutput: true },
    { input: [10], expectedOutput: true },
    { input: [], expectedOutput: true },
    { input: [3, 2, 1], expectedOutput: true },
    { input: [5, 2, 3, 1, 4], expectedOutput: true },
    { input: [34, 23, 52, 12, 3], expectedOutput: false },
    { input: [7, 6, 5, 5, 3, 4], expectedOutput: false },
    { input: [0, 0, 0], expectedOutput: false },
];
// Run tests and display results.
tests.forEach((test, index) => {
    const result = areConsecutive(test.input);
    const status = result === test.expectedOutput ? 'PASSED' : 'FAILED';
    console.log(`Test ${index + 1}: ${status}`);
});
//# sourceMappingURL=areConsecutive.js.map