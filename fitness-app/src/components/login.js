import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <>
      <h2>Login to your account</h2>
      <p>Do not have an account?
        <Link to="/register">
          <button type='button' className='switch'>
            Create account
          </button>
        </Link>
      </p>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            max-characters="14"
          />
          <br />
          Password:
          <input
            type="text"
            name="password"
            placeholder="Enter Password"
            max-characters="14"
          />
        </label>
        <br />
        <button>Log In</button>
      </form>
    </>
  );
}
