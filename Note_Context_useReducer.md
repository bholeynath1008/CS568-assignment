```
{} is used to create a JavaScript object literal.
{{}} is used in JSX to embed a JavaScript object as a prop or any other JavaScript expression that needs to be evaluated.
```
---
### useContext 
**Step 1: Create Context (AppContext.js)**     
```
    import { createContext } from "react";
    const AppContext = createContext();
    export default AppContext
```

**Step 2: Provide the Context (App.js)**

**Case 2.1** If single object or string is to share in context
```
    <AppContext.Provider value={todoListData}> or <AppContext.Provider value= "Saroj"> // To object or string in context
      <ChildComponent />
      <TodoAddList />
    </AppContext.Provider>
```
**Case 2.2** To share useState `variable` (mainData) and useState `function` (setMainData)
```
    <AppContext.Provider value={{mainData, setMainData}}> // Share as a object
      <ChildComponent />
      <TodoAddList />
    </AppContext.Provider>
```

**Step 3: Consume the Context (ChildComponent.js)**
```
const ChildComponent = () => {
  const contextData = useContext(AppContext);

  return <p>{contextData}</p>;
};

```
---
## Another way to use Context 
* By directly Provide context with value using `MyContextProvider` Component.
  
**Step 1 :**`File: AppContext.js`

 // Here, the 'children' prop represents the content passed between the `<MyContextProvider>`and `</MyContextProvider>` tags.
 // You can access and render the children inside the component.
 ({ children }) destructure the `children prop` from the props object passed to MyContextProvider.
```
//Create Context
import { createContext } from "react";
const AppContext = createContext();

// MyContextProvider Component, Provide Context 
const MyContextProvider = ({children}) => {

    // Create state to store the main data (mainData) using useState hook
    const [mainData, mainData] = useState(initialData)

    // Return the AppContext.Provider with the 'mainData', setMainData state as the value
    return (
        <AppContext.Provider value ={{mainData, setMainData}}>
            {children} // This expression is used to render the `content` that was passed as `children prop` to the MyContextProvider.
        </AppContext.Provider>
    );
};

export {MyContextProvider, AppContext};

```

**Step 2 :** `File: App.js`

* context in App.js or index.js

// Directly Provide context with value using MyContextProvider
```
<MyContextProvider>
      <ChildComponent />
      <TodoAddList />
</MyContextProvider>
```
or
```
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>
```
===
## useReducer & useContext (step 1 to step 3)
Here are some reasons why useReducer is used:
* `Complex State Logic:` When the state of a component becomes more complex and involves multiple variables that need to be updated together based on different actions, using useState for each individual piece of state can lead to a lot of boilerplate code and potential bugs. useReducer allows you to combine related state variables and their update logic into a single reducer function, making the code more concise and easier to manage.

* `Separation of Concerns:` useReducer encourages separating the state management logic from the UI components. The reducer function can be defined outside the component, making it easier to test and reuse the logic in different parts of the application.

* `Using with useContext:` When combined with useContext, useReducer becomes even more powerful as it allows you to manage global state efficiently and share state between different components without the need for prop drilling.

---
Folder Structure:
```
src/
  |- components/
  |   |- ChldComponent.js
  |- App.js
  |- context/
  |   |- MyContext.js
  |
  |- reducers/
  |   |- reducer.js or rootReducer.js
  |
  |- index.js
```

### Step 1 - App.js:
This is the top-level component where you're rendering the `MyContextProvider` and the TodoList component as its child. This allows the `TodoList` component and its descendants to access the shared `state` and `dispatch` function provided by the `context`.

```
function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <TodoList />
      </MyContextProvider>
    </div>
  );
}
```

### Step 2 - reducer.js:
* You can rename `reducer` function.
This is a separate file where you define the `reducer` function. The `reducer` is responsible for handling state updates based on different `actions`. It takes the current `state` and an `action`, then returns the updated state based on the action's type. This file `exports` the `reducer` function to be used in other parts of the application.

```
// Initial state for this specific reducer
const initialState = {
    count: 0,
    // other state properties...
  };
  
  // Reducer function for this specific reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      // other cases...
      default:
        return state;
    }
  };
  
  export default reducer;
```
### Step 3 - MyContext.js:
This is another separate file where you create a React context called `MyContext`. Inside the `MyContextProvider` component, you use the `useReducer` hook to manage the state based on the `reducer` function defined in `reducer.js`. The `initial state` is provided, and the `resulting state` and `dispatch function` are passed down as values through the `context` to all the child components `wrapped` by `MyContextProvider`.

```
import { createContext, useReducer } from 'react';
import reducer from '../reducers/reducer';

const initialState = {
  // Your initial state here...
};

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };

```
* Complete Implementation of **useReducer** and **useContext** hook
```
import React, { createContext, useContext, useReducer } from 'react';

// Step 1: Create a Context
const MyContext = createContext();

// Step 2: Create a reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Step 3: Create the Context component
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

// Step 4: Create a child component that consumes the context
const ChildComponent = () => {
  const { state, dispatch } = useContext(MyContext);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Step 5: Render the components using the Context
const App = () => {
  return (
    <div>
      <Context>
        <ChildComponent />
      </Context>
    </div>
  );
};

export default App;

```
