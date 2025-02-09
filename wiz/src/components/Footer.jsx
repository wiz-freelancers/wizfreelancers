import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap imported
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-2 fw-bold">&copy; 2025 Wiz Freelancers. All Rights Reserved.</p>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <a
                href="https://www.instagram.com/wizfreelancers/profilecard/?igsh=MWZkenFvZHVmODV4YQ=="
                className="text-white text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} className="me-1" /> Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/wiz-freelancers/"
                className="text-white text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} className="me-1" /> LinkedIn
              </a>
              <a
                href="https://wa.me/917079018110"
                className="text-white text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} className="me-1" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;