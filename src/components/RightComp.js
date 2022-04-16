import React from "react";
import "./RightComp.css";

function RightComp() {
  return (
    <div className="wrapper">
      <div className="top-box">
        <p>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </p>
      </div>
      <div className="form-wrapper">
        <form action="#">
          <div className="field">
            <label for="firstName">First Name</label>
            <input
              type="text"
              className="firstname"
              name="firstName"
              placeholder="First Name"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/icon-error.svg"}
              className="error-icon"
              alt="error-img"
            />
            <p className="error-text">First Name cannot be empty</p>
          </div>
          <div className="field">
            <label for="firstName">last Name</label>
            <input
              type="text"
              className="lastname"
              name="lastName"
              placeholder="Last Name"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/icon-error.svg"}
              className="error-icon"
              alt="error-img"
            />
            <p className="error-text">Last Name cannot be empty</p>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="email"
              name="email"
              placeholder="Email Address"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/icon-error.svg"}
              className="error-icon"
              alt="error-img"
            />
            <p className="error-text">looks like this is not an email</p>
          </div>
          <div className="field">
            <label for="password">Password</label>
            <input
              type="password"
              className="password"
              name="password"
              placeholder="Password"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/icon-error.svg"}
              className="error-icon"
              alt="error-img"
            />
            <p className="error-text">The password cannot be empty</p>
          </div>
          <button type="submit" className="btn">
            Claim your free trial
          </button>
          <p className="form-footer">
            By clicking the button, you are agreeing to our 
            <span>terms and services</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RightComp;
