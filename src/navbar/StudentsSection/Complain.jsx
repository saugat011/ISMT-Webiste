import React from 'react';
import './Complain.css';

const Complain = () => {
  return (
    <section className="complain-wrapper">
      <div className="complain-info">
        <h2 className="complain-title">Have a Concern? We're Here to Help</h2>
        <p className="complain-text">
          At ISMT, your voice matters. If you have any complaints or concerns, please share them with us.
          We are committed to addressing your issues promptly and professionally.
        </p>
        <ul className="contact-details">
          <li><strong>Phone:</strong> +977 1 555 1234</li>
          <li><strong>Email:</strong> support@ismt.edu.np</li>
          <li><strong>Office Hours:</strong> Mon - Fri, 9 AM - 5 PM</li>
          <li><strong>Address:</strong> ISMT Campus, Kathmandu, Nepal</li>
        </ul>
        <p className="complain-text subtle">
          Your feedback helps us improve our services. Please provide as much detail as possible so we can assist you better.
        </p>
      </div>

      <form className="complain-form" onSubmit={(e) => e.preventDefault()}>
        <h3 className="form-header">Submit Your Complaint</h3>

        <div className="form-group">
          <input type="text" id="name" required />
          <label htmlFor="name">Full Name</label>
        </div>

        <div className="form-group">
          <input type="email" id="email" required />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className="form-group">
          <input type="text" id="subject" required />
          <label htmlFor="subject">Subject</label>
        </div>

        <div className="form-group textarea-group">
          <textarea id="message" rows="5" required></textarea>
          <label htmlFor="message">Complaint Details</label>
        </div>

        <button type="submit" className="submit-btn">Send Complaint</button>
      </form>
    </section>
  );
};

export default Complain;
