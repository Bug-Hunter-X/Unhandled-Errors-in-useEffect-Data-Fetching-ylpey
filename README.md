# Unhandled Errors in useEffect Data Fetching

This repository demonstrates a common error in React applications: unhandled errors during data fetching within the `useEffect` hook. The example code fetches data from an API but lacks proper error handling, leading to crashes if the API request fails.

## The Bug

The original `bug.js` file shows a React component that uses `useEffect` to fetch data from an API.  If the API request fails (e.g., due to a network error or the API being unavailable), the component crashes because the `data` variable is undefined, causing a runtime error during the mapping operation.

## The Solution

The `bugSolution.js` file provides a corrected version of the component.  It includes a `try...catch` block to handle potential errors during the fetch process. If an error occurs, a user-friendly error message is displayed instead of the application crashing.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Run the application (using a bundler like Webpack or Vite).
4. Observe the crash when the API request fails.
5. Then, open `bugSolution.js` to see the improved code and run it. The fixed code correctly handles the errors.