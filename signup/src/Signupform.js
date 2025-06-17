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

      
    </div>
  );
}

export default SignUpForm;
