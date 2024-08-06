```
const Experiences = memo((props) => {
  // Destructure className from props, though it doesn't appear to be used in this snippet
  const { className } = props;
  // Generate styles using a custom hook
  const classes = useStyles(props);

  // State to manage the open/close status of multiple popovers
  // Each item in the array represents a popover with its id, open status, and anchor element
  const [poperOpen, setPoperOpen] = React.useState([]); 

  // State to force re-render when changed, useful for re-evaluating popover positions
  const [justChange, setJustChange] = useState(false); 

  // Function to handle opening and closing of popovers
  // e - event object, _id - unique identifier for the popover, _open - boolean to open/close
  const handleClick = (e, _id, _open) => {
    setPoperOpen(prevArray => {
      // Find the index of the popover with the specified id
      const idx = prevArray.findIndex(x => x.id === _id); 
      // Copy the current state array to avoid direct mutation
      const a = [...prevArray];

      // If popover is already open, remove it from the array
      if (idx > -1) {
        a.splice(idx, 1);
      }
      // Add new popover state with updated open status and anchor element
      a.push({ id: _id, open: _open, anchorEl: e.currentTarget });
      return a;
    });

    // Toggle the justChange state to force a re-render
    setJustChange(!justChange); 
  };

  // Function to render a single experience item
  // img - image URL, title - experience title, id - unique identifier, popoverCategory - array of URLs for popover content
  const experience = (img, title, id, popoverCategory) => (
    <div>
      <div
        className="experience"
        aria-describedby={id} // ARIA attribute to describe the element referenced by the popover
        id={id} // Set the id for the popover element
        onClick={e => handleClick(e, id, true)} // Handle click event to open popover
        onKeyDown={e => handleClick(e, id, true)} // Handle keydown event (e.g., Enter key) to open popover
        role="button" // Set role as button for accessibility
        tabIndex="0" // Make the div focusable
      >
        <img
          data-sizes="auto" // Automatically adjust sizes attribute based on layout
          className="lazyload" // Class for lazy loading images
          data-src={img} // Source of the image to be loaded lazily
          alt={title} // Alt text for accessibility
        />
        <div className="experience-title">
          <Typography
            color="textSecondary" // Text color from theme
            variant="subtitle2" // Text style variant
            className="highlight highlight1" // Custom classes for styling
            display="inline" // Display inline for the text
          >
            {title} {/* Render the experience title */}
          </Typography>
        </div>
      </div>

      <Popper
        id={id} // ID for the popper, should match the aria-describedby in the triggering element
        open={poperOpen.findIndex(x => x.id === id) > -1 && poperOpen.find(x => x.id === id).open} // Determine if the popover is open
        anchorEl={poperOpen.findIndex(x => x.id === id) > -1
          ? poperOpen.find(x => x.id === id).anchorEl : undefined} // Set the anchor element for the popover
        className={clsx(classes[id])} // Apply custom classes for styling
        modifiers={{
          flip: {
            enabled: false, // Disable the flip behavior of the popper
          },
        }}
      >
        <Button onClick={e => handleClick(e, id, false)}>x</Button> {/* Button to close the popover */}
        <div className={clsx(classes.paper)}>
          {/* Map over the popoverCategory array to render each image inside the popover */}
          {
            popoverCategory.map(url => (
              <img
                key={id} // Unique key for each image element
                data-sizes="auto" // Automatically adjust sizes attribute
                className="lazyload" // Class for lazy loading images
                src={url} // Source URL for the image
                alt={title} // Alt text for accessibility
              />
            ))
          }
        </div>
      </Popper>
    </div>
  );

  // You can continue with the rest of the component logic...
});

```

