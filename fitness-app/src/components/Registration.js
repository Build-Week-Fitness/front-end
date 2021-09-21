import { Link } from 'react-router-dom';

export default function Registration() {
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
        <form className="login-form">
          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              max-characters="14"
            />
          </label>
          <label>
            Password
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              max-characters="14"
            />
          </label>
          <button id="submit-login" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
