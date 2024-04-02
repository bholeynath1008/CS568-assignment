### One Way

```
import React, { useState, useEffect } from 'react';

// Initial data set for demonstration
const initialData = [
    { "id": 1, "name": "Sophia", "age": 14 },
    { "id": 2, "name": "Michael", "age": 22 },
    { "id": 3, "name": "Emma", "age": 18 },
    { "id": 4, "name": "Daniel", "age": 33 },
    { "id": 5, "name": "Olivia", "age": 20 },
    { "id": 6, "name": "Matthew", "age": 29 },
    { "id": 7, "name": "Ava", "age": 15 },
    { "id": 8, "name": "James", "age": 38 },
    { "id": 9, "name": "Isabella", "age": 12 },
    { "id": 10, "name": "Alexander", "age": 45 }
];

const FilterWithCheckbox = () => {
    // State to store the filtered data
    const [filteredData, setFilteredData] = useState(initialData);

    // State to manage the selection status of filters
    const [selectedFilters, setSelectedFilters] = useState({
        all: false,
        desc: false,
        nameAsc: false,
        under30: false
    });
    // utilizing useEffect to listen for changes to the selectedFilters state and then applying all relevant filters, this implementation ensures that the component reacts appropriately to user input while minimizing unnecessary re-renders.
    // Effect hook to apply filters whenever the selectedFilters state changes
    useEffect(() => {
        applyFilters();
    }, [selectedFilters]);

    // Function to apply filters based on selectedFilters state
    const applyFilters = () => {
        let data = [...initialData];

        if (selectedFilters.desc) {
            data.sort((a, b) => b.age - a.age);
        }
        if (selectedFilters.nameAsc) {
            data.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (selectedFilters.under30) {
            data = data.filter(person => person.age < 30);
        }
        if (selectedFilters.all) {
            data = [...initialData];
        }

        setFilteredData(data);
    };

    // Handler for changes in checkbox selection
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        // Update selectedFilters state based on checkbox input
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [value]: checked,
        }));
    };

    return (
        <div>
            {filteredData.map(person => (
                <li key={person.id}>{person.id} - {person.name} - {person.age}</li>
            ))}
            <div>
                <input
                    type='checkbox'
                    value='all'
                    checked={selectedFilters.all}
                    onChange={handleCheckboxChange}
                />
                <label>Select All</label>
            </div>
            <div>
                <input
                    type='checkbox'
                    value='desc'
                    checked={selectedFilters.desc}
                    onChange={handleCheckboxChange}
                />
                <label>Age Descending</label>
            </div>
            <div>
                <input
                    type='checkbox'
                    value='nameAsc'
                    checked={selectedFilters.nameAsc}
                    onChange={handleCheckboxChange}
                />
                <label>Name Ascending</label>
            </div>
            <div>
                <input
                    type='checkbox'
                    value='under30'
                    checked={selectedFilters.under30}
                    onChange={handleCheckboxChange}
                />
                <label>Under 30</label>
            </div>
        </div>
    );
};

export default FilterWithCheckbox;
```

### Another way

```
import React, { useState } from 'react';

const initialState = [
    {"id": 1, "name": "Sophia", "age": 14},
    {"id": 2, "name": "Michael", "age": 22},
    {"id": 3, "name": "Emma", "age": 18},
    {"id": 4, "name": "Daniel", "age": 33},
    {"id": 5, "name": "Olivia", "age": 20},
    {"id": 6, "name": "Matthew", "age": 29},
    {"id": 7, "name": "Ava", "age": 15},
    {"id": 8, "name": "James", "age": 38},
    {"id": 9, "name": "Isabella", "age": 12},
    {"id": 10, "name": "Alexander", "age": 45}
];

const FilterWithCheckbox = () => {
    const [data, setData] = useState(initialState);
    const [filteredData, setFilteredData] = useState(initialState);

    const FILTER_OPTIONS = [
        { label: "Select All", value: "all" },
        { label: "Age Descending", value: "desc" },
        { label: "Name Ascending", value: "name asc" },
        { label: ">30", value: "30" }
    ];

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        if (value === "all" && checked) {
            setFilteredData(initialState);
        } else {
            let filteredResult = [...data];
            if (value === "desc") {
                filteredResult.sort((a, b) => b.age - a.age);
            } else if (value === "name asc") {
                filteredResult.sort((a, b) => a.name.localeCompare(b.name));
            } else if (value === "30") {
                filteredResult = initialState.filter(item => item.age > 30);
            }
            setFilteredData(filteredResult);
        }
    }

    return (
        <div>
            {filteredData.map(ele => (
                <li key={ele.id}>{ele.id} - {ele.name} - {ele.age} </li>
            ))}
            {FILTER_OPTIONS.map(fil => (
                <div key={fil.value}>
                    <input type='checkbox' value={fil.value} onChange={handleCheckboxChange} />
                    <label>{fil.label}</label>
                </div>
            ))}
        </div>
    )
}

export default FilterWithCheckbox;

```
