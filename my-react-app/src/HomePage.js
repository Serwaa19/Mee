import React from 'react';
import './App.css';

function HomePage(){
  return(
    <div className="hompe-page">
      <header>
        <h1>Welcome to the Missing Grade Reporting System </h1>
      </header>
      <section>
        <p>This system is designed to help students track and report grades that are not recorded in their academic profiles.</p>
        <p>Use the navigation menu to access different features of the system.</p>
      </section>
    </div>
  );
}

export default HomePage;