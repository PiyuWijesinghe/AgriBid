import React, { useState } from 'react';
import './signupform.css';

function SignUpForm() {
  const [role, setRole] = useState('Buyer');

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>AgriBid.lk</h1>
        <p className="tagline">The modern marketplace that directly connects farmers and buyers!</p>
       </div>
       <div className="signup-right">
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

      </div>

      
    </div>
  );
}

export default SignUpForm;
