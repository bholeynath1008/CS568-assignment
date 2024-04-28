| User Interaction            | Synchronous Jest Events                                  | Asynchronous Jest Events                |
|-----------------------------|----------------------------------------------------------|-----------------------------------------|
| Clicking a button          | `fireEvent.click(element)`                               | `await fireEvent.click(element)`       |
| Typing into an input field | `fireEvent.change(element, { target: { value: 'New value' } })` | `await fireEvent.change(element, { target: { value: 'New value' } })` |
| Submitting a form          | `fireEvent.submit(element)`                             | `await fireEvent.submit(element)`     |
|                            |                                                          |                                         |
| **Synchronous Jest Events**|                                                          |                                         |
| Click Event                | `fireEvent.click(element)`                               |                                         |
| Change Event               | `fireEvent.change(element, { target: { value: 'New value' } })` |                                         |
| Submit Event               | `fireEvent.submit(element)`                             |                                         |
| Getting element by ID      | `const element = getByTestId('test-id')`                |                                         |
| Getting element by role    | `const element = getByRole('button')`                   |                                         |
|                            |                                                          |                                         |
| **Asynchronous Jest Events**|                                                          |                                         |
| Finding an element by query|                                                          | `await screen.findByText('text')`      |
|                            |                                                          | `await screen.findByLabelText('label')`|
|                            |                                                          | `await screen.findByRole('button')`    |
|                            |                                                          | `await screen.findByPlaceholderText('placeholder')` |
| Waiting for element to disappear |                                                        | `await screen.findByText('text', { timeout: 1000, ...otherOptions })` |


### App.js
```
import './App.css';
import Text from "./components/Text"
import Button from "./components/Button"
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <Text toggle={toggle} displayTxt="GeeksForGeeks" />
      <Button setToggle={setToggle} btnTxt="Toggle Text" />
    </div>
  );
}

export default App;


```
```
Test 1: Testing whether all the components have rendered
Test 2: Testing the default value of the text element
Test 3: Testing the toggle ability of the button
```
### App.test.js
```
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
})


describe("App Component", () => {
  // Test 1
  test("App Rendering", () => {
    render(<App />);
    const text = screen.getByTestId('text');
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  })

  // Test 2
  test("Default Text", ()=>{
    render(<App/>);
    const text = screen.getByTestId('text');
    expect(text).toHaveTextContent("GeeksForGeeks");
  });
// Test 3
test("Toggling Text", ()=>{
  render(<App/>);
  const text = screen.getByTestId("text");
  const button = screen.getByTestId("button");
  expect(text).toHaveTextContent("GeeksForGeeks");
  fireEvent.click(button);
  expect(text).toBeEmptyDOMElement();
  fireEvent.click(button);
  expect(text).toHaveTextContent("GeeksForGeeks");
})

})

```
### Text.js
```
import React from 'react'

const Text = ({ toggle, displayTxt }) => {
    return (
        <h1 data-testid="text">{toggle ? displayTxt : ""}</h1>
    )
}

export default Text
```
### Test.test.js
```
Testing the Text Component: We are going to perform three tests on the Text Component.

Test 1: Testing if the text element is rendered correctly to the DOM.
Test 2: Testing the content of the text element when the toggle is set to true.
Test 3: Testing the content of the text element when the toggle is set to false.
```
```
import { cleanup, render, screen } from "@testing-library/react";
import Text from "./Text";

afterEach(() => {
    cleanup();
})

describe("Text Component", () => {
    //test 1
    test("Text Rendering", () => {
        render(<Text toggle={true} displayTxt={"GeeksForGeeks"} />);
        const text = screen.getByTestId("text");
        expect(text).toBeInTheDocument();
    })

    // Test 2
    test("Displayed Text when toggle is set to true", () => {
        render(<Text toggle={true} displayTxt={"GeeksForGeeks"} />);
        const text = screen.getByTestId("text");
        expect(text).toHaveTextContent("GeeksForGeeks");
    });

    // Test 3
    test("Displayed Text when toggle is set to false", () => {
        render(<Text toggle={false} displayTxt={"GeeksForGeeks"} />);
        const text = screen.getByTestId("text");
        expect(text).toBeEmptyDOMElement();
    })


});
```
### Button.js
```
import React from 'react'

const Button = ({ setToggle, btnTxt }) => {
    return (
        <button data-testid="button" onClick={() => setToggle(prev => !prev)}>
            {btnTxt}
        </button>
    )
}
export default Button;
```
### Button.test.js
 
