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

