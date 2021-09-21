import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const initialValues = {
  name: "",
  email: "",
  username: "",
  password: "",
  role: 0,
}

export default function Registration() {
  const [user, setUser] = useState(initialValues);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const signUp = e => {
    e.preventDefault();
    axios.post("https://anytime-fitness.herokuapp.com/api/auth/register", user)
      .then(res => {
        console.log("axios signup response: ", res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="form-wrapper">
      <div className="form-text-container">
        <h2>Create Your Account</h2>
        <p>Already have an account?
          <Link to="/login">
            <button type='button' className='switch'>
              Login
            </button>
          </Link>
        </p>
      </div>
      <div className="form-container">
        <form className="login-form" onSubmit={signUp}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              max-characters="14"
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              max-characters="14"
              onChange={handleChange}
            />
          </label>
          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
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
          <button id="submit-login" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
