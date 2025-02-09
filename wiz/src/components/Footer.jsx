import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap imported
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="mb-2 mb-md-0">
                <h6 className="fw-bold">Wiz Freelancers</h6>
                <p className="mb-1 small">Freelance Brilliance, Wiz Style!</p>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <a
                  href="https://www.instagram.com/wizfreelancers/profilecard/?igsh=MWZkenFvZHVmODV4YQ=="
                  className="text-white text-decoration-none d-flex align-items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} /> <span className="small">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/wiz-freelancers/"
                  className="text-white text-decoration-none d-flex align-items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} /> <span className="small">LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/917079018110?text=Hello%20Wiz%20Freelancers,%20I%20would%20like%20to%20know%20more%20about%20your%20services!"
                  className="text-white text-decoration-none d-flex align-items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={20} /> <span className="small">WhatsApp</span>
                </a>
              </div>
            </div>
            <hr className="border-top border-secondary my-2" />
            <p className="mb-0 small">&copy; 2025 Wiz Freelancers. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;