import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <img src="./images/logo-sunderland.png" alt="ISMT College Logo" className="footer-logo" />
        </div>

        {/* Courses */}
        <div className="footer-section">
          <h4>Courses</h4>
          <p className="courses">BSc (Hons) Computer Systems Engineering (IT)</p>
          <p className="courses">BA (Hons) Business and Management (BBA)</p>
          <p className="courses">BSc (Hons) International Tourism and Hospitality Management (BHM)</p>
          <p className="courses">Master of Business Administration [MBA]</p>
          <p className="courses">BSc (Hons) Computer Science (Subject to Approval)</p>
          <p className="courses">MSc Computing (Subject to Approval)</p>
          <p className="courses">BSc (Hons) Cyber Security and Digital Forensics</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Get In Touch</h4>
          <p className="contact-item">
            <MapPin size={16} className="icon" />
            <span>Tinkune, Gairigaun, Kathmandu</span>
          </p>
          <p className="contact-item">
            <Phone size={16} className="icon" />
            <span>+977-1-4112122 / 4112159</span>
          </p>
          <p className="contact-item">
            <Mail size={16} className="icon" />
            <span>info@ismt.edu.np</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/ismtcollege" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com/ismtcollege" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com/ismtcollege" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com/company/ismtcollege" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ISMT College Kathmandu. All rights reserved.</p>
        <div className="footer-links">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Whom to Contact</p>
          <p>Submit a Feedback</p>
          <p>Submit Website Rating</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;