import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Nav /> {/* Navigation bar */}
        
        <div className="container my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} /> {/* Ensure this is lowercase */}
            <Route path="/contact" element={<Contact />} /> {/* Ensure this is lowercase */}
          </Routes>
        </div>

        <Footer /> {/* Fixed Footer */}
      </div>
    </Router>
  );
};

export default App;
