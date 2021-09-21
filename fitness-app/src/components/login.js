import { Link } from 'react-router-dom';

export default function Login() {
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
          <button id="submit-login" type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
