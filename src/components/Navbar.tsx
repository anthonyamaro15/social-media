import React from 'react';
import {Link} from 'react-router-dom'; 


const Navbar = () => {
   return (
      <nav className="Navbar">
         <Link to="/register">register</Link>
         <Link to="/login">login</Link>
      </nav>
   )
}

export default Navbar;