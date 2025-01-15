import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import './Contact.css'; // External CSS for additional styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    projectTitle: '',
    projectDescription: '',
    budget: '',
    uiUxUrl: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'service_c7ee7cq',
        'template_sxm9mmn',
        formData,
        'pZnTmkqe6DSiHnIg-'
      );

      if (response.status === 200) {
        setShowModal(true);
        setFormData({
          name: '',
          email: '',
          mobile: '',
          projectTitle: '',
          projectDescription: '',
          budget: '',
          uiUxUrl: '',
          message: ''
        });
      } else {
        alert('Error: Unable to send email.');
      }
    } catch (error) {
      console.error('Error sending the email:', error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <div className="contact-container container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1 className="text-center mb-4 contact-title">Let’s Connect!</h1>
          <p className="text-center mb-5 contact-subtitle">We'd love to hear your thoughts, ideas, or project plans. Fill out the form below, and we'll get back to you!</p>
          
          <form onSubmit={handleSubmit}>
            {[
              { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
              { id: 'email', label: 'Your Email', type: 'email', placeholder: 'Enter your email' },
              { id: 'mobile', label: 'Mobile Number', type: 'text', placeholder: 'Enter your mobile number' },
              { id: 'projectTitle', label: 'Project Title', type: 'text', placeholder: 'Enter the title of your project' },
              { id: 'budget', label: 'Project Budget', type: 'text', placeholder: 'Enter your project budget' },
              {
                id: 'uiUxUrl',
                label: 'UI/UX Reference URL',
                type: 'text',
                placeholder: 'Enter a link to UI/UX reference',
                pattern: '(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)',
                title: "Please enter a valid URL starting with 'http://', 'https://', or 'www.'"
              },
              { id: 'projectDescription', label: 'Project Description', type: 'textarea', placeholder: 'Describe your project in detail' },
              { id: 'message', label: 'Your Message', type: 'textarea', placeholder: 'Enter your message' },
            ].map(({ id, label, type, placeholder, pattern, title }) => (
              <div className="mb-3" key={id}>
                <label htmlFor={id} className="form-label">{label}</label>
                {type === 'textarea' ? (
                  <textarea
                    className="form-control"
                    id={id}
                    name={id}
                    value={formData[id]}
                    onChange={handleChange}
                    rows="4"
                    placeholder={placeholder}
                    required
                  ></textarea>
                ) : (
                  <input
                    type={type}
                    className="form-control"
                    id={id}
                    name={id}
                    value={formData[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    pattern={pattern}
                    title={title}
                    required
                  />
                )}
              </div>
            ))}

            <div className="text-center">
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: '#28a745', color: 'white' }}>
                <h5 className="modal-title">Hooray!</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ backgroundColor: '#f4f7f6' }}>
                <p>Your message has been successfully sent. We will get back to you shortly. Thank you for reaching out!</p>
              </div>
              <div className="modal-footer" style={{ backgroundColor: '#f8f9fa' }}>
                <button type="button" className="btn btn-success" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
