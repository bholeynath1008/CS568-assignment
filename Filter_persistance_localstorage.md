```
import React, { useState, useEffect } from 'react';

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

const defaultFilters = {
    all: false,
    desc: false,
    nameAsc: false,
    under30: false
};

const FilterWithCheckbox = () => {
    const [filteredData, setFilteredData] = useState(initialData);
    const [selectedFilters, setSelectedFilters] = useState(
        // Load filters from localStorage or use default values if none are saved
        JSON.parse(localStorage.getItem('selectedFilters')) || defaultFilters
    );
    const [activeFilterCount, setActiveFilterCount] = useState(0);

    useEffect(() => {
        applyFilters();
        // Save selectedFilters to localStorage
        localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters));
        // Calculate and set the total count of active filters
        const count = Object.values(selectedFilters).filter(Boolean).length;
        setActiveFilterCount(count);
    }, [selectedFilters]);

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

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [value]: checked,
        }));
    };

    return (
        <div>
            <div>
                <strong>Total Active Filters: {activeFilterCount}</strong>
            </div>
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
