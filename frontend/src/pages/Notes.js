import React, { useState,useEffect } from "react";
import NoteList from "../components/noteList/noteList.js";
import Post from "../components/Post.js";
import Navbar from "../components/Navbar.js";
import { OtherRocket } from "@heathmont/moon-icons-tw";
import AISuggestions from "../components/AISuggestions.js";
import axios from "axios";

export default function Notes() {
  const [heading, setHeading] = useState("Untitled");
  const [post, setPost] = useState();
  const [ai,setAi]= useState();
  useEffect(() => {
    axios.post("http://localhost:5000/post/getByUserId",{
        userId:"65645f987aa073e675de9071"
    }).then((res) => {
      setPosts(res.data.reverse());
      if(!post)
      setPost(res.data[0]);
    }).catch((err) => {
        console.log(err);
    });
  }, []);
  const [posts,setPosts] = useState([
    {
        title:"ProdWizard",
        isPublished:true,
    },
    {
        title:"helloWorld",
        isPublished:true,
    },
  ]);
  return (
    <>
      <div className="flex flex-row px-16 py-4 container w-[100%] h-[100%] gap-5">
        <div className=" w-[40vw] h-[65vh] ">
            <NoteList posts={posts} setPost={setPost} setPosts={setPosts}/>
        </div>
        <div className="container mx-auto my-auto h-[100%] shadow-xl border border-neutral-200 rounded-lg">
            <div className="h-[50px] w-[100%] p-4 border-neutral-200 flex gap-4 items-center" >
              <div className="flex justify-center gap-4 items-center w-[90%]">
                <span className={`h-8 text-yellow-500 bg-yellow-100 px-2 py-1 rounded-md font-medium`}>{"DRAFT"}</span>
                <span className="font-medium">{heading}</span>
              </div>
              <button className="w-[92px] h-8 pl-1 pr-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-1 inline-flex" onClick={()=>{
                axios.post("http://localhost:5000/post/publish",{
                  postId:post._id
                }).then((res) => {
                  console.log(res);
                  window.location.reload(true)
                }).catch((err) => {
                    console.log(err);
                });
                }}>
                <OtherRocket className="w-6 h-6 relative text-blue-600" />
                <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">Publish</div>
              </button>
            </div>
            <div className="w-[100%] h-[65vh] overflow-y-scroll p-2 border-b-2 border-t-2 border-neutral-200 overflow-x-hidden">
                {post && <Post post={post}  setPost={setPost} ai={ai} setAi={setAi}/>}
            </div>
            <div className="px-3">
              <AISuggestions setAi={setAi}/>
            </div>
        </div>
      </div>
    </>
  );
}