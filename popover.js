```
function App() {
  // const { isAuthenticated } = useAuth();
  const refOne = useRef(null) // useRef: common use to access the child, to access dom element directly
  useEffect(()=>{
    document.addEventListener("click", handleClickOutside, true); // It will listn to click event and handleClickOutside will receive event ie. click
  },[]);

  const handleClickOutside = (e)=> {
    if (!refOne.current.contains(e.target)){
      console.log("clickOutside");
    } else {
      console.log("click-inside")
    }
  }
  return (
    <div className="App">
      <b>Delect outside click</b>
      <div style={{ height: 200, width: 200, backgroundColor: "green", textAlign: "center" }} onClick={() => console.log("hello")} ref={refOne}>  
{/* refOne is used to  */}
        <div style={{ height: 100, width: 100, backgroundColor: "yellow", textAlign: "center", alignContent: "center" }}>
          Box1</div>
        Box2</div>
    </div>
  );
}

export default App;
```
1. Prevent Default Behavior on Click and Scroll
If you want to disable click-away and scroll actions, you can add event listeners to handle those events.

```
import React, { useEffect, useRef } from 'react';
import { Popper } from 'react-popper';

const MyComponent = () => {
  const popperRef = useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleClickAway = (event) => {
    if (popperRef.current && !popperRef.current.contains(event.target)) {
      event.stopPropagation(); // Prevent click away
    }
  };

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent scrolling
  };

  useEffect(() => {
    if (open) {
      // Add event listeners for click and scroll
      document.addEventListener('click', handleClickAway);
      document.addEventListener('scroll', handleScroll, { passive: false });
    }

    return () => {
      // Clean up the event listeners
      document.removeEventListener('click', handleClickAway);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  return (
    <div>
      <button onClick={handleToggle}>Toggle Popper</button>
      {open && (
        <Popper>
          <div ref={popperRef} className="popper-content">
            Popper Content
          </div>
        </Popper>
      )}
    </div>
  );
};

export default MyComponent;

```

To block the scroll and click away functionality in a Popper component (usually associated with dropdowns or tooltips), you need to manage event listeners and possibly modify the component's state. Here’s a general approach to achieving this:

1. Prevent Default Behavior on Click and Scroll
If you want to disable click-away and scroll actions, you can add event listeners to handle those events.

javascript
Copy code
import React, { useEffect, useRef } from 'react';
import { Popper } from 'react-popper';

const MyComponent = () => {
  const popperRef = useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleClickAway = (event) => {
    if (popperRef.current && !popperRef.current.contains(event.target)) {
      event.stopPropagation(); // Prevent click away
    }
  };

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent scrolling
  };

  useEffect(() => {
    if (open) {
      // Add event listeners for click and scroll
      document.addEventListener('click', handleClickAway);
      document.addEventListener('scroll', handleScroll, { passive: false });
    }

    return () => {
      // Clean up the event listeners
      document.removeEventListener('click', handleClickAway);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  return (
    <div>
      <button onClick={handleToggle}>Toggle Popper</button>
      {open && (
        <Popper>
          <div ref={popperRef} className="popper-content">
            Popper Content
          </div>
        </Popper>
      )}
    </div>
  );
};

export default MyComponent;
2. Explanation of the Code
State Management: Use useState to manage the visibility of the Popper component.
Refs: Use useRef to get a reference to the Popper content, which helps in determining if a click event occurred outside the component.
Event Listeners: Add event listeners to the document for click and scroll events when the Popper is open, and remove them when it closes.
Prevent Default Actions: In the handleClickAway function, event.stopPropagation() prevents clicks outside the Popper from closing it. In the handleScroll function, event.preventDefault() stops the scrolling behavior.
3. Important Notes
Performance: Be cautious with preventDefault on scroll events, as this can lead to a poor user experience. Use it sparingly and only when necessary.
Accessibility: Ensure that your implementation considers accessibility; users should be able to close the Popper using keyboard navigation (e.g., pressing Escape).
Cleanup: Always clean up event listeners in the useEffect cleanup function to prevent memory leaks.
This setup should effectively block both click-away and scroll actions for your Popper component.

  
## Popover
Things to know when using the Popover component:
The component is built on top of the Modal component. The scroll and click away are blocked unlike with the Popper component.

## Popper
Clicking away does not hide the Popper component. If you need this behavior, you can use ClickAwayListener - see the example in the menu documentation section.

  //////////////////////
  import React, { useState, useEffect } from 'react';
import { Button, Popper, Backdrop, Box } from '@mui/material';

const ModalPopper = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Disable body scroll when the Popper is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = ''; // Clean up on unmount
    };
  }, [open]);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Popper
      </Button>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom"
        style={{ zIndex: 1300 }} // Ensure it appears above other content
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: 3,
            p: 2,
            borderRadius: 1,
          }}
        >
          <h2>Modal Content</h2>
          <p>This is a Popper that behaves like a modal.</p>
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Popper>
      <Backdrop open={open} onClick={handleClose} sx={{ zIndex: 1200 }}>
        {/* Optional: You can add any additional content to the backdrop here */}
      </Backdrop>
    </div>
  );
};

export default ModalPopper;



Explanation of the Code:
State Management:

anchorEl is used to control the visibility of the Popper.
open is a boolean indicating if the Popper is open.
Opening and Closing:

handleOpen sets the anchor element to show the Popper.
handleClose sets the anchor element to null, hiding the Popper.
Scroll Management:

The useEffect hook toggles the body's overflow style to disable scrolling when the Popper is open.
Backdrop:

The Backdrop component is used to create a semi-transparent overlay behind the Popper. Clicking on it will close the Popper.
Styling:

The Popper is styled with MUI’s Box component for consistency with MUI’s design language.
This approach will effectively make your Popper behave like a modal, blocking user actions and scrolling when it is open.