### simple way
State Management: Use a state to keep track of the currently open popover.
Event Handling: Update the state when a popover is opened or closed.
```
import React, { useState } from 'react';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';

const PopperExample = () => {
  const [openPopperId, setOpenPopperId] = useState(null);

  const handleClick = (id) => {
    setOpenPopperId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {['popper1', 'popper2', 'popper3'].map((id) => (
        <div key={id}>
          <Button onClick={() => handleClick(id)}>
            Toggle {id}
          </Button>
          <Popper open={openPopperId === id} anchorEl={document.getElementById(id)}>
            <div id={id} style={{ padding: '10px', background: 'lightgrey' }}>
              Content of {id}
            </div>
          </Popper>
        </div>
      ))}
    </div>
  );
};

export default PopperExample;

```
Key Points
useState: The openPopperId state variable keeps track of the ID of the currently open popover. If it’s null, no popover is open.
handleClick: This function sets the openPopperId state to the clicked popper’s ID. If the same popper is clicked again, it closes the popper by setting openPopperId to null.
Rendering Popper: The open prop of the Popper component checks if the current popper's ID matches openPopperId to determine whether it should be open or not.
--------------------
## Another way:

To achieve the behavior where opening one popper closes any other open poppers in a Material-UI (MUI) React application, you can manage the state of the open poppers in a way that only allows one to be open at a time.

Here's a basic approach using React state and MUI's Popper component:

1. **State Management**: Use a single state to keep track of the currently open popper.
2. **Handlers**: Create handlers to open and close poppers.
3. **Conditional Rendering**: Render poppers based on the state.

Here’s an example implementation:

```
import React, { useState } from 'react';
import { Popper, Button } from '@mui/material';

const PopperExample = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPopper, setCurrentPopper] = useState(null);

  const handleClick = (event, popperId) => {
    if (currentPopper === popperId) {
      setAnchorEl(null);
      setCurrentPopper(null);
    } else {
      setAnchorEl(event.currentTarget);
      setCurrentPopper(popperId);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentPopper(null);
  };

  return (
    <div>
      <Button onClick={(event) => handleClick(event, 'popper1')}>Toggle Popper 1</Button>
      <Popper open={currentPopper === 'popper1'} anchorEl={anchorEl}>
        <div style={{ padding: '10px', backgroundColor: 'white', border: '1px solid' }}>
          Popper 1 Content
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Popper>

      <Button onClick={(event) => handleClick(event, 'popper2')}>Toggle Popper 2</Button>
      <Popper open={currentPopper === 'popper2'} anchorEl={anchorEl}>
        <div style={{ padding: '10px', backgroundColor: 'white', border: '1px solid' }}>
          Popper 2 Content
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Popper>

      {/* Add more poppers as needed */}
    </div>
  );
};

export default PopperExample;
```

markdown
Copy code
To achieve the behavior where opening one popper closes any other open poppers in a Material-UI (MUI) React application, you can manage the state of the open poppers in a way that only allows one to be open at a time.

Here's a basic approach using React state and MUI's Popper component:

1. **State Management**: Use a single state to keep track of the currently open popper.
2. **Handlers**: Create handlers to open and close poppers.
3. **Conditional Rendering**: Render poppers based on the state.

Here’s an example implementation:

```jsx
import React, { useState } from 'react';
import { Popper, Button } from '@mui/material';

const PopperExample = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPopper, setCurrentPopper] = useState(null);

  const handleClick = (event, popperId) => {
    if (currentPopper === popperId) {
      setAnchorEl(null);
      setCurrentPopper(null);
    } else {
      setAnchorEl(event.currentTarget);
      setCurrentPopper(popperId);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentPopper(null);
  };

  return (
    <div>
      <Button onClick={(event) => handleClick(event, 'popper1')}>Toggle Popper 1</Button>
      <Popper open={currentPopper === 'popper1'} anchorEl={anchorEl}>
        <div style={{ padding: '10px', backgroundColor: 'white', border: '1px solid' }}>
          Popper 1 Content
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Popper>

      <Button onClick={(event) => handleClick(event, 'popper2')}>Toggle Popper 2</Button>
      <Popper open={currentPopper === 'popper2'} anchorEl={anchorEl}>
        <div style={{ padding: '10px', backgroundColor: 'white', border: '1px solid' }}>
          Popper 2 Content
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Popper>

      {/* Add more poppers as needed */}
    </div>
  );
};

export default PopperExample;
Explanation:
State Variables:

anchorEl: Tracks the element that the popper is anchored to.
currentPopper: Tracks which popper is currently open.
handleClick Function:

Checks if the clicked popper is already open. If yes, it closes it. If no, it sets the clicked popper as the current open popper.
handleClose Function:

Closes the currently open popper.
Rendering the Popper:

Each popper is rendered conditionally based on the currentPopper state.
