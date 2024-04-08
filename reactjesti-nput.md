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
