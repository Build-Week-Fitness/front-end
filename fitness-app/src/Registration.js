export default function Registration() {
  return (
    <>
      <h1>Registration</h1>
      <form>
        <label>
          Create Username:
          <input
            type="text"
            name="username"
            placeholder="Create Username"
            max-characters="14"
          />
          <br />
          Create Password:
          <input
            type="text"
            name="password"
            placeholder="Create Password"
            max-characters="14"
          />
        </label>
        <br />
        <button>Sign Up</button>
      </form>
    </>
  );
}
