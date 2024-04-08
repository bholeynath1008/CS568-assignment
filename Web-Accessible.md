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
```
function ARIAExample() {
  return (
    <div role="button" tabIndex="0" aria-label="Close">
      Close
    </div>
  );
}
```

###  3. Keyboard Navigation: Handling keyboard navigation in React
```
function KeyboardNavigationExample() {
 Function to handle Enter key press
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      ###  Handle Enter key press
    }
  }

  return (
    <div tabIndex="0" onKeyDown={handleKeyDown}>
      Press Enter
    </div>
  );
}
```

###  4. Focus Management: Managing focus in React
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
