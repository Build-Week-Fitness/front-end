import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  role: 0,
};

const Registration = (props) => {
  const [user, setUser] = useState(initialValues);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = (e) => {
    e.preventDefault();
    axios.post("https://bw-anywhere-fitness-05.herokuapp.com/api/auth/register", user)
      .then((res) => {
        console.log("axios signup response: ", res);
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-wrapper">
      <div className="form-text-container">
        <h2>Create Your Account</h2>
        <p>
          Already have an account?
          <Link to="/login">
            <button type="button" className="switch">
              Login
            </button>
          </Link>
        </p>
      </div>
      <div className="form-container">
        <form className="login-form" onSubmit={signUp}>
          <label>
            First Name
            <input
              type="text"
              name="first_name"
              placeholder="Enter First Name"
              max-characters="14"
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="last_name"
              placeholder="Enter Last Name"
              max-characters="14"
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              max-characters="14"
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              max-characters="14"
              onChange={handleChange}
            />
          </label>
          <button id="submit-login" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null)(Registration);
