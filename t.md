```
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box } from '@mui/material';

const rows = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'David', age: 40 },
];

const columns = [
  { field: 'name', headerName: 'Name', width: 150, sortable: true },
  { field: 'age', headerName: 'Age', width: 100, sortable: true },
];

export default function DataGridExample() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const filteredRows = rows.filter((row) => {
    return row.name.toLowerCase().includes(searchText);
  });

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <TextField
        label="Search"
        variant="outlined"
        onChange={handleSearch}
        sx={{ mb: 2 }}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        sortingOrder={['asc', 'desc']}
      />
    </Box>
  );
}

```
