import React from "react";
import logo from "../logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        <h2>React ToDoList</h2>
      </nav>
    </div>
  );
}

export default Navbar;
