import { useEffect } from "react";
import { useState } from "react";

// Define the custom hook
const useLocalStorage = (key, initialValue) => {
  
  // Set up state to store the value
  const [value, setValue] = useState(() => {
    try {
      // Try to get the value from local storage
      const localValue = window.localStorage.getItem(key);
      // If there is a value, parse it and return it
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (err) {
      // If there is an error, log it and return the initial value
      console.log(err);
      return initialValue;
    }
  });

  // Use the useEffect hook to update local storage when the value changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Return an array containing the current value and a function to update it
  return [value, setValue];
};

// Export the custom hook
export default useLocalStorage;
