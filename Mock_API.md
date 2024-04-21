ref: https://www.youtube.com/watch?v=z656HufH3pA&ab_channel=keepCoding

// // For previous data, two cases either it will show error or it will fetch data.

// // test both cases

// // dealing with teh api is asynchronous , so use async

// // mocking fetch api call

// // mocking global fetch, best pratice make fetch global

// // which module you want to mock

// // when ever you are calling get api from pokemon then (*) value should be return from that api that is mock

// // when you do mocking beforeEach you have to clear all the MOcks because you don't want to ...


```

// Import necessary testing utilities and the component to be tested
import { render, waitFor, screen } from "@testing-library/react";
import PokemonList from "./components/PokemonList";

// Import the API utilities to mock them
import * as api from "./components/api";

// Mock the module './components/api' to isolate tests from external API calls
jest.mock("./components/api");

// Use 'describe' to group related tests for the PokemonList component
describe('Pokemon List Component', () => {
  // Clear all mocks before each test to ensure test isolation
  beforeEach(() => jest.clearAllMocks());

  // Define a test case to ensure proper rendering when the API call is successful
  it('should render pokemon names when api responds', async () => {
    // Mock the 'getPokemonFromApi' to resolve with specific mock data
    api.getPokemonFromApi.mockResolvedValue({
      results: [{ name: "John" }],
    });

    // Render the component under test
    render(<PokemonList />);

    // Wait for the component to display the expected content
    await waitFor(() => {
      expect(screen.getByText("John")).toBeInTheDocument();
    });
  });

  // Define a test case to handle situations when the API call fails
  it('should render error message when api fails', async () => {
    // Mock the 'getPokemonFromApi' to reject, simulating a failure
    api.getPokemonFromApi.mockRejectedValue(new Error("Failed to fetch data"));

    // Render the component under test
    render(<PokemonList />);

    // Wait for the component to display the error message
    await waitFor(() => {
      expect(screen.getByText("Unable to fetch data:")).toBeInTheDocument();
    });
  });
});


```


Raw: 
```
// // import { render, screen } from '@testing-library/react';
// // import App from './App';


// import { render, waitFor, screen } from "@testing-library/react";
// import PokemonList from "./components/PokemonList";
// import * as api from "./components/api";
// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

// // For previous data, two cases either it will show error or it will fetch data.
// // test both cases
// // dealing with teh api is asynchronous , so use async
// // mocking fetch api call
// // mocking global fetch, best pratice make fetch global
// // which module you want to mock
// // when ever you are calling get api from pokemon then (*) value should be return from that api that is mock
// // when you do mocking beforeEach you have to clear all the MOcks because you don't want to ...

// jest.mock("./components/api"); // mock this api
// describe('Pokemon List Component', () => {
//   beforeEach(() => jest.clearAllMocks())
//   it('should render pokemon names when api responds', async () => {
//     api.getPokemonFromApi.mockResolvedValue({
//       results: [{ name: "John" }],
//     })  // mockResolvedValue means function will return promise so. and api is returning object so mockResolvedValue({obj}){

//     render(<PokemonList />);
//     await waitFor(() => { // wait for api to give response, so give closure
//       screen.getByText("John");
//     })
//   })
//   it('should render error message when api fails', async () => {
//     api.getPokemonFromApi.mockRejectedValue({});// no value is required while testing error 
//     render(<PokemonList />);
//     await waitFor(() => { // wait for api to give response, so give closure
//       screen.getByText("Unable to fetch data:");
//     })
//   })
// });

```
