import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
  
      <Link to="/LandingPage" class="navbar-brand">Grading System</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/LandingPage" class="nav-link active">LandingPage</Link>
          </li>
          <li class="nav-item">
          <Link to="/Login" class="nav-link active">Login</Link>
          </li>
          <li class="nav-item">
            <Link to="/Dashboard" class="nav-link active">Dashboard</Link>
          </li>
          <li class="nav-item">
            <Link to="/Contact" class="nav-link active">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;