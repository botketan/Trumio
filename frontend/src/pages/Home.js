import React from 'react'
import Mentor from './Mentor'
import Post from '../components/Post'
import AchievementCarousel from '../components/Crousel_Achievements/AchievementCarousel'
import AchievementExpand from '../components/Crousel_Achievements/AchievementExpand'
import ProfileCard from '../components/ProfileCard'
import Chatleft from '../components/chatleft.js'
import GamificationAchievements from '../components/GamificationAchievements'
import GamificationProfile from '../components/GamificationProfile'
import NoteList from '../components/noteList/noteList'
import Leaderboard from '../components/Leaderboard/Leaderboard.js'
import NotesComponent from '../components/NotesComponent/NotesComponent.js'
import Navigation from '../components/Navigation.js'
import Chats from '../components/CIA/chats.js'

function Home() {
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
  return (
    <>
       
        <Mentor /> 
        <GamificationAchievements achievements={achievements} />
        {/* <Post />  */}
        <AchievementCarousel items={items1} />
        
        {/* <NoteList/> */}
        
        {/* <AchievementExpand items={items1} />
         <Leaderboard cardInfo={cardInfo} />
         <NotesComponent noteslist={Noteslist}/>
         
         {/* <Chat chatData={[{ heading: 'ProdWizard', chat: ['Chat content for today1', 'Chat content for today2'] }, { heading: 'ProdWizard', chat: ['Chat content for last 7 days1', 'Chat content for last 7 days2'] },{ heading: 'ProdWizard', chat: ['Chat content for last 14 days1', 'Chat content for last 14 days2'] }]} /> */}
         
         {/* <Chat chatData={[{ heading: 'Today', chat: [{ message: 'Chat content for today1', points: 2 }, { message: 'Chat content for today2', points: 1 }] }, { heading: 'Last 7 days', chat: [{ message: 'Chat content for last 7 days1', points: 3 }, { message: 'Chat content for last 7 days2', points: 2 }] }]} /> */}
         {/* <Chat chatData={[{ heading: 'Today', chat: [{ message: 'Chat content for today1', points: 2 }, { message: 'Chat content for today2', points: 1 }, { message: 'Chat content for today3', points: 1 }] }, { heading: 'Last 7 days', chat: [{ message: 'Chat content for last 7 days1', points: 3 }, { message: 'Chat content for last 7 days2', points: 2 }, { message: 'Chat content for last 7 days3', points: 2 }] }]} /> */}
         {/* <Chatleft chatData={[{ heading: 'ProdWizard', chat: [{ message: 'Chat content for today1', days: 1 }, { message: 'Chat content for today2', days: 1 }, { message: 'Chat content for today3', days: 4 }, { message: 'Chat content for today4', days: 8 }] }, 
                          { heading: 'ProdWizard', chat: [{ message: 'Chat content for last 7 days1', days: 3 }, { message: 'Chat content for last 7 days2', days: 2 }, { message: 'Chat content for last 7 days3', days: 2 }, { message: 'Chat content for last 7 days4', days: 9 }] },
                          { heading: 'ProdWizard', chat: [{ message: 'Chat content for today1', days: 1 }, { message: 'Chat content for today2', days: 1 }, { message: 'Chat content for today3', days: 2 }, { message: 'Chat content for today4', days: 8 }] }]} /> */}


         {/* <NotesComponent noteslist={Noteslist}/> */}
         {/* <Chats/> */}
    </>
  )
}

export default Home
