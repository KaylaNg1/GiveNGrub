import React from 'react';
// import { Link } from 'react-router-dom';
import './navBar.css';
import 'bootstrap/dist/css/bootstrap.css';
// import {Link} from "react-router-dom";


function Navbar() {
  return (
    <nav class="navbar navbar-light">
      <div class="logo">
        <h1>GroDonor</h1>
      </div>
      <div class="pages">
        <a href="#mission"><li>mission</li></a>
        <a href="Receipt.js"><li>receipts</li></a>
        <li to="/">groceries</li>
        <li to="/">locals</li>
        <li to="/">meals</li>
      </div>
    </nav>
  );
}

export default Navbar;