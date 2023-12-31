import React, { useState } from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome to KidZone</h2>
     {/* <img
        src="https://img.freepik.com/premium-vector/kids-zone-banner-child-party-playground-area_176411-4862.jpg" // Replace with the URL of your logo image
        alt="KidZone Logo"
        className="logo"
      /> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="input-field"
            placeholder="Your fun username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
            placeholder="Your secret password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className='register'>
          <p>
            Don't have an account? <Link to="/Register">Join the Fun!</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
