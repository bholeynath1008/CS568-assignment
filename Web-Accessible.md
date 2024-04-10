Here's the table with the common ARIA roles:

| Role          | Syntax (HTML)                                | Description                                                                               |
|---------------|-----------------------------------------------|-------------------------------------------------------------------------------------------|
| alert         | `<div role="alert">...</div>`                | Represents an element containing alert or status message content.                        |
| alertdialog   | `<div role="alertdialog">...</div>`          | Represents a dialog that conveys important information and requires the user's attention. |
| application   | `<div role="application">...</div>`          | Represents a web application.                                                             |
| article       | `<article role="article">...</article>`      | Denotes an article, such as a blog post or news article.                                   |
| banner        | `<header role="banner">...</header>`         | Represents introductory content typically at the top of a page or section.                 |
| button        | `<button role="button">...</button>`         | Denotes an interactive element that triggers actions.                                      |
| checkbox      | `<input type="checkbox" role="checkbox">`    | Represents a checkbox input.                                                              |
| combobox      | `<div role="combobox">...</div>`             | Represents a widget for selecting from a list or entering a custom value.                  |
| dialog        | `<div role="dialog">...</div>`               | Represents a dialog box or window.                                                         |
| form          | `<form role="form">...</form>`               | Represents a form or collection of form-related elements.                                  |
| grid          | `<div role="grid">...</div>`                 | Represents a grid or table structure.                                                      |
| gridcell      | `<div role="gridcell">...</div>`             | Represents a single cell within a grid or table.                                            |
| link          | `<a role="link" href="#">...</a>`            | Represents an anchor link or hyperlink.                                                    |
| listbox       | `<div role="listbox">...</div>`              | Represents a list box control for selecting items.                                          |
| listitem      | `<li role="listitem">...</li>`               | Represents an item in a list.                                                              |
| main          | `<main role="main">...</main>`               | Denotes the main content area of a document or application.                                 |
| navigation    | `<nav role="navigation">...</nav>`           | Represents navigation links or menus.                                                      |
| progressbar   | `<div role="progressbar">...</div>`          | Represents a visual progress indicator.                                                    |
| radio         | `<input type="radio" role="radio">`          | Represents a radio button input.                                                            |
| region        | `<div role="region">...</div>`               | Denotes a perceivable section of content relevant to a specific purpose or functionality.   |
| search        | `<div role="search">...</div>`               | Represents a search box or form.                                                           |
| slider        | `<input type="range" role="slider">`         | Represents a slider control for selecting a value from a range.                             |
| spinbutton    | `<input type="number" role="spinbutton">`    | Represents a spin button or spinner control.                                               |
| status        | `<div role="status">...</div>`               | Represents the status of a task or process.                                                |
| switch        | `<div role="switch">...</div>`               | Represents a switch control, typically used for toggling between two states.                |
| tab           | `<div role="tab">...</div>`                  | Represents a tab in a tablist.                                                             |
| tabpanel      | `<div role="tabpanel">...</div>`             | Represents the content associated with a tab in a tablist.                                  |
| textbox       | `<input type="text" role="textbox">`         | Represents a text input field.                                                             |
| timer         | `<div role="timer">...</div>`                | Represents a timer that counts down or indicates the passage of time.                       |
| toolbar       | `<div role="toolbar">...</div>`              | Represents a collection of commonly used controls or commands.                              |



