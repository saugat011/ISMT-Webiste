import { useState } from 'react';
import './navbar2.css';

function Apply() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    course: '',
    referral: '',
    queries: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.course) newErrors.course = 'Please select a course';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form submitted successfully:', formData);
    setSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      course: '',
      referral: '',
      queries: ''
    });
    
    // Scroll to top to show success message
    window.scrollTo(0, 0);
  };

  const courseOptions = [
    "BSc (Hons) Computer Systems Engineering (IT)",
"BA (Hons) Business and Management (BBA)",
"BSc (Hons) International Tourism and Hospitality Management (BHM)",
"Master of Business Administration [MBA]",
"BSc (Hons) Computer Science (Subject to Approval)",
"MSc Computing (Subject to Approval)",
"BSc (Hons) Cyber Security and Digital Forensics"
  ];

  const referralOptions = [
    "Friends/Family",
    "Social Media",
    "Website",
    "Newspaper",
    "Current Student",
    "College Fair",
    "Other"
  ];
  
  return (
    <div className="apply-container">
      <div className="apply-header">
        <div className="apply-title">
          <h1>APPLY AT</h1>
          <h2>ISMT COLLEGE KATHMANDU</h2>
        </div>
      </div>
      
      <div className="bannerapply">
        <img src="./images/homebanner2.jpeg" alt="ISMT College Campus" />
         <img src="./images/bannerabout.png" alt="ISMT College Campus" />
      </div>
      
      <div className="apply-content">
        {/* Left Section */}
        <div className="info-section">
          <h2>Find your interests!</h2>
          <p className="info-description">
            Please fill the form in order for us to help you with the
            application process. Once you submit the form below, we will contact
            you shortly with further details.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <i className="contact-icon phone-icon"></i>
              <p>+977-9846966350, +977-9843372872</p>
            </div>
            <div className="contact-item">
              <i className="contact-icon email-icon"></i>
              <p>ismtinfo@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="contact-icon location-icon"></i>
              <p>Kathmandu, Tinkune</p>
            </div>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.077716587495!2d85.35054073519589!3d27.68992182147827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198bf9bd6c7d%3A0xb9e9193ddf9eda4f!2sISMT%20College!5e1!3m2!1sen!2snp!4v1748151541396!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ISMT College Map"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="form-section">
          <h2>Application Form</h2>
          
          {submitted && (
            <div className="success-message">
              <p>Your application has been submitted successfully!</p>
              <p>We will contact you shortly with further details.</p>
            </div>
          )}
          
          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? 'error-input' : ''}
                  placeholder="First Name"
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'error-input' : ''}
                  placeholder="Last Name"
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error-input' : ''}
                placeholder="Email Address"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error-input' : ''}
                  placeholder="Phone Number"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
              </div>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="course">Interested Course</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={errors.course ? 'error-input' : ''}
              >
                <option value="">Select a course</option>
                {courseOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
              {errors.course && <span className="error-message">{errors.course}</span>}
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="referral">How did you hear about us?</label>
              <select
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {referralOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="queries">Queries</label>
              <textarea
                id="queries"
                name="queries"
                value={formData.queries}
                onChange={handleChange}
                placeholder="Enter your queries"
                rows="4"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Apply;