import React, { useState } from "react";
import NoteList from "../components/noteList/noteList.js";
import Post from "../components/Post.js";
import Navbar from "../components/Navbar.js";
import { OtherRocket } from "@heathmont/moon-icons-tw";
import AISuggestions from "../components/AISuggestions.js";

export default function Notes() {
  const [heading, setHeading] = useState("ProdWizard");
  return (
    <>
      <Navbar />
      <div className="flex flex-row px-16 py-4 container w-[100%] h-[100%] gap-5">
        <div className=" w-1/3 h-[100%]">
            <NoteList />
        </div>
        <div className="container mx-auto my-auto h-[100%] shadow-xl border border-neutral-200 rounded-lg">
            <div className="h-[50px] w-[100%] p-4 border-neutral-200 flex gap-4 items-center" >
              <div className="flex justify-center gap-4 items-center w-[90%]">
                <span className={`h-8 text-yellow-500 bg-yellow-100 px-2 py-1 rounded-md font-medium`}>{"DRAFT"}</span>
                <span className="font-medium">{heading}</span>
              </div>
              <div className="w-[92px] h-8 pl-1 pr-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-1 inline-flex">
                <OtherRocket className="w-6 h-6 relative text-blue-600" />
                <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">Publish</div>
              </div>
            </div>
            <div className="w-[100%] h-[65vh] overflow-y-scroll p-2 border-b-2 border-t-2 border-neutral-200">
                <Post />
            </div>
            <div className="px-3">
              <AISuggestions />
            </div>
        </div>
      </div>
    </>
  );
}