import React from 'react';
import './activity.css';

const events = [
  {
    title: "Tech Conference 2025",
    date: "2025-07-20",
    type: "Upcoming",
    description: "A gathering of top tech minds to discuss the future of AI, Blockchain, and DevOps.",
    image: "https://ismt.edu.np/upload/news_events/Image_1748600971189Induction-(BSc-IT---cover).png"
  },
  {
    title: "Career Fair 2025",
    date: "2025-08-15",
    type: "Upcoming",
    description: "Connect with top companies and explore internship and job opportunities.",
    image: "https://ismt.edu.np/upload/news_events/Image_1747986340101Mega-Fair-(cover).png"
  },
  {
    title: "Tech Conference 2025",
    date: "2025-07-20",
    type: "Upcoming",
    description: "A gathering of top tech minds to discuss the future of AI, Blockchain, and DevOps.",
    image: "https://ismt.edu.np/upload/news_events/Image_1748600971189Induction-(BSc-IT---cover).png"
  },
  {
    title: "Tech Conference 2025",
    date: "2025-07-20",
    type: "Upcoming",
    description: "A gathering of top tech minds to discuss the future of AI, Blockchain, and DevOps.",
    image: "https://ismt.edu.np/upload/news_events/Image_1748600971189Induction-(BSc-IT---cover).png"
  },
  {
    title: "Tech Conference 2025",
    date: "2025-07-20",
    type: "Upcoming",
    description: "A gathering of top tech minds to discuss the future of AI, Blockchain, and DevOps.",
    image: "https://ismt.edu.np/upload/news_events/Image_1748600971189Induction-(BSc-IT---cover).png"
  },
  {
    title: "Tech Conference 2025",
    date: "2025-07-20",
    type: "Upcoming",
    description: "A gathering of top tech minds to discuss the future of AI, Blockchain, and DevOps.",
    image: "https://ismt.edu.np/upload/news_events/Image_1748600971189Induction-(BSc-IT---cover).png"
  },
  {
    title: "Annual Sports Meet",
    date: "2025-05-05",
    type: "Past",
    description: "Students competed in various athletic and recreational events.",
    image: "https://ismt.edu.np/upload/news_events/Image_1742787769893Student-Outing-(cover).png"
  },
  {
    title: "Hackathon 2025",
    date: "2025-04-12",
    type: "Past",
    description: "24-hour coding competition with themes around social impact tech.",
    image: "https://ismt.edu.np/upload/news_events/Image_1742787769893Student-Outing-(cover).png"
  },
  {
    title: "Annual Sports Meet",
    date: "2025-05-05",
    type: "Past",
    description: "Students competed in various athletic and recreational events.",
    image: "https://ismt.edu.np/upload/news_events/Image_1747986340101Mega-Fair-(cover).png"
  },
  {
    title: "Annual Sports Meet",
    date: "2025-05-05",
    type: "Past",
    description: "Students competed in various athletic and recreational events.",
    image: "https://ismt.edu.np/upload/news_events/Image_1747986340101Mega-Fair-(cover).png"
  },
  {
    title: "Annual Sports Meet",
    date: "2025-05-05",
    type: "Past",
    description: "Students competed in various athletic and recreational events.",
    image: "https://ismt.edu.np/upload/news_events/Image_1747986340101Mega-Fair-(cover).png"
  },
  {
    title: "Annual Sports Meet",
    date: "2025-06-04",
    type: "upcomming",
    description: "Students competed in various athletic and recreational events.",
    image: "https://ismt.edu.np/upload/news_events/Image_1747986340101Mega-Fair-(cover).png"
  }
];


const Activities = () => {
   const today = new Date();
  const upcomingEvents = events.filter(event=>new Date(event.date)>=today)
  const pastEvents = events.filter(event=>new Date(event.date)<today);

  return (
    <div className="activities-container">
      <h2 className="activities-heading">News & Events</h2>

      <section className="event-section">
        <h3 className="section-title">Upcoming Events</h3>
        <div className="event-grid">
          {upcomingEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.image} alt={event.title} />
              <h4>{event.title}</h4>
              <span className="event-date">{event.date}</span>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="event-section">
        <h3 className="section-title">Past Events</h3>
        <div className="event-grid">
          {pastEvents.map((event, index) => (
            <div className="event-card past" key={index}>
              <img src={event.image} alt={event.title} />
              <h4>{event.title}</h4>
              <span className="event-date">{event.date}</span>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activities;
