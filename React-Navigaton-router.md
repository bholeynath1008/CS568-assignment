useSearchParams link: https://www.youtube.com/watch?v=OjNyNFTsB68
# React Navigation
UNDERSTAND:
### 1. Query Params in React Router:
When using React Router, you can define dynamic segments in your route paths using colons (`:`) followed by the parameter name. For example, in the route `"/user/:id"`, `:id` is a placeholder for the actual user ID.

### 2. Getting Current Location in React Router:
React Router provides a hook called `useLocation()` which allows you to access the current location object. This includes information such as pathname, search, hash, state, and key.
{ "pathname": "/user/8", "search": "", "hash": "", "state": "Saroj", "key": "fmyh2y0z" }

### 2.1. Example of Current Component Location:
The current location object may look like this:
```
{
  "pathname": "/user/8",
  "search": "",
  "hash": "",
  "state": "Saroj",
  "key": "fmyh2y0z"
}
```
### 3. Passing Data via NavLink and Consuming it Using `useLocation()`

You can pass data via `NavLink` using the `to` prop and an object containing the data you want to pass. In the component where you want to consume the passed data, you can use the `useLocation()` hook to access the location object and retrieve the passed state.

### 4. Passing Data via NavLink

When using `NavLink`, you can pass data by providing an object with the state property in the `to` prop.

```jsx
import { NavLink } from 'react-router-dom';

<NavLink
  to={{
    pathname: '/destination',
    state: { yourData: 'someValue' }
  }}
>
  Link Text
</NavLink>
```
### 5. Consuming Passed Data Using `useLocation()`

In the component where you want to consume the passed data, you can use the `useLocation()` hook from `react-router-dom`.

```jsx
import { useLocation } from 'react-router-dom';

const MyComponent = () => {
  const location = useLocation();
  const { yourData } = location.state;

  // Now you can use yourData in your component
};
```
-----------------------------------------
CODE EXAMPLE: ? QUERY PARAMS
-----------------------------------------

#### App.js
```
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Users from './components/Users';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```
#### Users.js
```
import React from 'react'
import { NavLink } from 'react-router-dom'

const User = () => {
    const userList = [
        { name: "Kalil", id: 5 },
        { name: "Anjana", id: 6 },
        { name: "Saroj", id: 8 },
        { name: "Joras", id: 9 },
    ]
    return (
        <div>
            <ul>
                {userList.map(user => (
                    <li key={user.id} >
                        <NavLink to={`/user/${user.id}`} state={user.name}>{user.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default User;
```
#### User.js
```
import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'

const User = () => {
    const { id } = useParams();
    const location = useLocation();
    console.log(location);
OUTPUT: { "pathname": "/user/8", "search": "", "hash": "", "state": "Saroj","key": "fmyh2y0z" } //data passed With NavLink 
    return (
        <div>
            <h1>User Id is{id}</h1>
            <h1>User name is{location.state}</h1>
        </div>
    )
}

export default User
```

--------------------------------
### useLocation
--------------------------------
The `useLocation` hook in React Router is used to return the current location of a React component. The `useLocation` returns the current location as an object and comes with props such as:

- `pathname`: This property represents the path of the current URL.: `pathname: "/users"`
- `state`: This property provides any state data associated with the location. It's typically used for passing state between different routes or components. `state: { id: 1, name: "example" }`
- `search`: The search property contains the query string parameters of the URL. `Output of location.search: //?userId=5&type=user` || search: "?query=example"
- `key`: The key property uniquely identifies the current location among sibling locations. : `key: "abc123"`
- `hash`: This property contains the hash fragment of the URL, typically used for anchor links within a page. `hash: "#section1"`
These props can be used with the `useEffect` hook to perform side effects such as clicks, `onScroll`, or returning state parsed to a Link component.

#### Use Cases of `useLocation` Hook in React Router

The `useLocation` hook in React Router is valuable for:

### 1. Getting Current Location

It retrieves the current URL location in a React component, useful for tasks like conditional rendering or updating state based on the URL.

### 2. Accessing Location Properties

Provides access to properties like: pathname, search, state, key and hash of the location.

### 3. Dynamic Rendering and Navigation

Enables dynamic component rendering or navigation based on URL properties. For instance, conditionally rendering components based on pathname or navigating to different routes based on conditions.


