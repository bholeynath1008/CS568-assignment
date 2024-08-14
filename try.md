```
import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

// Mock API function to fetch countries
const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();

  // Extract the first 10 countries with their names and dialing codes
  return countries.slice(0, 10).map((country) => ({
    label: country.name.common,
    value: country.cca2,
    code: `${country.idd.root || ''}${country.idd.suffixes ? country.idd.suffixes[0] : ''}`
  }));
};

// Custom option component
const CustomOption = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>{props.data.label}</div>
      <div>{`(+${props.data.code})`}</div>
    </div>
  );
};

// Component
const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const loadOptions = (inputValue, callback) => {
    fetchCountries().then((countries) => {
      const filteredCountries = countries.filter((country) =>
        country.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      callback(filteredCountries);
    });
  };

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div>
      <h3>Select a Country</h3>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onChange={handleChange}
        value={selectedCountry}
        placeholder="Search for a country"
        components={{ Option: CustomOption }} // CustomOption
      />
      {selectedCountry && (
        <div>
          <h4>Selected Country:</h4>
          <p>{`${selectedCountry.label} (+${selectedCountry.code})`}</p>
        </div>
      )}
    </div>
  );
};

// Home component
const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <h1>React Select Async Example</h1>
      <div style={{ width: 400 }}>
        <CountrySelect />
      </div>
    </div>
  );
};

export default Home;
```

----------
no effect till 3rd character:
---------------
```
import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';

// Mock API function to fetch countries
const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();

  // Extract the first 10 countries with their names and dialing codes
  return countries.slice(0, 10).map((country) => ({
    label: country.name.common,
    value: country.cca2,
    code: `${country.idd.root || ''}${country.idd.suffixes ? country.idd.suffixes[0] : ''}`
  }));
};

// Custom option component
const CustomOption = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>{props.data.label}</div>
      <div>{`(+${props.data.code})`}</div>
    </div>
  );
};

// Component
const CountrySelect = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Fetch all countries when the component mounts
  useEffect(() => {
    const loadCountries = async () => {
      const countryData = await fetchCountries();
      setCountries(countryData);
    };

    loadCountries();
  }, []);

  const loadOptions = (inputValue, callback) => {
    if (inputValue.length < 4) {
      // Return the full list if input is less than 4 characters
      callback(countries);
    } else {
      // Filter the list based on the input
      const filteredCountries = countries.filter((country) =>
        country.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      callback(filteredCountries);
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div>
      <h3>Select a Country</h3>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions} 
        defaultOptions={countries} // Load all countries initially
        onChange={handleChange}
        value={selectedCountry}
        placeholder="Search for a country"
        components={{ Option: CustomOption }} // Custom country
      />
      {selectedCountry && (
        <div>
          <h4>Selected Country:</h4>
          <p>{`${selectedCountry.label} (+${selectedCountry.code})`}</p>
        </div>
      )}
    </div>
  );
};

// Home component
const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <h1>React Select Async Example</h1>
      <div style={{ width: 400 }}>
        <CountrySelect />
      </div>
    </div>
  );
};

export default Home;

```
------------------
// Custom option component
const CustomOption = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 16px', // Padding inside the container
        alignItems: 'center',
      }}
    >
      <div style={{ marginRight: '8px' }}>{props.data.label}</div>
      <div style={{ textAlign: 'right', minWidth: '50px' }}>{`(+${props.data.code})`}</div>
    </div>
  );
};

------------
Input field
-----------

```
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';

// Static data
const staticData = [
    { id: 1, name: 'John Doe', age: 12, gender: 'Male' },
    { id: 2, name: 'Jane Smith', age: 13, gender: 'Female' },
    { id: 3, name: 'Alice Johnson', age: 14, gender: 'Female' },
    { id: 4, name: 'Bob Brown', age: 15, gender: 'Male' },
    { id: 5, name: 'Charlie Davis', age: 12, gender: 'Male' },
    { id: 6, name: 'Eva White', age: 13, gender: 'Female' },
    { id: 7, name: 'Frank Black', age: 14, gender: 'Male' },
    { id: 8, name: 'Grace Green', age: 15, gender: 'Female' },
    { id: 9, name: 'Hannah Blue', age: 12, gender: 'Female' },
    { id: 10, name: 'Isaac Grey', age: 13, gender: 'Male' },
];

const CustomDataGrid = () => {
    const [rows, setRows] = useState(staticData);

    const handleAgeChange = (id, newAge) => {
        setRows((prevRows) => {
            return prevRows.map((row) =>
                row.id === id ? { ...row, age: newAge } : row
            );
        });
    };

    const handleDelete = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };

    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        {
            field: 'age',
            headerName: 'Age',
            width: 150,
            renderCell: (params) => (
                <FormControl fullWidth>
                    {/* <InputLabel id={`age-select-label-${params.id}`}>Age</InputLabel> */}
                    <Select
                        labelId={`age-select-label-${params.id}`}
                        value={params.value}
                        onChange={(event) => handleAgeChange(params.id, event.target.value)}
                    >
                        {[12, 13, 14, 15].map((age) => (
                            <MenuItem key={age} value={age}>
                                {age}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ),
        },
        { field: 'gender', headerName: 'Gender', width: 150 },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 100,
            renderCell: (params) => (
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => handleDelete(params.id)}
                >
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

// Home component
const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <h1>React Select Example</h1>
            <CustomDataGrid />
        </div>
    );
};

export default Home;

```
```
     rows={rows}
                columns={columns}
                pageSize={5}  // Show only 5 rows
                rowsPerPageOptions={[5]} // Limit options to show only 5
                pagination // Enable pagination
                checkboxSelection
```

```
<DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}  // Show only 5 rows
                rowsPerPageOptions={[5]} // Limit options to show only 5
                disableSelectionOnClick
                autoHeight={false}  // Disable auto height
                style={{ overflowY: 'scroll' }} // Enable vertical scrolling
                componentsProps={{
                    row: {
                        style: { height: 'auto' },
                    },
                }}
            />
```
```
     <div style={{ maxHeight: 400, width: '100%' }}> {/* Set maxHeight instead of height */}
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}  // Show only 5 rows
                rowsPerPageOptions={[5]} // Limit options to show only 5
                disableSelectionOnClick
                autoHeight={false}  // Disable auto height
                style={{ overflowY: 'auto' }} // Enable vertical scrolling
            />
        </div>
```
