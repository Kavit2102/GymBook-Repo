// /**
//  * Imports the Axios instance from the "../api/axios" module.
//  * @returns The Axios instance that can be used to make HTTP requests.
//  */
import Axiosinstance from "../api/axios";

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
//  * Makes a GET request to the server to retrieve all classes.
//  * @returns {Promise} A promise that resolves to the data returned by the server.
//  */
export async function getClassApi() {
  const response = await Axiosinstance.get("/getallclass", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Sends a POST request to the server to book a class with the given body.
//  * @param {Object} body - The request body containing the necessary information to book a class.
//  * @returns {Promise} A promise that resolves to the response data from the server.
//  * @throws {Error} If the request fails or returns an error.
//  */
export async function bookClassApi(body) {
  const response = await Axiosinstance.post("/registerclass", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Sends a POST request to the server to delete a class.
//  * @param {Object} body - The request body containing the class information to delete.
//  * @returns {Promise} A promise that resolves with the response data from the server.
//  * @throws {Error} If the request fails or the response status is not 200.
//  */
export async function deleteClassApi(body) {
  const response = await Axiosinstance.post("/deleteclass", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Sends a POST request to the "/deregisterclass" endpoint of the API to de-register a class.
//  * @param {Object} body - The request body containing the necessary information to de-register the class.
//  * @returns {Promise} A Promise that resolves to the response data from the API.
//  */
export async function deRegisterClassApi(body) {
  const response = await Axiosinstance.post("/deregisterclass", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// /**
//  * Sends a POST request to the server to update a class's date and time.
//  * @param {Object} body - The request body containing the updated class information.
//  * @returns {Promise} A Promise that resolves with the updated class data.
//  * @throws {Error} If the request fails or returns an error.
//  */
export async function UpdateClassDT(body) {
  console.log(body);
  const response = await Axiosinstance.post("/rescheduleclass", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}
