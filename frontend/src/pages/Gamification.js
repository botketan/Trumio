import React from 'react'
import GamificationProfile from '../components/GamificationProfile'
import GamificationAchievements from '../components/GamificationAchievements'
import AchievementExpand from '../components/Crousel_Achievements/AchievementExpand'
import Navbar from '../components/Navbar'
import Leaderboard from '../components/Leaderboard/Leaderboard'

const Gamification = () => {
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
    const cardInfo = [
        { Name: "Priyansh Mathur", rank: "1", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
        { Name: "Priyansh Mathur", rank: "2", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
        { Name: "Priyansh Mathur", rank: "3", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
        { Name: "Priyansh Mathur", rank: "4", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
        { Name: "Priyansh Mathur", rank: "1", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
        { Name: "Priyansh Mathur", rank: "2", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
        { Name: "Priyansh Mathur", rank: "3", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
        { Name: "Priyansh Mathur", rank: "4", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
        { Name: "Priyansh Mathur", rank: "1", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
        { Name: "Priyansh Mathur", rank: "2", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
        { Name: "Priyansh Mathur", rank: "3", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
        { Name: "Priyansh Mathur", rank: "4", sparks: "265", imageLink: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" },
      ];
  return (
    <>
        <Navbar/>
        <div className='px-20 flex gap-4 py-4'>
            <div className='flex flex-col gap-4 w-[60vw] py-4'>
                <GamificationProfile />
                <AchievementExpand items={items1}/>
                <GamificationAchievements achievements={achievements}/>
            </div>
            <div className='w-[100%]'>
                <Leaderboard cardInfo={cardInfo} />
            </div>

        </div>
    
    </>
  )
}

export default Gamification
