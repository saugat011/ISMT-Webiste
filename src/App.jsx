import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';

import Home from './navbar/Home';
import About from './navbar/About';
import Courses from './navbar/Courses';
import Partnership from './navbar/Partnership';
import Campus from './navbar/Campus';
import Admission from './navbar/Admission';
import Student from './navbar/Student';


import Contact from './navbar/Contact';
import Gallery from './navbar/Gallery';
import Footer from './Components/Footer';
import Apply from './navbar/Apply';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/students" element={<Student />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
