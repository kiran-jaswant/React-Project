import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "./logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light my-nav ">
      <img src={logo} className='logo'></img>
      <Link className="navbar-brand" to="/"><span className='heading'>Green Heaven</span></Link>

    <div className='Menu-container'>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link menu" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menu" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menu" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menu" to="/Accessories">Accessories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menu" to="/gardening">Gardening Services</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cart
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to="/flowers">Floweral plants</Link>
              <Link className="dropdown-item" to="/decorative">Decorative plants</Link>
              <Link className="dropdown-item" to="/fruits">Fruits and Vegies plants</Link>
            </div>
          </li>
        </ul>
      </div >
      <div className='LR-sec'>
      <button className="button"><Link to='/login' className='text'>Login</Link></button>
      <button className='button'><Link to='/register' className='text'>Register</Link></button>
      </div>
    </div>
    </nav>
  );
}
export default Navbar;