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
### useEffect, Clean up function, Lifecycle methods, StrictMode
source: https://dmitripavlutin.com/react-useeffect-explanation/#4-side-effect-cleanup and https://dev.to/nibble/what-is-useeffect-hook-and-how-do-you-use-it-1p9c#effect and https://www.w3schools.com/react/react_useeffect.asp
* useEffect hook is part of the react hooks API. If you are familiar with react life cycles, useEffect hook is equivalent to life cycle methods componentDidMount, componentDidUpdate and componentWillUnmount combined.useEffect hook was developed to address some of the challenges posed by life cycle methods of ES6 class components.
* A functional React component uses props and/or state to calculate the output. If the component makes calculations that don't target the output value, then these calculations are named side-effects.
* Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.

```
* useEffect() hook is use to perform side effect tasks.
useEffect() arguments
useEffect() hook accepts 2 arguments: 
useEffect(callback[, dependencies]);
* callback is a function that contains the side-effect logic. callback is executed right after the DOM update.
* dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.
Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect().
```

```
import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Ram")

  useEffect(()=>{
    console.log("Component Mounted")
  }, [count]);

  function updateCount() {
    setCount(count + 1);

  }

  function updateData() {
    setData("Sita");
  }

  return (
    <div className="App">
      <h2>Count is: {count}</h2>
      <h2>Data is: {data}</h2>

      <button onClick={() => updateCount()}>Update Counter</button>
      <button onClick={() => updateData()}>Update Data</button>

    </div>
  )
}

export default App;
```
// * UseEffect
Here are the three alternatives of useEffect:
1. componentDidMount: This is the equivalent of useEffect with an empty dependency array ([]). It's called once when the component mounts, after the first render.
2. componentDidUpdate: This is the equivalent of useEffect with a dependency array that contains some values. It's called after every render, but only if at least one of the dependencies has changed.
3. componentWillUnmount: This is the cleanup function that you can return from useEffect. It's called when the component unmounts, before it's removed from the DOM. You can use this alternative to unsubscribe from events or clear some state. It is effect cleanUP.

When page render first useEffect hook is also rendered in all cases:
Case 0:  When we have no dependencies, the useEffect will run if any state is updated, initially useEffect will run first time.
Case 1: if you want your use effect to run all the time, no dependicies is provided make it empty, this will run on every changes.
Case 2: if you dont want your use effect to run all the time, the empty array[], this will run only once.
Case 3: if you want to run when state or props changed, provide them inside array [state1, state2, props1, props2...]
case 3.1: if you provide [count] it will keep on running while clicking the state change, counter keep on changing on each click
Case 3.2: if you provide [data] it will run on first click only because when data changes to "Sita", there is no change and dont run.

```
import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);

  }
  useEffect(() => {
    // Logging message to console when component mounts
    console.log("Component Mounted");
    // Setting a timeout to update the count state variable every 1000ms (1s)
    let timer = setTimeout(() => {
      updateCount();
    }, 1000);
    // Returning a cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timer)

  });

  return (
    <div className="App">
      <h2>Count is: {count}</h2>

      <button onClick={() => updateCount()}>Update Counter</button>

    </div>
  )
}
export default App;
```
//  Effect Cleanup:
Some effects require cleanup to reduce memory leaks.
Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
We do this by including a return function at the end of the useEffect Hook.
Case 1: if [count]/ dependencies provided it will keep on updating on each count update
Case 2: if [] it will keep on updating only once and stop after mounted.
Case 3: if no dependencies it will keep on updating, but stop after it mounted.



// * Strict Mode
When running in React's Strict Mode, certain lifecycle methods and hooks are intentionally called twice during the initial rendering of a component.
1. On First rendering pass : React does not make any changes to the DOM, but it executes the component code and captures any errors or warnings that are thrown.This is helpful for catching errors early on and for debugging any issues that may arise.

2. On Second rendering Pass; React applies any necessary changes to the DOM and finalizes the rendering of the component. This helps to ensure that the component is fully up-to-date and that any changes or updates are reflected in the UI.
It's important to note that not all lifecycle methods and hooks are executed twice in React's Strict Mode. Only certain methods, such as render(), componentDidMount(), componentDidUpdate(), and componentWillUnmount(), are affected by this behavior.

