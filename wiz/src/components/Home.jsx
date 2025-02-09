import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBusinessTime, FaProjectDiagram, FaHeadset, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { FaCode, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa6";
import { motion } from "framer-motion";
import webDevelopmentImg from '../images/web-development.jpeg';
import webDesigningImg from '../images/web-designing.jpeg';
import ecommerceDevelopmentImg from '../images/ecommerce-development.jpeg';
import shivamImage from '../images/shivam-kumar.jpeg';
import nishantImage from '../images/nishant-kumar.jpeg';
import './Home.css';

const Home = () => {
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
    <>
      {/* Hero Section - Focused on WIZ Freelancers */}
      <div className="hero-section d-flex align-items-center justify-content-center text-center text-white position-relative bg-dark" style={{ minHeight: "70vh", padding: "50px 0" }}>
        <div className="container position-relative z-1">
          <div className="row align-items-center">
            {/* Left Section - WIZ Freelancers Message */}
            <motion.div className="col-lg-6 text-lg-start text-center" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <h1 className="hero-title fw-bold display-4 text-uppercase text-shadow">Innovate. Connect. Thrive with WIZ Freelancers</h1>
              <p className="hero-subtitle fs-5 text-light mt-3">Empowering freelancers with limitless opportunities while delivering top-notch digital solutions for businesses worldwide.</p>
              <p className="hero-subtitle fs-6 text-light">Join a vibrant network where innovation meets expertise, and success is a shared journey.</p>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="d-flex flex-column flex-md-row align-items-center gap-3 mt-3">
                <Link to="/services" className="btn btn-primary btn-lg px-4 py-2 shadow-sm rounded-pill d-flex align-items-center gap-2 hover-effect">
                  Explore Our Services <FaArrowRight />
                </Link>
                <button className="btn btn-outline-light btn-lg px-4 py-2 shadow-sm rounded-pill d-flex align-items-center gap-2 hover-effect" onClick={openModal}>
                  Join as a Freelancer
                </button>
              </motion.div>
            </motion.div>

            {/* Right Section - Animated Tech Stack */}
            <motion.div className="col-lg-6 text-center mt-4 mt-lg-0" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <div className="tech-icons d-flex justify-content-center gap-4">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}><FaCode size={60} className="text-primary" /></motion.div>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 0.5 }}><FaReact size={60} className="text-info" /></motion.div>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 1 }}><FaNodeJs size={60} className="text-success" /></motion.div>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 1.5 }}><FaDatabase size={60} className="text-warning" /></motion.div>
              </div>
              <p className="fs-6 text-light mt-3">Building a future where businesses and freelancers succeed together through innovation and collaboration.</p>
            </motion.div>
          </div>
        </div>
      </div>

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

      {/* Stats Section */}
      <div className="container py-5 text-center">
        <div className="row g-4">
          {[{ icon: <FaUsers size={50} className="text-primary" />, number: '50+', label: 'Happy Clients' },
            { icon: <FaBusinessTime size={50} className="text-primary" />, number: '2+', label: 'Years In Business' },
            { icon: <FaProjectDiagram size={50} className="text-primary" />, number: '100+', label: 'Projects' },
            { icon: <FaHeadset size={50} className="text-primary" />, number: '24/7', label: 'Available Support' }].map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="d-flex flex-column align-items-center">
                  {stat.icon}
                  <h2 className="fw-bold display-5 mt-2">{stat.number}</h2>
                  <p className="fs-5 text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Our Services</h2>
        <div className="row g-4">
          {[{ img: webDevelopmentImg, title: 'Web Development', text: 'Building scalable, secure, and dynamic websites.' },
            { img: webDesigningImg, title: 'Web Designing', text: 'Creating beautiful, responsive designs.' },
            { img: ecommerceDevelopmentImg, title: 'E-commerce Development', text: 'Building secure, user-friendly online stores.' }].map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card shadow border-0 h-100">
                  <img src={service.img} className="card-img-top" alt={service.title} />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{service.title}</h5>
                    <p className="card-text">{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Our Team Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Meet Our Team</h2>
        <div className="row g-4 justify-content-center">
          {[{ img: shivamImage, name: 'Shivam Kumar', role: 'Web Developer', bio: 'Expert in system analysis, database design, and business solutions.', linkedin: 'https://www.linkedin.com/in/shivam-kumar-6801421ab/', gmail: 'shivamskr151@gmail.com' },
            { img: nishantImage, name: 'Nishant Kumar', role: 'Web Developer', bio: 'Specializes in requirement gathering, system analysis, and project management.', linkedin: 'https://www.linkedin.com/in/nishant-kumar-8911262b2/', gmail: 'kumarnishantpradhan@gmail.com' }].map((teamMember, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card shadow-lg border-0 h-100 text-center p-3 rounded-3 team-card">
                  <img src={teamMember.img} className="rounded-circle mx-auto d-block team-img" alt={teamMember.name} style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold mt-3">{teamMember.name}</h5>
                    <p className="card-subtitle text-muted">{teamMember.role}</p>
                    <p className="card-text small mt-2">{teamMember.bio}</p>
                    <div className="d-flex justify-content-center gap-3 mt-3">
                      <a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-circle p-2"><FaLinkedin size={20} /></a>
                      <a href={`mailto:${teamMember.gmail}`} className="btn btn-outline-danger rounded-circle p-2"><FaEnvelope size={20} /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-3">Let's Bring Your Idea to Projects</h2>
        <p className="lead mb-4">Whether you're looking to build a website or create an e-commerce platform, we are here to help you.</p>
        <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
      </div>
    </>
  );
};

export default Home;