---------------------------------
useSearchParams
---------------------------------
UNDERSTAND:
###### 1. Route URL in App.js
When defining routes that include query parameters, such as /user, utilize the path attribute without using : for query parameters
```
<Route path="/user" element={<User />} />
```
###### 2. Dynamically routing with query string in User.js
* Within your User.js component, set up dynamic routing by manipulating the search parameters.
* Use a function, let's call it setSearchParams, triggered by a `button click or any other event`, to dynamically modify the search parameters.
###### 3. Two ways of doing NavLink in Users.jsx
###### 4. Looping through and logging all search parameters
* To log all search parameters, access the search property of the location object.
* Split the search string to get individual parameters and their values.
```
// Get the search parameters from the URL
const searchParams = new URLSearchParams(window.location.search);

// Loop through each parameter and log its name and value
searchParams.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```
```
  // Looping through and logging all search parameters
    for (const [key, value] of searchParams.entries()) {
        console.log("Parameter:", key, "Value:", value); // Example: userId=5
    }
```
```
    // Another way of looping through and logging all search parameters
    for (const entry of searchParams.entries()) {
        const [param, value] = entry;
        console.log("Parameter:", param, "Value:", value); // Example: userId=5
    }
```

###### 5. Extracting specific parameters from the search string
* Use the URLSearchParams API to extract specific parameters from the search string.
* For instance, if you want to extract the userId parameter, you can do:
```
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('userId'); // 5
```
* This will retrieve the value of the userId parameter from the URL's query string.

#### Example:

**App.js**
```
  function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user" element={<User />} /> // check routing here : 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
```
**Users.js**
```
import React from 'react';
import { NavLink } from 'react-router-dom';

const User = () => {
    // Array of user data
    const userList = [
        { name: "Kalil", id: 5 },
        { name: "Anjana", id: 6 },
        { name: "Saroj", id: 8 },
        { name: "Joras", id: 9 },
    ];

    return (
        <div>
            {/* Render user list */}
            <ul>
                {userList.map(user => (
                    <li key={user.id}>
                        {/* Create NavLink for each user */}
                        <NavLink
                            to={{
                                pathname: '/user',
                                search: `?userId=${user.id}&type=admin`, // Construct search string
                                state: { userName: user.name } // Pass user name as state
                            }}
                        >
                            {user.name}
                        </NavLink>
                        ---OR--replace <NavLink/>--
                         <NavLink to={`/user?userId=${user.id}&type=admin`} state={user.name}>{user.name}</NavLink>
                        ----OR---
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default User;
```

**User.js**
```
import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const User = () => {
    // Using the useSearchParams hook to manage search parameters from the URL
    const [searchParams, setSearchParams] = useSearchParams();

    // Extracting specific parameters from the search string
    const id = searchParams.get('userId');
    const type = searchParams.get('type');

    // Logging all search parameters
    console.log("All search parameters:", searchParams);

    // Logging specific parameters (userId and type)
    console.log("User Id:", id, "Type:", type);

    // Looping through and logging all search parameters
    for (const [key, value] of searchParams.entries()) {
        console.log("Parameter:", key, "Value:", value); // Example: userId=5
    }

    // Another way of looping through and logging all search parameters
    for (const entry of searchParams.entries()) {
        const [param, value] = entry;
        console.log("Parameter:", param, "Value:", value); // Example: userId=5
    }

    // Getting the current location and logging the search string
    const location = useLocation();
    console.log("Search string in location:", location.search); // Example: ?userId=5&type=user

    return (
        <div>
            <h3>User List</h3>
            {/* Displaying the extracted parameters */}
            <h1>User Id is {id} and type is {type}</h1>
            {/* Button to demonstrate adding query dynamically */}
            <button onClick={() => setSearchParams({ newQuery: 'xyz' })}>Add query string</button> // it will re-route to : users?newQuery='xyz'
        </div>
    );
}

export default User;
// Note: URLSearchParams {size: 1} indicates that there is one parameter in the query string;
// To dynamically add query parameters, use the setSearchParams function provided by the useSearchParams hook.
// No space around ?userId=${user.id}&type=admin
```
---------------------------------------
#### useSearchParamsExample
----------

```
const [searchParams, setSearchParams] = useSearchParams();
console.log(searchParams); // This logs the URLSearchParams object, which contains key-value pairs from the current route. 
You can loop through it to access these key-value pairs.
```
Case 1: Good Way
```
const User = () => {
    // Using the useSearchParams hook to manage search parameters from the URL
    const [searchParams, setSearchParams] = useSearchParams();

    // Using entries() to iterate over searchParams
    for (const [key, value] of searchParams.entries()) {
        console.log("Key and Value", key, value);
    }
}
```

Case 2: Work But Bad Way
```
searchParams.forEach((k,v)=> {
        console.log("Key and Value",k,v);
    })
```
Case 2: Best Way (loop and insert value in object params)
```
const params = Object.fromEntries(searchParams.entries());
console.log("params: ", params);
```
