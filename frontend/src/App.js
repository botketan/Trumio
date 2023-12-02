import logo from './logo.svg';
import './App.css';
import Post from './components/Post.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Achievements from "./components/Crousel_Achievements/Achievements";
import AchievementCarousel from "./components/Crousel_Achievements/AchievementCarousel"
import MentorCard from './components/MentorCard';
import ProfileCard from './components/ProfileCard';

function App() {
  const cardObject = {
    imageUrl : "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
    name : "Devesh Sutahr",
    country : "IN",
    job :"Web Developer",
    jobLocation : "Delhi",
    noOfSessions : 5,
    reviews : 4.4,
    experience : 2,
    avgAttendance : 80
  }
  const items1=[
    {
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },{
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },{
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },{
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },{
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },{
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },{
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },{
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },{
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },{
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },{
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },{
      heading:"hello",
      description:"hello",
      status:"hello",
      image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    }
  ]

  const props={
    name:"Manas Roy",
    userId:"@Manas24",
    // profilePic:"helloWorld",
    work:"Software Developer",
    education:"IIT Guwahati",
    tier:"Pioneer",
    sparks:574896,
  }
  return (
    <>
    <Router>
        <Navbar/>
    </Router>
    <AchievementCarousel items={items1} />
    <Post />
    <MentorCard cardData={cardObject} />
    <ProfileCard props={props}/>
    </>
  );
}

export default App;
