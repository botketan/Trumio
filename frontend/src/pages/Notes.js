import React, { useState,useEffect } from "react";
import NoteList from "../components/noteList/noteList.js";
import Post from "../components/Post.js";
import Navbar from "../components/Navbar.js";
import { OtherRocket } from "@heathmont/moon-icons-tw";
import AISuggestions from "../components/AISuggestions.js";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function Notes() {
  const [heading, setHeading] = useState("Untitled");
  const [post, setPost] = useState();
  const [ai,setAi]= useState();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("id"));
  useEffect(() => {
    axios.post("http://localhost:5000/post/getByUserId",{
        userId:"65645f987aa073e675de9071"
    }).then((res) => {
      setPosts(res.data.reverse());
      console.log(searchParams.get("new"));
      if(searchParams.get("new")){
        setSearchParams({});
        axios.post("http://localhost:5000/post/create",{userId:"65645f987aa073e675de9071"}).then((res) => {
        window.location.reload(true)})
        .catch((err) => {
        console.log(err);});
      }
      if(!post)
      {
        console.log(res.data)
        let check=0;
        for(let note in res.data){
          if(res.data[note]._id==searchParams.get("id")){
            setPost(res.data[note]);
            setHeading(res.data[note].title);
            check=1;
            console.log("here is some data");
            console.log(res.data[note]);
          }
        }
        if(check==0){
          setPost(res.data[0]);
          setHeading(res.data[0].title);
          setSearchParams({id:res.data[0]._id});
        }
      }
    }).catch((err) => {
        console.log(err);
    });
  }, []);
  // useEffect(() => {
  // }, [heading]);
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
        <div className=" w-[40vw] h-[85vh] ">
            <NoteList posts={posts} setPost={setPost} setPosts={setPosts} setHeading={setHeading} searchParams={searchParams} setSearchParams={setSearchParams} place={"Notes"}/>
        </div>
        <div className="container mx-auto my-auto h-[100%] shadow-xl border border-neutral-200 rounded-lg">
            <div className="h-[50px] w-[100%] p-4 border-neutral-200 flex gap-4 items-center" >
              <div className="flex justify-center gap-4 items-center w-[90%]">
                <span className={`h-8 text-yellow-500 bg-yellow-100 px-2 py-1 rounded-md font-medium`}>{"DRAFT"}</span>
                <input type="text" onChange={(e)=>{
                  setHeading(e.target.value)
                  }} value={heading} className="font-medium focus:outline-none w-[fit-content]"></input>
              </div>
              <button className="w-[92px] h-8 pl-1 pr-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-1 inline-flex" onClick={()=>{
                axios.post("http://localhost:5000/post/publish",{
                  postId:post._id
                }).then((res) => {
                  // console.log(res);
                  window.location.reload(true)
                }).catch((err) => {
                    console.log(err);
                });
                }}>
                <OtherRocket className="w-6 h-6 relative text-blue-600" />
                <div className="text-blue-600 text-sm font-medium font-dmsans leading-normal">Publish</div>
              </button>
            </div>
            <div className="w-[100%] h-[65vh] overflow-y-scroll p-2 border-b-2 border-t-2 border-neutral-200 overflow-x-hidden">
                {post && <Post post={post}  setPost={setPost} ai={ai} setAi={setAi} heading={heading}/>}
            </div>
            <div className="px-3">
              <AISuggestions setAi={setAi}/>
            </div>
        </div>
      </div>
    </>
  );
}