import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { login } from '../actions';

const initialValues = {
  username: "",
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
    axios.post("https://anytime-fitness.herokuapp.com/api/auth/login", user)
      .then(res => {
        setError('');
        localStorage.setItem("token", res.data.token);
        props.login();
        props.history.push('/class');
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
            Username
            <input
              type="text"
              name="username"
              value={user.username}
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