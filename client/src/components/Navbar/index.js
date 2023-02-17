import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import "./navstyle.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

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
              to="/home"
              className={location.pathname === "/KnoPressure-App" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/chart"
              className={location.pathname === "/chart" ? "nav-link active" : "nav-link"}
            >
              Chart
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/tips"
              className={location.pathname === "/tips" ? "nav-link active" : "nav-link"}
            >
              Tips
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/logout"
              className={
                location.pathname === "/logout" ? "nav-link active": "nav-link"} onClick={logout}
            >
              Logout
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
