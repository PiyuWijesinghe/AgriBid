import React, { useState } from 'react';
import './login.css';

function Login() {
  const [role, setRole] = useState('Buyer');

  return (
    <div className="login-container">
      <div className="login-left">
        
        <h1>AgriBid.lk</h1>
        <p className="tagline">Nature’s Best, From Our Fields to Your Home</p>
        
      </div>

      <div className="login-right">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>

          <div className="role-toggle">
            <button
              className={role === 'Buyer' ? 'active' : ''}
              onClick={() => setRole('Buyer')}
            >
              Buyer
            </button>
            <button
              className={role === 'Seller' ? 'active' : ''}
              onClick={() => setRole('Seller')}
            >
              Seller
            </button>
          </div>

          <form>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Password" />

            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button className="login-button" type="submit">
              Log In &nbsp; &gt;
            </button>
          </form>

          <p className="register-text">
            New member? <a href="#">Register now</a>
          </p>

          <p className="footer-note">Crafted by Team AgriBid</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
