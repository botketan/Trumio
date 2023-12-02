import React from "react";
import Mentor from "../components/Mentor/MentorCard.js";
import Post from "../components/Post";
import AchievementCarousel from "../components/Crousel_Achievements/AchievementCarousel";
import ProfileCard from "../components/ProfileCard";
import Leaderboard from "../components/Leaderboard/Leaderboard";

function Home() {
  const cardObject = {
    imageUrl:
      "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
    name: "Devesh Sutahr",
    country: "IN",
    job: "Web Developer",
    jobLocation: "Delhi",
    noOfSessions: 5,
    reviews: 4.4,
    experience: 2,
    avgAttendance: 80,
  };
  const items1 = [
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
    {
      heading: "hello",
      description: "hello",
      status: "hello",
      image:
        "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
    },
  ];

  const props = {
    name: "Manas Roy",
    userId: "@Manas24",
    // profilePic:"helloWorld",
    work: "Software Developer",
    education: "IIT Guwahati",
    tier: "Pioneer",
    sparks: 574896,
  };

  const cardInfo = [
    { Name: "Priyansh Mathur", rank: "1", sparks: "265" },
    { Name: "Priyansh Mathur", rank: "2", sparks: "265" },
    { Name: "Priyansh Mathur", rank: "3", sparks: "265" },
    { Name: "Priyansh Mathur", rank: "4", sparks: "265" },
    { Name: "Priyansh Mathur", rank: "1", sparks: "265" },
    { Name: "Priyansh Mathur", rank: "2", sparks: "265" },
    { Name: "Priyansh Mathur", rank: "3", sparks: "265" },
    { Name: "Priyansh Mathur", rank: "4", sparks: "265" },
    { Name: "Priyansh Mathur", rank: "1", sparks: "265" },
    { Name: "Priyansh Mathur", rank: "2", sparks: "265" },
    { Name: "Priyansh Mathur", rank: "3", sparks: "265" },
    { Name: "Priyansh Mathur", rank: "4", sparks: "265" },
  ];

  return (
    <>
      <Mentor cardData={cardObject}/>
      <Post />
      <AchievementCarousel items={items1} />
      <ProfileCard props={props} />
      <Leaderboard cardInfo={cardInfo} />
    </>
  );
}

export default Home;
