import React , { useState , useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route , Switch} from "react-router-dom";
import { Navbar } from './components/Navbar-Components/Navbar';
import { ContentsBar } from './components/Profile-Components/ContentsBar';


import { AboutMe} from './components/Profile-Components/AboutMe';
import { WorkExperience} from './components/Profile-Components/WorkExperience';
import { Education } from './components/Profile-Components/Education';
import { Skills } from './components/Profile-Components/Skills';
import { Projects } from './components/Profile-Components/Projects';
import { ExtraActivities } from './components/Profile-Components/ExtraActivities';
import { ContactMe } from './components/Profile-Components/ContactMe';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <ContentsBar />
          <Routes>
            <Route path="/" element = {<AboutMe />}  />
            <Route path="/about-me" element = {<AboutMe />}  />
            <Route path="/work-experience" element = {<WorkExperience />}  />
            <Route path="/education" element = {<Education />}  />
            <Route path="/skills" element = {<Skills />}  />
            <Route path="/projects" element = {<Projects />}  />
            <Route path="/extra-activities" element = {<ExtraActivities />}  />
            <Route path="/contact-me" element = {<ContactMe />}  />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
