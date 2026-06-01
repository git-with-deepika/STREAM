import "./Register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">

        <h1>StreamNest</h1>
        <p>Create your account</p>

        <form>

          <input
            type="text"
            placeholder="Enter Username"
          />

          <input
            type="email"
            placeholder="Enter Email"
          />

          <input
            type="password"
            placeholder="Enter Password"
          />

          <button type="submit">
            Register
          </button>

        </form>

        <div className="login-link">
          Already have an account? Login
        </div>

      </div>
    </div>
  );
}

export default Register;