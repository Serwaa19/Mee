import React from 'react';
import Navbar from './components/inc/Navbar';
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (
      <Router>

      <div>
      <Navbar />
      <Routes>
  <Route path="/LandingPage" element={<LandingPage />} />
  <Route path="/Login" element={<Login/>} />
  <Route path="/Dashboard" element={<Dashboard/>} />
  <Route path="/Contact" element={<Contact/>} />
</Routes>

    </div>
    </Router>
   
  );
}

export default App;