| Aspect               | Description                              | Use Cases                                              | Syntax                                   | Examples                                  | Others                                  |
|----------------------|------------------------------------------|--------------------------------------------------------|------------------------------------------|-----------------------------------------|-----------------------------------------|
| Semantic HTML        | Use appropriate HTML elements            | Buttons, Forms, Navigation, Headings                   | Utilize HTML5 semantics                  | `<button>Submit</button>`, `<form><input type="text"><button>Submit</button></form>` | (Keyboard, Mouse, Contrast) |
| ARIA Roles & Attributes | Enhance accessibility where HTML semantics are insufficient | Custom widgets, Dynamic content updates          | Use ARIA roles and attributes              | `<div role="button" tabindex="0" aria-label="Close"></div>` | (N/A, N/A, Supplement HTML semantics as needed) |
| Keyboard Navigation | Ensure all interactive elements can be accessed and activated via keyboard | Dropdowns, Modals, Tabs, Accordions                  | Utilize `tabIndex`, `onKeyDown` handlers         | `<div tabIndex="0" onKeyDown={handleKeyDown}></div>` | (Keyboard, N/A, Focus management for dynamic components) |
| Focus Management     | Manage focus appropriately, especially for dynamic content | Modals, Dropdowns, Single page applications          | Manage focus using `tabIndex`, `aria-modal`, `aria-hidden` | `<div tabIndex="0" aria-modal="true"></div>` | (N/A, N/A, Ensure screen reader announces changes)   |
| Color Contrast       | Ensure sufficient contrast between text and background | Text, Buttons, Links, Icons                           | Verify using Contrast Checker tools       | `color: #333; background-color: #fff;` | (N/A, N/A, Ensure readability for all users)         |
| Accessible Forms     | Create forms that are easy to navigate and understand | Login forms, Registration forms, Search bars         | Use `<label>` elements, HTML5 input types    | `<label for="username">Username:</label><input type="text" id="username">` | (Keyboard, Mouse, Provide helpful instructions and errors)  |
| Accessible Images    | Provide alternative text for images      | Icons, Logos, Illustrations                            | Include `alt` attribute on `<img>` elements      | `<img src="image.jpg" alt="Description of the image">` | (N/A, N/A, Use empty `alt` for decorative images)    |
| Dynamic Content & ARIA Live Regions | Notify screen readers of dynamic content changes | Real-time updates, Chat applications                | Use `aria-live` attribute                    | `<div aria-live="polite">Content updates here</div>` | (N/A, N/A, Ensure accessibility for dynamic updates) |
| Keyboard Shortcuts   | Make keyboard shortcuts accessible      | Navigation shortcuts, Form submission shortcuts       | Document and handle key events           | `document.addEventListener('keydown', handleKeyDown)` | (Keyboard, N/A, Provide alternative for mouse actions)   |
| Testing              | Regularly test accessibility with assistive technologies | Screen readers (NVDA, VoiceOver), Automated tools | Manual and automated testing              | Use screen readers and tools like Axe or Lighthouse | (Keyboard, Mouse, Ensure compliance with accessibility standards) |

### 1. Semantic HTML: Using semantic HTML elements in React
```
function SemanticHTMLExample() {
  return (
    <div>
      {/* Semantic button for form submission */}
      <button>Submit</button>
      {/* Semantic form with input field */}
      <form>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}
```

### 2. ARIA Roles & Attributes: Using ARIA roles and attributes in React

**ARIA Roles:**
* button
* navigation
* dialog
* alert
* menu
* region
```
function ARIAExample() {
  return (
    <div role="button" tabIndex="0" aria-label="Close">
      Close
    </div>
  );
}
```

```
<!-- Use Case: Enhancing button functionality -->
<div role="button" tabindex="0" aria-label="Close"></div>

<!-- Use Case: Creating a navigation menu -->
<nav role="navigation">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- Use Case: Representing a dialog or window -->
<div role="dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Dialog Title</h2>
  <p>Dialog content goes here.</p>
</div>

<!-- Use Case: Displaying an important alert -->
<div role="alert">Error message goes here.</div>

<!-- Use Case: Creating a dropdown menu -->
<div role="menu">
  <button>Item 1</button>
  <button>Item 2</button>
  <button>Item 3</button>
</div>

<!-- Use Case: Providing a label for an element -->
<button aria-label="Close dialog">X</button>

<!-- Use Case: Associating an element with its label -->
<div id="section-title">Section Title</div>
<div role="region" aria-labelledby="section-title">
  <!-- Content goes here -->
</div>

```

###  3. Keyboard Navigation: Handling keyboard navigation in React
**Keyboard Events:**
* onKeyDown
* onKeyPress
* onKeyUp
  
**Possible Use Cases:**
* Enabling users to interact with custom UI components using keyboard shortcuts.
* Implementing keyboard navigation within a carousel or slider.
```
<!-- Use Case: Handling keyboard events for an element -->
<div tabIndex="0" onKeyDown={handleKeyDown}></div>

```
**Enter** Keyboard Event
```
function KeyboardNavigationExample() {
 Function to handle Enter key press
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
     // Handle Enter key press
    }
  }

  return (
    <div tabIndex="0" onKeyDown={handleKeyDown}>
      Press Enter
    </div>
  );
}
```
**ESC** Keypress event
```
// Use Case: Handling "Esc" keypress event to close a modal dialog
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal(); // Function to close the modal dialog
  }
});

```

