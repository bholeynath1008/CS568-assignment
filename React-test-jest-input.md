
### Steps in testing UI (RTL)
1. Render Component
2. Find Element and action
3. Assertions

What we should test?
---------------------

1. **Testing Component Rendering:**
   - Example: Testing whether a React component renders correctly with the expected UI elements.

2. **Testing UI Elements:**
   - Example: Ensuring buttons, forms, inputs, and other UI elements function as expected and appear correctly.

3. **Testing Functions:**
   - Example: Unit testing JavaScript functions to verify they produce the correct output for different inputs.

4. **API Testing:**
   - Example: Verifying that HTTP requests to a RESTful API return the expected responses.

5. **Event Testing:**
   - Example: Testing whether event handlers, such as onClick or onChange, trigger the intended actions.

6. **Props and States Testing:**
   - Example: Checking whether React components properly update their UI based on changes in props or state.

7. **UI Condition Testing:**
   - Example: Verifying that UI components display correctly under different conditions, such as when data is loading or when an error occurs.
   `like admin has different layout, user has different`, these testing are called conditional testing.

8. **UI State Testing:**
   - Example: Testing how the UI behaves and appears in various states, like when a user is logged in or logged out.

**Mock Testing:**
- Mock testing is commonly used in:
  - Testing Functions
  - API Testing
  - Event Testing
  - Props and States Testing


  What we should not test
  ------------------------
1. **External UI library code**: Avoid testing UI components or styles from libraries like Bootstrap or Material-UI since they're already tested by library maintainers.

2. **Default functions of JavaScript and React**: Skip testing built-in functions like `parseInt()` in JavaScript or default behaviors like React component lifecycle methods (`componentDidMount()`).

3. **Mocking functions rather than detailed testing**: Instead of extensively testing complex functions with external dependencies, mock those dependencies to focus on testing specific logic within the function.

Snapshot
----------
`Important points`
* Do not write snapshots in starting of the project.
* Run test case after completing your functionality.
* Make a standard for code coverage.


How RTL find elements:
* By Element Type
* By Element name
* By Element id
* By Test id
* etc...
---------

- **`beforeAll`**: Runs once before all tests in a suite, useful for setting up shared resources.
- **`beforeEach`**: Runs before each test, ideal for resetting state or setting up data.
- **`afterEach`**: Runs after each test, good for cleaning up after each test to ensure isolation.
- **`afterAll`**: Runs once after all tests in a suite, great for final cleanup or releasing shared resources.
----------

#### Testing Steps:
1. **Render the Component**: The component is rendered using the `render()` function provided by `@testing-library/react`.
2. **Get Text from Screen/Component**:
   - Text is retrieved from the rendered component or screen using `screen.getByText()`.
   - The `i` flag in the regular expression indicates a case-insensitive search.
   - Text is also retrieved by its title attribute using `screen.getByTitle()`.
3. **Expectations**:
   - The presence of the text matching the regular expression `First React Test Case` is expected in the component/screen using `expect(text).toBeInTheDocument()`.
   - The presence of an element with the title `"ai generate image"` is expected using `expect(title).toBeInTheDocument()`.

#### Test Case:
- A test case titled `"Test First React app case"` is defined using `test()`.
- Inside the test case, the component is rendered.
- Text and title elements are retrieved.
- Expectations are set to ensure the presence of the expected text and title in the rendered component.

```
// import render or screen
import { render, screen } from "@testing-library/react";
// which component you are testing
import App from "./App";
// step 1: render the component first
// step 2: get all text from the screen or component, no case sensitive,
// step 3: expect (jest) that is present in the component or not
test("Test First React app case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle("ai generate image")
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})
```
### Test Case Run Options

1. **Test Suites**: 
   - Indicates the number of files.

2. **How to Run Specific Test Files**:
   - Syntax: `npm run test [FileName].test.js`
   - Shortcut: `npm run test [FileName]`

3. **Watch Mode (w)**:
   - Description: Watch mode monitors changes and runs the latest modified file.
   - Shortcut: `w`

4. **Run Failed Test Cases (f)**:
   - Description: Executes only the failed test cases.
   - Shortcut: `f`

5. **Run All Test Cases**:
   - Description: Executes all test cases.
   - Shortcut: Not specified. (Usually just running the test command)

6. **Quit Watch Mode**:
   - Description: Stops watch mode.
   - Shortcut: Not specified.

7. **Filter Test Files for Run**:
   - Description: Filters test files to execute specific tests.
   - Shortcut: Not specified.

8. **Filter Test Case**:
   - Description: Filters specific test cases for execution.
   - Shortcut: Not specified.

### Describe

