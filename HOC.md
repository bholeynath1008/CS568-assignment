* HOC starts with "with";
* The most powerful patterns in React is Higher Order Components (HOC). The purpose of a HOC is to enhance a component `(usually a dumb component)` with extra functionality.
## Case 1:
* Flow: (1) Create HOC, it can add extra props or features (2) Design Component in such a way that it expect props after wrapping with HOC. ie. color: red or blue  here.
BaseComponents or WrappedComponents
* `withColorChangeHOC` is the higher-order component that takes a component(BaseComponents/ WrappedComponent) and a color as arguments and returns a new component.
* `{...props} are originally props of `BaseComponents` ie. `MyComponent` here.

**withColorChange.js**
```
const withColorChangeHOC = (BaseComponents, color) => {
  return (props) => {
    return <BaseComponents {...props} style={{ color }} />;
  };
};

// Apply HOC with this code:

const RedComponent = withColorChangeHOC(MyComponent, 'red');
const BlueComponent = withColorChangeHOC(MyComponent, 'blue');

export { RedComponent, BlueComponent };

```

**MyComponent.js**

```
// expect color is comming here from `withColorChangeHOC`
// Usage:
const MyComponent = ({ style }) => {
  return <div style={style}>Hello, world!</div>;
};
```
`MyComponent` is a functional component that receives `props` including a `style` prop, which it applies to its content.

-------------------------------------------------------------------------------------

## Case 2:

* Background color : green applies to the `Person` component which is pass through the `withPersonHOC` components only. 
* `props` are passed with `EnhancedPersonHOC` HOC components.


**App.js**

```
import React from "react";
import Person from "./components/Person";
import withPersonHOC from "./components/PersonHOC";

// App component using Person component with HOC
const App = () => {
    // We can use the HOC with Person component to enhance functionality
    const EnhancedPersonHOC = withPersonHOC(Person);

    return (
        <div className="App">
            <Person name="John" age={25} />
            <EnhancedPersonHOC name="Alice" age={30} />
        </div>
    );
}

export default App;
```

**Person.js**
```
import React from 'react';

// Person component representing a person with a name and age
const Person = ({ name, age }) => {
    return (
        <div className='person-container'>
            <div> Name: {name}</div>
            <div> Age: {age}</div>
        </div>
    )
}

export default Person;

```

**withPersonHOC.js**
```
import React from 'react';

// Higher Order Component (HOC) that adds functionality to Person component
const withPersonHOC = (BaseComponent) => {
    return (({ name, ...rest }) => {
        // Here, additional functionality can be added to BaseComponent
        return <div style={{backgroundColor:"green"}}><BaseComponent {...rest} /></div>
    })
};

export default withPersonHOC;
```
