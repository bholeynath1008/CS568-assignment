```
/**
 * Variable to store whether the order is accepted or not.
 * @type {boolean}
 */
let isOrderAccepted = false;

/**
 * Variable to store whether valet is found or not.
 * @type {boolean}
 */
let isValetFound = false;

// Log the initial value of isOrderAccepted
console.log("test1", isOrderAccepted);

// Event listener for when the window loads
window.addEventListener("load", () => {
    // Event listener for when the acceptOrder button is clicked
    document.querySelector(".acceptOrder").addEventListener("click", () => {
        // Call the function to ask the restaurant to accept or reject the order
        askRestaurantToAcceptOrRejectOrder((accepted) => {
            // Callback function to log the updated value of isOrderAccepted
            console.log(accepted);
        });
    });
});

/**
 * Function to ask the restaurant to accept or reject the order.
 * @param {function(boolean)} callback - The callback function to be executed after the confirmation.
 */
const askRestaurantToAcceptOrRejectOrder = (callback) => {
    // callback
    setTimeout(() => {
        // Display a confirmation dialog and update isOrderAccepted accordingly
        isOrderAccepted = confirm("Should restaurant accept order ?");
        // Call the callback function with the result
        callback(isOrderAccepted);
    }, 1000);
};

```
