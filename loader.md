```
import React, { useState, useEffect } from 'react';
import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import logo from './logo.svg'; // Assuming logo.svg is in the same folder as App.js

// Define your columns
const columns = [
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'name', headerName: 'NAME', width: 170 },
  { field: 'age', headerName: 'AGE', width: 170 },
];

// Custom loader component for overlay
const CustomLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <img src={logo} alt="Loading..." />
    <p>Loading...</p>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // Simulate loading data after 5 seconds
      const rowData = [
        { id: 1, name: 'Gourav', age: 12 },
        { id: 2, name: 'Geek', age: 43 },
        { id: 3, name: 'Pranav', age: 41 },
      ];
      setRows(rowData);
      setLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div style={{ height: 500, width: '80%' }}>
      <h4>How to use DataGrid Component in ReactJS?</h4>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={2}
        loading={loading} // Use loading prop to indicate loading state
        overlay={CustomLoader} // Specify the custom overlay component
      />
    </div>
  );
}

export default App;


```

```
import React, { useState, useEffect } from 'react';
import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import logo from './logo.svg'; // Assuming logo.svg is in the same folder as App.js

// Define your columns
const columns = [
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'name', headerName: 'NAME', width: 170 },
  { field: 'age', headerName: 'AGE', width: 170 },
];

// Custom loader component for overlay


function App() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // Simulate loading data after 5 seconds
      const rowData = [
        { id: 1, name: 'Gourav', age: 12 },
        { id: 2, name: 'Geek', age: 43 },
        { id: 3, name: 'Pranav', age: 41 },
      ];
      setRows(rowData);
      setLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds
  }, []); // Empty dependency array ensures this effect runs only once

  const CustomLoader = () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: '#f0f0f0', // Example background color
      color: '#333', // Example text color
    }}>
      <img src={logo} alt="Loading..." />
      <p style={{ marginLeft: '10px' }}>Loading...</p>
    </div>
  );
  

  return (
    <div style={{ height: 500, width: '80%' }}>
      <h4>How to use DataGrid Component in ReactJS?</h4>
      <DataGrid
  
    rows={rows}
    columns={columns}
    pageSize={2}
    // loading={loading}
    loadingOverlayComponent={CustomLoader} // Use your CustomLoader component here

  
      />
    </div>
  );
}

export default App;

```
