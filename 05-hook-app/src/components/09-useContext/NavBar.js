import React from "react";
import { Link, NavLink } from 'react-router-dom'


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">useContext</Link>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact  activeClassName="active text-uppercase" className="nav-link nav-item" to="./">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact  activeClassName="active text-uppercase" className="nav-link nav-item" to="./about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  exact activeClassName="active text-uppercase" className="nav-link nav-item" to="./login">Login</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};
