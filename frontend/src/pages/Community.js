import React, { useState, useEffect } from 'react'
import ProfileCard from '../components/ProfileCard'
import axios from 'axios';
import NoteList from '../components/noteList/noteList';
import "./pages.css"
import CommunityPost from '../components/Community/CommunityPost';
import CommunityHeader from '../components/Community/CommunityHeader';


const Community = () => {
    const [user, setUser] = useState(null);
    const [notes, setNotes] = useState(null);
    const [posts, setPosts] = useState(null);
    const [communities, setCommunities] = useState(null);
    const [community, setCommunity] = useState(null);

    useEffect(() => {
        document.title = "Community";
        axios.post("http://localhost:5000/user/getUser",{
            userId:"65645f987aa073e675de9071"
        }).then((res) => {
        setUser(res.data);
        console.log("user");
        console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });

        axios.post("http://localhost:5000/post/getByUserId",{
            userId:"65645f987aa073e675de9071"
        }).then((res) => {
            setNotes(res.data);
            console.log("Notes");
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });

    }, []);

    useEffect(() => {
        axios.post("http://localhost:5000/community/getByUserId",{
            userId:"65645f987aa073e675de9071"
        }).then((res) => {
            setCommunities(res.data);
            console.log("Communities");
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        axios.post("http://localhost:5000/post/community",{
            communityId:"656857f3b127a857fe39ecc5"
        }).then((res) => {
            setPosts(res.data.reverse());
            console.log("posts");
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);



  return (
    <div className='flex justify-center gap-4 py-8 '>
        <div className='w-[55vw] flex flex-col items-center'>
            <div>
                <CommunityHeader />
            </div>
            <div className='flex flex-col gap-6'>
            {posts&&user&&communities&&posts.map((post)=>{
                console.log(post);
                return (<div className='w-[55vw] border border-neutral-200 shadow-md rounded-xl p-6 overflow-hidden'><CommunityPost key={post._id} 
                    owner={user}
                    post={post}
                    complete={false}
                    /></div>)
            })}
            {posts&&user&&communities&&posts.map((post)=>{
                console.log(post);
                return (<div className='w-[55vw] border border-neutral-200 shadow-md rounded-xl p-6 overflow-hidden'><CommunityPost key={post._id} 
                    owner={user}
                    post={post}
                    complete={false}
                    /></div>)
            })}
            {posts&&user&&communities&&posts.map((post)=>{
                console.log(post);
                return (<div className='w-[55vw] border border-neutral-200 shadow-md rounded-xl p-6 overflow-hidden'><CommunityPost key={post._id} 
                    owner={user}
                    post={post}
                    complete={false}
                    /></div>)
            })}
            {posts&&user&&communities&&posts.map((post)=>{
                console.log(post);
                return (<div className='w-[55vw] border border-neutral-200 shadow-md rounded-xl p-6 overflow-hidden'><CommunityPost key={post._id} 
                    owner={user}
                    post={post}
                    complete={false}
                    /></div>)
            })}
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
