// Import the Axios library, which will be used to make HTTP requests
import axios from "axios";

// This function returns the headers that will be used for all requests
function getHeaders() {
  // Get the user's access token from local storage and include it in the headers
  return {
    Authorization: `Bearer ${localStorage.getItem("token_status")}`,
    // Set the content type to JSON, since we will be sending JSON data in our requests
    "Content-Type": "application/json"
  };
}

// Create an instance of Axios with a base URL and headers that will be used for all requests
const Axiosinstance = axios.create({
  // Set the base URL to the API endpoint for GymBook on the local server
  baseURL: "http://localhost:4000/api/gymbook",
  // Get the headers by calling the getHeaders function defined above
  headers: getHeaders(),
});

// Export the Axios instance so that other modules can use it
export default Axiosinstance;
