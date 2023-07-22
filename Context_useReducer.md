### When working with the Context API in React, there are three main steps involved in setting up and using context:

* Step 1: Create the Context

The first step is to create a new context using the `createContext()` function provided by React. This function returns two components: `Provider` and `Consumer`, 
but the Consumer component is rarely used directly in modern React applications. Instead, we typically use the `useContext hook` to consume the context.

* Step 2: Provide the Context

After `creating` the context, you need to wrap the `components` that need access to the context with the `Provider component`. The Provider component accepts a value `prop`, 
which will be the value available to the consuming components. By wrapping components with the Provider, you create a `"context scope"` where the context is available to all the components within that scope.
* Step 3: Consume the Context

Finally, you can consume the context in the desired components by using the `useContext` hook or the Consumer component. 
The `useContext` hook is the recommended approach since it provides a more concise and straightforward way to consume the context. 
By using the useContext hook, you can access the value provided by the `Provider component` and use it within your component.

```
import React, { createContext, useContext } from 'react';

// Step 1: Create the Context
const MyContext = createContext();

// Step 2: Provide the Context
const App = () => {
  const contextValue = 'Hello, World!';

  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

// Step 3: Consume the Context
const ChildComponent = () => {
  const contextData = useContext(MyContext);

  return <p>{contextData}</p>;
};

export default App;

```
```
{} is used to create a JavaScript object literal.
{{}} is used in JSX to embed a JavaScript object as a prop or any other JavaScript expression that needs to be evaluated.
```
### Case 2:
```
* 1. Create Context: **const AppContext = createContext("")**;
* 2. Provide Context: **<AppContext.Provider value={{mainData, setMainData}}>**
* 3. Use Context: ** const data = useContext(AppContext);**

```
-------*---------
The context is created as a standalone context named `MyContext`, and it is used directly within the `ParentComponent` and `ChildComponent`. 
The `useReducer hook` is used within the `ParentComponent` to manage state, and the `context value` is provided through the `MyContext.Provider component`.
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

// Step 3: Create a parent component that provides the context
const ParentComponent = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <ChildComponent />
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

// Step 5: Render the parent component
const App = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};

export default App;

```
 A `custom component called Context` is created, which `encapsulates` the creation and management of the `context`. 
 The `Context` component accepts children as a `prop` and uses the `useReducer` hook to manage state. 
 The context value is provided through the `MyContext.Provider component`, which is rendered within the `Context component`.
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