- `describe` is a function provided by testing frameworks like Jest to **group related test cases** together.
-  It takes two parameters: a `string description` of the test suite and a `function containing the test cases`.
- It helps in **organizing tests and providing context**.
- `describe.only` is used to **exclusively run** the described test suite while ignoring others. 
- `describe.skip` is used to **skip** the described test suite.
- you can write `nested describe` inside `describe`

 
  
**Test input box: _test_**
* name
* placeholder
* id 
* value
* type

## Testing Input Name:
```
test('Input box should have correct name attribute', () => {
  render(<YourComponent />);
  const inputElement = screen.getByTestId('test-input');
  expect(inputElement).toHaveAttribute('name', 'your_input_name');
});
```

## Testing Input Placeholder:
```
test('Input box should have correct placeholder text', () => {
  render(<YourComponent />);
  const inputElement = screen.getByTestId('test-input');
  expect(inputElement).toHaveAttribute('placeholder', 'Your Placeholder Text');
});
```

## Testing Input ID:
```
test('Input box should have correct ID attribute', () => {
  render(<YourComponent />);
  const inputElement = screen.getByTestId('test-input');
  expect(inputElement).toHaveAttribute('id', 'your_input_id');
});
```

## Testing Input Value:
```
test('Input box should have correct initial value', () => {
  render(<YourComponent />);
  const inputElement = screen.getByTestId('test-input');
  expect(inputElement).toHaveValue('Initial Value');
});
```

## Testing Input Type:
```
test('Input box should have correct type attribute', () => {
  render(<YourComponent />);
  const inputElement = screen.getByTestId('test-input');
  expect(inputElement).toHaveAttribute('type', 'text');
});
```

Types of RTL Queries:

## 1. Find singleElement (like one button)
* getBy
* queryBy
* findBy

## 1. Find Multiple Element (like multiple button)
* getAllBy
* queryAllBy
* findAllBy

## getByRole Query

- **What is the Role in getByRole?**
- **What are semantic elements?**
  - Button, heading tags, and table are semantic elements. (They have `Role`)
  - Div and span are not semantic elements. (They have no `Role`)

## Test Textbox with getByRole
- Check if the textbox is present.
- Check the value of the textbox.
- Check if the textbox is disabled or not.

## Test Button with getByRole
- Test button presence and functionality using getByRole.

-----------------
**getByRole**

### Multiple elements and custom role: 
- code step by step video : 19

Steps in testing UI (RTL)
1. Render Component
2. Find Element and action
3. Assertions

How RTL find elements:
* By Element Type
* By Element name
* By Element id
* By Test id
* etc...

Types of RTL Queries:

## 1. Find singleElement (like one button)
* getBy
* queryBy
* findBy

## 1. Find Multiple Element (like multiple button)
* getAllBy
* queryAllBy
* findAllBy

*/

/* 
## getByRole Query

- **What is the Role in getByRole?**
- **What are semantic elements?**
  - Button, heading tags, and table are semantic elements. (They have Role)
  - Div and span are not semantic elements. (They have no Role)

## Test Textbox with getByRole
-  Check if the textbox is present.
-  Check the value of the textbox.
-  Check if the textbox is disabled or not.

## Test Button with getByRole
- Test button presence and functionality using getByRole.

**Keep in mind**:
- Semantic elements have own Role, but non-semantic elements define own role. like <div role='dummy'>
- How `input box` has two different name.
- How `textbox` has two different box name(test case).
- Non-semantic element div defines the `getByRole`


*/

```
const App = () => {
 
  return (
    <div className="App">
      <div>Multiple Items with Role</div>
      <button>Click 1</button>
      <button>Click 2</button>
      <label htmlFor='input1'>User Name</label>
      <input type='text' />
      <label htmlFor='input2'>User Age</label>
      <input type='text' id='input2'  />
      <div role='dummy'>
        Hello dummy
      </div>
   
    </div>
  );
}

import { render, screen } from "@testing-library/react";
import App from "./App";

test("Multiple Role Test", () => {
  render(<App />);
  const btn1 = screen.getByRole("button", { name: "Click 1" });
  const btn2 = screen.getByRole("button", { name: "Click 2" });
  const inputElement1 = screen.getByRole("textbox", { name: "User Name" });
  const inputElement2 = screen.getByRole("textbox", { name: "User Age" });
// For non -semantic element which has no role
  const div = screen.getByRole("dummy");

  // Checking if elements are present in the document
  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
  expect(inputElement1).toBeInTheDocument();
  expect(inputElement2).toBeInTheDocument();
  expect(div).toBeInTheDocument();

});
```
------
### Test OnChange Event with input box

```
import App from "./App";
import {fireEvent, render, screen} from "@testing-library/react";
test("onChange Event Test", () =>{
  render(<App></App>);
  let inputElement = screen.getByRole("textbox");
  fireEvent.change(inputElement, {target: {value:'a'}} );
  expect(input.value).toBe("a");
})
```
--------
### Test Click Element

