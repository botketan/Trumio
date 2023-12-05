import logo from './logo.svg';
import './App.css';
import Post from './components/Post.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Achievements from "./components/Crousel_Achievements/Achievements";
import AchievementCarousel from "./components/Crousel_Achievements/AchievementCarousel"
import MentorCard from './components/Mentor/MentorCard.js';
import ProfileCard from './components/ProfileCard';
import Mentor from './pages/Mentor.js';
import Home from './pages/Home.js';
import ExpertAgents from './components/expertAgents.js';
import Notes from './pages/Notes.js';
import Gamification from './pages/Gamification.js';
import Truspace from './pages/Truspace.js';
import Navigation from './components/Navigation.js';
import { useState } from 'react';
import Cia from './pages/cia.js';

function App() {
  const [click, setClick] = useState("")
  return (
    <>
    <Router>
      <Navigation click={click} setClick={setClick}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Notes" element={<Notes />} />
        <Route exact path="/Gamification" element={<Gamification  />} />
        <Route exact path="/Mentor" element={<Mentor />} /> 
        <Route exact path="/Truspace" element={<Truspace />} /> 
        <Route path="/expert" element={<ExpertAgents/>} />
        <Route path="/cia" element={<Cia/>} />
        {/* <Route exact path="/mentor" element={<Mentor />} />
        <Route exact path="/development" element={<Mentor />} />
        <Route exact path="/design" element={<AchievementCarousel items={items1} />} />
        <Route exact path="/marketing" element={<ProfileCard props={props}/>} /> */}
      </Routes>
    
    </Router>
    </>
  );
}

export default App;
