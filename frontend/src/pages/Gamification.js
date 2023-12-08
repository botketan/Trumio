import React, {useState} from 'react'
import GamificationProfile from '../components/GamificationProfile'
import GamificationAchievements from '../components/GamificationAchievements'
import AchievementExpand from '../components/Crousel_Achievements/AchievementExpand'
import Navbar from '../components/Navbar'
import Leaderboard from '../components/Leaderboard/Leaderboard'
import Navigation from '../components/Navigation'

const Gamification = () => {
    const items1 = [
        {
          heading: "Badge 1",
          description: "Description for Badge 1",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 2",
          description: "Description for Badge 2",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 3",
          description: "Description for Badge 3",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 4",
          description: "Description for Badge 4",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 5",
          description: "Description for Badge 5",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 6",
          description: "Description for Badge 6",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 7",
          description: "Description for Badge 7",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 8",
          description: "Description for Badge 8",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 9",
          description: "Description for Badge 9",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 10",
          description: "Description for Badge 10",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        }
      ];
      
      const achievements= [
        {
            title: "Badge 7 Earned",
            date: "12th Dec 2023",
            description: "Congratulations on earning Badge 7!",
            points: 100
        },
        {
            title: "Badge 7 Earned",
            date: "12th Dec 2023",
            description: "Congratulations on earning Badge 7!",
            points: 100
        },
        {
            title: "Badge 7 Earned",
            date: "12th Dec 2023",
            description: "Congratulations on earning Badge 7!",
            points: 100
        }
    ]
    const cardInfo = [
        { Name: "Priyansh Mathur", rank: "1", sparks: "265", imageLink: "/Avatar.png" },
        { Name: "Priyansh Mathur", rank: "2", sparks: "265", imageLink: "/Avatar.png" },
        { Name: "Priyansh Mathur", rank: "3", sparks: "265", imageLink: "/Avatar.png" },
        { Name: "Priyansh Mathur", rank: "4", sparks: "265", imageLink: "/Avatar.png" },
        { Name: "Priyansh Mathur", rank: "1", sparks: "265", imageLink: "/Avatar.png" },
        { Name: "Priyansh Mathur", rank: "2", sparks: "265", imageLink: "/Avatar.png" },
        { Name: "Priyansh Mathur", rank: "3", sparks: "265", imageLink: "/Avatar.png" },
        { Name: "Priyansh Mathur", rank: "4", sparks: "265", imageLink: "/Avatar.png" },
        { Name: "Priyansh Mathur", rank: "1", sparks: "265", imageLink: "/Avatar.png" },
        { Name: "Priyansh Mathur", rank: "2", sparks: "265", imageLink: "/Avatar.png" },
        { Name: "Priyansh Mathur", rank: "3", sparks: "265", imageLink: "/Avatar.png" },
        { Name: "Priyansh Mathur", rank: "4", sparks: "265", imageLink: "/Avatar.png" },
      ];
  return (
    <>
        <div className='px-20 flex justify-around gap-4 py-4 font-dmsans'>
            <div className='flex flex-col gap-4 w-[60vw] py-4'>
                <GamificationProfile />
                <AchievementExpand items={items1}/>
                <GamificationAchievements achievements={achievements}/>
            </div>
            <div className='w-[28vw]'>
                <Leaderboard cardInfo={cardInfo} />
            </div>

        </div>
    
    </>
  )
}

export default Gamification
