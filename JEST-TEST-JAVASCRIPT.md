FreeCodeCamp: [How to Write Unit Tests in React](https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react/)

### jest freecodecamp : jest with javascript

In testing frameworks like Jest or Mocha, The **describe** function takes two arguments: a description (usually a string) of the group of tests, and a function containing the individual test cases or nested describe blocks. 

Commonly used Jest functions like test() or it() typically take two arguments:

1. A string describing the test case or suite.
2. A function containing the test assertions.
3. SetTimeout fn

Example:
```
describe('Math operations', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });

    test('subtracts 5 - 3 to equal 2', () => {
        expect(5 - 3).toBe(2);
    });
});


In this example, we have grouped two tests related to math operations under the description "Math operations".
This provides a clear context for these tests, making it easier to understand their purpose.
```


### Jest Matcher Functions:

1. **toBe**: 
   - Used for primitive values like numbers, strings, and booleans. 
   - It checks if two values are strictly equal.
   - Example:
     ```javascript
     expect(result).toBe(5);
     expect(str).toBe("hello");
     expect(flag).toBe(true);
     ```
     ```javascript
     function sum(a, b) {
         return a + b;
     }
     module.exports = sum;

     test('adds 1 + 2 to equal 3', ()=> {
         expect(sum(1,2)).toBe(3);
     });
     ```

2. **toEqual**: 
   - Primarily used for comparing arrays and objects. 
   - It performs a deep comparison, ensuring that the values and properties of the objects are equal.
   - Example:
     ```javascript
     expect(array).toEqual([1, 2, 3]);
     expect(object).toEqual({ name: "John", age: 30 });
     ```

3. **toBeFalsy**: 
   - Tests whether a value is falsy. 
   - This includes values like `0`, `false`, `null`, `undefined`, `NaN`, and `""`.
   - Example:
     ```javascript
     expect(value).toBeFalsy();
     expect(0).toBeFalsy();
     expect(false).toBeFalsy();
     expect(null).toBeFalsy();
     ```

4. **toBeTruthy**: 
   - Tests whether a value is truthy. 
   - This includes any value that JavaScript considers true, such as non-empty strings, numbers other than 0, arrays, objects, functions, and truthy literals (`true`, `"true"`).
   - Example:
     ```javascript
     expect(value).toBeTruthy();
     expect(1).toBeTruthy();
     expect(true).toBeTruthy();
     expect("hello").toBeTruthy();
     ```

5. **toThrow**: 
   - Used for testing error handling. 
   - It checks whether a function throws an error when executed.
   - Example:
     ```javascript
     expect(() => someFunction()).toThrow();
     expect(() => anotherFunction()).toThrow(Error);
     expect(() => yetAnotherFunction()).toThrow("Specific error message");
     ```

     ```javascript
     function myFunction(input) {
         if (typeof input !== 'number') {
             throw new Error('Invalid Input')
         }
     }

     module.exports = sum;

     test('throws on invalid input', ()=> {
         expect(()=> {
             myFunction(inputValue)  // if myFunction(44) is passed it will throw an error
         }).toThrow();
     });
     ```

### Corresponding Test Cases and Function:

```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', ()=> {
    expect(sum(1,2)).toBe(3);
});

test("two plus two is four", ()=> {
    expect(2 +2).toBe(4);
});

test('Object assignment', ()=> {
    const data = {one: 1}; // create new object
    data['two'] = 2; // Add two value in data
    expect(data).toEqual({one: 1, two:2});
});

test('null is falsy', ()=> {
    const n = null;
    expect(n).toBeFalsy();
});

test('truthy value check', ()=> {
    const n = 1;
    expect(n).toBeTruthy();
});

const myFunction = require('./sum');
test('throws on invalid input', ()=> {
    expect(()=> {
        myFunction(inputValue)  // if myFunction(44) is passed it will throw an error
    }).toThrow();
});
```


### Asynchronous testing;

Source Code/ Function: 

#### Callback fetchData
```
const fetchData = require('./sum');

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter'); // expects data to be 'peanut butter'
            done(); // Calls done to indicate that the test is complete
        } catch (error) {
            done(error); // Calls done with error if there's an issue
        }
    }

    fetchData(callback);
});
```
### Promise fetchPromise/ Async / Await

