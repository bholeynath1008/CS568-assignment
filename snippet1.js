
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
