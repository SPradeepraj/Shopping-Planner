import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  


  return (
   
      <div className="navbar">
        

        <Link to="/" className="h11">
          Home{' '}
        </Link>
        <Link to="/New" className="h11">
        {' '}
        </Link>

        <Link to="/Product" className="leftside">
          ADD PRODUCT{' '}
        </Link>

    
      
    </div>
  );
}

export default Navbar;
