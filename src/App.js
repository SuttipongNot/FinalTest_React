import './App.css';
import SignInUser from './components/SignInAdmin';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signinadmin" />} /> 
        <Route exact path='/signinadmin' element={<SignInUser />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
