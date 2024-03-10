// Importing necessary components and styles
import React, { useEffect, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import "./viewFeedbacks.scss";

// Importing Material UI components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Importing API function to get feedbacks
import { getFeedBackApi } from "../../../service/auth.service";

// Functional component for displaying the feedbacks
const ViewFeedbacks = () => {
  // Setting initial state for feedbacks as an empty array
  const [Feedbacks, setFeedbacks] = useState([]);

  // Fetching feedbacks from the API using useEffect hook
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Function to fetch feedbacks using the API
  const fetchFeedbacks = async () => {
    const response = await getFeedBackApi();
    await setFeedbacks(response.data);
  };

  // Rendering the feedbacks in a table
  return (
    <div className="view-feedbacks">
      <Sidebar mode="admin" />
      <div className="feedbacksContainer">
        <h3>Feedback Details</h3>
        <br />
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Sr. No.</TableCell>
                <TableCell className="tableCell">Name</TableCell>
                <TableCell className="tableCell">Email</TableCell>
                <TableCell className="tableCell">
                  Feedback Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Feedbacks.map((feedback, index) => (
                <TableRow key={index}>
                  <TableCell className="tableCell">{index + 1}</TableCell>
                  <TableCell className="tableCell">{feedback.name}</TableCell>
                  <TableCell className="tableCell">{feedback.email}</TableCell>
                  <TableCell className="tableCell">
                    {feedback.feedBack}
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

// Exporting the ViewFeedbacks component
export default ViewFeedbacks;