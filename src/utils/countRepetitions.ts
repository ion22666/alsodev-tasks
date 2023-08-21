type numberCount = {
    [key: number]: number;
};

export const countRepetitions = (arr: number[]): numberCount[] => {
    const counts: numberCount = {};

    for (const num of arr) {
        if (counts[num]) {
            counts[num] += 1;
        } else {
            counts[num] = 1;
        }
    }

    const result: numberCount[] = [];
    for (const num in counts) {
        const entry: numberCount = {};
        entry[num] = counts[num];
        result.push(entry);
    }

    return result;
};

// Define test cases and their expected outputs.
console.log('RUNNING TESTS...');

// Define a type for test cases.
type Test = {
    input: number[];
    expectedOutput: numberCount[];
};

// Array of test cases and their expected results.
const tests: Test[] = [
    {
        input: [1, 3, 2, 2, 4, 3, 5, 6, 5],
        expectedOutput: [{ 1: 1 }, { 2: 2 }, { 3: 2 }, { 4: 1 }, { 5: 2 }, { 6: 1 }],
    },
    {
        input: [1, 1, 1, 1],
        expectedOutput: [{ 1: 4 }],
    },
    {
        input: [2, 4, 6, 8],
        expectedOutput: [{ 2: 1 }, { 4: 1 }, { 6: 1 }, { 8: 1 }],
    },
    // Add more test cases as needed
];

// Run tests and display results.
tests.forEach((test, index) => {
    // Call the countRepetitions function with the test input.
    const result = countRepetitions(test.input);

    // Check if the obtained result matches the expected output for this test.
    const status = JSON.stringify(result) === JSON.stringify(test.expectedOutput) ? 'PASSED' : 'FAILED';

    // Display the test status.
    console.log(`Test ${index + 1}: ${status}`);
});
