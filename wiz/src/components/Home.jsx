import React from 'react';
import { Link } from 'react-router-dom';
import freelanceImage from '../images/Freelance.jpeg';
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
      <section className="hero-section" style={{ position: 'relative' }}>
  <div
    className="hero-background"
    style={{
      backgroundImage: `url(${freelanceImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
      position: 'absolute',
      zIndex: '-1',
    }}
  ></div>
  <div className="container h-100 d-flex align-items-center justify-content-center">
    <div className="text-center text-white">
      <h1 className="hero-title display-4 fw-bold">WELCOME TO WIZ FREELANCERS</h1>
      <p className="hero-slogan lead">Redefining Web Excellence</p>
      <p className="hero-subtitle mb-4">
        From bold ideas to seamless execution, we turn visions into reality.
      </p>
      <Link to="/services" className="hero-btn btn btn-primary btn-lg shadow-lg">
        Explore Our Services
      </Link>
    </div>
  </div>
</section>


      {/* Services Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row text-center g-4">
          {[
            { img: webDevelopmentImg, title: 'Web Development', text: 'Building scalable, secure, and dynamic websites.' },
            { img: webDesigningImg, title: 'Web Designing', text: 'Creating beautiful, responsive designs.' },
            { img: ecommerceDevelopmentImg, title: 'E-commerce Development', text: 'Building secure, user-friendly online stores.' },
          ].map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-lg border-0 h-100 hover-card">
                <img src={service.img} className="card-img-top" alt={service.title} />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row text-center g-4">
          {[
            {
              img: shivamImage,
              name: 'Shivam Kumar',
              role: 'Web Developer',
              bio: 'Shivam Kumar is an experienced Web Developer specializing in system analysis, database design, and implementing business solutions. Skilled in product management and ensuring quality control throughout the project lifecycle, he delivers impactful solutions with a focus on customer satisfaction and timely delivery.',
              linkedin: 'https://www.linkedin.com/in/shivam-kumar-6801421ab/',
              gmail: 'shivamskr151@gmail.com',
            },
            {
              img: nishantImage,
              name: 'Nishant Kumar',
              role: 'Web Developer',
              bio: 'Nishant Kumar brings extensive experience in requirement gathering, system analysis, and application design. He excels in product management and quality control, ensuring projects are delivered with precision and client satisfaction within set timelines.',
              linkedin: 'https://www.linkedin.com/in/nishant-kumar-8911262b2/',
              gmail: 'kumarnishantpradhan@gmail.com',
            },
          ].map((teamMember, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-lg border-0 h-100 hover-card">
                <img src={teamMember.img} className="card-img-top" alt={teamMember.name} />
                <div className="card-body">
                  <h5 className="card-title">{teamMember.name}</h5>
                  <p className="card-subtitle text-muted">{teamMember.role}</p>
                  <p className="card-text">{teamMember.bio}</p>
                  <div className="d-flex justify-content-center">
                    <a
                      href={teamMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary me-2"
                    >
                      LinkedIn
                    </a>
                    <a href={`mailto:${teamMember.gmail}`} className="btn btn-outline-danger">
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container py-5 text-center">
        <h2 className="mb-4">Let's Bring Your Idea to Projects</h2>
        <p className="lead mb-4">
          Whether you're looking to build a website or create an e-commerce platform, we are here to help you.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg shadow-lg hover-btn">
          Get in Touch
        </Link>
      </div>
    </>
  );
};

export default Home;
