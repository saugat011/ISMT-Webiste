import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const galleryRef = useRef(null);

  const galleryItems = [
    {
      id: 1,
      category: 'campus',
      image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg',
      title: 'Modern Campus Building',
      description: 'State-of-the-art facilities at ISMT College',
      featured: true
    },
    {
      id: 2,
      category: 'events',
      image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg',
      title: 'Graduation Ceremony 2023',
      description: 'Celebrating student success'
    },
    {
      id: 3,
      category: 'academic',
      image: 'https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg',
      title: 'Computer Lab',
      description: 'Advanced computing facilities',
      featured: true
    },
    {
      id: 4,
      category: 'campus',
      image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg',
      title: 'Library',
      description: 'Modern learning environment'
    },
    {
      id: 5,
      category: 'events',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      title: 'Tech Symposium',
      description: 'Annual technology conference'
    },
    {
      id: 6,
      category: 'academic',
      image: 'https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg',
      title: 'Research Center',
      description: 'Innovation hub for students'
    },
    {
      id: 7,
      category: 'campus',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg',
      title: 'Student Center',
      description: 'A place for collaboration and recreation'
    },
    {
      id: 8,
      category: 'events',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      title: 'Cultural Festival',
      description: 'Celebrating diversity at ISMT'
    },
    {
      id: 9,
      category: 'academic',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg',
      title: 'Innovation Lab',
      description: 'Where ideas come to life'
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'campus', label: 'Campus' },
    { id: 'events', label: 'Events' },
    { id: 'academic', label: 'Academic' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container" ref={galleryRef}>
      <div className={`gallery-header ${isInView ? 'visible' : ''}`}>
        <h1>Our Gallery</h1>
        <p>Explore the vibrant life at ISMT College through our photo gallery</p>
      </div>

      <div className={`gallery-filters ${isInView ? 'visible' : ''}`}>
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={`gallery-grid ${isInView ? 'visible' : ''}`}>
        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading amazing moments...</p>
          </div>
        ) : (
          filteredItems.map(item => (
            <div 
              key={item.id} 
              className={`gallery-item ${item.featured ? 'featured' : ''}`}
              onClick={() => handleImageClick(item)}
            >
              <div className="gallery-item-inner">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="view-more">Click to view</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;