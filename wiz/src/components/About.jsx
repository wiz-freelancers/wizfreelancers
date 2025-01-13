import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Custom CSS file

const About = () => {
  return (
    <div className="container mt-5 about-container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display-4 mb-4 fade-in title-highlight">About Us</h1>
          <p className="lead about-text fade-in">
            <strong>Welcome to Wiz Freelancers!</strong> At Wiz Freelancers, we believe in turning ideas into reality through our comprehensive web development and design services. As a dynamic team of passionate freelancers based in India, we specialize in delivering high-quality, cost-effective solutions tailored to meet your unique business needs.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 slide-in-left">
          <h3 className="mb-3 section-title">Our Mission</h3>
          <p className="section-text">
            Our mission is to empower businesses of all sizes by providing innovative, scalable, and reliable web solutions. We strive to create a strong online presence for our clients, helping them reach their target audience and achieve their business goals effectively.
          </p>
        </div>
        <div className="col-md-6 slide-in-right">
          <h3 className="mb-3 section-title">Our Vision</h3>
          <p className="section-text">
            To be the go-to freelance service provider for web development and design, known for our creativity, reliability, and commitment to excellence.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 zoom-in">
          <h3 className="mb-3 section-title">Our Services</h3>
          <ul className="list-group list-group-flush service-list">
            <li className="list-group-item service-item">Web Development</li>
            <li className="list-group-item service-item">E-commerce Development</li>
            <li className="list-group-item service-item">Web Design</li>
          </ul>
        </div>
        <div className="col-md-6 zoom-in">
          <h3 className="mb-3 section-title">Why Choose Us?</h3>
          <ul className="list-group list-group-flush service-list">
            <li className="list-group-item service-item">Expertise</li>
            <li className="list-group-item service-item">Customization</li>
            <li className="list-group-item service-item">Quality Assurance</li>
            <li className="list-group-item service-item">Timely Delivery</li>
            <li className="list-group-item service-item">Customer-Centric Approach</li>
          </ul>
        </div>
      </div>

      <div className="contact-section">
        <h3 className="contact-title">Get In Touch</h3>
        <p className="contact-text">
        Have an idea in mind? Let's collaborate and turn your vision into reality. Reach out to us today!
        </p>
        <p className="contact-details">Email: <a href="mailto:wizfreelancers@gmail.com">wizfreelancers@gmail.com</a></p>
        <p className="contact-details">Phone: +91-7079018110</p>
        <p className="text-muted mt-4"><b>Wiz Freelancers - Freelance Brilliance, Wiz Style!</b></p>
      </div>
    </div>
  );
};

export default About;
