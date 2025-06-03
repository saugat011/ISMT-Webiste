import React from 'react';
import { useParams } from 'react-router-dom';

import Bba from './Courses/Bba';
import Bhm from './Courses/Bhm';
import Cs from './Courses/Cs';
import Cyber from './Courses/Cyber';
import Bsc from './Courses/Bsc';
import Mba from './Courses/Mba';
import Msc from './Courses/Msc';

const componentsMap = {
  "bsc-cse": Bsc,
  "bba": Bba,
  "bhm": Bhm,
  "mba": Mba,
  "bsc-cs": Cs,
  "msc-computing": Msc,
  "cyber-security": Cyber,
};


const Courses = () => {
  const { section } = useParams();
  const key = section?.toLowerCase();
  const SectionComponent = key && componentsMap[key];

  return (
    <div>
      <div className="courses-content">
        {SectionComponent ? (
          <SectionComponent />
        ) : (
          <p>Please select a valid course section.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
