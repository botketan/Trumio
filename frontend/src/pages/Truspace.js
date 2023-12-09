import React, {useState, useEffect} from "react";
import ExpertAgents from "../components/expertAgents";
import MileStones from "../components/MilestoneTracker/MileStones";
import NotesComponent from "../components/NotesComponent/NotesComponent";
import Navigation from "../components/Navigation";
import ProfileCard from "../components/ProfileCard";
import Badges from "../components/Badges";
import axios from "axios";

function traverse(blocks){
  let s ="";
  if (Array.isArray(blocks) && blocks.length) {
    blocks.map((block)=>{
      // console.log(block);
      if(block.content)
      {
        block.content.forEach((content) => {
          s+=content.text +" ";
        });
      }
      s+= traverse(block.children);
    });
    return s;
  }
  return "";

}

export default function Truspace({userId}) {
  const [data, setData] = useState(null);
  const [notes, setNotes] = useState(null);
  const [projects, setProjects] = useState(null);
  const [chats, setChats] = useState(null);
  useEffect(() => {
    axios.post("http://localhost:5000/user/getUser",{
        userId:userId
    }).then((res) => {
      setData(res.data);
      setProjects(res.data.projects);
      setChats(res.data.chatIds);
      console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
  }, []);
  useEffect(() => {
    axios.post("http://localhost:5000/post/getByUserId",{
        userId:userId
    }).then((res) => {
      setNotes(res.data);
      // console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
  }, []);
  
  const badges= data&& data.badges;
  const props=";"
  const Noteslist= notes&& notes.map((note)=>{
    return {title: note.title, description: note.content?traverse(JSON.parse(note.content)):"", days: 3, id: note._id}
  })
  // console.log(badges);
  return (
    <>
      {
        (data&&notes)&&
      <div className="flex flex-row py-4 gap-4 justify-center">
        <div className="flex flex-col w-[59vw] gap-4">
          <div className="flex w-full justify-between">
            <ExpertAgents chatIds={chats} />
            <MileStones projects={projects} setProjects={setProjects} />
          </div>
          <NotesComponent noteslist={Noteslist.slice(0,4)}/>
        </div>
        <div className="flex flex-col w-[28vw] items-center justify-start gap-4">
          <ProfileCard props={{
            name:data.name,
            userId:`@${data.userName}`,
            profilePic:data.icon,
            work:data.position,
            education:data.college,
            tier:"Pioneer",
            sparks:data.sparks,
            advanceTowards:"Visionary",
            tierPic: "/tier.png",
            nextTierPic: "tier.png",
            points:data.points,
  }}/>
          <Badges badges={data.badges}/>
        </div>
      </div>}
    </>
  );
}