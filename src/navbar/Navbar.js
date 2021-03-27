import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <div className="row">
            <nav className="col navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="index.html">
                The Language Project
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div id="navbarContent" className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/units" className="nav-link">
                      Lessons/Units
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/lesson/1" className="nav-link">
                      Current Unit
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contribute
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Parameters
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Languages
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
