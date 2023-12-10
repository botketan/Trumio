import logo from './logo.svg';
import './App.css';
import Post from './components/Post.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Route, Routes, useLocation } from 'react-router-dom';
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
import PostPage from './pages/PostPage.js';
import Community from './pages/Community.js';
import PostWebView from './pages/PostWebView.js';

function App() {
  const [click, setClick] = useState("")
  const [userId,setUserId]=useState("6574d117710649ce4c6b9c3b");
  return (
    <>
    <Router>
      <Navigation userId={userId} click={click} setClick={setClick}/>
      <Routes>
        <Route path="/" element={<Truspace userId={userId}/>} />
        <Route exact path="/Notes" element={<Notes userId={userId}/>} />
        <Route exact path="/Gamification" element={<Gamification  userId={userId}/>} />
        <Route exact path="/Mentor" element={<Mentor userId={userId}/>} /> 
        <Route exact path="/Truspace" element={<Truspace userId={userId}/>} /> 
        <Route exact path="/Community" element={<Community userId={userId}/>} /> 
        <Route path="/expert" element={<ExpertAgents userId={userId}/>} />
        <Route path="/cia" element={<Cia userId={userId}/>} />
        <Route path="/postpage/:id" element={<PostPage userId={userId}/>} />
        <Route path="/postwebview/:id" element={<PostWebView userId={userId}/>} />
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
