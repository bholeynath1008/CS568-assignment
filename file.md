```
import React, { useState } from 'react';
import ContinentPopper from './ContinentPopper';
import { Button } from '@material-ui/core';

const ContinentSelector = () => {
    // Dynamic data structure for continents and their countries
    const continents = {
        Asia: ['China', 'India', 'Japan', 'South Korea', 'Indonesia', 'Thailand', 'Vietnam', 'Malaysia', 'Philippines', 'Bangladesh'],
        Europe: ['Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Sweden', 'Norway', 'Finland', 'Denmark', 'Belgium'],
        Africa: ['Nigeria', 'Egypt', 'South Africa', 'Kenya', 'Ethiopia', 'Ghana', 'Morocco', 'Uganda', 'Tanzania', 'Algeria'],
        NorthAmerica: ['USA', 'Canada', 'Mexico', 'Cuba', 'Dominican Republic', 'Guatemala', 'Honduras', 'Costa Rica', 'Panama', 'Jamaica'],
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedContinent, setSelectedContinent] = useState('');

    const handleContinentClick = (event, continent) => {
        if (selectedContinent === continent) {
            // If the clicked continent is already selected, close the popper
            setAnchorEl(null);
            setSelectedContinent('');
        } else {
            // Otherwise, open the popper for the new continent
            setAnchorEl(event.currentTarget);
            setSelectedContinent(continent);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedContinent('');
    };

    return (
        <div>
            <div>
                {Object.keys(continents).map((continent) => (
                    <Button
                        key={continent}
                        variant="contained"
                        color="primary"
                        onClick={(event) => handleContinentClick(event, continent)}
                    >
                        Show {continent}
                    </Button>
                ))}
            </div>

            <ContinentPopper
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                countries={continents[selectedContinent]}
                title={selectedContinent}
                onClose={handleClose}
            />
        </div>
    );
};

export default ContinentSelector;

```

```
import React from 'react';
import { Popper, Paper, List, ListItem, ClickAwayListener } from '@material-ui/core';

const ContinentPopper = ({ anchorEl, open, countries, title, onClose }) => {
    const handleClickAway = () => {
        // onClose(); // Close popper on click away
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Popper anchorEl={anchorEl} open={open} placement="bottom">
                <Paper>
                    <List>
                        {countries && countries.map((country, index) => (
                            <ListItem key={index}> {/* Close popper when item is clicked */}
                                {country}
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Popper>
        </ClickAwayListener>
    );
};

export default ContinentPopper;

```

------------------------
## Fade out and disable click
```
import React, { useState } from 'react';
import ContinentPopper from './ContinentPopper';
import { Button } from '@mui/material'; // Ensure this is correct
import { DataGrid } from '@mui/x-data-grid';

const ContinentSelector = () => {
    const continents = {
        Asia: ['China', 'India', 'Japan', 'South Korea', 'Indonesia', 'Thailand', 'Vietnam', 'Malaysia', 'Philippines', 'Bangladesh'],
        Europe: ['Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Sweden', 'Norway', 'Finland', 'Denmark', 'Belgium'],
        Africa: ['Nigeria', 'Egypt', 'South Africa', 'Kenya', 'Ethiopia', 'Ghana', 'Morocco', 'Uganda', 'Tanzania', 'Algeria'],
        NorthAmerica: ['USA', 'Canada', 'Mexico', 'Cuba', 'Dominican Republic', 'Guatemala', 'Honduras', 'Costa Rica', 'Panama', 'Jamaica'],
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedContinent, setSelectedContinent] = useState('');

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'country', headerName: 'Country', width: 200 },
        { field: 'continent', headerName: 'Continent', width: 150 }, // Added continent column
    ];

    // Prepare rows for DataGrid with all countries and their continents
    const rows = Object.entries(continents).flatMap(([continent, countries], continentIndex) =>
        countries.map((country, countryIndex) => ({
            id: `${continentIndex}-${countryIndex}`, // Unique ID combining continent and country index
            country,
            continent, // Add continent info to rows
        }))
    );

    const handleContinentClick = (event, continent) => {
        setAnchorEl(event.currentTarget);
        setSelectedContinent(continent);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedContinent('');
    };

    const isPopoverOpen = Boolean(anchorEl);
    const dataGridStyles = {
        height: 400,
        width: '100%',
        marginTop: '20px',
        opacity: isPopoverOpen ? 0.5 : 1, // Fade out effect when the popover is open
        pointerEvents: isPopoverOpen ? 'none' : 'auto', // Prevent selection and interaction when the popover is open
        transition: 'opacity 0.3s ease', // Smooth transition for opacity changes
    };

    return (
        <div>
            <div>
                {Object.keys(continents).map((continent) => (
                    <Button
                        key={continent}
                        variant="contained"
                        color="primary"
                        onClick={(event) => handleContinentClick(event, continent)}
                    >
                        Show {continent}
                    </Button>
                ))}
            </div>

            <ContinentPopper
                anchorEl={anchorEl}
                open={isPopoverOpen}
                countries={continents[selectedContinent] || []} // Display countries in popover if needed
                title={selectedContinent}
                onClose={handleClose}
            />

            <div style={dataGridStyles}>
                <DataGrid
                    rows={rows} // Use all rows
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
};

export default ContinentSelector;

```

