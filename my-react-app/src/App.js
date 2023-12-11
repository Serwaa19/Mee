import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import GradeReport from './components/Grade Report';
import Faqs from './components/faqs';
import Missinggradeform from './components/Missing grade form';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {  
  return (
      <Router>

      <div>
      <Navbar />
      <Routes>
  <Route path="/LandingPage" element={<LandingPage />} />
  <Route path="/Login" element={<Login/>} />
  <Route path="/Dashboard" element={<Dashboard/>} />
  <Route path="/Grade Report" element={<GradeReport/>} />
  <Route path="/Missing grade form" element={<Missinggradeform/>} />
  <Route path="/Contact" element={<Contact/>} />
  <Route path="/faqs" element={<Faqs/>} />
</Routes>

    </div>
    </Router>
   
  );
}

export default App;


