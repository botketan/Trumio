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
          heading: "Star Mentee",
          description: "Booked 10 mentorship sessions",
          status: "3 days left",
          image: "https://cdn.iconscout.com/icon/premium/png-512-thumb/star-2996120-2492152.png?f=webp&w=256",
          sparks: "150 Sparks"
        },
        {
          heading: "Finisher",
          description: "Completed your first project",
          status: "3 days left",
          image: "https://cdn.iconscout.com/icon/premium/png-512-thumb/finisher-6793663-5562502.png?f=webp&w=256",
          sparks: "100 Sparks"
        },
        {
          heading: "Gold-rate work",
          description: "Completed 3 tasks",
          status: "3 days left",
          image: "https://lh3.googleusercontent.com/50yFntI4vajNAs2MabEB8t02Q780J_4BCTBA2uIt_WArQz87AXOfUKbcA49G5BtbU5nujCU=s85",
          sparks: "50 Sparks"
        },
        {
          heading: "Upcoming Speaker",
          description: "Posted first time in the community",
          status: "3 days left",
          image: "https://us.v-cdn.net/6031588/uploads/editor/kh/4sd0ejkgv25u.png",
          sparks: "50 Sparks"
        },
        {
          heading: "Diamond",
          description: "Description for Diamond badge",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Crystal",
          description: "Description for Crystal",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Ruby",
          description: "Description for Ruby",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Platinum",
          description: "Description for Platinum",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Emerald",
          description: "Description for Emerald",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Topaz",
          description: "Description for Topaz",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        }
      ];
      
      const achievements= [
        {
            title: "Star Mentee badge earned",
            date: "10th Dec 2023",
            description: "Congratulations on earning the Star Mentee badge!",
            points: 100
        },
        {
            title: "Finisher badge earned",
            date: "10th Dec 2023",
            description: "Congratulations on earning the Finisher badge!",
            points: 100
        },
        {
            title: "Gold-rate work earned",
            date: "10th Dec 2023",
            description: "Congratulations on earning the badge!",
            points: 50
        }
    ]
    const cardInfo = [
        { Name: "Aarav Sharma", rank: "1", sparks: "265", imageLink: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" },
        { Name: "Kavya Patel", rank: "2", sparks: "263", imageLink: "https://cdn-icons-png.flaticon.com/128/4140/4140047.png" },
        { Name: "Advait Singh", rank: "3", sparks: "259", imageLink: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png" },
        { Name: "Diya Kapoor", rank: "4", sparks: "256", imageLink: "https://cdn-icons-png.flaticon.com/128/4140/4140051.png" },
        { Name: "Arjun Desai", rank: "5", sparks: "248", imageLink: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png" },
        { Name: "Vir Chopra", rank: "6", sparks: "243", imageLink: "https://cdn-icons-png.flaticon.com/128/4140/4140048.png" },
        { Name: "Ananya Reddy", rank: "7", sparks: "240", imageLink: "https://cdn-icons-png.flaticon.com/128/11498/11498793.png" },
        { Name: "Riya Verma", rank: "8", sparks: "238", imageLink: "https://cdn-icons-png.flaticon.com/128/706/706830.png" },
        { Name: "Aryan Gupta", rank: "9", sparks: "233", imageLink: "https://cdn-icons-png.flaticon.com/128/236/236832.png" },
        { Name: "Ishita Menon", rank: "10", sparks: "231", imageLink: "https://cdn-icons-png.flaticon.com/128/706/706816.png" },
        { Name: "Rohan Khanna", rank: "11", sparks: "225", imageLink: "https://cdn-icons-png.flaticon.com/128/1999/1999625.png" },
        { Name: "Naina Joshi", rank: "12", sparks: "219", imageLink: "https://cdn-icons-png.flaticon.com/128/1154/1154448.png" },
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
