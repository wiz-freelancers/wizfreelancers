import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css"; // Importing CSS for further customization

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oikq8fd", // Replace with your EmailJS Service ID
        "template_gei2446", // Replace with your EmailJS Template ID
        form.current,
        "pZnTmkqe6DSiHnIg-" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message has been sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Message sending failed. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card contact-card shadow-lg p-5 w-100">
        <h2 className="text-center text-primary mb-4">📩 Get In Touch!</h2>
        <p className="text-center text-muted mb-4">We're excited to collaborate with you. Fill out the form below, and we'll be in touch shortly!</p>
        
        <form ref={form} onSubmit={sendEmail} className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Your Name</label>
              <input type="text" name="from_name" className="form-control" placeholder="Enter Your Name" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Your Email</label>
              <input type="email" name="from_email" className="form-control" placeholder="Enter Your Email" required />
            </div>
          </div>

          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <label className="form-label">Your Contact Number</label>
              <input type="tel" name="Number1" pattern="[0-9]{10}" className="form-control" placeholder="Enter Your Contact Number" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Project Title</label>
              <input type="text" name="projectTitle1" className="form-control" placeholder="Enter Your Project Title" required />
            </div>
          </div>

          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <label className="form-label">Project Budget</label>
              <input type="number" name="projectBudget1" className="form-control" placeholder="Enter Your Project Budget" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">UI/UX Reference URL</label>
              <input type="url" name="url1" pattern="(https?:\/\/|www\.)[^\s]+" className="form-control" placeholder="Enter Your UI/UX Reference URL" required />
            </div>
          </div>

          <div className="mb-3 mt-3">
            <label className="form-label">Project Description</label>
            <textarea name="projectDescription" className="form-control" placeholder="Enter Your Project Description" rows="3" required></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Your Message</label>
            <textarea name="message" className="form-control" placeholder="Enter Your Message" rows="3"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold contact-button">Send Message 🚀</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
