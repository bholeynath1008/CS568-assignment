**Modal.jsx**
```
// Import React and useState hook from React library
import React, { useState } from "react";
// Import CSS file for styling
import "./Modal.css";

// Functional component for Modal
export default function Modal() {
  // State variable to control the visibility of the modal
  const [modal, setModal] = useState(false);

  // Function to toggle the modal's visibility
  const toggleModal = () => {
    setModal(!modal);
  };

  // Toggle the CSS class on the body element based on modal visibility
  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  // JSX returned by the component
  return (
    <>
      {/* Button to open the modal */}
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {/* Conditional rendering of the modal based on modal state */}
      {modal && (
        <div className="modal">
          {/* Overlay to darken the background when modal is open */}
          <div onClick={toggleModal} className="overlay"></div>
          {/* Content of the modal */}
          <div className="modal-content">
            <h2>Hello Modal</h2>
            {/* Dummy text */}
            <p>
              {/* Lorem ipsum */}
            </p>
            {/* Button to close the modal */}
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      {/* Dummy paragraph */}
      <p>
        {/* Lorem ipsum */}
      </p>
    </>
  );
}

```

**Modal.css**
```
/* CSS styles for the modal */

/* Prevent scrolling on the body when the modal is active */
body.active-modal {
    overflow-y: hidden;
}

/* Style for the button that opens the modal */
.btn-modal {
    /* Padding around the button text */
    padding: 10px 20px;
    /* Center the button horizontally */
    display: block;
    margin: 100px auto 0;
    /* Font size of the button text */
    font-size: 18px;
}

/* Styles for the modal and overlay */
.modal,
.overlay {
    /* Cover the entire viewport */
    width: 100vw;
    height: 100vh;
    /* Position fixed to stay in place when scrolling */
    position: fixed;
    /* Place the modal and overlay at the top-left corner of the viewport */
    top: 0;
    left: 0;
    /* Stretch the modal and overlay to fill the viewport */
    right: 0;
    bottom: 0;
}

/* Semi-transparent overlay to darken the background */
.overlay {
    /* Dark gray color with 80% opacity */
    background: rgba(49, 49, 49, 0.8);
}

/* Styles for the modal content */
.modal-content {
    /* Position the modal content in the center of the viewport */
    position: absolute;
    top: 40%;
    left: 50%;
    /* Center the modal content horizontally and vertically */
    transform: translate(-50%, -50%);
    /* Spacing between lines of text */
    line-height: 1.4;
    /* Background color of the modal content */
    background: #f1f1f1;
    /* Padding around the content */
    padding: 14px 28px;
    /* Rounded corners for a softer appearance */
    border-radius: 3px;
    /* Limit the maximum and minimum width of the modal */
    max-width: 600px;
    min-width: 300px;
}

/* Style for the close button inside the modal */
.close-modal {
    /* Position the close button in the top-right corner of the modal */
    position: absolute;
    top: 10px;
    right: 10px;
    /* Padding around the close button text */
    padding: 5px 7px;
}

```

## Responsive and Web Accessible

To make the modal responsive and web accessible, as well as follow best practices, we'll implement the following improvements:

**Responsive Design:**

- Use relative units for dimensions (e.g., %, em, rem) instead of fixed units (e.g., px) to ensure scalability across different devices.
- Use media queries to adjust the layout and styles based on screen size.

**Accessibility:**

- Ensure keyboard accessibility by allowing users to open and close the modal using the keyboard.
- Ensure focus management by moving the focus to the modal when it opens and returning it to the button when it closes.
- Use semantic HTML elements and ARIA attributes to improve accessibility for screen readers.

**Best Practices:**

- Avoid direct manipulation of the `document.body.classList` and instead use React state to manage the modal's visibility.
- Encapsulate modal logic into a separate component for better code organization and reusability.
- Use `tabIndex` attribute to manage focus within the modal and ensure elements are focusable in the correct order.


Modal.jsx
```
import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const openModal = () => {
    setModalOpen(true);
    setTimeout(() => modalRef.current.focus(), 100); // Move focus to modal after animation
  };

  const closeModal = () => {
    setModalOpen(false);
    btnRef.current.focus(); // Return focus to the button
  };

  return (
    <>
      <button ref={btnRef} onClick={openModal} className="btn-modal">
        Open
      </button>

      {modalOpen && (
        <div
          ref={modalRef}
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex="-1"
        >
          <div className="overlay" onClick={closeModal}></div>
          <div className="modal-content" role="document">
            <h2 id="modal-title">Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              auctor nisi eu nulla vehicula, vel elementum nunc posuere. Sed
              imperdiet enim nec purus blandit, vel sollicitudin purus
              vestibulum. Donec nec velit vel tortor feugiat ullamcorper.
            </p>
            <button
              className="close-modal"
              onClick={closeModal}
              aria-label="Close"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor
        nisi eu nulla vehicula, vel elementum nunc posuere. Sed imperdiet enim
        nec purus blandit, vel sollicitudin purus vestibulum. Donec nec velit
        vel tortor feugiat ullamcorper.
      </p>
    </>
  );
}

```

**Modal.css**

```
/* CSS styles for the modal */

/* Prevent scrolling on the body when the modal is active */
body.active-modal {
  overflow-y: hidden;
}

/* Style for the button that opens the modal */
.btn-modal {
  /* Padding around the button text */
  padding: 10px 20px;
  /* Center the button horizontally */
  display: block;
  margin: 20px auto;
  /* Font size of the button text */
  font-size: 18px;
  /* Ensure accessible color contrast */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Styles for the modal and overlay */
.modal,
.overlay {
  /* Position fixed to stay in place when scrolling */
  position: fixed;
  /* Cover the entire viewport */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* Semi-transparent overlay to darken the background when modal is open */
.overlay {
  background: rgba(0, 0, 0, 0.5);
}

/* Styles for the modal content */
.modal-content {
  /* Position the modal content in the center of the viewport */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Spacing between lines of text */
  line-height: 1.4;
  /* Background color of the modal content */
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 90%;
  overflow-y: auto; /* Allow scrolling for modal content if it exceeds viewport */
}

/* Style for the close button inside the modal */
.close-modal {
  /* Position the close button in the top-right corner of the modal */
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ccc;
  color: #000;
}
```

