# Assignment-CS568-React-
###  Best Resources:
* https://react.dev/learn/
* https://react.dev/learn/thinking-in-react
--------
### Examples of state in functional components:
* 1. Counting component:
```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

```
In this example, the useState hook is used to declare a state variable count with an initial value of 0. When the button is clicked, the handleClick function updates the state by calling setCount with the new value of count + 1. The component then re-renders with the updated count value.

* 2. Input field component:
```
import React, { useState } from 'react';

function InputField() {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

```
In this example, the useState hook is used to declare a state variable inputValue with an initial value of an empty string. When the input field changes, the handleChange function updates the state by calling setInputValue with the new value of event.target.value. The component then re-renders with the updated input value.

* 3. Toggle component:
```
import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <button onClick={handleClick}>{isOn ? 'ON' : 'OFF'}</button>
    </div>
  );
}

```
In this example, the useState hook is used to declare a state variable isOn with an initial value of false. When the button is clicked, the handleClick function updates the state by calling setIsOn with the opposite value of isOn. The component then re-renders with the updated toggle state.

### Passing data/ Communication in React between components and siblings:

* 1. Passing Data from Parent to Child:
a. Using Props: You can pass data from the parent component to the child component by passing it as a prop. To do this, you need to define the prop in the child component and pass the data as a value of that prop in the parent component.

b. Using Context: Another way to pass data from a parent component to a child component is by using Context. Context provides a way to share data between components without having to pass the data explicitly at every level of the component tree.

* 2. Passing Data from Child to Parent:
a. Using Callback Functions: You can pass a callback function from the parent component to the child component as a prop. The child component can then call this function with the data that needs to be passed back to the parent component.

In the parent component:
```
export const ChildDataContext = React.createContext();

function ParentComponent() {
  const [data, setData] = useState('');

  return (
    <ChildDataContext.Provider value={{ data, setData }}>
      <ChildComponent />
      <p>Data from child component: {data}</p>
    </ChildDataContext.Provider>
  );
}

```

In the child component:
```
function ChildComponent() {
  const { setData } = useContext(ChildDataContext);

  function handleClick() {
    setData('Data from child component');
  }

  return <button onClick={handleClick}>Click me</button>;
}

```
b. Using React Context API: Another way to pass data from a child component to a parent component is by using the React Context API. You can define a context in the parent component and then use the useContext hook in the child component to access the context and pass the data back to the parent component.

* 3. Passing Data from Sibling to Siblings:

In React, passing data from sibling to sibling can be achieved by lifting the state up to a common ancestor component and passing it down as props. Here's an example:


```
import React, { useState } from 'react';

function Parent() {
  const [data, setData] = useState('');

  function handleDataChange(newData) {
    setData(newData);
  }

  return (
    <div>
      <ChildA onDataChange={handleDataChange} />
      <ChildB data={data} />
    </div>
  );
}

function ChildA(props) {
  function handleChange(event) {
    props.onDataChange(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

function ChildB(props) {
  return (
    <div>
      <p>Data from Child A: {props.data}</p>
    </div>
  );
}

```



















--------
#### 1. Counter using State and Props

file: App.js
```
import React from "react";
import CounterComponent from "./Components/CounterComponent.js";


function App() {
const number = 0;  
  return (
    <div className="App">
  <CounterComponent value = {number} />
    </div>
  );
}


export default App;

```
file: CounterComponent.js
```
import React from "react";
import { useState } from "react";

function CounterComponent(props) {
    // console.log(typeof props.value);
    const [value, setValue] = useState(props.value);


    return (
        <>
            <div>Hello Counter</div>
            <h2>{value}</h2>
            <button onClick={() => setValue(value + 1)}>ClickToIncreaseBy1</button>
        </>

    )
}
export default CounterComponent;

```

