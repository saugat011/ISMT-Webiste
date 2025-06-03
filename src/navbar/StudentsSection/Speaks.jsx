import React from 'react';
import './speaks.css';

const speaksData = [
  {
    name: "Anisha Shrestha",
    title: "Software Engineer at Deerhold Ltd.",
    quote: "ISMT provided me with the foundation and confidence to succeed globally.",
    image: "/images/anisha.jpg",
  },
  {
    name: "Sujan Thapa",
    title: "DevOps Engineer at Leapfrog",
    quote: "The skills and mentoring I received at ISMT were career-transforming.",
    image: "/images/sujan.jpg",
  },
  {
    name: "Nisha Karki",
    title: "UI/UX Designer at Cotiviti",
    quote: "Creative projects at ISMT helped shape my design thinking.",
    image: "/images/nisha.jpg",
  },
   {
    name: "Nisha Karki",
    title: "UI/UX Designer at Cotiviti",
    quote: "Creative projects at ISMT helped shape my design thinking.",
    image: "/images/nisha.jpg",
  },
   {
    name: "Nisha Karki",
    title: "UI/UX Designer at Cotiviti",
    quote: "Creative projects at ISMT helped shape my design thinking.",
    image: "/images/nisha.jpg",
  },
  {
    name: "Sujan Thapa",
    title: "DevOps Engineer at Leapfrog",
    quote: "The skills and mentoring I received at ISMT were career-transforming.",
    image: "/images/sujan.jpg",
  },
  {
    name: "Sujan Thapa",
    title: "DevOps Engineer at Leapfrog",
    quote: "The skills and mentoring I received at ISMT were career-transforming.",
    image: "/images/sujan.jpg",
  },
  {
    name: "Sujan Thapa",
    title: "DevOps Engineer at Leapfrog",
    quote: "The skills and mentoring I received at ISMT were career-transforming.",
    image: "/images/sujan.jpg",
  },
];

const Speaks = () => {
  return (
    <section className="speaks-section">
      <div className="speaks-header">
        <span className="subtitle">Success Speaks</span>
        <h2 className="title">Our Proud Alumni</h2>
        <p className="description">Meet the voices of success who started their journey at ISMT.</p>
      </div>
      <div className="speaks-grid">
        {speaksData.map((person, index) => (
          <div key={index} className="speaks-card">
            <div className="card-image">
              <img src={person.image} alt={person.name} />
            </div>
            <div className="card-content">
              <p className="quote">“{person.quote}”</p>
              <h3 className="name">{person.name}</h3>
              <span className="title">{person.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speaks;
