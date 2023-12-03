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
import Notes from './pages/Notes.js';
import Gamification from './pages/Gamification.js';

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* {/* <Route exact path="/mentor" element={<Mentor />} /> */}
        <Route exact path="/Notes" element={<Notes />} />
        <Route exact path="/Gamification" element={<Gamification  />} />
        <Route exact path="/Mentor" element={<Mentor />} /> 
      </Routes>
    
    </Router>
    </>
  );
}

export default App;
