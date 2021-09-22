import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { login } from '../actions';

const initialValues = {
  email: "",
  password: "",
}

const Login = (props) => {
  const [user, setUser] = useState(initialValues);
  const [error, setError] = useState('');

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault();
    axios.post("https://bw-anywhere-fitness-05.herokuapp.com/api/auth/login", user)
      .then(res => {
        setError('');
        console.log("axios login response, ", res);
        localStorage.setItem("token", res.data.token);
        props.login(res.data.role);
        if (res.data.role) {
          localStorage.setItem("role", 1);
          props.history.push('/class-admin');
        } else {
          localStorage.setItem("role", 0);
          props.history.push('/class');
        }
      })
      .catch(err => {
        console.log(err);
        setError('Login failed');
        setUser(initialValues);
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
            Email
            <input
              type="email"
              name="email"
              value={user.email}
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
              value={user.password}
              placeholder="Enter Password"
              max-characters="14"
              onChange={handleChange}
            />
          </label>
          {error && <p className="error-message">{error}</p>}
          <button id="submit-login" type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default connect(null, { login })(Login);