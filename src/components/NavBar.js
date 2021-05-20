import React from "react";

import { Link } from "react-router-dom";

// donto use anchor as it makes anew requetss and state is vanished use Link instead

const NavBar = () => (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Github Finder</span>
    <Link className="nav-item nav-link active ml-auto" to="/">
      Home{" "}
    </Link>
    <Link className="nav-item nav-link" to="/about">
      About
    </Link>
  </nav>
);

export default NavBar;