```
const fetchPromise = require("./sum");

test('the data is peanut butter', async () => {
    const data = await fetchPromise();  Waits for promise resolution
    expect(data).toBe('peanut butter');  Expects resolved data to be 'peanut butter'
});

```

### When Resolved

```
// For resolves
test('the data is peanut butter', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter'); Expects the promise to resolve with 'peanut butter'
});

```

### When Rejected

```
// If data is rejected
test('the fetch fails with an error', () => {
    return expect(fetchPromise()).rejects.toThrow('error');  Expects the promise to reject with an error containing 'error'
});

```

#### Callback fetchData
```
const fetchData = require('./sum');

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter'); // expects data to be 'peanut butter'
            done(); // Calls done to indicate that the test is complete
        } catch (error) {
            done(error); // Calls done with error if there's an issue
        }
    }

    fetchData(callback);
});
```
### Promise fetchPromise/ Async / Await

```
const fetchPromise = require("./sum");

test('the data is peanut butter', async () => {
    const data = await fetchPromise();  // Waits for promise resolution
    expect(data).toBe('peanut butter');  // Expects resolved data to be 'peanut butter'
});

```

### When Resolved

```
// For resolves
test('the data is peanut butter', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter'); // Expects the promise to resolve with 'peanut butter'
});

```

### When Rejected

```
// If data is rejected
test('the fetch fails with an error', () => {
    return expect(fetchPromise()).rejects.toThrow('error'); // Expects the promise to reject with an error containing 'error'
});

```












----------
# Raw file:

## sum.test.js
```
// const sum = require('./sum'); // import sum function here using require
// test('description', testFunction)
/* 
test('adds 1 + 2 to equal 3', ()=> { // "test" is global function to test, .toBe means result should be 3.
    expect(sum(1,2)).toBe(3);
});
 */
/* 
toBe: it is for primitives values like number, string, boolean 
toEqual: is for array and objects
toBeFalsy: test "n" to be falsy value (if n = 0, false, it should be falsy)
toBeTruthy: test "n" to be truthy value (if n =2, true, any truthy value)
toThrow: For error handling

*/

// No function is called here test itself
/* 
test("two plus two is four", ()=> {
    expect(2 +2).toBe(4);
})
*/

// toBeEqual
/* test('Object assignment', ()=> {
    const data = {one: 1}; // create new object
    data['two'] = 2; // Add two value in data
    expect(data).toEqual({one: 1, two:2});
});

 */

//  test "n" to be falsy value (if n = 0, false, it should be falsy)
/* test('null is falsy', ()=> {
    const n = null;
    expect(n).toBeFalsy();
}); */

//  test "n" to be truthy value (if n = 0, false, it should be falsy)
/* test('null is falsy', ()=> {
    const n = 1;
    expect(n).toBeTruthy();
}); */

/* const myFunction = require('./sum');
test('throws on invalid input', ()=> {
    expect(()=> {
        myFunction(inputValue)  // if myFunction(44) is passed it will throw an error
    }).toThrow();
})
 */
// 

/* 
// Callback fetchData
const fetchData = require('./sum');

test('the data is peanut butter', done => { // done is parameter here. ie. is used for callback function to test
    function callback(data) {
        try {
            expect(data).toBe('peanut butter'); // except (data) ie. parameter that .toBe('peanut butter')
            done(); // it is important to call done function to say it is called.
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
})
*/

// for resolves
const fetchPromise = require("./sum");
/* 
test('the data is peanut butter', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter');
});
 */
//  if data is rejected
/* 
test('the fetch fails with an error', () => {
    return expect(fetchPromise()).rejects.toThrow('error');
})
*/

test('the data is peanut butter', async () => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
});
```
## sum.js

```
function sum(a, b) {
    return a + b;
}
module.exports = sum;

// by exporting sum function make it available to other files.


function myFunction(input) {
    if (typeof input !== 'number') {
        throw new Error('Invalid Input')
    }
}

module.exports = sum;


//  callback function
function fetchData(callback) {
    setTimeout(()=> {
        callback('peanut butter'); // output of this functin is callback('peanut butter') after 1 second. so, test peanut butter is passed as paramter or not.
    }, 1000)
} 

module.exports = fetchData;

function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve('peanut butter'), 1000);
    })
}

module.exports = fetchPromise;
```


