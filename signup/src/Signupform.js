import React, { useState } from 'react';
import './signupform.css';

function SignUpForm() {
  const [role, setRole] = useState('Buyer');

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>AgriBid.lk</h1>
        <p className="tagline">Nature’s Best, From Our Fields to Your Home</p>
       </div>
       <div className="signup-right">
        <div className="signup-box">
          <h2>Get Started</h2>
          <p>By creating a free account</p>

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
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Password" />

            <button className="signup-button" type="submit">
              Sign Up →
            </button>
          </form>
         <p className="login-link">
            Already a member? <a href="#">Log In</a>
          </p>

          <p className="footer-note">Crafted by Team AgriBid</p>
        </div>
      </div>
      
    </div>
  );
}

export default SignUpForm;
