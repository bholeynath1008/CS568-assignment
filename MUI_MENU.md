### [Indian Coders Youtube: for MENU](https://www.youtube.com/watch?v=Aye-4CyNTLQ) : https://www.youtube.com/watch?v=Aye-4CyNTLQ
### [GeeksforGeeks](https://www.geeksforgeeks.org/react-mui-menu-navigation/) : https://www.geeksforgeeks.org/react-mui-menu-navigation/

**Notes:**

**Typography Component:**
- By default, typography follows a paragraph style.
- The `component` attribute in typography allows overriding the default paragraph style. For instance, using `"h1"` as the component will define the HTML tag associated with the typography element. This override can be observed in the browser's inspection tool, but the size remains consistent with the previous style, but the size of "h1" will be same.Only the tag name "h3" will be set while inspect elements.

**Menu Properties:**
- `anchorEl`: Determines the anchor position, typically set to an absolute target position. It specifies the element on which the menu should appear (ie.`button` or any element). The menu opens at the position of this anchor element.
  
- **Other Properties:**
  - `open`: When set to true, the menu is open.
  - `onClose`: A callback function executed to disconnect the connection between `anchorEl` and the `current target element`, setting `anchorEl` to null.
* To close when click on menu list attach `handleClose` callback function on click.


```
import React, { useState } from 'react';
// Import necessary components from MUI library
import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'; 
import { Save, Share, Print } from '@mui/icons-material'; // Import necessary icons
import './App.css'; // Import CSS file

function App() {
  // Define menu options with names and corresponding icons
  const menuOptions = [
    { name: 'Save', icon: <Save /> },
    { name: 'Share', icon: <Share /> },
    { name: 'Print', icon: <Print /> },
  ];
  // State variables for managing menu open/close and anchor element
  const [anchorEl, setAnchorEl] = useState(null); /
  const [open, setOpen] = useState(false);

  // Function to handle click event on button
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Set anchor element to the clicked button
    setOpen(true); // Open the menu
  };

  // Function to handle menu close
  // To Close disconnect with anchorEl and set it to "null", then setOpen to "false".
  const handleClose = () => {
    setOpen(false); // Close the menu
    setAnchorEl(null); // Reset anchor element
  };

  return (
    <div className="App"> {/* Main container */}
      {/* Button to open the menu */}
      <Button variant="outlined" onClick={handleClick}>
        MENU
      </Button>
      {/* Menu component */}
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        {/* Menu items generated dynamically from menuOptions */}
        {menuOptions.map((option) => (
          <MenuItem key={option.name} onClick={handleClose}>
            {/* Menu item with icon and text */}
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText>{option.name}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default App;
```

```
