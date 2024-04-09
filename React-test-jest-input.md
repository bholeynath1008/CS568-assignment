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

## Testing Input Name:
```
```
