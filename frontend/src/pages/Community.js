import React, { useState, useEffect } from 'react'
import ProfileCard from '../components/ProfileCard'
import axios from 'axios';
import NoteList from '../components/noteList/noteList';
import "./pages.css"
import CommunityPost from '../components/Community/CommunityPost';
import CommunityHeader from '../components/Community/CommunityHeader';
import { Dropdown, MenuItem, NativeSelect } from '@heathmont/moon-core-tw';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';
import { Link } from 'react-router-dom';


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
            setCommunity(res.data[0]);
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

    const handleSelect =(e)=>{
        console.log(e.target);
    }

  return (
    <>
    {posts&&user&&communities&&<div className='flex justify-center gap-4 py-8 '>
        <div className='w-[55vw] flex flex-col items-start gap-4'>
            <div>
                {communities&&<CommunityHeader communityName={communities[0].title}/>}
            </div>
            <div className='flex items-center justify-normal gap-4'>

                <div className='flex items-center justify-normal gap-4'>
                    <Dropdown value={community} onChange={setCommunity} size="lg" className='bg-blue-600 text-white rounded-lg'>
                    {({ open }) => (
                    <>
                        <Dropdown.Select
                        open={open}
                        placeholder="Recommended"
                        >
                        {community?.title}
                        </Dropdown.Select>
                        <Dropdown.Options>
                            <Dropdown.Option value={"Recommended"} key={0} className="bg-white text-black">
                            {({ selected, active }) => (
                                <MenuItem isActive={active} isSelected={selected} className="bg-white text-black w-40">
                                <MenuItem.Title>Recommended</MenuItem.Title>
                                <MenuItem.Radio isSelected={selected} />
                                </MenuItem>
                            )}
                            </Dropdown.Option>
                        {user&&communities&&communities.filter(community=> user.communityIds.includes(community._id)).map((person, index)=> (
                            <Dropdown.Option value={person} key={index} className="bg-white text-black">
                            {({ selected, active }) => (
                                <MenuItem isActive={active} isSelected={selected} className="bg-white text-black w-40">
                                <MenuItem.Title>{person.title}</MenuItem.Title>
                                <MenuItem.Radio isSelected={selected} />
                                </MenuItem>
                            )}
                            </Dropdown.Option>
                        ))}
                        </Dropdown.Options>
                    </>
                    )}
                    </Dropdown>
                
                    {/* <option value="Recommended" className='bg-white text-black'>Recommended</option>
                    {
                        user&&communities&&communities.filter(community=> user.communityIds.includes(community._id)).map((community)=>{
                            return <option value={community.title} className='bg-white text-black'>{community.title}</option>
                        })
                    } */}
                {/* </Dropdown> */}
                <div>
                <div className='w-40 bg-yellow-100 rounded-lg flex justify-center items-center h-12 font-medium'>
                    {community?community.isLocal?"Local ":"Global ":"Global "} Community
                </div>
            </div>

            </div>
            </div>
            <div className='flex flex-col gap-6'>
            {posts&&user&&communities&&posts.map((post)=>{
                console.log(post);
                return (<Link to={"/postpage/"+post._id}><div className='w-[55vw] border border-neutral-200 shadow-md rounded-xl p-6 overflow-hidden'><CommunityPost key={post._id} 
                    owner={user}
                    post={post}
                    complete={false}
                    /></div></Link>)
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
    }
    </>
  )
}

export default Community
