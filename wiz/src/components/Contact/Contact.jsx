import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

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
          e.target.reset(); // Clears the form after successful submission
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Message sending failed. Please try again.");
        }
      );
  };

  return (
    <div className="outercontact1">
      <div className="outercontact">
        <div className="content">
          <p>Let’s Get In Touch!</p>
          <p>
            We're excited to collaborate with you. Fill out the form below, and
            we'll be in touch shortly!
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="formsection">
          <div className="name">
            <label htmlFor="name">Your Name</label>
            <input
              autoComplete="off"
              placeholder="Enter Your Name"
              type="text"
              id="name"
              name="from_name"
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email">Your Email</label>
            <input
              autoComplete="off"
              placeholder="Enter your email"
              type="email"
              id="email"
              name="from_email"
              required
            />
          </div>
          <div className="number">
            <label htmlFor="number11">Your Contact Number</label>
            <input
              autoComplete="off"
              placeholder="enter yourr contact number"
              type="tel"
              id="number11"
              name="Number1"
              pattern="[0-9]{10}"
              title="Please enter exactly 10 digits."
              required
            />
          </div>
          <div className="projectTitle">
            <label htmlFor="projectTitle11">Project Title</label>
            <input
              autoComplete="off"
              placeholder="Enter project title"
              type="text"
              id="projectTitle11"
              name="projectTitle1"
              required
            />
          </div>
          <div className="projectBudget">
            <label htmlFor="projectBudget11">Project Budget</label>
            <input
              autoComplete="off"
              placeholder="Enter your project budget"
              type="number"
              id="projectBudget11"
              name="projectBudget1"
              required
            />
          </div>
          <div className="url">
            <label htmlFor="url11">UI/UX Reference URL</label>
            <input
              autoComplete="off"
              placeholder="Enter your ui/ux url like"
              type="url"
              id="url11"
              name="url1"
              pattern="(https?:\/\/|www\.)[^\s]+"
              title="URL must start with http://, https://, or www."
              required
            />
          </div>
          <div className="projectDescription">
            <label htmlFor="projectDescription1">Project Description</label>
            <textarea
              placeholder="Express your project description...."
              name="projectDescription"
              id="projectDescription1"
              className="Desc"
              required
            ></textarea>
          </div>
          <div className="message">
            <label htmlFor="message11">Your Message</label>
            <textarea
              placeholder="Express Your Views.."
              name="message"
              id="message11"
              className="mess"
            ></textarea>
          </div>
          <div className="button">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
