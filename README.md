# Assignment-CS568-React-

##### 1. Counter using State and Props
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
