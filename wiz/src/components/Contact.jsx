import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
          setModalMessage("✅ Your message has been sent successfully! 🎉 We'll get back to you soon. 🚀");
          setModalShow(true);
          e.target.reset();
        },
        (error) => {
          setModalMessage("❌ Oops! Something went wrong. Please try again later. 💡");
          setModalShow(true);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">📩 Get In Touch!</h2>
        <p className="contact-subtitle">We'd love to hear from you. Fill out the form below and we'll respond promptly!</p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" name="from_name" className="form-control" placeholder="Enter Your Name" required />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input type="email" name="from_email" className="form-control" placeholder="Enter Your Email" required />
          </div>

          <div className="form-group">
            <label>Your Contact Number</label>
            <input type="tel" name="Number1" pattern="[0-9]{10}" className="form-control" placeholder="Enter Your Contact Number" required />
          </div>

          <div className="form-group">
            <label>Project Title</label>
            <input type="text" name="projectTitle1" className="form-control" placeholder="Enter Your Project Title" required />
          </div>

          <div className="form-group">
            <label>Project Budget</label>
            <input type="number" name="projectBudget1" className="form-control" placeholder="Enter Your Project Budget" required />
          </div>

          <div className="form-group">
            <label>UI/UX Reference URL</label>
            <input type="url" name="url1" className="form-control" placeholder="Enter Reference URL" />
          </div>

          <div className="form-group">
            <label>Project Description</label>
            <textarea name="projectDescription" className="form-control" placeholder="Enter Your Project Description" rows="3" required></textarea>
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea name="message" className="form-control" placeholder="Enter Your Message" rows="3"></textarea>
          </div>

          <button type="submit" className="btn btn-submit">Send Message 🚀</button>
        </form>
      </div>

      {modalShow && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h5 className="modal-title">📢 Notification</h5>
            <p>{modalMessage}</p>
            <button type="button" className="btn btn-close" onClick={() => setModalShow(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
