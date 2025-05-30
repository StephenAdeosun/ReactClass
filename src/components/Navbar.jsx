// create a navbar
import React from 'react';
import { Link } from 'react-router-dom';


// style this navbar with css
const StyleCss = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '18px'
};


const Navbar = () => {
  return (
    <nav className="navbar"style={StyleCss}> 
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Projects</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/lists">Lists</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

