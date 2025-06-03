import React from 'react';
import { useParams } from 'react-router-dom';

import Activities from './StudentsSection/Activities';
import Complaints from './StudentsSection/Complain';
import Handbook from './StudentsSection/Handbook';
import Success from './StudentsSection/Speaks';
import Credit from './StudentsSection/Transfer';

const componentsMap = {
  credit: Credit,
  success: Success,
  handbook: Handbook,
  activities: Activities,
  complaints: Complaints,
};

const Student = () => {
  const { section } = useParams();
  const SectionComponent = componentsMap[section];

  return (
    <div>
    
      <div className="student-content">
        {SectionComponent ? (
          <SectionComponent />
        ) : (
          <p>Please select a valid section.</p>
        )}
      </div>
    </div>
  );
};

export default Student;
