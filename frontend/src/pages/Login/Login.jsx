import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>StreamNest</h1>
        <p>Sign in to continue</p>

        <form>
          <input
            type="email"
            placeholder="Enter Email"
          />

          <input
            type="password"
            placeholder="Enter Password"
          />

          <button type="submit">
            Login
          </button>
        </form>

        <div className="register-link">
          Don't have an account? Register
        </div>

      </div>
    </div>
  );
}

export default Login;