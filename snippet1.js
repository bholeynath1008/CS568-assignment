
const sampleList = [
    { value: "A-10", label: "Apple" },
    { value: "B-2", label: "Banana" },
    { value: "A-2", label: "Apricot" },
    { value: "B-1", label: "Blueberry" },
    { value: "A-5", label: "Avocado" },
    { value: "Apple-EO" , label: "AABE" },
    { value: "Apple B1 D" , label: "AAB" },
    { value: "Apple-EA" , label: "AA" },
    { value: "Apple-B1" , label: "AAB" },
    { value: "Apple B1 C" , label: "AAB" },
    { value: "Ball-B" , label: "BB" }
];

function normalizeValue(value) {
    // Extract parts for comparison
    const match = value.match(/^([A-Za-z]+)-?(\d*)$/);
    if (match) {
        const [ , letterPart, numberPart ] = match;
        return [ letterPart, numberPart ? parseInt(numberPart, 10) : 0 ];
    }
    return [ value, 0 ]; // For values that don't match the pattern
}

sampleList.sort((a, b) => {
    const [aLetter, aNumber] = normalizeValue(a.value);
    const [bLetter, bNumber] = normalizeValue(b.value);
    
    if (aLetter < bLetter) return -1;
    if (aLetter > bLetter) return 1;
    return aNumber - bNumber;
});

console.log(sampleList);

--------------
    When it comes to sorting, the priority between "A-5" and "A 5" typically depends on the sorting algorithm and how it handles special characters. Generally:

Lexicographical Order: In a standard lexicographical sort (like alphabetical sorting), "A-5" would come before "A 5" because the hyphen comes before the space in ASCII values.

String Comparison: If sorted as strings, "A-5" will have a higher priority and appear first.

So, in most sorting scenarios, "A-5" would come before "A 5."
------------
    ** SPACE HAVING MORE PRIORITY
-------------------------------
    ===========================================================
    function normalizeValue(value) {
    // Normalize spaces and hyphens
    const match = value.match(/^([A-Za-z]+)([- ]?)(\d*)$/);
    if (match) {
        const [ , letterPart, spaceHyphenPart, numberPart ] = match;
        const priority = spaceHyphenPart === ' ' ? 0 : 1; // Space has higher priority than hyphen
        return [ letterPart, priority, numberPart ? parseInt(numberPart, 10) : 0 ];
    }
    return [ value, 1, 0 ]; // For values that don't match the pattern
}

sampleList.sort((a, b) => {
    const [aLetter, aPriority, aNumber] = normalizeValue(a.value);
    const [bLetter, bPriority, bNumber] = normalizeValue(b.value);
    
    if (aLetter < bLetter) return -1;
    if (aLetter > bLetter) return 1;

    if (aPriority !== bPriority) return aPriority - bPriority; // Sort by priority (space vs hyphen)

    return aNumber - bNumber; // Finally, sort by number
});

console.log(sampleList);
=========================================================================comments==========

```
    // Define an array of objects, each containing a 'value' and a 'label'
const sampleList = [
    { value: "A-10", label: "Apple" },
    { value: "B-2", label: "Banana" },
    { value: "A-2", label: "Apricot" },
    { value: "B-1", label: "Blueberry" },
    { value: "A 5", label: "Avocado" },
    { value: "A-5", label: "Avocado" },
    { value: "Apple-EO", label: "AABE" },
    { value: "Apple B1 D", label: "AAB" },
    { value: "Apple-EA", label: "AA" },
    { value: "Apple-B1", label: "AAB" },
    { value: "Apple B1 C", label: "AAB" },
    { value: "B-all B", label: "BB" },
    { value: "B 5", label: "Blueberry" },
];

// Function to normalize the 'value' string into its components
function normalizeValue(value) {
    // Use a regex to match and capture the letter part, space/hyphen part, and number part
    const match = value.match(/^([A-Za-z]+)([- ]?)(\d*)$/);
    // match [ 'B-2', 'B', '-', '2', index: 0, input: 'B-2', groups: undefined ]
    // If the value matches the expected pattern
    if (match) {
        // Destructure the match result into its components
        const [ , letterPart, spaceHyphenPart, numberPart ] = match;
        
        // Assign priority: 0 for space, 1 for hyphen
        const priority = spaceHyphenPart === ' ' ? 0 : 1; // Space has higher priority than hyphen
        
        // Return an array containing letter part, priority, and numeric part (as an integer)
        return [ letterPart, priority, numberPart ? parseInt(numberPart, 10) : 0 ];
    }
    // Return the original value, with priority 1 and number 0 for unmatched patterns
    return [ value, 1, 0 ];
}

// Sort the sampleList array based on normalized value components
sampleList.sort((a, b) => {
    // Normalize both values to get their components
    const [aLetter, aPriority, aNumber] = normalizeValue(a.value);
    const [bLetter, bPriority, bNumber] = normalizeValue(b.value);
    
    // First, compare the letter parts lexicographically
    if (aLetter < bLetter) return -1; // a should come before b
    if (aLetter > bLetter) return 1;  // b should come before a

    // If letter parts are the same, compare by priority (space vs hyphen)
    if (aPriority !== bPriority) return aPriority - bPriority; // Lower priority (space) comes first

    // If both letter part and priority are the same, sort by the number part
    return aNumber - bNumber; // Compare numeric values
});

// Log the sorted sampleList to the console
console.log(sampleList);

```
