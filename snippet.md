
# JavaScript Notes

## Sorting

### Sort by Name/ String
```javascript
const sortedDataByName = [...data].sort((a, b) => a.name.localeCompare(b.name));
const sortedDataByName = data.slice().sort((a, b) => a.name.localeCompare(b.name));
strings.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
```
```javascript
// Without LocalCompare
strings.sort((a, b) => b > a ? 1 : b < a ? -1 : 0); // Descending alphabetical order
console.log(strings); // Output: [ 'date', 'cherry', 'banana', 'apple' ]
ASCENDING:strings.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : a.toLowerCase() < b.toLowerCase() ? -1 : 0);
DESCENDING: strings.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? 1 : a.toLowerCase() > b.toLowerCase() ? -1 : 0);
```

### Sort by Number
```javascript
const items = [
    { id: 1, value: 50 },
    { id: 2, value: 100 },
    { id: 3, value: 25 }
];

// Sort by 'value' property in ascending order
items.sort((a, b) => a.value - b.value);
console.log(items);
// Output: [ { id: 3, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 100 } ]

// Sort by 'value' property in descending order
items.sort((a, b) => b.value - a.value);
console.log(items);
// Output: [ { id: 2, value: 100 }, { id: 1, value: 50 }, { id: 3, value: 25 } ]
```

## Copying Objects

### Shallow Copy
Suitable when dealing with simple objects, better for objects or arrays that don't contain nested objects.

1. **Creating a Shallow Copy**
   - **Arrays:** Use `slice()`, `concat()`, or the spread operator (`[...]`).
   - **Objects:** Use `Object.assign()` or the spread operator (`{...}`).

```javascript
const copyData = data.map(d => ({ ...d }));  // shallow copy of an array of objects.
```

### Deep Copy
Required when working with complex objects.

```javascript
// Creating a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

// Creating a deep copy using structuredClone
const deepCopy = structuredClone(original);
```

## Maps

### Create a Map
```javascript
const myMap = new Map();
```

### Store an Array of Objects in the Map
```javascript
const myMap = new Map();

const arrayOfObjects = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: Alice Johnson }
];

// Store each object in the map with the 'id' as the key
arrayOfObjects.forEach(obj => myMap.set(obj.id, obj));
```

### Loop through the Map
```javascript
// Loop through the map and log the key-value pairs
for (let [key, value] of myMap) {
    console.log(`Key: ${key}, Value:`, value);
}
```

### Clear the Map
```javascript
myMap.clear();
console.log(myMap.size); // Output: 0
```

### Delete a Specific Element from the Map
```javascript
myMap.delete(2); // Deletes the entry with key '2'
console.log(myMap.has(2)); // Output: false
```

### Filtering Using a Loop
```javascript
const filteredMap = new Map();

for (let [key, value] of myMap) {
    if (value.name.includes('John')) {
        filteredMap.set(key, value);
    }
}

console.log(filteredMap);
```

### Filtering by Converting the Map to an Array
```javascript
const filteredMap = new Map([...myMap].filter(([key, value]) => value.name.includes('John')));
console.log(filteredMap);
```

### Size of the Map
```javascript
console.log(myMap.size); // Output: 2
```

### Set Method
```javascript
myMap.set(3, 'three');
```

### Get Method
The `get` method retrieves the value associated with the specified key.
```javascript
console.log(myMap.get(1)); // Output: 'one'
```

### Has Method
The `has(key)` method checks if a key exists in the Map.
```javascript
console.log(myMap.has(2)); // Output: true
```

### Iterating Over the Map
**forEach(callback):** Executes a provided function once for each key-value pair.
```javascript
myMap.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});
```

### Additional Iteration Methods
- **keys():** Returns an iterator for the keys.
```javascript
for (let key of myMap.keys()) {
    console.log(key);
}
```
- **values():** Returns an iterator for the values.
```javascript
for (let value of myMap.values()) {
    console.log(value);
}
```
- **entries():** Returns an iterator for the [key, value] pairs.
```javascript
for (let [key, value] of myMap.entries()) {
    console.log(`Key: ${key}, Value: ${value}`);
}
```

### Spread Syntax
You can use the spread syntax to convert a Map into an array of [key, value] pairs.
```javascript
const mapArray = [...myMap];
console.log(mapArray);
```

### Destructuring Assignment
You can use destructuring to extract values from a Map.
```javascript
const [firstEntry] = myMap;
console.log(firstEntry); // Output: [key, value]
```