```
1. Button has setToogle function so set it mock
2. Render Button component with props setToogle and btnTxt; // define values of props too
3. Test: Button is present in the document(<button> tag) and Button has text "Click me"

```
```
import Button from "./Button";
import {render, screen, cleanup } from "@testing-library/react"

afterEach(() => {
    cleanup();
})

describe("Button Component", () => {
    const setToggle = jest.fn();
    render(<Button setToggle={setToggle} btnTxt="Click Me!" />);
    const button = screen.getByTestId("button");
    // Test 1
    test("Button Rendering", () => {
        expect(button).toBeInTheDocument();
    })

    // Test 2
    test("Button Text", () => {
        expect(button).toHaveTextContent("Click Me!");
    })
})
```

## Digital Ocean Dog

### Test 1: Rendering the landing page
```javascript
test('renders the landing page', async () => {
   render(<App />);

   expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
   expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
   expect(await screen.findByRole("option", { name: "husky"})).toBeInTheDocument()
   expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
   expect(screen.getByRole("img")).toBeInTheDocument();
});
```
**Purpose:**
- **`render(<App />)`**: This renders the `App` component.
- **`expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/)`**: Ensures that the heading of the landing page contains "Doggy Directory".
- **`expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed")`**: Ensures that the combobox displays "Select a breed".
- **`expect(await screen.findByRole("option", { name: "husky"})).toBeInTheDocument()`**: Ensures that there is an option with the name "husky" in the combobox.
- **`expect(screen.getByRole("button", { name: "Search" })).toBeDisabled()`**: Ensures that the "Search" button is disabled.
- **`expect(screen.getByRole("img")).toBeInTheDocument()`**: Ensures that there is an image present on the landing page.

**Why it's done:**
This test verifies that the landing page renders correctly, ensuring that all the necessary elements are present and in the correct state.

### Test 2: Searching and displaying dog image results
```javascript
test("should be able to search and display dog image results", async () => {
   render(<App />);

   const select = screen.getByRole("combobox");
   expect(await screen.findByRole("option", { name: "cattledog"})).toBeInTheDocument();
   userEvent.selectOptions(select, "cattledog");
   expect(select).toHaveValue("cattledog");

   const searchBtn = screen.getByRole("button", { name: "Search" });
   expect(searchBtn).not.toBeDisabled();
   userEvent.click(searchBtn);

   await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));

   const dogImages = screen.getAllByRole("img");
   expect(dogImages).toHaveLength(2);
   expect(screen.getByText(/2 Results/i)).toBeInTheDocument();
   expect(dogImages[0]).toHaveAccessibleName("cattledog 1 of 2");
   expect(dogImages[1]).toHaveAccessibleName("cattledog 2 of 2");
})
```
**Purpose:**
- **`render(<App />)`**: This renders the `App` component.
- **Selecting a breed:**
  - **`expect(await screen.findByRole("option", { name: "cattledog"})).toBeInTheDocument()`**: Ensures that there is an option with the name "cattledog" in the combobox.
  - **`userEvent.selectOptions(select, "cattledog")`**: Simulates selecting the "cattledog" option from the combobox.
  - **`expect(select).toHaveValue("cattledog")`**: Verifies that the combobox has the selected value "cattledog".
- **Initiating the search:**
  - **`const searchBtn = screen.getByRole("button", { name: "Search" })`**: Finds the search button.
  - **`expect(searchBtn).not.toBeDisabled()`**: Ensures that the search button is enabled.
  - **`userEvent.click(searchBtn)`**: Simulates a click on the search button.
- **Loading state:**
  - **`await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i))`**: Waits for the loading state to be removed.
- **Verifying results:**
  - **`const dogImages = screen.getAllByRole("img")`**: Finds all the images.
  - **`expect(dogImages).toHaveLength(2)`**: Verifies that there are two images.
  - **`expect(screen.getByText(/2 Results/i)).toBeInTheDocument()`**: Verifies that the text "2 Results" is present.
  - **`expect(dogImages[0]).toHaveAccessibleName("cattledog 1 of 2")`** and **`expect(dogImages[1]).toHaveAccessibleName("cattledog 2 of 2")`**: Verifies that the images have appropriate accessible names.

**Why it's done:**
This test ensures that the search functionality works as expected:
- It verifies that selecting a breed and initiating a search returns the correct number of results.
- It also verifies that the loading state is displayed and removed correctly.
