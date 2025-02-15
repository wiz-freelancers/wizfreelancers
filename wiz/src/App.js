import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // State to manage the modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Nav /> {/* Navigation bar */}

        <div className="container my-4">
          <Routes>
            <Route path="/" element={<Home openModal={openModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer /> {/* Fixed Footer */}

        {/* Freelancer Registration Modal */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Join as a Freelancer</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  {/* Freelancer Registration Form */}
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control" placeholder="Enter Your Name" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="Enter Your Email" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Contact No.</label>
                      <input type="tel" className="form-control" placeholder="Your Contact Number" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Skills</label>
                      <input type="text" className="form-control" placeholder="Your Skills (e.g., Web Development)" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Experience</label>
                      <textarea className="form-control" placeholder="Briefly Describe Your Experience" required></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Resume</label>
                      <input type="file" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
