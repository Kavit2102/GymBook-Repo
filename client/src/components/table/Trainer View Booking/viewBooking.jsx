import React, { useEffect, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import "./viewBooking.scss";
import moment from "moment-timezone";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UpdateClassDT, getClassApi } from "../../../service/class.service";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

const ViewBooking = () => {
  // /**
  //  * A React functional component that initializes state variables for Classes, Time, and date.
  //  * It also uses the useNavigate hook from the React Router to navigate to different pages.
  //  * @returns None
  //  */
  const navigate = useNavigate();
  const [Classes, setClasses] = useState([]);

  const [Time, setTime] = useState("");
  const [date, setDate] = useState("");

  // /**
  //  * Fetches the trainer classes from the API and sets them in state.
  //  * @returns None
  //  */
  const fetchClasses = async () => {
    const response = await getClassApi();
    await setClasses(response.trainerClass);
    console.log(Classes);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  // /**
  //  * Updates the date and time of a class with the given ID.
  //  * @param {{string}} _id - The ID of the class to update.
  //  * @returns None
  //  */
  const updateClassDnT = async (_id) =>{
    console.log(_id);
    let newDate = new Date(date);
    let hour = Time.split(":")[0];
    let minute = Time.split(":")[1];
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    try {
      const body = {
        classId: _id,
        dateNtime: newDate,
      };
      console.log(body);
      const response = await UpdateClassDT(body);
      console.log(response);
      alert("Feedback submission Successfull");
      navigate(0);
    } catch (error) {
      alert("Server response failed ");
      console.log(error);
    }
  };

  return (
    <div className="view-booking">
      <Sidebar mode="trainer" />
      <div className="bookingContainer">
        <h3>View Booking</h3>
        <br />
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/* /**
             * Renders the header row of a table with the following columns:
             * Sr. No., Title, Description, Date, Time, Duration, Action.
             * @returns A TableHead component with a TableRow containing TableCells for each column.
              */}
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Sr. No.</TableCell>
                <TableCell className="tableCell">Title</TableCell>
                <TableCell className="tableCell">Description</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Time</TableCell>
                <TableCell className="tableCell">Duration</TableCell>
                <TableCell className="tableCell">Action</TableCell>
              </TableRow>
            </TableHead>
            {/* /**
             * Renders a table body with rows of class sessions and their details, including the class title, description, date, time, duration, and options to reschedule or view bookings.
             * @param {{Array}} Classes - An array of class session objects.
             * @returns A table body component with rows of class session details.
              */}
            <TableBody>
              {Classes.map((session, index) => (
                <TableRow key={index}>
                  <TableCell className="tableCell">{index + 1}</TableCell>
                  <TableCell className="tableCell">
                    {session.classTitle}
                  </TableCell>
                  <TableCell className="tableCell">
                    {session.description}
                  </TableCell>
                  <TableCell className="tableCell">
                    {moment(session.date)
                      .tz("Asia/Kolkata")
                      .format("MMMM Do YYYY")}
                  </TableCell>
                  <TableCell className="tableCell">
                    {moment(session.date)
                      .tz("Asia/Kolkata")
                      .format("h:mm:ss a")}
                  </TableCell>
                  <TableCell className="tableCell">{session.duration}</TableCell>
                  <TableCell>
                    <Popup
                      trigger={
                        <button
                          className="btn-Y"
                        >
                          Reschedule
                        </button>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="content">
                            <h3>Reschedule Class</h3>
                            <div className="input-field">
                                    <label
                                      htmlFor="time"
                                      className="input-label"
                                    >
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
                                  <div className="input-field">
                                    <label
                                      htmlFor="time"
                                      className="input-label"
                                    >
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
                            <button className="btn-S" 
                            onClick={() => 
                              {updateClassDnT(session._id)}
                            }
                            >
                              Submit
                            </button>
                            <button className="btn-R" onClick={() => close()}>
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>

                    {/* /**
                     * A component that displays a popup modal containing a table of bookings.
                     * @returns A button that, when clicked, displays a modal containing a table of bookings.
                     */}
                    <Popup
                      trigger={
                        <button
                          className="btn-G"
                        >
                          View Bookings
                        </button>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="content">
                            <h3>View Bookings</h3>
                            <TableContainer component={Paper} className="table">
                              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                  <TableRow>
                                    <TableCell className="tableCell">Sr. No.</TableCell>
                                    <TableCell className="tableCell">Name</TableCell>
                                    <TableCell className="tableCell">Email</TableCell>
                                    <TableCell className="tableCell">Mobile No.</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                {session.memberId.map((detail, index) => (
                                  <TableRow key={index}>
                                    <TableCell className="tableCell">{index+1}</TableCell>
                                    <TableCell className="tableCell">{detail.name}</TableCell>
                                    <TableCell className="tableCell">{detail.email}</TableCell>
                                    <TableCell className="tableCell">{detail.mobileNo}</TableCell>
                                  </TableRow>
                                ))}
                                </TableBody>
                              </Table>
                            </TableContainer>         
                          </div>
                          <br />
                          <div>
                            <button className="btn-R" onClick={() => close()}>
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
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

export default ViewBooking;
