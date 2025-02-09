import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBusinessTime, FaProjectDiagram, FaHeadset, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import webDevelopmentImg from '../images/web-development.jpeg';
import webDesigningImg from '../images/web-designing.jpeg';
import ecommerceDevelopmentImg from '../images/ecommerce-development.jpeg';
import shivamImage from '../images/shivam-kumar.jpeg';
import nishantImage from '../images/nishant-kumar.jpeg';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center justify-content-center text-center text-white position-relative" style={{ minHeight: '60vh', padding: '50px 0' }}>
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0, 0, 0, 0.6)' }}></div>
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="hero-title fw-bold display-4 text-uppercase text-shadow">Welcome to Wiz Freelancers</h1>
              <p className="hero-slogan lead fst-italic text-light">Freelance Brilliance, Wiz Style!</p>
              <p className="hero-subtitle fs-4">Crafting Digital Solutions with Creativity and Precision</p>
              <Link to="/services" className="btn btn-light btn-lg mt-3 px-4 py-2 shadow-sm rounded-pill">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </div>

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