###  4. Focus Management: Managing focus in React

<span style="color:green">_See Example and UseCases Below_</span>

**Possible Use Cases:**
* Ensuring focus remains within a dialog box until it's closed, enhancing user experience for screen reader users.
* Managing focus within a single-page application to maintain accessibility and usability.

### Managing Focus in React Functional Components

#### 1. Using Refs
Utilize the `ref` attribute to create references to DOM elements and programmatically manage focus.

#### 2. Using tabIndex Attribute
Control the order of focus during keyboard navigation using the `tabIndex` attribute.

#### 3. Managing Focus in useEffect Hook
Handle focus management within `useEffect` hook.

#### 4. Managing Focus in Lifecycle Methods
Handle focus management within lifecycle methods like `componentDidMount` and `componentDidUpdate`.

#### 5. Using Focus Management Libraries
Employ specialized React libraries such as `react-focus-lock` to streamline focus management tasks.


```
<!-- Use Case: Managing focus within a modal dialog -->
<div tabIndex="0" aria-modal="true"></div>
```

```
function FocusManagementExample() {
  return (
    <div tabIndex="0" aria-modal="true">
      Modal content
    </div>
  );
}
```

###  5. Color Contrast: Styling with proper color contrast in React
**Possible Use Cases:**
* Making text content more readable for users with visual impairments.
* Meeting accessibility standards and guidelines such as WCAG (Web Content Accessibility Guidelines).
```
/* Use Case: Ensuring sufficient color contrast */
color: #333;
background-color: #fff;

```
```
function ColorContrastExample() {
  return (
    <div style={{ color: '#333', backgroundColor: '#fff' }}>
      Text with proper contrast
    </div>
  );
}
```

###  6. Accessible Forms: Creating accessible forms in React
**Possible Use Cases:**
* Making form fields understandable and navigable for screen reader users.
* Improving usability for users with motor impairments who may rely on keyboard navigation.
```
<!-- Use Case: Creating a form with labels -->
<label for="username">Username:</label>
<input type="text" id="username">

```
```
function AccessibleFormsExample() {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" />
    </form>
  );
}
```

###  7. Accessible Images: Including accessible images in React
```
function AccessibleImagesExample() {
  return (
    <img src="image.jpg" alt="Description of the image" />
  );
}
```

###  8. Dynamic Content & ARIA Live Regions: Notifying screen readers of dynamic content changes in React
```
function DynamicContentExample() {
  return (
    <div aria-live="polite">
      Content updates here
    </div>
  );
}
```

###  9. Keyboard Shortcuts: Implementing keyboard shortcuts in React
```
function KeyboardShortcutsExample() {
  Function to handle Enter key press
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      ###  Handle Enter key press
    }
  }

  return (
    <div onKeyDown={handleKeyDown}>
      Press Enter
    </div>
  );
}
```

###  10. Testing: Testing accessibility in React
```
function TestingExample() {
  return (
    <div>
      <SomeAccessibleComponent />
      <TestingComponent />
    </div>
  );
}
```
-----------------------------------------

##  Managing Focus in Functional Components

1. **Using Refs:**

```
   import React, { useRef } from 'react';

   function MyComponent() {
     const inputRef = useRef(null);

     const handleClick = () => {
       inputRef.current.focus();
     };
     return (
       <div>
         <input ref={inputRef} type="text" />
         <button onClick={handleClick}>Focus Input</button>
       </div>
     );
   }
```

2. **Using tabIndex Attribute:**

```
import React from 'react';

function MyComponent() {
  return (
    <div>
      <button tabIndex={-1}>Not Focusable</button>
      <button>Focusable</button>
    </div>
  );
}
```

3. **Managing Focus in Lifecycle Methods:**

```
import React, { useEffect, useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
```

4. **Using Focus Management Libraries:**

```
import React from 'react';
import FocusLock from 'react-focus-lock';

function Modal({ isOpen, onClose }) {
  return (
    <FocusLock disabled={!isOpen}>
      {isOpen && (
        <div className="modal">
          <button onClick={onClose}>Close</button>
          <input type="text" />
        </div>
      )}
    </FocusLock>
  );
}
```
