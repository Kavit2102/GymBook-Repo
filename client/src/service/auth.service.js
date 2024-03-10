// /**
//  * Imports the Axios instance from the "../api/axios" module.
//  * @returns The Axios instance that can be used to make HTTP requests.
//  */
import Axiosinstance from "../api/axios";

// /**
//  * Sends a POST request to the login endpoint of the API with the given body.
//  * @param {Object} body - The body of the POST request.
//  * @returns {Promise<Object>} - A promise that resolves to the response data from the API.
//  */
export async function LoginApi(body) {
  const response = await Axiosinstance.post("/login", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Sends a POST request to the server to register a new user.
//  * @param {Object} body - The user's registration information.
//  * @returns {Promise<Object>} - A promise that resolves to the response data from the server.
//  * @throws {Error} - If the request fails or the response is not in the expected format.
//  */
export async function SignupApi(body) {
  const response = await Axiosinstance.post("/register", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Fetches all customers from the API using Axios.
//  * @returns {Promise} A promise that resolves to the data returned by the API.
//  */
export async function fetchCustmersApi() {
  const response = await Axiosinstance.get("/getalluser", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Sends a POST request to the feedback API to create a new feedback entry.
//  * @param {Object} body - The request body containing the feedback data.
//  * @returns {Promise<Object>} - A promise that resolves to the response data from the API.
//  */
export async function createFeedBackApi(body) {
  const response = await Axiosinstance.post("/createfeedback", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

/**
 */
// /**
//  * Makes a GET request to the feedback API endpoint and returns the response data.
//  * @async
//  * @function getFeedBackApi
//  * @returns {Promise} A promise that resolves to the response data from the API.
//  */
export async function getFeedBackApi() {
  const response = await Axiosinstance.get("/getfeedback", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Sends a POST request to the "/addclass" endpoint of the Axios instance with the given body.
//  * @param {Object} body - The body of the POST request.
//  * @returns {Promise} A Promise that resolves to the response data from the server.
//  */
export async function addClassApi(body) {
  const response = await Axiosinstance.post("/addclass", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Makes a GET request to the "/loggeduser" endpoint of the server to retrieve information about the logged in user.
//  * @returns {Promise} A promise that resolves with the data returned from the server.
//  */
export async function loggedUserApi() {
  const response = await Axiosinstance.get("/loggeduser", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Deletes a user from the API using the given ID.
//  * @param {number} id - The ID of the user to delete.
//  * @returns {Promise} A promise that resolves with the data returned from the API.
//  * @throws {Error} If the request fails or returns an error.
//  */
export async function deleteUserApi(id) {
  const response = await Axiosinstance.delete(`/deleteuser/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Sends a POST request to the server to change the user's password.
//  * @param {Object} body - The request body containing the user's old and new passwords.
//  * @returns {Promise} A promise that resolves to the response data from the server.
//  */
export async function changePassApi(body) {
  const response = await Axiosinstance.post("/changepassword", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}


// /**
//  * Sends a POST request to the forget password API endpoint with the given body.
//  * @param {Object} body - The request body to send to the API.
//  * @returns {Promise<Object>} - A promise that resolves to the response data from the API.
//  * @throws {Error} - If the request fails or returns an error status code.
//  */
export async function forgetPasswordApi(body) {
  console.log(body);
  const response = await Axiosinstance.post("/forgetpassword", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Sends a POST request to the server to update the user's details with the given body.
//  * @param {Object} body - The request body containing the updated user details.
//  * @returns {Promise<Object>} - A promise that resolves to the response data from the server.
//  * @throws {Error} - If the request fails or returns an error status code.
//  */
export async function updateUserDetails(body) {
  console.log(body);
  const response = await Axiosinstance.post("/updateprofile", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}