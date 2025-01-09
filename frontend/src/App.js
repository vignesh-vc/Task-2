// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dropdown from './components/Dropdown';

const App = () => {
  return (
    <Router>  {/* Only one Router at the root level */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<Dropdown role="Proficient" />} />
        <Route path="/dashboard" element={<Dropdown role="Expert" />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
