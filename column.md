```
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const sampleData = [
  { id: 1, A: 'A1', B: 'B1', C: 'C1', D: 'D1' },
  { id: 2, A: 'A2', B: 'B2', C: 'C2', D: 'D2' },
  { id: 3, A: 'A3', B: 'B3', C: 'C3', D: 'D3' },
];

const columnsConfig = {
  admin: [
    { field: 'A', headerName: 'Column A', width: 150 },
    { field: 'B', headerName: 'Column B', width: 150 },
    { field: 'C', headerName: 'Column C', width: 150 },
  ],
  manager: [
    { field: 'B', headerName: 'Column B', width: 150 },
    { field: 'C', headerName: 'Column C', width: 150 },
  ],
  user: [
    { field: 'A', headerName: 'Column A', width: 150 },
    { field: 'B', headerName: 'Column B', width: 150 },
    { field: 'C', headerName: 'Column C', width: 150 },
    { field: 'D', headerName: 'Column D', width: 150 },
  ],
};

const DataGridComponent = ({ permission }) => {
  const columns = columnsConfig[permission] || [];
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid rows={sampleData} columns={columns} pageSize={5} />
    </Box>
  );
};

const App = () => {
  // Change 'admin' to 'manager' or 'user' to see different views
  const permission = 'admin';
  
  return (
    <div>
      <h1>Data Grid for {permission}</h1>
      <DataGridComponent permission={permission} />
    </div>
  );
};

export default App;

```
