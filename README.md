# Assignment-CS568-React-
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

* When you change state, if the state is object, you have to copy it. Otherwise react will not know it was changed(when updating Age)

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

