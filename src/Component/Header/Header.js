import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  }, []);

  return (
    
      <nav  className={ isSticky ? "slide in show shadow-sm navbar navbar-expand-sm bg-white navbar-light py-3  fixed-top" : "slide out show navbar navbar-expand-sm navbar-light py-4 fixed-top "}>
        <div className="container">
          <Link className="navbar-brand" to="/">Doctor's <strong>Portal</strong></Link>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" >Home </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" >About</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" >Reviews</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" >Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/doctor" className="nav-link" >Doctor Panel</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;