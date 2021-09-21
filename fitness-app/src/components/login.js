import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const initialValues = {
  username: "",
  password: "",
}

export default function Login() {
  const [user, setUser] = useState(initialValues);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault();
    axios.post("https://anytime-fitness.herokuapp.com/api/auth/login", user)
      .then(res => {
        console.log("axios login response: ", res);
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="form-wrapper">
      <div className="form-text-container">
        <h2>Login to your account</h2>
        <p>Do not have an account?
          <Link to="/register">
            <button type='button' className='switch'>
              Create account
            </button>
          </Link>
        </p>
      </div>
      <div className="form-container">
        <form className="login-form" onSubmit={login}>
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
          <button id="submit-login" type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
