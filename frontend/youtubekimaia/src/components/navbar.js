import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter  
  } from 'react-router-dom'
  import Auth from '../Auth'
  import './navbar.css'

function Navbar(props) {
    if(Auth.isAdmin()){
        
        return (
          <div className="Navbar">
            <ul>
              <li>
                <Link to="/login" onClick={e=>{Auth.logout()}}>Logout</Link>
              </li>
              <li>
                <Link to="/stats">Statistics Page</Link>
              </li>
              <li>
                <Link to="/">Home Page</Link>
              </li>
            </ul>
          </div>
        );
    }
    else
    if(Auth.isAuthenticated()){
        
        return (
          <div className="Navbar">
            <ul>
              <li>
                <Link to="/login" onClick={e=>{Auth.logout()}}>Logout</Link>
              </li>
              <li>
                <Link to="/">Home Page</Link>
              </li>
            </ul>
          </div>
        );
    }
    else{
        return (
            <div className="Navbar">
              <ul>
                <li>
                  <Link to="/login">Login page</Link>
                </li>
                <li>
                <Link to="/">Home Page</Link>
              </li>
              </ul>
            </div>
          );
    }
}

export default Navbar;
