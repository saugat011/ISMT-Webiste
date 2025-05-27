import React from "react";
import './navbar.css';
import { BookOpen } from "lucide-react"; // Ensure this icon is installed

const Home = () => {
  const photos = [
    {
      src: "/images/photocard5.jpg",
      alt: "Aspire Awards",
      description: "The Freshers' Party is a lively event to welcome new students and kickstart their college journey with fun and excitement.",
      className: "wide"
    },
    {
      src: "/images/photocard2.jpg",
      alt: "Holi Festival 2023",
      description: "Holi at ISMT is celebrated with vibrant colors, music, and joyful gatherings, fostering unity and festive spirit among students and faculty.",
      className: "tall"
    },
    {
      src: "/images/photocard4.jpg",
      alt: "Concert Crowd",
      description: "Graduation at ISMT is a proud and memorable milestone, celebrating students’ hard work, achievements, and the beginning of their professional journey.",
      className: "large"
    },
    {
      src: "/images/photocard3.jpg",
      alt: "Formal Event",
      description: "ISMT nightouts are vibrant and fun-filled events where students unwind, connect, and create lasting memories through music, games, and late-night conversations.",
      className: ""
    },
    {
      src: "/images/photocard1.jpg",
      alt: "Christmas Celebration",
      description: "The jamming session at ISMT brings together talented students to showcase their musical creativity, fostering collaboration, rhythm, and a lively campus atmosphere.",
      className: ""
    },
  ];

  return (
    <>
      <div className="banner">
        <div className="banner-track">
          <img src="/images/homebanner1.jpeg" alt="" />
          <img src="/images/homebanner2.jpeg" alt="" />
          <img src="/images/homebanner3.png" alt="" />
          <img src="/images/homebanner4.png" alt="" />
          <img src="/images/homebanner1.jpeg" alt="" />
          <img src="/images/homebanner2.jpeg" alt="" />
          <img src="/images/homebanner3.png" alt="" />
          <img src="/images/homebanner4.png" alt="" />
        </div>
      </div>

      <div className="heading">
        <h3>Explore Your Options</h3>
        <h1>Discover Our Courses</h1>
      </div>

      <div className="cards-container">
        <div className="card">
          <img src="/images/girl1.png" alt="Course 1" />
          <h2>BSc (Hons) Computer Systems Engineering (IT)</h2>
          <p>Gain skills in software, hardware, and system architecture to solve real-world IT problems.</p>
          <a href="/courses/cse">View More</a>
        </div>

        <div className="card">
          <img src="/images/girl7.png" alt="Course 2" />
          <h2>BA (Hons) Business and Management</h2>
          <p>Develop business strategies, leadership, and entrepreneurship for the modern market.</p>
          <a href="/courses/bba">View More</a>
        </div>

        <div className="card">
          <img src="/images/girl3.png" alt="Course 3" />
          <h2>BSc (Hons) International Tourism and Hospitality Management (BHM)</h2>
          <p>Learn about tourism, hospitality, and hotel management globally.</p>
          <a href="/courses/bhm">View More</a>
        </div>

        <div className="card">
          <img src="/images/girl4.png" alt="Course 4" />
          <h2>Master of Business Administration [MBA]</h2>
          <p>Master advanced leadership and management skills for global business success.</p>
          <a href="/courses/cyber">View More</a>
        </div>

        <div className="card">
          <img src="/images/girl5.png" alt="Course 5" />
          <h2>BSc (Hons) Computer Science (Subject to Approval)</h2>
          <p>Focus on algorithms, data structures, AI, and modern software development.</p>
          <a href="/courses/cs">View More</a>
        </div>

        <div className="card">
          <img src="/images/girl6.png" alt="Course 6" />
          <h2>MSc Computing (Subject to Approval)</h2>
          <p>Specialize in advanced computing topics including big data and machine learning.</p>
          <a href="/courses/msc">View More</a>
        </div>

        <div className="card">
          <img src="/images/girl2.png" alt="Course 7" />
          <h2>BSc (Hons) Cyber Security and Digital Forensics</h2>
          <p>Learn how to protect systems and investigate digital crimes.</p>
          <a href="/courses/cybersecurity">View More</a>
        </div>
      </div>

      <div className="ismt-experience">
        <h2 className="ismt-experience-heading">THE ISMT</h2>
        <h1 className="ismt-experience-subheading">EXPERIENCE</h1>
        <p className="ismt-experience-para">
          A college experience transcends beyond just classrooms and lecture theatres.<br />
          Celebrate our fun-filled events throughout the academic year. Come and live the ISMT Experience!
        </p>

        <div className="photosection">
          {photos.map((photo, index) => (
            <div className={`photo-card ${photo.className}`} key={index}>
              <img src={photo.src} alt={photo.alt} />
              <div className="overlay">
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="university-partnership">
        <div className="container">
          <div className="section-header">
            <BookOpen className="icon" size={28} />
            <h2>Our University Partner</h2>
          </div>

          <div className="partnership-content">
            <div className="university-images" data-aos="fade-right">
              <div className="university-logo sunderland-logo">
                <img src="/images/partnership.png" alt="University of Sunderland logo" />
              </div>
              <div className="university-building" data-aos="fade-up" data-aos-delay="200">
                <img src="/images/sunderland1.png" alt="University of Sunderland campus" />
              </div>
            </div>

            <div className="university-description" data-aos="fade-left" data-aos-delay="300">
              <p>
                ISMT has partnered with the University of Sunderland, a respected UK university, bringing British education standards to Nepal.
              </p>
              <p>
                This allows students to earn globally recognized degrees while studying in their home country, with an option to transfer to the UK.
              </p>
              <div className="key-benefits">
                <h3>Key Benefits</h3>
                <ul>
                  <li>UK-standard education in Nepal</li>
                  <li>Globally recognized degrees</li>
                  <li>Modern learning environment</li>
                  <li>Access to global resources</li>
                  <li>Option to complete part of degree in the UK</li>
                </ul>
              </div>
              <p className="conclusion">
                This affiliation shows ISMT's dedication to delivering affordable, world-class education and preparing students for global careers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
