import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import './Transfer.css';


  const transferData = [
  {
    id: 1,
    name: 'John Doe',
    university: 'Australian Catholic University',
    degree: 'Bachelor of Business',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 2,
    name: 'Jane Smith',
    university: 'Australian Catholic University',
    degree: 'Bachelor of Nursing',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    university: 'Australian Catholic University',
    degree: 'Bachelor of Education',
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 4,
    name: 'Emily Davis',
    university: 'Australian Catholic University',
    degree: 'Bachelor of Arts',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 5,
    name: 'William Brown',
    university: 'Australian Catholic University',
    degree: 'Bachelor of Science',
    imageUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 6,
    name: 'Olivia Brown',
    university: 'Australian Catholic University',
    degree: 'Bachelor of Psychology',
    imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 7,
    name: 'Shraddha Thapa',
    university: 'Australian Catholic University',
    degree: 'Bachelor of Psychology',
    imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 8,
    name: 'Olivia Wilson',
    university: 'Australian Catholic University',
    degree: 'Bachelor of Psychology',
    imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];


const Transfer = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleCardClick = (student) => {
    setSelectedStudent(student);
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="transfer-section">
      <div className="transfer-section-header">
        <h2 className="transfer-section-title">Student Credit Transfers</h2>
        <p className="transfer-section-description">
          Meet our students who have successfully transferred credits to continue their education
        </p>
      </div>

      <div className="transfer-grid">
        {transferData.map((student) => (
          <div
            key={student.id}
            className="transfer-card"
            onClick={() => handleCardClick(student)}
          >
            <div className="transfer-card-header">
              <div className="avatar">
                <img src={student.imageUrl} alt={student.name} className="avatar-image" />
              </div>
            </div>
            <div className="transfer-card-content">
              <h3 className="transfer-card-name">{student.name}</h3>
              <div className="transfer-card-university">
                <GraduationCap size={16} className="university-icon" />
                <span>{student.university}</span>
              </div>
              <div className="transfer-card-degree">{student.degree}</div>
            </div>
            <div className="transfer-card-footer">
              <span className="transfer-status">Credit Transferred</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStudent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedStudent.imageUrl}
              alt={selectedStudent.name}
              className="modal-image"
            />
            <button className="modal-close-button" onClick={closeModal}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transfer;
