import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        StreamNest
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search videos..."
        />
      </div>

      <div className="nav-right">
        <button>Upload</button>
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;