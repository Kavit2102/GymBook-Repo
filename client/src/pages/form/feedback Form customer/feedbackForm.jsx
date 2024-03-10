// /**
//  * A React component that renders a feedback form with a navbar and sidebar.
//  * @returns The rendered feedback form component.
//  */
import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import { createFeedBackApi } from "../../../service/auth.service";
import "./feedbackForm.scss";

const FeedbackForm = () => {
  /**
   * A React functional component that initializes three state variables: Name, Email, and Feedback.
   * Name and Email are initialized to an empty string, while Feedback is initialized to an empty string.
   * These state variables can be updated using the corresponding set functions.
   */
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Feedback, setFeedback] = useState("");

  // /**
  //  * Handles the submission of feedback form data to the server.
  //  * @param {Event} e - The event object.
  //  * @returns None
  //  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name: Name,
        email: Email,
        feedBack: Feedback,
      };
      // console.log(body);
      const response = await createFeedBackApi(body);
      console.log(response);

      alert("Feedback submission Successfull");
    } catch (error) {
      alert("Server response failed ");
      console.log(error);
    }
  };

  return (
    <div className="addclassform">
      <Sidebar mode="customer" />
      <div className="formContainer">
        <h3>Feedback Form</h3>  
        <div className="auth-body">
          <form className="auth-form-validation" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <input
                type="text"
                className="input-control"
                id="name"
                placeholder="Name"
                autoComplete="off"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="email" className="input-label">
                Email address
              </label>
              <input
                type="text"
                className="input-control"
                id="email"
                placeholder="example@gmail.com"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="desc" className="input-label">
                Feedback Description
              </label>
              <textarea
                name="desc"
                id="desc"
                cols="55"
                rows="3"
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
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

export default FeedbackForm;