### React MEMO
source: https://www.youtube.com/watch?v=P_YwL0B8k7k&ab_channel=YoshitaJain  ,  https://www.w3schools.com/react/react_memo.asp
```
import React, { useEffect, useState } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  function muntiply() {
    console.log("test memo");
    return add * 10;
  }

  return (
    <div className="App">
      <h1>Learning MeMo</h1>
      <div> {muntiply()}</div>
      <h2>Add: {add}</h2>
      <button onClick={() => setAdd(add + 1)}>ClickToAdd</button>
      <h2>Minus: {minus}</h2>

      <button onClick={() => setMinus(minus - 1)}>ClickToMinus</button>
    </div>
  )
}
export default App;
```

// Muntiply function is related here with add state variable. It is called when add button is called. But it updates while we clicks on Minus button also. This keep on called while calling substract. console.log("test memo will test")
// To prevent this contionus updating we use test memo and update when the mentioned state is changed.
// To fix this, we can use memo.
// Use memoto keep the Todos component from needlessly re-rendering.

```
import React, { useEffect, useMemo, useState } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(function muntiply() {
    console.log("test memo");
    return add * 10;
  }, [add]);

  return (
    <div className="App">
      <h1>Learning MeMo</h1>
      <div> {multiplication}</div>
      <h2>Add: {add}</h2>
      <button onClick={() => setAdd(add + 1)}>ClickToAdd</button>
      <h2>Minus: {minus}</h2>

      <button onClick={() => setMinus(minus - 1)}>ClickToMinus</button>
    </div>
  )
}
export default App;
```
//  Using memo will cause React to skip rendering a component if its props have not changed.
// The multiply function is a useMemo hook in React, which means it will automatically be called and its return value will be memoized whenever its dependencies change[add].

















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

### useContext
To share data between multiple child components using useContext, you can follow these steps:

Create a context object using the createContext() function.

In the parent component, define the state variables that you want to share between the child components.

Wrap the child components that need to access the state variables inside the Context.Provider component. Set the value of the Provider to an object that contains the state variables and any functions that update the state.

In the child components that need to access the state variables, use the useContext() hook to get the value of the context object.

Here's an example implementation:

```
import React, { createContext, useContext, useState } from 'react';

// Step 1: create a context object
const MyContext = createContext();

function Parent() {
  // Step 2: define the state variables
  const [name, setName] = useState('John');
  const [age, setAge] = useState(30);

  return (
    // Step 3: wrap child components in Context.Provider
    <MyContext.Provider value={{ name, setName, age, setAge }}>
      <Child1 />
      <Child2 />
      <Child3 />
      <Child4 />
    </MyContext.Provider>
  );
}

function Child1() {
  // Step 4: access context values using useContext
  const { name } = useContext(MyContext);
  return <div>Child 1: {name}</div>;
}

function Child2() {
  return <div>Child 2</div>;
}

function Child3() {
  // Step 4: access context values using useContext
  const { name, age } = useContext(MyContext);
  return (
    <div>
      Child 3: {name} is {age} years old
    </div>
  );
}

function Child4() {
  // Step 4: access context values using useContext
  const { age } = useContext(MyContext);
  return <div>Child 4: age is {age}</div>;
}

```
### useRef HOOK Counter App

* It can be used to access a DOM element directly.
* The useRef hook itself does not trigger a re-render. 
* When you update the value of a ref created with useRef, React does not automatically re-render the component. 
* This is because the purpose of useRef is primarily for storing mutable values or references between renders without triggering a re-render.
```
import { useRef } from "react";
import { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(0);

  // function timer
  const handleStart = () => {
  intervalRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
  }

  return (
    <div className="App">
      <h2>timer: {timer}</h2>
      <button onClick={handleStart}>START</button> <br />
      <button onClick={handleStop}>STOP</button>
    </div>
  );
}

export default App;

```
