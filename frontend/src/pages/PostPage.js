import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import PostReadOnly from '../components/PostReadonly.js';
import axios from 'axios';
export default function PostPage() {
    const {id} = useParams();
    const [post, setPost] = useState();
    const [owner,setOwner] = useState();
    useEffect(() => {
        axios.post("http://localhost:5000/post/getById",{
            postId:id ,userId:"65645f987aa073e675de9071"
        }).then((res) => {
            res.data.isPublished=true;
            setPost(res.data);
            axios.post("http://localhost:5000/user/getUser",{userId:res.data.userId}).then((res) => {
                setOwner(res.data);
            }).catch((err) => {console.log(err);});
        }).catch((err) => {
            console.log(err);
        });
    },[]);

  return (
    <div className="flex flex-row gap-[3vw] px-[5vw] py-[6vh]">
        
        <div className="w-[65vw] p-[1vw] flex flex-col">
            {owner &&
            <div className="flex gap-3 items-center my-[1vw] justify-start">
                    <img className="h-16 w-16 rounded-full" src={owner.icon ? owner.icon : "/logo192.png"} alt="image"></img>
                    <div>
                        <h2 className='font-medium'>{owner.name}</h2>
                        <span className='font-light'>{owner.position}</span>
                    </div>
            </div>}
            {post &&<div className="ml-[-3.5vw]"> <PostReadOnly post={post}  setPost={setPost}  /></div>}
            <div className="flex flex-row w-[inherit] gap-[1vw] ">
                <div className="w-[196px] h-10 pl-2 pr-4 py-2 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">1.1k</div>
                </div>
                <div className="w-[196px] h-10 pl-2 pr-4 py-2 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">1.1k</div>
                </div>
                <div className="w-[196px] h-10 pl-2 pr-4 py-2 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">1.1k</div>
                </div>
                <div className="w-[196px] h-10 pl-2 pr-4 py-2 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">1.1k</div>
                </div>
            </div>
        </div>
        <div className='w-[20vw] h-[30vh]'>
                
        </div>
    </div>
  )
}