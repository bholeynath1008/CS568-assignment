### Properties
rows: Array of row data.

columns: Array of column definitions.

pagination: (Optional) Enables pagination.

pageSize: (Optional) Number of rows per page.

disableSelectionOnClick: (Optional) Disables row selection on cell click.

disableColumnMenu: (Optional) Disables column menu.

onSelectionModelChange: (Optional) Callback function for selection change.

Column Definition

field: Field name from the row data.

headerName: Header name displayed in the DataGrid.

width: (Optional) Width of the column.

### Events
onRowClick: Callback function triggered when a row is clicked.

onSelectionModelChange: Callback function triggered when selection changes.

onCellClick: Callback function triggered when a cell is clicked.

### Advanced Features
Filtering: Implement custom filtering logic and pass filtered data to DataGrid.

Sorting: Enable sorting by setting the sortable property in column definitions.

Editing: Enable editing by setting the editable property in column definitions.

Grouping: Implement grouping logic and pass grouped data to DataGrid.

Styling: Customize styling using CSS or Material-UI's theming capabilities.
