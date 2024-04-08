ref: https://www.youtube.com/watch?v=4TOONPrrlKY&ab_channel=Codenemy
# DataGrid Component Implementation Guidelines

## Overview
The DataGrid component is designed to facilitate the creation of tables with advanced properties in React applications. It offers extensive customization options and supports both free and paid versions.
**DataGrid depend on parent components for styling**

## Rules

1. **Title in DataGrid:**
   - Title can be passed as a prop to the DataGrid component.

2. **Column Alignment:**
   - Each column can have an `align` property which can be set to `'left'` to align the content to the left.

3. **Lookup:**
   - Implement a `lookup` feature to provide dropdown options for specific cells within a column.

4. **Rendering Null Values:**
   - If a value is null, render `null` explicitly using the `renderCell` function.

5. **Disable Column Sorting:**
   - Provide a prop to disable sorting features for all columns (`disableColumnSorting`).

6. **Search Text in Column:**
   - Allow toggling the display of a search text field within a column using the `searchText` prop.

7. **Filtering:**
   - Implement a `filter` prop to enable or disable filtering functionality.

8. **Pagination:**
   - Provide pagination functionality with a `pageSize` property to control the number of rows displayed per page.

9. **Editable Cells:**
   - Enable/disable cell editing using an `editable` property.

10. **Column Properties:**
    - Each column can have properties like `editable`, `sortable`, `valueGetter`, and `onCellEditCommit`.

11. **Connected Columns and Rows:**
    - Columns are connected to rows through a shared `id` property.
    - Row headers should have the same name as the corresponding column headers to establish a connection.
  
12. **Additional Properties:**
    - Properties like `rows` and `cols` define the structure of the table.
    - Additional properties like `pagination`, `loading`, etc., can be included for enhanced functionality.

These rules provide a comprehensive guideline for implementing the DataGrid component in a React application, ensuring flexibility, customization, and ease of use.

| Property                      | Description                                                                                  | Syntax                                   |
|-------------------------------|----------------------------------------------------------------------------------------------|------------------------------------------|
| align                         | Aligns columns within the grid, specifying their horizontal alignment.                        | align: 'left' \| 'right' \| 'center'     |
| lookup                        | Allows users to select values from predefined lists within the grid.                          | lookup: Array<string \| { value: any, label: string }> \| ((params: GridLookupParams) => string \| { value: any, label: string }) |
| renderEmptyCell               | Renders custom messages when a cell's value is empty or null.                                 | renderEmptyCell: (params: GridCellParams) => ReactNode |
| type                          | Specifies the type of data displayed in each column, aiding in filtering and sorting.         | type: 'string' \| 'number' \| 'date' \| ... |
| sorting                       | Enables sorting functionality for columns, facilitating data organization.                   | sorting: boolean                         |
| search                        | Implements search functionality within the grid, facilitating data exploration.               | componentsProps: {toolbar: {search: { disabled: boolean }}} |
| filtering                     | Sets up filtering options for columns, allowing users to narrow down displayed data.          | filtering: boolean                       |
| pagination                    | Adds pagination controls to the grid, managing large datasets efficiently.                    | pagination: boolean                      |
| export                        | Enables data export options for sharing or analysis purposes.                                  | export: boolean                          |
| CRUD Operation (add new row)  | Implements CRUD operations within the grid, allowing users to interact with data.             | componentsProps: {toolbar: {addRowButton: { onClick: (event: MouseEvent) => void }}} |
| update existing row           | Allows users to update existing rows within the grid.                                          | editRowsModel: { id: number, update: boolean, delete: boolean } |
| delete a row                  | Enables row deletion functionality within the grid.                                             | editRowsModel: { id: number, update: boolean, delete: boolean } |
| add custom action button      | Adds custom action buttons to the grid, enhancing user interactivity.                          | components: { Toolbar: React.ElementType<any> } |
| import Material icons         | Imports Material icons to use within the grid for visual enhancements.                          | components: { Toolbar: React.ElementType<any> } |
| selection                     | Implements row selection functionality within the grid.                                         | checkboxSelection: boolean \| undefined |
| grouping                      | Enables grouping functionality within the grid for data organization.                          | grouping: boolean                        |
| hide & show columns           | Allows users to dynamically show or hide columns based on preference.                           | hide: boolean                            |
| custom cell render            | Customizes the rendering of cells within the grid, enhancing visual representation.            | renderCell: (params: GridCellParams) => ReactNode |
| styling                       | Offers various options for styling the grid components, ensuring visual consistency.            | componentsProps: {toolbar: {cssClass: string}} |
| adding custom icons           | Incorporates custom icons into the grid interface for personalized visuals.                    | componentsProps: {toolbar: {cssClass: string}} |


### Title in DataGrid
```jsx
<DataGrid
  {...}
  title="Employee Data"
/>

### Column Alignment
```
<GridColumn field="name" align="left" {...} />

```

### Lookup Feature
```
<GridColumn field="department" {...} renderCell={(params) => lookup[params.value]} />
``

### Handling Null Values
```
<GridColumn field="email" {...} renderCell={(params) => params.value != null ? params.value : "null"} />
```

### Disabling Sorting
```
<GridColumn field="id" {...} sortable={false} />
```

### Search Text in Column
```
<GridColumn field="name" {...} disableColumnFilter />
```

### Filtering
```
<DataGrid {...} disableColumnFilter />
```

### Pagination
```
<DataGrid {...} pageSize={10} />
```

### Editable Properties
```
<GridColumn field="age" {...} editable />
```

### Additional Notes
```
<DataGrid
  rows={employeeRows}
  columns={employeeColumns}
  {...}
  getCellClassName={(params) => {
    return params.value < 18 ? 'underage-cell' : '';
  }}
/>
```



