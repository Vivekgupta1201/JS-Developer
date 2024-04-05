// SignUpForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Signup.css'; // Import the CSS file

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleIsAgencyChange = (event) => {
    setIsAgency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to submit the form data to the server
    console.log('Full Name:', fullName);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Company Name:', companyName);
    console.log('Is Agency:', isAgency);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={handleFullNameChange}
          placeholder="Enter full name"
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Enter phone number"
          required
        />
      </div>
      <div>
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
      <div>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={handleCompanyNameChange}
          placeholder="Enter company name"
          required
        />
      </div>
      <div className="radio-group">
        <label>
          Are you an Agency?
        </label>
        <input
          type="radio"
          value="Yes"
          name="isAgency"
          onChange={handleIsAgencyChange}
          checked={isAgency === 'Yes'}
        /> Yes
        <input
          type="radio"
          value="No"
          name="isAgency"
          onChange={handleIsAgencyChange}
          checked={isAgency === 'No'}
        /> No
      </div>
     
      <Link to="/lastpage">
      <button type="submit">Create Acount</button> {/* Add a class name for styling */}
     
      </Link>
    </form>
  );
};

export default SignUpForm;
