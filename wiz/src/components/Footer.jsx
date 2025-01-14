import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2025 Wiz Freelancers. All Rights Reserved.</p>
            <div className="d-flex justify-content-center mt-2">
              <a 
                href="https://www.instagram.com/wizfreelancers/profilecard/?igsh=MWZkenFvZHVmODV4YQ==" 
                className="text-white mx-3 social-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/wiz-freelancers/" 
                className="text-white mx-3 social-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .social-link {
          text-decoration: none; /* Remove underline */
          font-size: 1.2rem; /* Increase font size */
        }
        .social-link:hover {
          color: #f0ad4e; /* Add hover effect */
        }
      `}</style>
    </footer>
  );
};

export default Footer;
