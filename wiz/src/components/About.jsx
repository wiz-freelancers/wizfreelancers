import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaRocket, FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="container about-container">
        {/* Animated Title */}
        <motion.h1 
          className="display-4 text-center neon-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us 🚀
        </motion.h1>

        {/* Intro Text */}
        <motion.p 
          className="lead text-center about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <strong>Welcome to Wiz Freelancers!</strong> We transform ideas into reality with cutting-edge web development and design solutions, tailored to your business needs.
        </motion.p>

        {/* Mission & Vision Cards */}
        <div className="row mt-5">
          <motion.div 
            className="col-md-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="info-card">
              <h3 className="mb-3 section-title">🌍 Our Mission</h3>
              <p className="section-text">
                Empowering businesses with innovative, scalable, and reliable web solutions, helping them establish a strong digital presence.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="col-md-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="info-card">
              <h3 className="mb-3 section-title">🚀 Our Vision</h3>
              <p className="section-text">
                To be the most sought-after freelance service provider, known for creativity, reliability, and excellence in web development.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Services & Why Choose Us */}
        <div className="row mt-5">
          <motion.div 
            className="col-md-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="info-card">
              <h3 className="mb-3 section-title">💼 Our Services</h3>
              <ul className="list-unstyled">
                <li><FaCheckCircle className="check-icon" /> Web Development</li>
                <li><FaCheckCircle className="check-icon" /> E-commerce Development</li>
                <li><FaCheckCircle className="check-icon" /> UI/UX Design</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="col-md-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="info-card">
              <h3 className="mb-3 section-title">💡 Why Choose Us?</h3>
              <ul className="list-unstyled">
                <li><FaCheckCircle className="check-icon" /> Expertise & Innovation</li>
                <li><FaCheckCircle className="check-icon" /> Custom Solutions</li>
                <li><FaCheckCircle className="check-icon" /> On-Time Delivery</li>
                <li><FaCheckCircle className="check-icon" /> Client-Centric Approach</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div 
  className="new-contact-section mt-5"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="contact-content container">
    {/* Left Side - Contact Text */}
    <div className="contact-text">
      <h2 className="contact-heading">🚀 Let's Connect!</h2>
      <p className="contact-subtext">
        Got an idea? Let's bring it to life with cutting-edge web solutions.
      </p>
      <motion.a 
  href="/contact"
  className="btn-glow contact-btn mt-3"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Start a Project 🚀
</motion.a>

    </div>

    {/* Right Side - Contact Details */}
    <div className="contact-details">
      <div className="contact-box">
        <FaEnvelope className="contact-icon" />
        <a href="mailto:wizfreelancers@gmail.com">wizfreelancers@gmail.com</a>
      </div>
      <div className="contact-box">
        <FaPhoneAlt className="contact-icon" />
        <a href="tel:+917079018110">+91-7079018110</a>
      </div>
    </div>
  </div>
  </motion.div>
      </div>
    </div>
  );
};

export default About;
