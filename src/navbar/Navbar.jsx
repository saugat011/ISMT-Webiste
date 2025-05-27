import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(""); // "", "courses", "campuses"
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
    setActivePopup("");
  };

  const togglePopup = (popupName) => (e) => {
    e.preventDefault();
    setActivePopup((prev) => (prev === popupName ? "" : popupName));
  };

  return (
    <nav className="nav">
      <NavLink to="/home">
        <div className="logo">
          <img src="/images/logo-sunderland.png" alt="Logo" className="logo-img" />
        </div>
      </NavLink>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

      <ul className={`navlinks ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? "link active" : "link"} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "link active" : "link"} onClick={closeMenu}>
            About Us
          </NavLink>
        </li>

        {/* Courses Link with Popup */}
        <li style={{ position: "relative" }}>
          <a href="#" className="link" onClick={togglePopup("courses")}>
            Courses
          </a>
          {activePopup === "courses" && (
            <div className="course-popup">
              <a href="#" className="course">BSc (Hons) Computer Systems Engineering (IT)</a>
              <a href="#" className="course">BA (Hons) Business and Management (BBA)</a>
              <a href="#" className="course">BSc (Hons) International Tourism and Hospitality Management (BHM)</a>
              <a href="#" className="course">Master of Business Administration [MBA]</a>
              <a href="#" className="course">BSc (Hons) Computer Science (Subject to Approval)</a>
              <a href="#" className="course">MSc Computing (Subject to Approval)</a>
              <a href="#" className="course">BSc (Hons) Cyber Security and Digital Forensics</a>
            </div>
          )}
        </li>

        <li>
          <NavLink to="/partnership" className={({ isActive }) => isActive ? "link active" : "link"} onClick={closeMenu}>
            Partnerships
          </NavLink>
        </li>

        {/* Our Campuses Link with Popup */}
        <li style={{ position: "relative" }}>
          <a href="#" className="link" onClick={togglePopup("campuses")}>
            Our Campuses
          </a>
          {activePopup === "campuses" && (
            <div className="course-popup">
              <a href="#" className="course">ISMT College Kathmandu</a>
              <a href="#" className="course">ISMT College Pokhara</a>
              <a href="#" className="course">ISMT College Biratnagar</a>
              <a href="#" className="course">ISMT College Butwal </a>
              <a href="#" className="course">ISMT College Chitwan </a>
            </div>
          )}
        </li>

        <li>
          <NavLink to="/admission" className={({ isActive }) => isActive ? "link active" : "link"} onClick={closeMenu}>
            Admissions
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" className={({ isActive }) => isActive ? "link active" : "link"} onClick={closeMenu}>
            Students
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "link active" : "link"} onClick={closeMenu}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "link active" : "link"} onClick={closeMenu}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/apply" className={({ isActive }) => isActive ? "link active" : "link"} onClick={closeMenu}>
            <button className="apply">Apply Now</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
