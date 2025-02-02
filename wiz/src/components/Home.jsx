import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import freelanceImage from '../assets/images/freelance.jpg';
// const API_URL = process.env.REACT_APP_API_URL;
import './Home.css';

const MEDIA_BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://127.0.0.1:8000'
  : 'https://wiz-freelancers-backend.onrender.com';

const Home = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return 'https://placehold.co/300x300?text=No+Image';
    if (imagePath.startsWith('http')) return imagePath;
    return `${MEDIA_BASE_URL}${imagePath}`;
  };

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        };

        const [teamResponse, servicesResponse] = await Promise.all([
          fetch(`${process.env.REACT_APP_API_URL}/api/team/`, options),
          fetch(`${process.env.REACT_APP_API_URL}/api/services/`, options)
        ]);

        if (!teamResponse.ok) {
          const text = await teamResponse.text();
          console.error('Team Response:', text);
          throw new Error(`Team API error: ${teamResponse.status}`);
        }

        if (!servicesResponse.ok) {
          const text = await servicesResponse.text();
          console.error('Services Response:', text);
          throw new Error(`Services API error: ${servicesResponse.status}`);
        }

        const teamData = await teamResponse.json();
        const servicesData = await servicesResponse.json();

        if (mounted) {
          setTeamMembers(teamData);
          setServices(servicesData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        if (mounted) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container-fluid px-4">
          <div className="hero-content">
            <div className="company-title">Wiz Freelancers</div>
            <h1 className="hero-title">Transform Your Digital Vision Into Reality</h1>
            <p className="hero-subtitle">Expert Web Development & Digital Solutions</p>
            <div className="hero-cta">
              <Link to="/services" className="btn btn-primary btn-lg me-3">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <h3>100+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive digital solutions tailored to your business needs</p>
          </div>
          
          {loading ? (
            <div className="loader">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          ) : services && services.length > 0 ? (
            <div className="row g-4">
              {services.map((service) => (
                <div key={service.id} className="col-md-6 col-lg-4">
                  <div className="service-card">
                    <div className="service-image">
                      <img 
                        src={getImageUrl(service.image)} 
                        alt={service.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/300?text=Service';
                        }}
                      />
                    </div>
                    <div className="service-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-data">
              <p>No services available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Experts</h2>
            <p>Talented professionals dedicated to your success</p>
          </div>
          
          {loading ? (
            <div className="loader">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          ) : teamMembers && teamMembers.length > 0 ? (
            <div className="row g-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="col-md-6 col-lg-4">
                  <div className="team-card">
                    <div className="member-image">
                      <img 
                        src={getImageUrl(member.image)} 
                        alt={member.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/300?text=Team+Member';
                        }}
                      />
                    </div>
                    <div className="member-info">
                      <h3>{member.name}</h3>
                      <p className="position">{member.position}</p>
                      <p className="bio">{member.bio}</p>
                      <div className="social-links">
                        {member.linkedin_url && (
                          <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        )}
                        {member.github_url && (
                          <a href={member.github_url} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                          </a>
                        )}
                        {member.email && (
                          <a href={`mailto:${member.email}`}>
                            <i className="fas fa-envelope"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-data">
              <p>No team members available.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help bring your vision to life</p>
            <Link to="/contact" className="btn btn-light btn-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
