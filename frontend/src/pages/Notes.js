import React from "react";
import NoteList from "../components/noteList/noteList.js";
import Post from "../components/Post.js";

export default function Notes() {
  return (
  <div className="flex flex-row mx-auto my-auto container w-[100%] h-[100%] gap-5">
    <div className=" w-1/3 h-[100%]">
        <NoteList />
    </div>
    <div className="container mx-auto my-auto h-[100%]">
        <div className="h-[30px] w-[100%]" ></div>
        <div className="w-[100%] h-[75vh] overflow-y-scroll">
            <Post />
        </div> 
    </div>
  </div>
  );
}