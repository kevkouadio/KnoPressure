import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import "./navstyle.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  

  if (isLoggedIn) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/home">
        KnoPressure
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ? "nav-link active": "nav-link"} onClick={logout}
            >
              Logout
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/home"
              className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
 }
}

export default Navbar;
