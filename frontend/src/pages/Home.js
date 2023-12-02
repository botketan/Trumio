import React from 'react'
import Mentor from './Mentor'
import Post from '../components/Post'
import AchievementCarousel from '../components/Crousel_Achievements/AchievementCarousel'
import AchievementExpand from '../components/Crousel_Achievements/AchievementExpand'
import ProfileCard from '../components/ProfileCard'
import GamificationAchievements from '../components/GamificationAchievements'
import GamificationProfile from '../components/GamificationProfile'
import NoteList from '../components/noteList/noteList'
import Leaderboard from '../components/Leaderboard/Leaderboard.js'
import NotesComponent from '../components/NotesComponent/NotesComponent.js'

function Home() {
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
          sparks:"25 Sparks",
        },{
          heading:"hello",
          description:"hello",
          status:"hello",
          
          image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
          sparks:"25 Sparks",
        },{
          heading:"hello",
          description:"hello",
          status:"hello",
          
          image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
          sparks:"25 Sparks",
        },{
          heading:"hello",
          description:"hello",
          status:"hello",
          image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
          sparks:"25 Sparks",
        },{
          heading:"hello",
          description:"hello",
          status:"hello",
          image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
          sparks:"25 Sparks",
        },{
          heading:"hello",
          description:"hello",
          status:"hello",
          image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
          sparks:"25 Sparks",
        },{
          heading:"hello",
          description:"hello",
          status:"hello",
          image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
          sparks:"25 Sparks",
        },{
          heading:"hello",
          description:"hello",
          status:"hello",
          image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
          sparks:"25 Sparks",
        },{
          heading:"hello",
          description:"hello",
          status:"hello",
          image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
          sparks:"25 Sparks",
        },{
          heading:"hello",
          description:"hello",
          status:"hello",
          image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
          sparks:"25 Sparks",
        },{
          heading:"hello",
          description:"hello",
          status:"hello",
          image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
          sparks:"25 Sparks",
        },{
          heading:"hello",
          description:"hello",
          status:"hello",
          image:"https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
          sparks:"25 Sparks",
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
        advanceTowards:"Visionary",
        points:"350",
      }
    const achievements= [
        {
            title: "Hello",
            date: "12/12/12",
            description: "Hello",
            points: 100
        },
        {
            title: "Hello",
            date: "12/12/12",
            description: "Hello",
            points: 100
        },
        {
            title: "Hello",
            date: "12/12/12",
            description: "Hello",
            points: 100
        }
    ]
    const Noteslist=[
      {
          title:"Exploring ML",
          description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt neque sit amet metus ullamcorper aliquam.",
      },
      {
        title:"Exploring ML",
        description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt neque sit amet metus ullamcorper aliquam.",
    },
    {
        title:"Exploring ML",
        description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt neque sit amet metus ullamcorper aliquam.",
    },
    {
      title:"Exploring ML",
      description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt neque sit amet metus ullamcorper aliquam.",
    },
    ]
  return (
    <>
        <Mentor /> 
        <GamificationAchievements achievements={achievements} />
        <GamificationProfile />
        <Post /> 
        <AchievementCarousel items={items1} />
        
        <ProfileCard props={props}/>
        <NoteList/>
        <AchievementExpand items={items1} />
         <Leaderboard cardInfo={cardInfo} />
         <NotesComponent noteslist={Noteslist}/>
    </>
  )
}

export default Home
