import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.jpeg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion"; // Animation library
import "./Nav.css"; // Import the custom CSS file for additional styling

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
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
    const file = e.target.files[0];
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (file && allowedTypes.includes(file.type) && file.size <= 2 * 1024 * 1024) {
      setFormData({ ...formData, resume: file });
    } else {
      toast.error("Invalid file. Only PDF/DOC under 2MB allowed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const resumeLink = "https://drive.google.com/yourfilelink"; // Replace with actual upload logic

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
        "service_m90b4fj", // Replace with your EmailJS service ID
        "template_gfz3k8k", // Replace with your EmailJS template ID
        formToSend,
        "pZnTmkqe6DSiHnIg-" // Replace with your EmailJS user/public key
      )
      .then(
        () => {
          setShowSuccessPopup(true);
          setTimeout(() => {
            setShowSuccessPopup(false);
          }, 5000);

          setFormData({
            name: "",
            email: "",
            skills: "",
            contactNo: "",
            experience: "",
            resume: null,
          });
          setShowModal(false);
        },
        (error) => {
          console.error("FAILED...", error);
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
          <div className="modal-dialog modal-lg">
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

      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            zIndex: 1050,
          }}
        >
          <h4 style={{ color: "#2ecc71" }}>🎉 Awesome!</h4>
          <p>Thank you for joining as a Freelancer! 🚀</p>
          <button
            style={{
              padding: "10px 20px",
              background: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
            onClick={() => setShowSuccessPopup(false)}
          >
            Close
          </button>
        </motion.div>
      )}

      {/* ToastContainer for notifications */}
      <ToastContainer />
    </>
  );
};

export default Nav;
