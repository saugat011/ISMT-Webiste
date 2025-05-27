import React from 'react';
import './navbar.css';

const aboutData = {
  title: 'About ISMT College',
  subtitle: 'Nurturing innovation, leadership, and excellence.',
  paragraphs: [
    `ISMT College is a premier institution dedicated to delivering high-quality education in Information Technology and Management. With a focus on practical skills and real-world exposure, we prepare students for global success.`,
    `Affiliated with leading international universities, ISMT combines academic rigor with modern teaching methods. Our campus is a dynamic learning hub, where students collaborate, innovate, and thrive under the guidance of experienced faculty.`,
    `From undergraduate programs to professional certifications, ISMT supports students throughout their academic journey with mentorship, internships, and career development programs.`,
    `We believe in a holistic approach to education — encouraging creativity, critical thinking, and ethical leadership in a globalized world.`
  ],
  image: '/images/dreamismt.png'
};

const teamMembers = [
  {
    name: 'Yogesh Upreti',
    position: 'Founder CEO',
    photo: '/images/ceo.png'
  },
  {
    name: 'Sabita Pathak',
    position: 'Managing Director',
    photo: '/images/md.png'
  },
  {
    name: 'Dhruba Babu Joshi',
    position: 'Principal',
    photo: '/images/principal.png'
  },
  {
    name: 'Basu Wosti',
    position: 'Business Development Head',
    photo: '/images/BD.png'
  }
];

const About = () => {
  return (
    
    <section className="about-section">
      <div className="about-main">
        <div className="content-first">
          <p>
            ISMT College is a modern and best college in Nepal dedicated to
            excellence with practical based education.
          </p>
        </div>
        <div className='about-side'>
          <img src="./images/banner1.png" alt="" />
        </div>
      </div>
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">{aboutData.title}</h2>
          <p className="about-subtitle">{aboutData.subtitle}</p>
          <div className="about-content">
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
        <div className="about-image">
          <img src={aboutData.image} alt="ISMT College Campus" />
        </div>
      </div>

      <div className="team-section">
        <h3 className="team-title">Our Core Team Members</h3>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div className="team-card" key={idx}>
              <img src={member.photo} alt={member.name} className="team-photo" />
              <h4 className="team-name">{member.name}</h4>
              <p className="team-position">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


