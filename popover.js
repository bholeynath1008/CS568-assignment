/* eslint-disable */
import React, { useState, useRef } from 'react';
import classes from './ColumnSelectFilter.module.css';
import { Button, Popover, Box, FormControl, FormGroup, FormControlLabel, Checkbox, Modal } from '@mui/material';
import useClickOutside from './useClickOutside'; // Import the custom hook

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
  useClickOutside(popoverRef, () => {
    setIsOpen(false);
    setAnchorEl(null);
  });

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

      {isOpen && (
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
      )}

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


/////////////

import { useEffect } from 'react';

const useClickOutside = (ref, onClickOutside) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
