import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Users, BookOpen, HelpCircle, ChevronDown, ChevronUp, GraduationCap, Globe } from 'lucide-react';
import './contact.css';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const cards = [
    {
      title: "ISMT College Kathmandu",
      phone: "+977-1-4112122 / 4112159",
      location: "Tinkune, Gairigaun, Kathmandu",
      mail: "info@ismt.edu.np",
      hours: "Sun-Fri: 8:00 AM - 4:00 PM",
      programs: "BBA, BIT, BHM",
      button: "Contact Us"
    },
    {
      title: "ISMT College Pokhara",
      phone: "+977-61-433826 / 435436",
      location: "Pokhara-15, Annapurna Marg, Nepal",
      mail: "pokhara@ismt.edu.np",
      hours: "Sun-Fri: 8:00 AM - 4:00 PM",
      programs: "BBA, BCA, BHM",
      button: "Contact Us"
    },
    {
      title: "ISMT College Chitwan",
      phone: "+977-56-515146",
      location: "Bharatpur-12, Chitwan, Nepal",
      mail: "chitwan@ismt.edu.np",
      hours: "Sun-Fri: 8:00 AM - 4:00 PM",
      programs: "BBA, BIT",
      button: "Contact Us"
    },
    {
      title: "ISMT College Biratnagar",
      phone: "+977 21-423141",
      location: "Biratnagar-5, Kanchanbari, Nepal",
      mail: "biratnagar@ismt.edu.np",
      hours: "Sun-Fri: 8:00 AM - 4:00 PM",
      programs: "BBA, BHM",
      button: "Contact Us"
    },
    {
      title: "ISMT College Butwal",
      phone: "+977-71-437238 / 9801183808",
      location: "Janakinagar, Butwal, Nepal",
      mail: "butwal@ismt.edu.np",
      hours: "Sun-Fri: 8:00 AM - 4:00 PM",
      programs: "BBA, BCA",
      button: "Contact Us"
    },
  ];

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "For undergraduate programs, students need to have completed their +2 or equivalent with minimum 50% marks. International students must provide equivalent academic credentials and English proficiency test scores (IELTS/TOEFL)."
    },
    {
      question: "How can I schedule a campus visit?",
      answer: "You can schedule a campus visit by contacting our admissions office through phone or email. We offer guided tours every weekday between 10 AM and 2 PM. Group visits can also be arranged with advance notice."
    },
    {
      question: "Are scholarships available?",
      answer: "Yes, ISMT offers various scholarships including merit-based (up to 100% tuition waiver), need-based financial aid, and sports excellence scholarships. Early applicants may qualify for additional scholarship opportunities."
    },
    {
      question: "What is the academic calendar?",
      answer: "Our academic year typically starts in July/August. We follow a semester system with two main semesters per year. Each semester is 16 weeks long, including examination periods."
    },
    {
      question: "Do you offer hostel facilities?",
      answer: "Yes, we provide separate hostel facilities for boys and girls with 24/7 security, Wi-Fi, dining facilities, and recreation areas. Early application is recommended as spaces are limited."
    }
  ];

  const stats = [
    { icon: <Users size={24} />, number: "15,000+", label: "Students" },
    { icon: <BookOpen size={24} />, number: "50+", label: "Programs" },
    { icon: <GraduationCap size={24} />, number: "25,000+", label: "Alumni" },
    { icon: <Globe size={24} />, number: "20+", label: "Partner Universities" }
  ];

  const handleContactClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('popup-', '')]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    closePopup();
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>Connect with Nepal's Leading Educational Institution</p>
          <div className="hero-buttons">
            <button className="primary-btn">Schedule a Visit</button>
            <button className="secondary-btn">Download Brochure</button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        {stats.map((stat, index) => (
          <div className="stat-card\" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Campus Cards */}
      <div className="contact-section">
        <div className="section-header">
          <h2>Our Campuses</h2>
          <p>Get in touch with our colleges across Nepal</p>
        </div>
        
        <div className="cards-container">
          {cards.map((card, index) => (
            <div className="card\" key={index}>
              <div className="card-content">
                <h3>{card.title}</h3>
                <div className="contact-info">
                  <p><Phone size={18} className="icon" /> {card.phone}</p>
                  <p><MapPin size={18} className="icon" /> {card.location}</p>
                  <p><Mail size={18} className="icon" /> {card.mail}</p>
                  <p><Clock size={18} className="icon" /> {card.hours}</p>
                  <p><GraduationCap size={18} className="icon" /> {card.programs}</p>
                </div>
                <button 
                  onClick={() => handleContactClick(card)}
                  className="contact-button"
                >
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common queries about ISMT</p>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
     <div className="map-section">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d818523.442623793!2d84.24367891850235!3d27.68037612670164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198bf9bd6c7d%3A0xb9e9193ddf9eda4f!2sISMT%20College!5e1!3m2!1sen!2snp!4v1748276198954!5m2!1sen!2snp"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="ISMT College Location"
  ></iframe>
</div>


      {/* Popup Form */}
      {showPopup && selectedCard && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>×</button>
            <div className="popup-header">
              <h2>Contact {selectedCard.title}</h2>
              <p>Fill out the form below and we'll get back to you soon</p>
            </div>
            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="popup-name">Full Name</label>
                <input 
                  type="text" 
                  id="popup-name" 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="popup-email">Email Address</label>
                <input 
                  type="email" 
                  id="popup-email" 
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="popup-phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="popup-phone" 
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="popup-message">Message</label>
                <textarea 
                  id="popup-message" 
                  rows={4} 
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;