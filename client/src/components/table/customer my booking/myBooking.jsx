import React, { useEffect, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import "./mybooking.scss";

/*
The following code is a React component that renders a table of user's bookings. It uses the "Table", "TableContainer", "TableHead", "TableBody", "TableRow", and "TableCell" components from Material UI. It also imports the "moment" library to format dates and times and the "Popup" component from the "reactjs-popup" library to handle modal dialogs.
*/

import moment from "moment-timezone";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  UpdateClassDT,
  deRegisterClassApi,
  getClassApi,
} from "../../../service/class.service";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

const MyBooking = () => {
  const navigate = useNavigate(); // Create a navigate function using the useNavigate hook provided by react-router-dom
  const [Classes, setClasses] = useState([]); // Create a state variable named Classes and initialize it as an empty array using the useState hook
  const [Time, setTime] = useState(""); // Create a state variable named Time and initialize it as an empty string using the useState hook
  const [date, setDate] = useState(""); // Create a state variable named date and initialize it as an empty string using the useState hook

  const fetchClasses = async () => {
    // Define a function named fetchClasses which is an async function
    const response = await getClassApi(); // Get the response from an API named getClassApi using await keyword
    await setClasses(response.userRegisteredClass); // Update the Classes state with the response obtained from the API
    console.log(response); // Log the response to the console
  };

  const deRegisterClass = async (classTitle, _id) => {
    // Define a function named deRegisterClass which is an async function and takes two arguments classTitle and _id
    try {
      const body = { _id, classTitle }; // Create an object named body with two properties _id and classTitle
      const response = await deRegisterClassApi(body); // Call an API named deRegisterClassApi and pass the body object as an argument using await keyword
      console.log(response); // Log the response to the console
      alert("Class cancelled Successfully"); // Display an alert message
    } catch (error) {
      // If there is an error, execute the code inside the catch block
      console.log(error); // Log the error to the console
      alert("Server Response Failed "); // Display an alert message
    }
  };

  useEffect(() => {
    // Use the useEffect hook to execute the code inside the function
    fetchClasses(); // Call the fetchClasses function
  }, []);

  const updateClassDnT = async (_id) => {
    console.log(_id); // Prints the value of the _id parameter to the console
    let newDate = new Date(date); // Creates a new Date object from the date parameter
    let hour = Time.split(":")[0]; // Extracts the hour value from the Time parameter by splitting it at the colon character
    let minute = Time.split(":")[1]; // Extracts the minute value from the Time parameter by splitting it at the colon character
    newDate.setHours(hour); // Sets the hour value of the newDate object to the extracted hour value
    newDate.setMinutes(minute); // Sets the minute value of the newDate object to the extracted minute value
    try {
      const body = {
        // Defines an object to be sent as the request body
        classId: _id, // Sets the classId property of the object to the _id parameter
        dateNtime: newDate, // Sets the dateNtime property of the object to the newDate object
      };
      console.log(body); // Prints the request body object to the console
      const response = await UpdateClassDT(body); // Calls the UpdateClassDT function with the request body object as a parameter and waits for the response
      console.log(response); // Prints the response object to the console
      alert("Class Rescheduled"); // Shows an alert to the user indicating that the class has been rescheduled
      navigate(0); // Calls the navigate function with a parameter of 0 to navigate to the specified page
    } catch (error) {
      alert("Server response failed "); // Shows an alert to the user indicating that the server response failed
      console.log(error); // Prints the error object to the console
    }
  };

  return (
    <div className="mybooking">
      {/* Creates a div element with a class name of "mybooking" */}
      <Sidebar mode="customer" />
      {/* Renders a Sidebar component with a prop of "mode" set to "customer" */}
      <div className="mybookingContainer">
        {/* Creates another div element with a class name of "mybookingContainer" */}
        <h3>My Booking's</h3>
        {/* Renders an h3 element with the text "My Booking's" */}
        <br />
        {/* Renders a line break element */}
        <TableContainer component={Paper} className="table">
          {/* Renders a TableContainer component with a Paper component as its child, and a class name of "table" */}
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/* Renders a Table component with a style object to set a minimum width of 650, and an aria-label attribute with a value of "simple table" */}
            <TableHead>
              {/* Renders a TableHead component */}
              <TableRow>
                {/* Renders a TableRow component */}
                <TableCell className="tableCell">S.No</TableCell>
                {/* Renders a TableCell component with the text "S.No" and a class name of "tableCell" */}
                <TableCell className="tableCell">Title</TableCell>
                {/* Renders a TableCell component with the text "Title" and a class name of "tableCell" */}
                <TableCell className="tableCell">Description</TableCell>
                {/* Renders a TableCell component with the text "Description" and a class name of "tableCell" */}
                <TableCell className="tableCell">Trainer</TableCell>
                {/* Renders a TableCell component with the text "Trainer" and a class name of "tableCell" */}
                <TableCell className="tableCell">Date</TableCell>
                {/* Renders a TableCell component with the text "Date" and a class name of "tableCell" */}
                <TableCell className="tableCell">Time</TableCell>
                {/* Renders a TableCell component with the text "Time" and a class name of "tableCell" */}
                <TableCell className="tableCell">Action</TableCell>
                {/* Renders a TableCell component with the text "Action" and a class name of "tableCell" */}
              </TableRow>
            </TableHead>
            {/* // Render the table body by mapping over the array of classes */}
            <TableBody>
              {Classes.map((Class, index) => (
                <TableRow key={index}>
                  {/* // Display the index of the row */}
                  <TableCell className="tableCell">{index + 1}</TableCell>
                  {/* // Display the title of the class */}
                  <TableCell className="tableCell">
                    {Class.classTitle}
                  </TableCell>
                  {/* // Display the description of the class */}
                  <TableCell className="tableCell">
                    {Class.description}
                  </TableCell>
                  {/* // Display the name of the trainer for the class */}
                  <TableCell className="tableCell">
                    {Class.trainerName}
                  </TableCell>
                  {/* // Display the date of the class, formatted for the timezone
                  in Kolkata */}
                  <TableCell className="tableCell">
                    {moment(Class.date)
                      .tz("Asia/Kolkata")
                      .format("MMMM Do YYYY")}
                  </TableCell>
                  {/* // Display the time of the class, formatted for the timezone
                  in Kolkata */}
                  <TableCell className="tableCell">
                    {moment(Class.date).tz("Asia/Kolkata").format("h:mm:ss a")}
                  </TableCell>
                  <TableCell className="tableCell">
                    {/* // Add a popup to allow the user to reschedule the class */}
                    <Popup
                      trigger={<button className="btn-Y">Reschedule</button>}
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="content">
                            <h3>Reschedule Class</h3>
                            {/* // Add an input field for the time of the
                            rescheduled class */}
                            <div className="input-field">
                              <label htmlFor="time" className="input-label">
                                Time
                              </label>
                              <input
                                type="time"
                                className="input-control"
                                id="time"
                                autoComplete="off"
                                required
                                onChange={(e) => setTime(e.target.value)}
                              />
                            </div>
                            {/* // Add an input field for the date of the
                            rescheduled class */}
                            <div className="input-field">
                              <label htmlFor="time" className="input-label">
                                Date
                              </label>
                              <input
                                type="date"
                                className="input-control"
                                id="date"
                                autoComplete="off"
                                required
                                onChange={(e) => setDate(e.target.value)}
                              />
                            </div>
                          </div>
                          <div>
                            {/* Add a button to submit the changes to the class
                            date and time */}
                            <button
                              className="btn-S"
                              onClick={() => {
                                updateClassDnT(Class._id);
                              }}
                            >
                              Submit
                            </button>
                             {/* Add a button to close the popup */}
                            <button className="btn-R" onClick={() => close()}>
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
                    {/* Add a button to cancel the booking for the class */}
                    <button
                      className="btn-R"
                      onClick={() =>
                        deRegisterClass(Class.classTitle, Class._id)
                      }
                    >
                      Cancel Booking
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default MyBooking;
