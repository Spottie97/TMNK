// src/App.js
import React from 'react';
import './styles/global.css'; // Global Tailwind styles
import './styles/custom.css'; // Custom styles
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
