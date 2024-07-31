import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import PackagesPage from './pages/PackagesPage';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import './styles/global.css';
import './styles/custom.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/booking/success" element={<Success />} />
          <Route path="/booking/cancel" element={<Cancel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