```
test("test button Click", () => {
  render(<App></App>);
  let buttonElement = screen.getByRole('button');
  fireEvent.click(buttonElement);
  expect(screen.getByText("updated data")).toBeInTheDocument();
})
```
----------
### Snapshot testing
```
import App from "./App";
import {fireEvent, render, screen} from "@testing-library/react";

test("Snapshot for app Component", () => {
  const container = render(<App></App>) // which component you want to test under snapshot
  expect(container).toMatchSnapshot();
})
```

### Functional Component method testing
* keep method outside and test it
* Testing the function that is outside the component "helper.js"
`step by step coding: 16 video`

```
import { useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState("");
  const handleData=()=> {
    setData("Hello");
  }
  return (
    <div className="App">
      <div>Functional Component method testing</div>
      <button data-testid="btn1" onClick={handleData}>Click</button> // data-testid "to test it"
      <h2>{data}</h2>
    </div>
  );
}
export default App;
```

`helper.js`
```
const handleData2 = () => {
    console.log("bye");
    return "hi";
  };
  export default handleData2;
```
 ```
 import App from "./App";
import {fireEvent, render, screen} from "@testing-library/react"
import handleData2 from "./helper";

test("method testing case 1", () => {
  render(<App></App>);
  const btn = screen.getByTestId("btn1");
  fireEvent.click(btn);
  expect(screen.getByText("Hello")).toBeInTheDocument(); // when click it will display "Hello" in the screen.
})

//  Helper function test:

test("Testing helper Function", () => {
  expect(handleData2()).toMatch("hi");
})
 ``` 

What we should test?
---------------------

1. **Testing Component Rendering:**
   - Example: Testing whether a React component renders correctly with the expected UI elements.

2. **Testing UI Elements:**
   - Example: Ensuring buttons, forms, inputs, and other UI elements function as expected and appear correctly.

3. **Testing Functions:**
   - Example: Unit testing JavaScript functions to verify they produce the correct output for different inputs.

4. **API Testing:**
   - Example: Verifying that HTTP requests to a RESTful API return the expected responses.

5. **Event Testing:**
   - Example: Testing whether event handlers, such as onClick or onChange, trigger the intended actions.

6. **Props and States Testing:**
   - Example: Checking whether React components properly update their UI based on changes in props or state.

7. **UI Condition Testing:**
   - Example: Verifying that UI components display correctly under different conditions, such as when data is loading or when an error occurs.
   `like admin has different layout, user has different`, these testing are called conditional testing.

8. **UI State Testing:**
   - Example: Testing how the UI behaves and appears in various states, like when a user is logged in or logged out.

**Mock Testing:**
- Mock testing is commonly used in:
  - Testing Functions
  - API Testing
  - Event Testing
  - Props and States Testing


  What we should not test
  ------------------------
1. **External UI library code**: Avoid testing UI components or styles from libraries like Bootstrap or Material-UI since they're already tested by library maintainers.

2. **Default functions of JavaScript and React**: Skip testing built-in functions like `parseInt()` in JavaScript or default behaviors like React component lifecycle methods (`componentDidMount()`).

3. **Mocking functions rather than detailed testing**: Instead of extensively testing complex functions with external dependencies, mock those dependencies to focus on testing specific logic within the function.

Snapshot
----------
`Important points`
* Do not write snapshots in starting of the project.
* Run test case after completing your functionality.
* Make a standard for code coverage.

*/


### Function props testing and function mocking
`Understand Case 1 and Case 2:` Testing props in React
**App.js**
```
import User from "./User";
const App = (props) => {

  return (
    <div className="App">
      <h1>Props Testing</h1>
      <User name = "Anjana" />
    </div>
  );
}

export default App;
```
**User.js**
```
import React from 'react'
const User = (props) => {
  return (
    CASE:1---------OR- ie. props only
    <div>{props.name}</div>
     CASE:2---------- ie. text + props
    <div>User Name is {props.name}</div>
  )
}

export default User
```

**App.test.js**
```
import { render, screen } from "@testing-library/react";
import User from "./User";

test("Props Testing", () => {
  const name = "anil"    1) CREATE CONSTANT WHAT YOU ARE GOING TO PASSING, THAT WILL APPEAR IN UI, AND PASSING AS PROPS
  render(<User name={name}/>);
  CASE:1---------OR-
  const user = screen.getByText(name); 2) CAPTURE THAT WHAT IS DISPLAY IN SCREEN BY TEXT ie.props
  CASE:2----------
  const user = screen.getByText(`User Name is ${name}`); 2.1) CAPTURE THAT WHAT IS DISPLAY IN SCREEN BY TEXT ie. text + props in UI
  expect(user).toBeInTheDocument();

})

```
------------------------------
### Mock Function video: 42
**App.js** Mock a function that is passed as `props`

