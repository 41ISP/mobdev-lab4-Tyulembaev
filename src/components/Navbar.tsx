import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Link to="/">Main page</Link>
      <Link to="/favourite">Favourite cats</Link>
    </div>
  );
};

export default Navbar;
