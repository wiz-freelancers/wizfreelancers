import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import freelanceImage from '../images/Freelance.jpeg';
import './Home.css';
import API_BASE_URL from '../config/api';

const Home = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http')) return imagePath;
    const cleanPath = imagePath.replace(/\/+/g, '/').replace(/^\//, '');
    return `${API_BASE_URL}${cleanPath}`;
  };

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const [teamResponse, servicesResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/team/`),
          fetch(`${API_BASE_URL}/services/`)
        ]);

        if (!teamResponse.ok || !servicesResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const teamData = await teamResponse.json();
        const servicesData = await servicesResponse.json();

        if (mounted) {
          setTeamMembers(Array.isArray(teamData) ? teamData : teamData.results || []);
          setServices(Array.isArray(servicesData) ? servicesData : servicesData.results || []);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to load data');
          setLoading(false);
          console.error('Error fetching data:', err);
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