```
import User from "./User";

const App = (props) => {
  return (
    <div className="App">
      <h1>Functional Props Testing</h1>
      <button onClick={props.testFunction}>Click</button>
    </div>
  );
}
export default App;
```

**App.test.js**
```
// anil siddu
import { render, screen } from "@testing-library/react"; // Importing render and screen from testing library
import userEvent from "@testing-library/user-event"; // Importing userEvent library
import App from "./App"; // Importing the component to be tested

test("Functional Props Testing", async() => {
  const testFunction = jest.fn(); // Creating a mock function using Jest's mock function
  userEvent.setup(); // Setting up userEvent library
  render(<App testFunction={testFunction}/>); // Rendering the component with the mock function passed as a prop
  const btn = screen.getByRole("button"); // Finding the button element using getByRole from testing-library/react
  await userEvent.click(btn); // Simulating a click event on the button
  The await keyword is used before userEvent.click(btn) to ensure that the click event is fully processed before moving on to the next line of code
  expect(testFunction).toBeCalled(); // Checking if the mock function has been called
})
```
```
// cgpt case pass:
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Functional Props Testing", async () => {
  const testFunction = jest.fn(); // This will mock the function
  render(<App testFunction={testFunction} />);
  const btn = screen.getByRole("button");
  userEvent.click(btn); // No need to await here
  expect(testFunction).toBeCalled();
});

```

| Syntax                                    | Description                                               | Example                                                |
|-------------------------------------------|-----------------------------------------------------------|--------------------------------------------------------|
| `jest.fn()`                               | Creates a new, empty mock function.                       | `const mockFunction = jest.fn();`                      |
| `jest.fn(implementation)`                 | Creates a mock function with a custom implementation.    | `const mockFunction = jest.fn(() => 'mocked result');` |
| `jest.fn().mockReturnValue(value)`        | Sets a return value for the mock function.                | `const mockFunction = jest.fn().mockReturnValue(42);`  |
| `jest.fn().mockResolvedValue(value)`      | Sets a resolved promise value for the mock function.      | `const mockFunction = jest.fn().mockResolvedValue('resolved value');` |
| `jest.fn().mockRejectedValue(value)`      | Sets a rejected promise value for the mock function.      | `const mockFunction = jest.fn().mockRejectedValue(new Error('rejected value'));` |
| `jest.fn().mockImplementationOnce(fn)`    | Sets a one-time custom implementation for the mock function. | `const mockFunction = jest.fn().mockImplementationOnce((arg) => arg * 2);` |
| `jest.fn().mockReturnValueOnce(value)`    | Sets a one-time return value for the mock function.      | `const mockFunction = jest.fn().mockReturnValueOnce('first call').mockReturnValue('subsequent calls');` |
| `jest.fn().mockResolvedValueOnce(value)`  | Sets a one-time resolved promise value for the mock function. | `const mockFunction = jest.fn().mockResolvedValueOnce('first call').mockResolvedValue('subsequent calls');` |
| `jest.fn().mockRejectedValueOnce(value)`  | Sets a one-time rejected promise value for the mock function. | `const mockFunction = jest.fn().mockRejectedValueOnce(new Error('first call')).mockRejectedValue(new Error('subsequent calls'));` |

**Possible Test Cases:**

1. **Basic Invocation**: Ensure the mocked function is called.
2. **Custom Implementation**: Test that the mocked function behaves as expected with a custom implementation.
3. **Return Values**: Test different return values set for the mocked function.
4. **Promises**: Test the behavior of the mocked function when it returns promises.
5. **One-Time Implementations**: Ensure that one-time implementations or return values work as expected.
6. **Error Handling**: Test how the mocked function handles errors, especially with promises.

1. **Import Necessary Testing Utilities:**
```
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import YourComponent from './YourComponent'; // import the component you want to test
```
2. **Mock the Function using jest.fn():**
```
// Mock the function you want to test
const mockFunction = jest.fn();
```
3. **Render the Component You Want to Test:**
```
test('your test description', () => {
  const { getByTestId } = render(<YourComponent yourFunction={mockFunction} />);
  // Use getByTestId or other queries to get elements for interaction
  // Replace "yourFunction" with the prop name where your function is passed
});
```
4. **Simulate an Interaction That Should Trigger the Function:**
```
const button = getByTestId('your-button-testid'); // replace with your button's test id
fireEvent.click(button); // simulate a click event
// Or any other interaction like typing in an input field, etc.
```
5. **Assert That the Function Was Called As Expected:**
```
expect(mockFunction).toHaveBeenCalled(); // Assert that the function was called
// You can add more specific assertions based on your function's behavior
```

