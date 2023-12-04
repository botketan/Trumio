import React, {useState, useEffect} from "react";
import ExpertAgents from "../components/expertAgents";
import MileStones from "../components/MilestoneTracker/MileStones";
import NotesComponent from "../components/NotesComponent/NotesComponent";
import Navigation from "../components/Navigation";
import ProfileCard from "../components/ProfileCard";
import Badges from "../components/Badges";
import axios from "axios";

export default function Truspace() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.post("http://localhost:5000/user/getUser",{
        userId:"65645f987aa073e675de9071"
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
  }, []);
  let projects =[
      {
      title: "DevRev",
      description: "The only PS we are going to win in this inter IIT",
      milestones:[
      {
          title: "Fuck Trumio",
          task:[
              {
                  title:"Fuck trumio",
                  isCompleted:true,
              },
              {
                title:"Fuck trumio again",
                isCompleted:false,
            }
          ],
          progress:50,
      }
    ]
  }
  ]

  const Noteslist=[
    {
        title:"Exploring ML",
        description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt neque sit amet metus ullamcorper aliquam.",
    },
    {
      title:"Exploring ML",
      description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt neque sit amet metus ullamcorper aliquam.",
  },
  {
      title:"Exploring ML",
      description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt neque sit amet metus ullamcorper aliquam.",
  },
  {
    title:"Exploring ML",
    description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt neque sit amet metus ullamcorper aliquam.",
  },
  ]

  const props={
    name:"Vidya Sagar",
    userId:"@Vidya2202",
    profilePic:"/Avatar.png",
    work:"Software Developer",
    education:"IIT Guwahati",
    tier:"Pioneer",
    sparks:2548,
    advanceTowards:"Visionary",
    tierPic: "/tier.png",
    nextTierPic: "tier.png",
    points:"350",
  }
  

  return (
    <>
      {
        data?
      <div className="flex flex-row px-16 py-4 gap-4 justify-center">
        <div className="flex flex-col w-[59vw] gap-4">
          <div className="flex w-full justify-between">
            <ExpertAgents />
            <MileStones projects={data.projects}/>
          </div>
          <NotesComponent noteslist={Noteslist}/>
        </div>
        <div className="flex flex-col w-[28vw] items-center justify-start gap-4">
          <ProfileCard props={props}/>
          <Badges />
        </div>
      </div> : <div>Loading</div>
      }
    </>
  );
}