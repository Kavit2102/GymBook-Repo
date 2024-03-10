import React, { useEffect, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import "./ViewUsers.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteUserApi, fetchCustmersApi } from "../../../service/auth.service";
import { useNavigate } from "react-router-dom";

const ViewUsers = () => {
  // declare a state variable named "Customers" and a function "setCustomers" to update it
  const [Customers, setCustomers] = useState([]);
  // declare a navigate variable for the routing
  const navigate = useNavigate();

  // load the list of customers from the backend when the component mounts
  useEffect(() => {
    fetchCustomers();
  }, []);

  // fetch the list of customers from the backend and update the state
  const fetchCustomers = async () => {
    const response = await fetchCustmersApi();
    await setCustomers(response.allUser);
  };

  // delete a customer from the backend and update the state
  const deleteUser = async (_id) => {
    console.log(_id);
    try {
      const response = await deleteUserApi(_id);
      alert("User deleted");
      // navigate to the current page to refresh the list of customers
      navigate(0);
    } catch (error) {
      alert("No server response");
    }
  };

  return (
    <div className="view-trainers">
      <Sidebar mode="admin" />
      <div className="trainersContainer">
        <h3>Users Details</h3>
        <br />
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Sr. No.</TableCell>
                <TableCell className="tableCell">Name</TableCell>
                <TableCell className="tableCell">Email</TableCell>
                <TableCell className="tableCell">Mobile No.</TableCell>
                <TableCell className="tableCell">Address</TableCell>
                <TableCell className="tableCell">Role</TableCell>
                <TableCell className="tableCell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Render a table row for each customer */}
              {Customers.map((customer, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="tableCell">{index + 1}</TableCell>
                    <TableCell className="tableCell">{customer.name}</TableCell>
                    <TableCell className="tableCell">
                      {customer.email}
                    </TableCell>
                    <TableCell className="tableCell">
                      {customer.mobileNo}
                    </TableCell>
                    <TableCell className="tableCell">
                      {customer.address}
                    </TableCell>
                    <TableCell className="tableCell">{customer.role}</TableCell>
                    <TableCell className="tableCell">
                      <button className="btn" onClick={()=>deleteUser(customer._id)}>Delete</button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ViewUsers;
