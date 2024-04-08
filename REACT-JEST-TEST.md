code step by step: video (5)

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
