import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.jpeg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Nav = ({ openModal }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    contactNo: "",
    experience: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: Assume the resume is uploaded to Google Drive and you have the link
    const resumeLink = "https://drive.google.com/yourfilelink";  // Replace with actual public link

    const formToSend = {
      from_name: formData.name,
      from_email: formData.email,
      skills: formData.skills,
      contact_no: formData.contactNo,
      experience: formData.experience,
      resume: resumeLink,
    };

    emailjs
      .send(
        "service_m90b4fj", 
        "template_gfz3k8k", 
        formToSend,
        "pZnTmkqe6DSiHnIg-" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Form submitted successfully! 🎉", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            theme: "colored",
          });
          setShowModal(false); // Close modal after submission
          setFormData({
            name: "",
            email: "",
            skills: "",
            contactNo: "",
            experience: "",
            resume: null,
          }); // Reset form fields
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Error submitting form. Please try again. 😞", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            theme: "colored",
          });
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
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact No.</label>
                    <input type="tel" className="form-control" name="contactNo" placeholder="Your Contact Number" value={formData.contactNo} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Skills</label>
                    <input type="text" className="form-control" name="skills" placeholder="Your Skills (e.g., Web Development)" value={formData.skills} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Experience</label>
                    <textarea className="form-control" name="experience" placeholder="Briefly Describe Your Experience" value={formData.experience} onChange={handleChange} required></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Resume</label>
                    <input type="file" className="form-control" name="resume" onChange={handleFileChange} />
                  </div>
                  <button type="submit" className="btn btn-success w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ToastContainer for notifications */}
      <ToastContainer />
    </>
  );
};

export default Nav;
