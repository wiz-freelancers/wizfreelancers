import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.jpeg";
import emailjs from "@emailjs/browser";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m90b4fj", // Replace with your EmailJS service ID
        "template_gfz3k8k", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          skills: formData.skills,
        },
        "pZnTmkqe6DSiHnIg-" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Form submitted successfully!"); // Success message
          setShowModal(false); // Close modal after submission
          setFormData({ name: "", email: "", skills: "" }); // Reset form fields
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Error submitting form. Please try again.");
        }
      );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Wiz Freelancers Logo" style={{ height: "40px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary ms-3" onClick={() => setShowModal(true)}>
                  Join as a Freelancer
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Freelancer Registration Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Join as a Freelancer</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                {/* Freelancer Registration Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Skills</label>
                    <input type="text" className="form-control" name="skills" placeholder="Your skills (e.g., Web Development)" value={formData.skills} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn btn-success w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
