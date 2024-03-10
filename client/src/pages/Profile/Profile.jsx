import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  changePassApi,
  loggedUserApi,
  updateUserDetails,
} from "../../service/auth.service";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState();
  const [User, setUser] = useState();

  let user;
  const getuser = localStorage.getItem("login_status");
  if (getuser && getuser.length) {
    user = JSON.parse(getuser);
    console.log(user);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { password, confirmPassword };
      console.log(body);
      const response = await changePassApi(body);
      console.log(response);
      alert("Password Changed !!");
      navigate("/");
    } catch (error) {
      alert("Server response failed ");
      console.log(error);
    }
  };

  const fetchUser = async (e) => {
    try {
      const response = await loggedUserApi();
      await setUser(response.user);
      await localStorage.setItem("login_status", JSON.stringify(response.user));
    } catch (error) {
      console.log(error);
      alert("Server Error !!!");
    }
  };

  const updateProfile = async () => {
    try {
      const body = {
        name: Name,
        email: Email,
        mobileNo: Mobile,
      };
      console.log(body);
      const response = await updateUserDetails(body);
      console.log(response);
      alert("User Details Updated !");
      navigate(0);
      fetchUser();
    } catch (error) {
      alert("Server response failed ");
      console.log(error);
    }
  };

  return (
    <div className="account">
      <Sidebar mode="profile" />
      <div className="accountContainer">
        <h3>Account Details</h3>
        <br />
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell className="tableCell">Sr. No.</TableCell> */}
                <TableCell className="tableCell">Name</TableCell>
                <TableCell className="tableCell">Email</TableCell>
                <TableCell className="tableCell">Mobile No.</TableCell>
                <TableCell className="tableCell">Address</TableCell>
                <TableCell className="tableCell">Role</TableCell>
                <TableCell className="tableCell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="tableCell">{user.name}</TableCell>
                <TableCell className="tableCell">{user.email}</TableCell>
                <TableCell className="tableCell">{user.mobileNo}</TableCell>
                <TableCell className="tableCell">{user.address}</TableCell>
                <TableCell className="tableCell">{user.role}</TableCell>
                <TableCell className="tableCell">
                  <Popup
                    trigger={<button className="btn-Y">Update</button>}
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal">
                        <div className="content">
                          <h3>Update Details</h3>
                          <div className="input-field">
                            <label htmlFor="name" className="input-label">
                              Name
                            </label>
                            <input
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              className="input-control"
                              id="name"
                              placeholder="Name"
                              autoComplete="off"
                              required
                            />
                          </div>
                          <div className="input-field">
                            <label htmlFor="email" className="input-label">
                              Email address
                            </label>
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              type="text"
                              className="input-control"
                              id="email"
                              placeholder="example@gmail.com"
                              autoComplete="off"
                              required
                            />
                          </div>
                          <div className="input-field">
                            <label htmlFor="mob_no" className="input-label">
                              Mobile No.
                            </label>
                            <input
                              onChange={(e) => setMobile(e.target.value)}
                              type="tel"
                              className="input-control"
                              id="mob_no"
                              placeholder="Mobile"
                              autoComplete="off"
                              minLength={10}
                              maxLength={10}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            className="btn-S"
                            onClick={() => {
                              updateProfile();
                            }}
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
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <div className="auth-body">
          <h2>Change Password</h2>
          <form className="auth-form-validation" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-control"
                placeholder="Password"
                autoComplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-field">
              <label htmlFor="password" className="input-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-control"
                placeholder="confirm password"
                autoComplete="off"
                required
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
