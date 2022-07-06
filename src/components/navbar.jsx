import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
const Navbar = ({ user }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-fixed-top navbar-light "
      style={{ marginBottom: 20 }}
    >
      <Link className="navbar-brand" to="/">
        Videoz
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink
            style={{ alignContent: "center" }}
            className="nav-item nav-link"
            to="/movies"
          >
            Movies
          </NavLink>

          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-link" to="/rentals">
            Rentals
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className=" reg" to="/register">
                Sign Up!
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
