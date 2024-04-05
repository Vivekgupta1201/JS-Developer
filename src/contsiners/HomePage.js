// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/HomePage.css';
 // Import the CSS file

function HomePage() {
  return (
    <div className="home-page-container"> {/* Add a class name for styling */}
      <h1>Welcome to PopX
</h1>
      <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit.

:</p>
<Link to="/signup">
        <button className="home-page-button">Create Account
</button> {/* Add a class name for styling */}
      </Link>
      <br></br>
      <Link to="/login">
        <button className="home-page-button">Already Registered? Login</button> {/* Add a class name for styling */}
     
      </Link>
     
      
    </div>
  );
}

export default HomePage;
