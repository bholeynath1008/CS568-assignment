```
import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

const AsyncSelectExample = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionList, setSelectedOptionList] = useState([]);

  // Static data for users
  const staticUsers = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Diana', age: 28 },
    { id: 5, name: 'Edward', age: 40 },
  ];

  // Function to filter options based on input and selected options
  const fetchOptions = async (inputValue) => {
    // Use the latest selectedOptionList to filter options
    const filteredUsers = staticUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        !selectedOptionList.some((selected) => selected.value === user.id)
    );

    // Map users to a format that react-select understands
    return filteredUsers.map((user) => ({
      label: `${user.name}, Age: ${user.age}`,
      value: user.id,
    }));
  };

  // Function to handle change in selection
  const handleChange = (selected) => {
    if (selected) {
      setSelectedOptionList((prevList) => {
        const updatedList = [...prevList, selected];
        setSelectedOption(selected); // Update the selected option
        return updatedList; // Return the updated list for the next render
      });
    }
  };

  return (
    <div>
      <h3>Select a User</h3>
      <AsyncSelect
        cacheOptions
        loadOptions={fetchOptions}
        defaultOptions
        onChange={handleChange}
        value={selectedOption}
        placeholder="Search by name..."
      />
      {selectedOptionList.length > 0 && (
        <div>
          <h4>Selected Users:</h4>
          <ul>
            {selectedOptionList.map((option) => (
              <li key={option.value}>{option.label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AsyncSelectExample;

```
### useCallback
`Solution: Use a Callback or useCallback`
- To ensure that fetchOptions always has access to the latest selectedOptionList, you can either:
- Pass the current `selectedOptionList` directly as an argument to `fetchOptions.`
- Use the `useCallback hook` to memoize `fetchOptions` so that it always has the latest state.


```
import React, { useState, useCallback } from 'react';
import AsyncSelect from 'react-select/async';

const AsyncSelectExample = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionList, setSelectedOptionList] = useState([]);

  // Static data for users
  const staticUsers = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Diana', age: 28 },
    { id: 5, name: 'Edward', age: 40 },
  ];

  // Function to filter options based on input and selected options
  const fetchOptions = useCallback(async (inputValue) => {
    const filteredUsers = staticUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        !selectedOptionList.some((selected) => selected.value === user.id)
    );

    return filteredUsers.map((user) => ({
      label: `${user.name}, Age: ${user.age}`,
      value: user.id,
    }));
  }, [selectedOptionList]);

  // Function to handle change in selection
  const handleChange = (selected) => {
    if (selected) {
      setSelectedOptionList((prevList) => [...prevList, selected]);
      setSelectedOption(selected);
    }
  };

  return (
    <div>
      <h3>Select a User</h3>
      <AsyncSelect
        cacheOptions
        loadOptions={fetchOptions}
        defaultOptions
        onChange={handleChange}
        value={selectedOption}
        placeholder="Search by name..."
      />
      {selectedOptionList.length > 0 && (
        <div>
          <h4>Selected Users:</h4>
          <ul>
            {selectedOptionList.map((option) => (
              <li key={option.value}>{option.label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AsyncSelectExample;

```
`Key Points:`
`useCallback Hook:` The fetchOptions function is now wrapped with useCallback, which takes selectedOptionList as a dependency. This ensures that fetchOptions is always up-to-date with the latest selectedOptionList.

`State Dependency:` By adding selectedOptionList as a dependency, React will re-create the fetchOptions function whenever selectedOptionList changes, ensuring it has access to the latest state.
