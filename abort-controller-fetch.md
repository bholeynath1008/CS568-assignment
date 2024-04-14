ref: https://www.youtube.com/watch?v=3yTs1NJZyBk&ab_channel=SteveGriffith-Prof3ssorSt3v3

### AbortController with Fetch in React
The use case of the `AbortController` while fetching data typically arises in scenarios where you want to provide a mechanism to cancel or abort an ongoing fetch request. This can be useful in situations such as:

- **User Interaction:** Providing users with the ability to cancel a long-running fetch operation, especially in situations where the user may lose interest or change their mind.

- **Network Conditions:** Handling situations where network conditions degrade or requests take longer than expected due to network latency. In such cases, it might be beneficial to cancel the request and provide feedback to the user.

- **Component Unmounting:** Cancelling fetch requests when the component unmounts to prevent potential memory leaks or unnecessary processing.

- **Timeouts:** Implementing timeouts to cancel fetch requests if they take longer than a specified duration to complete. This approach allows you to limit the maximum time allowed for the fetch operation and handle timeout scenarios.

##### Step by Step Implementation:
Implementing the `AbortController` in a fetch operation involves several steps. Here's a guide on how to do it:

1. **Create an AbortController instance**: 
   - Instantiate a new `AbortController` object. This controller will be responsible for aborting the fetch operation when needed.

    ```javascript
    const fetchController = new AbortController();
    ```

2. **Get the AbortSignal from the controller**:
   - Obtain the `AbortSignal` from the `AbortController` instance. This signal will be passed as an option to the `fetch` function.

    ```javascript
    const { signal } = fetchController;
    ```

3. **Pass the AbortSignal to the fetch operation**:
   - When making the fetch request, include the `signal` option with the `AbortSignal` obtained from the `AbortController`. This associates the signal with the fetch request, allowing it to be aborted if needed.

    ```javascript
    const response = await fetch(url, { signal });
    ```

4. **Set a timeout to abort the fetch operation (optional)**:
   - If desired, set a timeout using `setTimeout` to abort the fetch operation if it takes longer than a specified duration. Inside the timeout function, call `abort()` on the `AbortController` instance to abort the fetch request.

    ```javascript
    const abortTimeout = setTimeout(() => {
        fetchController.abort();
        console.log('Fetch aborted due to timeout');
    }, timeoutDuration);
    ```

5. **Clear the timeout on successful fetch**:
   - If the fetch operation completes successfully before the timeout, clear the timeout using `clearTimeout` to prevent it from triggering.

    ```javascript
    clearTimeout(abortTimeout);
    ```

6. **Handle the abort signal**:
   - In the fetch operation's `catch` block, check if the error is due to an abort signal. If it is, handle the abort scenario accordingly.

    ```javascript
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted by user');
        } else {
            console.log('Fetch error:', error);
        }
    }
    ```

Putting it all together, here's how you can implement the `AbortController` in a fetch operation:
* Check way of error handling here.

```javascript
const fetchController = new AbortController();

try {
    const { signal } = fetchController;

    const abortTimeout = setTimeout(() => {
        fetchController.abort();
        console.log('Fetch aborted due to timeout');
    }, timeoutDuration);

    const response = await fetch(url, { signal });

    clearTimeout(abortTimeout);

    // Process response
} catch (error) {
    if (error.name === 'AbortError') {
        console.log('Fetch aborted by user');
    } else {
        console.log('Fetch error:', error);
    }
}
```

#### Example: Implement AbortController in fetch

```
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const User = () => {
    // State to store fetched data
    const [data, setData] = useState([]);

    useEffect(() => {
        // Call getData function when component mounts
        getData();
    }, []);

    // Create abort controller
    const fetchController = new AbortController();

    const getData = async () => {
        try {
            // Get signal from abort controller
            const { signal } = fetchController;

            // Set timeout to abort fetch after 2 seconds
            let abortControllerTimeout = setTimeout(() => {
                fetchController.abort(); // Abort fetch
                console.log('abort-timeout');
            }, 2000);

            // Fetch data from API with abort signal
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', { signal });

            // Parse response as JSON
            const data = await response.json();

            // Update state with fetched data
            setData(data);

            // Clear the timeout as fetch was successful
            clearTimeout(abortControllerTimeout);
        } catch (error) {
            // Catch any errors that occur during fetch
            console.log("error-message-is:", error);
        }
    };

    console.log(data); // Log fetched data

    return (
        <div>
            <ul>
                {/* Map through data and render list items */}
                {data?.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default User;

```

#### AbortError :
Here are the scenarios in which there is a chance of encountering an AbortError during a fetch operation, listed:
1. **Manual Abort**:
   - If you explicitly call the `abort()` method on the `AbortController` instance associated with the fetch request, it will trigger an `AbortError`.

2. **Timeout**:
   - Setting a timeout using `setTimeout` and the fetch operation taking longer than the specified duration can lead to an `AbortError` when the timeout function calls `abort()` on the `AbortController`.

3. **Component Unmount**:
   - If the component containing the fetch operation unmounts before the fetch request completes, the associated `AbortController` might be aborted, leading to an `AbortError`.

4. **User Interaction**:
   - Cases where the user initiates an action to cancel the fetch request, such as clicking a "Cancel" button, might involve calling `abort()` on the `AbortController`, resulting in an `AbortError`.
