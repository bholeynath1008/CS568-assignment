
## Pagination handle in frontend
*  Disable current page button
*  prev and next button working and validation of disable if less than start page and exceeds the end page

```
import React, { useEffect, useState } from 'react';

// Pagination component
const Pagination = () => {
    // State variables
    const [posts, setPosts] = useState([]); // Store fetched posts
    const [currentPage, setCurrentPage] = useState(1); // Track current page
    const [itemsPerPage, setItemsPerPage] = useState(10); // Define items per page

    // Effect hook to fetch posts when component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    // Function to fetch posts from API
    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fetch posts
            if (!response.ok) {
                throw new Error('Failed to fetch posts'); // Throw error if fetch fails
            }
            const data = await response.json(); // Parse response JSON
            setPosts(data); // Update posts state
        } catch (error) {
            console.error(error); // Log error to console
        }
    };

    // Calculate total number of pages
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    // Calculate start and end indexes for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // Get items for current page
    const currentItems = posts.slice(startIndex, endIndex);

    // Event handler for next page button
    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages)); // Increment page, ensuring not to exceed total pages
    };

    // Event handler for previous page button
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Decrement page, ensuring not to go below 1
    };

    // Event handler for clicking on a specific page
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber); // Set current page to clicked page number
    };

    // Function to render pagination buttons
    const renderPageButtons = () => {
        const maxButtons = 5; // Maximum number of buttons to display
        const middleButton = Math.ceil(maxButtons / 2); // Middle button index
        const startPage = Math.max(1, currentPage - middleButton + 1); // Start page for buttons
        const endPage = Math.min(startPage + maxButtons - 1, totalPages); // End page for buttons

        // Generate array of page numbers for buttons and map to buttons
        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
            <button
                key={page}
                onClick={() => handlePageClick(page)}
                disabled={currentPage === page} // Disable button if it represents current page
            >
                {page}
            </button>
        ));
    };

    // Render component
    return (
        <div>
            {/* Render current page items */}
            {currentItems.map((post) => (
                <li key={post.id}>
                    {post.id}- {post.title}
                </li>
            ))}
            <div>
                {/* Previous page button */}
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                {/* Render pagination buttons */}
                {renderPageButtons()}
                {/* Next page button */}
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination; // Export Pagination component
```
## Pagination handle in backend API

```
import React, { useState, useEffect } from 'react';

function App() {
  // State variables to manage items, current page, page size, and total items
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1); // Current page number
  const [pageSize, setPageSize] = useState(10); // Number of items per page, adjust as needed
  const [totalItems, setTotalItems] = useState(0); // Total number of items available

  // Fetch items whenever the page changes
  useEffect(() => {
    fetchItems();
  }, [page]);

  // Function to fetch paginated items from the backend API
  const fetchItems = async () => {
    try {
      // Calculate offset based on the current page and page size
      const offset = (page - 1) * pageSize;
      // Send a GET request to the backend API with limit and offset parameters
      const response = await fetch(`http://your-api-url/items?limit=${pageSize}&offset=${offset}`);
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      // Parse the response JSON data
      const data = await response.json();
      // Update the items state with the fetched items
      setItems(data.items);
      // Update the totalItems state with the total number of items available
      setTotalItems(data.totalItems);
    } catch (error) {
      // Log any errors that occur during fetching
      console.error('Error fetching items:', error);
    }
  };

  // Function to handle clicking on the "Next" button
  const nextPage = () => {
    // Increment the current page number
    setPage(prevPage => prevPage + 1);
  };

  // Function to handle clicking on the "Previous" button
  const prevPage = () => {
    // Decrement the current page number, ensuring it doesn't go below 1
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  // Render the component
  return (
    <div>
      <h1>Paginated Items</h1>
      <ul>
        {/* Render each item in the items array */}
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        {/* "Previous" button to navigate to the previous page */}
        <button onClick={prevPage} disabled={page === 1}>Previous</button>
        {/* Display the current page number */}
        <span>Page {page}</span>
        {/* "Next" button to navigate to the next page */}
        <button onClick={nextPage} disabled={page * pageSize >= totalItems}>Next</button>
      </div>
    </div>
  );
}

export default App;

```
