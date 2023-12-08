import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import MentorCard from "../components/Mentor/MentorCard";
import MentorSearch from "../components/MentorSearch";

function Mentor() {
    const [selected,setSelected]=useState("")
    const cardObject = {
        imageUrl : "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
        name : "Devesh Sutahr",
        country : "IN",
        job :"Web Developer",
        jobLocation : "Delhi",
        noOfSessions : 5,
        reviews : 4.4,
        experience : 2,
        avgAttendance : 80
      }
  return (
    <>
      <div className="bg-gray-50">
      <div className="flex flex-col justify-start border border-grey-800 rounded-xl bg-white mx-[10vw] mb-5">
          <MentorSearch></MentorSearch>
          <Navbar selected={selected} setSelected= {setSelected}/>
        </div>
        <div className="flex justify-center px-16 gap-4 flex-wrap">
          <MentorCard cardData={cardObject} />
          <MentorCard cardData={cardObject} />
          <MentorCard cardData={cardObject} />
          <MentorCard cardData={cardObject} />
        </div>
        </div>
    </>
      
  )
}

export default Mentor
