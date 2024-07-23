const sortList = (unsortedList, fromTerritoryDashboard) => {
    if (!unsortedList) {
        return unsortedList;
    }

    // If fromTerritoryDashboard is true, sort based on custom logic
    if (fromTerritoryDashboard) {
        return unsortedList.sort((a, b) => {
            // Extract the prefix (string) and suffix (number) and remove white spaces
            let [prefix_A, suffix_A] = a.value.split('-').map(part => part.trim());
            let [prefix_B, suffix_B] = b.value.split('-').map(part => part.trim());

            // Compare prefix (string)
            if (prefix_A < prefix_B) return -1;
            if (prefix_A > prefix_B) return 1;

            // If prefix strings are equal, then compare numeric parts
            let numA = parseInt(suffix_A);
            let numB = parseInt(suffix_B);

            // Compare numeric parts
            if (numA < numB) return -1;
            if (numA > numB) return 1;

            // If both parts are equal, they are considered equal for sorting purposes
            return 0;
        });
    }

    // Default sorting logic
    let listCp = unsortedList.map((i) => ({ ...i }));
    listCp.sort((a, b) => {
        if (a.label > b.label) {
            return 1;
        } else {
            return -1;
        }
    });

    // Return the sorted list
    return listCp;
};
