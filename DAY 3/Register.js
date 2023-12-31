import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [dobError, setDobError] = useState('');

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (!value.trim()) {
      setUsernameError('Please enter a username');
    } else {
      setUsernameError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.trim()) {
      setEmailError('Please enter an email');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value.trim()) {
      setPasswordError('Please enter a password');
    } else {
      setPasswordError('');
    }
  };

  const handleDobChange = (e) => {
    const value = e.target.value;
    setDob(value);

    if (!value) {
      setDobError('Please select a date of birth');
    } else {
      setDobError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setUsernameError('Please enter a username');
      return;
    }

    if (!email.trim()) {
      setEmailError('Please enter an email');
      return;
    }

    if (!password.trim()) {
      setPasswordError('Please enter a password');
      return;
    }

    if (!dob) {
      setDobError('Please select a date of birth');
      return;
    }

    // Handle registration logic here (e.g., sending data to a server)
  };

  return (
    <div className="registration-box">
      <h2>Welcome to KidZone Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Choose a fun username"
          />
          <p className="error-message">{usernameError}</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your parent's email"
          />
          <p className="error-message">{emailError}</p>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Create a secret password"
          />
          <p className="error-message">{passwordError}</p>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={handleDobChange}
          />
          <p className="error-message">{dobError}</p>
        </div>
        <Link to="/">
          <button type="submit" className="register-button">
            Join the Fun!
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Register;
