array.sort((a, b) => {
    // Extract the string part (prefix) and the numeric part (suffix) from each element
    let [prefixA, suffixA] = a.split('-').map(part => part.trim()); // Trim whitespace
    let [prefixB, suffixB] = b.split('-').map(part => part.trim()); // Trim whitespace

    // Compare the string part first
    if (prefixA < prefixB) return -1;
    if (prefixA > prefixB) return 1;

    // If string parts are equal, compare the numeric parts
    // Convert suffixA and suffixB to numbers for proper numeric comparison
    let numA = parseInt(suffixA);
    let numB = parseInt(suffixB);

    // Compare numeric parts
    if (numA < numB) return -1;
    if (numA > numB) return 1;

    // If both parts are equal, they are considered equal for sorting purposes
    return 0;
});
