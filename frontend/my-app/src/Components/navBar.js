import React from 'react';
import './navBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light">
      <div class="logo">
        <Link to="/" className = "test"><h1>GiveNGrub</h1></Link>
      </div>
      <div class="pages">
        <a href = "#mission"><li id = "missionLink">mission</li></a>
        <Link to="/receipt"><li id = "receiptLink">receipts</li></Link>
        <li to="/">groceries</li>
        <li to="/">locals</li>
        <li to="/">meals</li>
      </div>
    </nav>
  );
}

export default Navbar;