import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import MentorCard from "../components/Mentor/MentorCard";


// useEffect(() => {
//   window.scrollTo(0, 0)
// }, [])

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
        <Navbar selected={selected} setSelected= {setSelected}/>
        <MentorCard cardData={cardObject} />
    </>
      
  )
}

export default Mentor
