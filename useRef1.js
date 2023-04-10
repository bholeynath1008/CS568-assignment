// Source: yoshita- youtube 

// [count, dispatch]: This is an array destructuring syntax. It allows you to unpack values from an array or object into separate variables. In this case, the useReducer hook returns an array with two values: count and dispatch. The first value count is the current state value, and the second value dispatch is a function that allows you to update the state.

// useReducer: This is a React hook that accepts two arguments: a reducer function and an initial state value. The useReducer hook returns an array with two values: the current state and a dispatch function.

// reducer: This is a pure function that takes in the current state and an action object and returns a new state. The reducer function is called by the dispatch function.

// initialState: This is the initial state value that will be used when the component mounts for the first time.

import React from "react";

// Define the main App component
function App() {
  // Render the Counter component inside the App component
  return (
    <div>
      <Counter />
    </div>
  )
}

// Define the initial state of the reducer
const initialState = 0;

// Define the reducer function, which accepts the current state ie. initialState = 0 now and an action(incremnet, decrement), and returns the new state. 
const reducer = (state, action) => {
    // Use a switch statement to determine which action to perform
  switch (action) {
    case "Increment":
      return state + 1
    case "Decrement":
      return state - 1
    default:
      return state
  }
}

// Define the Counter component, which uses the reducer to manage state and dispatch actions
// dispatch will call reducer function
// dispatch will provide action to reducer function to perform which action increment or decrement
function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  // Render the Counter component with a count display and two buttons to increment and decrement the count
  return (
    <div className="App">
      <div>count: {count}</div>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
  )
}

// Export the main App component
export default App;