# Popover 

```
import React, { useState } from 'react';
import { Popover, Button, Typography } from '@mui/material';

const PopoverExample = () => {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick1 = (event) => {
    // Close the second popover if it's open
    if (anchorEl2) {
      setAnchorEl2(null);
    }
    // Toggle the first popover
    setAnchorEl1(anchorEl1 ? null : event.currentTarget);
  };

  const handleClick2 = (event) => {
    // Close the first popover if it's open
    if (anchorEl1) {
      setAnchorEl1(null);
    }
    // Toggle the second popover
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
  };

  return (
    <div>
      <Button onClick={handleClick1}>Open Popover 1</Button>
      <Popover
        open={Boolean(anchorEl1)}
        anchorEl={anchorEl1}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>Popover 1 Content</Typography>
      </Popover>

      <Button onClick={handleClick2}>Open Popover 2</Button>
      <Popover
        open={Boolean(anchorEl2)}
        anchorEl={anchorEl2}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>Popover 2 Content</Typography>
      </Popover>
    </div>
  );
};

export default PopoverExample;

```
Explanation
State Management: We use two state variables (anchorEl1 and anchorEl2) to keep track of which popover is currently open.

Click Handlers:

Each button has an onClick handler that toggles the corresponding popover.
When one popover is opened, the other is closed by setting its state to null.
Popover Component: The Popover component's open prop is controlled by the state variables, and they close when clicking outside or when the close function is called.

---------------
## To handle dynamically

```
import React, { useState } from 'react';
import { Popover, Button, Typography } from '@mui/material';

const DynamicPopoverExample = () => {
  const [openPopover, setOpenPopover] = useState(null);

  const handleClick = (popoverId) => (event) => {
    // Toggle the popover
    setOpenPopover(openPopover === popoverId ? null : popoverId);
  };

  const handleClose = () => {
    setOpenPopover(null);
  };

  return (
    <div>
      <Button onClick={handleClick('popover1')}>Open Popover 1</Button>
      <Popover
        open={openPopover === 'popover1'}
        anchorEl={document.getElementById('popover1')}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>Popover 1 Content</Typography>
      </Popover>

      <Button onClick={handleClick('popover2')}>Open Popover 2</Button>
      <Popover
        open={openPopover === 'popover2'}
        anchorEl={document.getElementById('popover2')}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>Popover 2 Content</Typography>
      </Popover>
    </div>
  );
};

export default DynamicPopoverExample;

```
Explanation
State Management:

We maintain a single state variable openPopover, which keeps track of the currently opened popover by storing its ID (like 'popover1' or 'popover2').
Dynamic Click Handler:

The handleClick function takes a popoverId and returns a function that sets the state based on the currently open popover.
If the clicked popover is already open, it will close it; otherwise, it will open the clicked popover.
Popover Component:

Each Popover checks if its ID matches openPopover to determine if it should be open.
The anchorEl prop is set to the corresponding button to anchor the popover correctly.


```
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { css } from '@emotion/react';

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
                <FormControl fullWidth size="small">
                    <InputLabel id={`age-select-label-${params.id}`}>Age</InputLabel>
                    <Select
                        labelId={`age-select-label-${params.id}`}
                        value={params.value}
                        onChange={(event) => handleAgeChange(params.id, Number(event.target.value))}
                        size="small"
                        sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
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
                disableSelectionOnClick
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
            <div
                css={css`
                    .MuiDataGrid-root .MuiDataGrid-cell:focus-within {
                        outline: none !important;
                    }
                `}
            >
                <CustomDataGrid />
            </div>
        </div>
    );
};

export default Home;




/* 

select#xyz {
   border:0px;
   outline:0px;
}
*/


/* 
import { Box } from '@mui/material'; // Import Box from Material-UI
import CustomDataGrid from './CustomDataGrid'; // Adjust the import path as needed

// Home component
const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <h1>React Select Example</h1>
            <Box
                sx={{
                    '.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
                        outline: 'none !important',
                    },
                }}
            >
                <CustomDataGrid />
            </Box>
        </div>
    );
};

export default Home;

*/
```
