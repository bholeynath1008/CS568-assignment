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



---------------------------

  /* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import classes from './ColumnSelectFilter.module.css';
import { Button, Popover, Box, FormControl, FormGroup, FormControlLabel, Checkbox, Modal } from '@mui/material';

function ColumnSelectFilter({ list, clickCallback, id, title, values, testId, openCallback, mode, isStaticFilter }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const popoverRef = useRef(null);

  // Handler for button click to open the popover
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  // Handler for opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
        setAnchorEl(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popoverRef]);

  // Handler for item click in the popover
  const handleItemClick = (item) => {
    if (selectedItems.includes(item.value)) {
      setSelectedItems(selectedItems.filter((i) => i !== item.value));
    } else {
      setSelectedItems([...selectedItems, item.value]);
    }
    clickCallback(item);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>Open Popover</Button>

      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        ref={popoverRef}
      >
        <div className={classes.popoverContent}>
          <FormControl component="fieldset">
            <FormGroup>
              {list.map((item, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={selectedItems.includes(item.value)}
                      onChange={() => handleItemClick(item)}
                      name={item.label}
                    />
                  }
                  label={item.label}
                />
              ))}
            </FormGroup>
          </FormControl>
        </div>
      </Popover>

      <Button variant="contained" onClick={handleOpenModal}>Open Modal</Button>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
      >
        <Box>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
          <Button onClick={handleCloseModal}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ColumnSelectFilter;
