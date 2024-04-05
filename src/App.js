// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from './contsiners/HomePage'; // Ensure correct file path
import LoginPage from './contsiners/LoginPage'; // Ensure correct file path
import SignupPage from './contsiners/SignupPage'; 
import AccountSettings from './contsiners/AccountSettings';// Ensure correct file path

function App() {
  return (
     <Router>
       <Routes>
     {/* <Route path='/signup' element={<SignupPage/>} /> */}
     <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/signup" element={<SignupPage/>} />
       <Route exact path="/lastpage" element={<AccountSettings/>} />
     
     </Routes>
  </Router>
   
  );
}

export default App;