* Another Changes you can make this by separating setValue() function
```
function CounterComponent(props) {
    // console.log(typeof props.value);
    const [value, setValue] = useState(props.value);
    function updateCounterBy1() {
        setValue(value + 1)
    }

    return (
        <>
            <div>Hello Counter</div>
            <h2>{value}</h2>
            <button onClick={updateCounterBy1}>ClickToIncreaseBy1</button>
        </>

    )
}
```
* Changes in Output before and after increasing by 1
```
import React from "react";
import { useState } from "react";

function CounterComponent(props) {
    // console.log(typeof props.value);
    const [value, setValue] = useState(props.value);
    function updateCounterBy1() {
        console.log("Before Update",value); // 0 // 1
        setValue(value + 1)
        console.log("After Update",value); // 0 //1

    }

    return (
        <>
            <div>Hello Counter</div>
            <h2>{value}</h2>
            <button onClick={updateCounterBy1}>ClickToIncreaseBy1</button>
        </>

    )
}
export default CounterComponent;

//Output will be like:
// 0 0 1 1 2 2 (same for both before and after update)

```

#### 1.2. Increase Age Counter using State and Props <u>Array list Object Age Counter</u>

* When you change state, if the state is Object or Array, you have to copy it. Otherwise react will not know it was changed(when updating Age)

file: App.js

```
import React from "react";
import CounterComponent from "./Components/CounterComponent.js";

function App() {
  // An array of student objects with name, usn, and age properties
  const studentInfo = [
    { name: "Saroj", usn: 123, age: 15 },
    { name: "Bhote", usn: 124, age: 14 },
    { name: "Bholey", usn: 126, age: 18 },
  ];

  return (
    <div className="App">
      {/* Render the CounterComponent and pass studentInfo array as props */}
      <CounterComponent value={studentInfo} />
    </div>
  );
}

export default App;

```

file: CounterComponent.js

```
// Import React and useState
import React, { useState } from "react";

// Define the CounterComponent function component
function CounterComponent(props) {
    // Declare a state variable called "OneStudentsDetails" and a function to update it
    const [OneStudentsDetails, setStudentCourses] = useState(props.value[0]); 

    // Define a function called "clickToIncrease" that updates the age property of the "OneStudentsDetails" object by 1 when the button is clicked
    function clickToIncrease() {
        console.log(OneStudentsDetails);
        const studentsCopy = { ...OneStudentsDetails }; //Creating copy of Object
        studentsCopy.age = studentsCopy.age + 1;
        setStudentCourses(studentsCopy);
    }

    // Render the CounterComponent with some JSX
    return (
        <>
            <div>Hello Counter</div>
            <h3>Student Name is {props.value[0].name} courses is {OneStudentsDetails.age}</h3>
            <button onClick={clickToIncrease}>ClickToIncreaseCourseBy1</button>
        </>
    );
}

// Export the CounterComponent function component as the default export
export default CounterComponent; 
```
#### 2 Updater function it will update by 3.
* React batches state updates

```
import { useState } from 'react';
import './App.css';

function App() {
  const [cntr, setcntr] = useState(0);

  return (
    <div className="App">
      <p>Counter: {cntr}</p>
      <button onClick={
        () => {
          setcntr(cntr => cntr + 1);
          setcntr(cntr => cntr + 1);
          setcntr(cntr => cntr + 1);
        }
      }>+3</button>
    </div>
  );
}

export default App;
```

#### Update value on Change / Key press and display (event handlers)

```
import { useState } from "react"
export default function SearchBar() {
  // State hook to store student value
  const [student, setStudent] = useState(null);

  // Function to update student state on input change
  function updateStudentOnPress(event) {
    setStudent(event.target.value);
  }

  return (
    <div className="SearchBar">
      {/* Display the value of student */}
      <h1>{student}</h1>

      {/* Input field for searching */}
      <input
        type="text"
        onChange={updateStudentOnPress}
        placeholder="Search...."
        className="searchBarInput"
      />
      <br />

      {/* Checkbox for showing only existing students */}
      <input type="checkbox" className="searchBarCheckBox" />
      <label>Only show existing students</label>
    </div>
  );
}

```
