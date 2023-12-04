import React from 'react';

function Navigation(){
  return(
    <nav className="nav-container">
      <ul className="nav-menu">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">Dashboard</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/grades">Grades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/report">Report Missing Grades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;