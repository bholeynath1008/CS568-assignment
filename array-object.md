
### Array Methods Cheatsheet

### map()
Calls a function on each element of an array and returns a new array with the results.
```javascript
const newArray = array.map((element) => {
    // do something with element
    return result;
});
```

### filter()
Returns a new array with elements that pass a specified condition.
```javascript
const filteredArray = array.filter((element) => {
    // return true to keep the element, false to remove it
    return condition;
});
```

### reduce()
Executes a reducer function on each element of the array, resulting in a single output value.
```javascript
const result = array.reduce((accumulator, currentValue) => {
    // perform some operation and return the result
    return updatedAccumulator;
}, initialValue);
```

### forEach()
Executes a provided function once for each array element.
```javascript
array.forEach((element) => {
    // do something with element
});
```

### find()
Returns the first element in the array that satisfies a provided condition.
```javascript
const foundElement = array.find((element) => {
    // return true if element satisfies the condition
    return condition;
});
```

### findIndex()
Returns the index of the first element in the array that satisfies a provided condition, or -1 if not found.
```javascript
const index = array.findIndex((element) => {
    // return true if element satisfies the condition
    return condition;
});
```

### indexOf()
Returns the index of the first occurrence of a specified element in the array, or -1 if not found.
```javascript
const index = array.indexOf(element);
```

### some()
Checks if at least one element in the array satisfies a condition.
```javascript
const hasElement = array.some((element) => {
    // return true if element satisfies the condition
    return condition;
});
```

### every()
Checks if all elements in the array satisfy a condition.
```javascript
const allElementsMatch = array.every((element) => {
    // return true if element satisfies the condition
    return condition;
});
```

### push()
Adds one or more elements to the end of an array and returns the new length of the array.
```javascript
const newLength = array.push(element1, element2, ...);
```

### pop()
Removes the last element from an array and returns that element.
```javascript
const removedElement = array.pop();
```

### slice()
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
```javascript
const newArray = array.slice(start, end);
```

### splice()
Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
```javascript
const removedElements = array.splice(start, deleteCount, item1, item2, ...);
```

## Object Methods Cheatsheet

### Object.keys()
Returns an array of a given object's own enumerable property names.
```javascript
const keysArray = Object.keys(object);
```

### Object.values()
Returns an array of a given object's own enumerable property values.
```javascript
const valuesArray = Object.values(object);
```

### Object.entries()
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
```javascript
const entriesArray = Object.entries(object);
```

### Object.assign()
Copies the values of all enumerable own properties from one or more source objects to a target object.
```javascript
const mergedObject = Object.assign({}, obj1, obj2);
```

### Object.hasOwnProperty()
Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
```javascript
const hasProperty = object.hasOwnProperty(property);
```

Remember to replace `array`, `object`, `element`, `condition`, etc., with your actual array, object, element, and conditions.
---------------
## Destructure

### Destructuring an object:
```
// Object to destructure
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Destructuring syntax
const { name, age, city } = person;

console.log(name); // John
console.log(age); // 30
console.log(city); // New York
```

### Destructuring an array:
// Array to destructure
const colors = ['red', 'green', 'blue'];

// Destructuring syntax
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // red
console.log(secondColor); // green
console.log(thirdColor); // blue

### Destructuring with default values:
```
// Object to destructure
const person = {
  name: 'John',
  age: 30
};

// Destructuring with default value
const { name, age, city = 'New York' } = person;

console.log(city); // New York

```
### Nested object destructuring:
```
// Nested object to destructure
const person = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Nested destructuring syntax
const { name, age, address: { city, country } } = person;

console.log(city); // New York
console.log(country); // USA
```

### Rest syntax with object and array destructuring:
```
// Object to destructure
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA'
};

// Rest syntax in object destructuring
const { name, ...rest } = person;

console.log(rest); // { age: 30, city: 'New York', country: 'USA' }

// Array to destructure
const numbers = [1, 2, 3, 4, 5];

// Rest syntax in array destructuring
const [firstNumber, secondNumber, ...restNumbers] = numbers;

console.log(restNumbers); // [3, 4, 5]

```
