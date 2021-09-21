export default function Login() {
  return (
    <>
      <h1>Login Form</h1>
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
