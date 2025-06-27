// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Aboutus'; // Make sure this filename matches your file

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
