/**
 */
// /**
//  * A component that renders a registration form with a sidebar.
//  * @returns JSX element that contains the registration form and sidebar.
//  */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import { SignupApi } from "../../../service/auth.service";
import "./registrationForm.scss";

const UserForm = () => {

  const navigate = useNavigate();
  
  /**
   */
  // /**
  //  * A component that uses the useState hook to manage state for a form with fields for
  //  * name, email, mobile, password, role, and address.
  //  * @returns An array of stateful values and their corresponding setter functions.
  //  * The values are: Name, Email, Mobile, Password, Role, and Address.
  //  */
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState();
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("");
  const [Address, setAddress] = useState("");

  // /**
  //  * Handles the form submission for user sign up. Sends a POST request to the server with the user's
  //  * information and displays an alert message upon success or failure.
  //  * @param {{Event}} e - the form submission event
  //  * @returns None
  //  */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = {
        name: Name,
        email: Email,
        mobileNo: Mobile,
        address: Address,
        password: Password,
        role: Role,
      };
      // console.log(body);
      const response = await SignupApi(body);
      console.log(response);
      alert("SignUp Successfull");
      navigate(0);
    } catch (error) {
      alert("Server response failed ");
      console.log(error);
    }
  };

  return (
    <div className="regform">
      <Sidebar mode="admin" />
      <div className="formContainer">
        <h3>Registration Form</h3>
        <div className="auth-body">
          
          {/* /**
           * A form component for user registration. The form includes input fields for name, email, mobile number,
           * address, password, and role. The form also includes validation for each input field and a submit button.
           * @param {Function} handleSubmit - A function to handle the form submission.
           * @param {Function} setName - A function to set the name input value.
           * @param {Function} setEmail - A function to set the email input value.
           * @param {Function} setMobile - A function to set the mobile number input value.
           * @param {Function} setAddress - A function to set the address input value.
           * @param {Function} setPassword - A function to set the password input value.
           * @param
           */}
          <form className="auth-form-validation" onSubmit={handleSubmit}>
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
            <div className="input-field">
              <label htmlFor="address" className="input-label">
                Address
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="input-control"
                id="address"
                placeholder="Address"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="input-control"
                placeholder="Password"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="role" className="input-label">
                Role
              </label>
              <select
                className="input-control"
                name="role"
                id="role"
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="select">Select a role</option>
                <option value="customer">Customer</option>
                <option value="trainer">Trainer</option>
              </select>
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

export default UserForm;
