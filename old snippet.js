
const sortList = (unsortedList) => {
    if (!unsortedList) {
      return unsortedList;
    }
  
    // Sorting works for both alphabets, alphanumeric sorting having hyphens "-"
    let unsortedList_copy = unsortedList.map((i) => ({ ...i }));
    return unsortedList_copy.sort((a, b) => {
      // Split the labels on hyphens and trim the parts
      let [prefix_A, suffix_A] = a.label.split('-').map(part => part.trim());
      let [prefix_B, suffix_B] = b.label.split('-').map(part => part.trim());
  
      // Compare prefix strings (string comparison)
      if (prefix_A < prefix_B) return -1;
      if (prefix_A > prefix_B) return 1;
  
      // If prefix strings are equal, handle suffixes
      let isNumeric_A = !isNaN(suffix_A);
      let isNumeric_B = !isNaN(suffix_B);
  
      // Prioritize labels with spaces over those with hyphens
      let spacePriorityA = a.label.includes(' ') ? 0 : 1;
      let spacePriorityB = b.label.includes(' ') ? 0 : 1;
      if (spacePriorityA < spacePriorityB) return -1;
      if (spacePriorityA > spacePriorityB) return 1;
  
      // Compare suffix strings if both are non-numeric
      if (!isNumeric_A && !isNumeric_B) {
        if (suffix_A < suffix_B) return -1;
        if (suffix_A > suffix_B) return 1;
      }
  
      // If both are numeric, compare their numerical values
      if (isNumeric_A && isNumeric_B) {
        let numA = parseInt(suffix_A);
        let numB = parseInt(suffix_B);
        if (numA < numB) return -1;
        if (numA > numB) return 1;
      }
  
      // If one is numeric and the other is not, prioritize the non-numeric one
      if (isNumeric_A && !isNumeric_B) return 1;
      if (!isNumeric_A && isNumeric_B) return -1;
  
      return 0; // If both parts are equal
    });
  };
  
  // Example usage:
  const data = [
    { value: 'Apple-EA', label: 'AA' },
    { value: 'Apple B1 D', label: 'AAB' },
    { value: 'Apple-B1', label: 'AAB' },
    { value: 'Apple-6B1', label: 'AAB' },
    { value: 'Apple B1 C', label: 'AAB' },
    { value: 'Apple-EO', label: 'AABE' },
    { value: 'A-10', label: 'Apple' },
    { value: 'A-2', label: 'Apricot' },
    { value: 'A 5', label: 'Avocado' },
    { value: 'A-5', label: 'Avocado' },
    { value: 'B-all B', label: 'BB' },
    { value: 'B-2', label: 'Banana' },
    { value: 'B-1', label: 'Blueberry' },
    { value: 'B 5', label: 'Blueberry' }
  ];
  
  console.log(sortList(data));
  
