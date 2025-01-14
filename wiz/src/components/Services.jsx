import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import { FaCode, FaPaintBrush, FaShoppingCart } from 'react-icons/fa'; // Import icons

const Services = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display-4 mb-4">Our Services</h1>
          <p className="lead text-muted mb-5">
            At Wiz Freelancers, we specialize in providing high-quality web development and design services that cater to your business needs.
          </p>
        </div>
      </div>
      <div className="row">
        {/* Web Development Service */}
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <FaCode size={50} className="mb-3 text-primary" />
              <h3 className="card-title">Web Development</h3>
              <p className="card-text">
                We offer cutting-edge web development services to build responsive, dynamic, and user-friendly websites that meet your business goals.
              </p>
            </div>
          </div>
        </div>
        {/* Web Designing Service */}
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <FaPaintBrush size={50} className="mb-3 text-success" />
              <h3 className="card-title">Web Designing</h3>
              <p className="card-text">
                Our creative web design services focus on creating visually appealing and functional websites that enhance user experience.
              </p>
            </div>
          </div>
        </div>
        {/* E-commerce Development Service */}
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <FaShoppingCart size={50} className="mb-3 text-warning" />
              <h3 className="card-title">E-commerce Development</h3>
              <p className="card-text">
                We specialize in building robust e-commerce platforms that are secure, scalable, and optimized for performance, enabling your business to thrive online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
