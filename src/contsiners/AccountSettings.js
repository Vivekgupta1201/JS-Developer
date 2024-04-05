import React from 'react';
import '../Style/Styles.css'; // Import your CSS file
import logo from '../logo.svg'; // Import your logo image

function AccountSettings() {
  return (
    <div className="container">
      <h1>Account Settings</h1>
      <div className="content">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="details">
          <h1>Marry Doe</h1>
          <h3>Marry@Gmail.Com</h3>
        </div>
      </div>
      <p>
        Lorem Ipsum Dolor Sit Amet. Consetetur sadipscing Elitr, Sed Diam Nonumy eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat. Make a react js page for this with css.
      </p>
    </div>
  );
}

export default AccountSettings;
