import React, { useState, useEffect } from 'react'
import ProfileCard from '../components/ProfileCard'
import axios from 'axios';
import NoteList from '../components/noteList/noteList';
import "./pages.css"


const Community = () => {
    const [user, setUser] = useState(null);
    const [notes, setNotes] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        document.title = "Community";
        axios.post("http://localhost:5000/user/getUser",{
            userId:"65645f987aa073e675de9071"
        }).then((res) => {
        setUser(res.data);
        console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });

        axios.post("http://localhost:5000/post/community",{}).then((res) => {
            setPosts(res.data);
            // console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        axios.post("http://localhost:5000/post/getByUserId",{
            userId:"65645f987aa073e675de9071"
        }).then((res) => {
            setNotes(res.data);
            // console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);


  return (
    <div className='flex justify-center gap-4 py-8 '>
        <div className='w-[59vw] bg-black'>
            <div>
                <div className='banner'></div>
            </div>
        </div>
        <div className='w-[29vw] flex flex-col gap-4'>
        {user&&<ProfileCard props={{
            name:user.name,
            userId:`@${user.userName}`,
            profilePic:user.icon,
            work:user.position,
            education:user.college,
            tier:"Pioneer",
            sparks:user.sparks,
            advanceTowards:"Visionary",
            tierPic: "/tier.png",
            nextTierPic: "tier.png",
            points:user.points,
        }}/>}
        {notes&&<NoteList posts={notes} place={"Community"}/>}
        </div>
    </div>
  )
}

export default Community
