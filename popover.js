import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

// Define custom styles using makeStyles hook
const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none', // Prevent click events from bubbling up to ClickAwayListener
  },
}));

// Main functional component
export default function SimplePopover() {
  const classes = useStyles(); // Apply custom styles
  const [anchorEl, setAnchorEl] = React.useState(null); // State to manage the anchor element for the popover
  const open = Boolean(anchorEl); // Determine if the popover is open based on the presence of anchorEl

  // Handler to open the popover
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element to the current target (Button)
  };

  // Handler to close the popover
  const handlePopoverClose = (event) => {
    // Check if the clicked element is NOT a descendant of the Popover or the Button that opens it
    if (!anchorEl || !anchorEl.contains(event.target) && event.target !== event.currentTarget) {
      setAnchorEl(null); // Close the popover if the click is outside
    }
  };

  return (
    <div>
      {/* ClickAwayListener listens for clicks outside the popover to trigger handlePopoverClose */}
      <ClickAwayListener onClickAway={handlePopoverClose}>
        <div>
          {/* Button to trigger the popover */}
          <Button
            aria-describedby={open ? 'simple-popover' : undefined} // Aria attribute for accessibility
            onClick={handlePopoverOpen} // Open popover on click
          >
            Open Popover
          </Button>
          {/* Popover component */}
          <Popover
            id="simple-popover" // ID for accessibility
            open={open} // Control the visibility of the popover
            anchorEl={anchorEl} // Anchor element for positioning the popover
            onClose={handlePopoverClose} // Handler to close the popover
            anchorOrigin={{
              vertical: 'bottom', // Position popover bottom to the anchor element
              horizontal: 'left', // Align popover left to the anchor element
            }}
            transformOrigin={{
              vertical: 'top', // Transform popover from top
              horizontal: 'left', // Transform popover from left
            }}
            className={classes.popover} // Apply custom styles
          >
            <div>Hello, I am Mr. Popover!</div>
          </Popover>
        </div>
      </ClickAwayListener>

      {/* Spacer to separate elements */}
      <div style={{ height: 20 }} />

      {/* Button to show an alert */}
      <Button onClick={() => alert('Hi Saroj!')}>Click Alert</Button>
    </div>
  );
}
