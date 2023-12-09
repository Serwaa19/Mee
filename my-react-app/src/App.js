import React from 'react';
import Navbar from './components/inc/Navbar';
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {  
  return (
      <Router>

      <div>
      <Navbar />

        <Route path="/LandingPage">
        <LandingPage/>
        </Route>

        <Route path="/Login">
        <Login/>
        </Route>

        <Route path="/Dashboard">
        <Dashboard/>
        </Route>

        <Route path="/Contact">
        <Contact/>
        </Route>

    </div>
    </Router>
  );
}

export default App;


