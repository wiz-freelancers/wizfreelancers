import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap imported

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2025 Wiz Freelancers. All Rights Reserved.</p>
            <p className="small">
              <a href="https://www.instagram.com/wizfreelancers/profilecard/?igsh=MWZkenFvZHVmODV4YQ==" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://www.linkedin.com/company/wiz-freelancers/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
