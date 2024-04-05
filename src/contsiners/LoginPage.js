// LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/login.css'; // Import the CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to submit the form data to the server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <h1>Signin to your PopX account</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email address"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
          required
        />
      </div>
      
      <Link to="/lastpage">
      <button type="submit">Login</button> {/* Add a class name for styling */}
     
      </Link>
    </form>
  );
};

export default LoginForm;
