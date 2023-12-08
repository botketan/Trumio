import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import MentorCard from "../components/Mentor/MentorCard";
import MentorSearch from "../components/MentorSearch";

function Mentor() {
    const [selected,setSelected]=useState("")
    const [mentors,setMentors]=useState([]);
    const [filteredMentors,setFilteredMentors]=useState([]);
    const cardObject = {
        imageUrl : "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
        name : "Devesh Sutahr",
        country : "IN",
        role :"Web Developer",
        company : "Delhi",
        noOfSessions : 5,
        reviews : 4.4,
        experience : 2,
        avgAttendance : 80
      }


    useEffect(()=>{
        axios.post("http://localhost:5000/mentor/get",{
        }).then((res) => {
            console.log(res.data);
            setMentors(res.data);
        }).catch((err) => {
            console.log(err);
        });
    },[]);
    useEffect(()=>{
      if (selected !== "All"){
      axios.post("http://localhost:5000/mentor/get",{
        skills:selected
      }).then((res) => {
          setMentors(res.data);;
      }).catch((err) => {
          console.log(err);
      });
      }
      else{
        axios.post("http://localhost:5000/mentor/get",{
        }).then((res) => {
            setMentors(res.data);
        }).catch((err) => {
            console.log(err);
        });
      }
    },[selected])

    useEffect(()=>{
      setFilteredMentors(mentors);
    },[mentors])

    console.log(filteredMentors);
  return (
    <>
      <div className="bg-gray-50">
      <div className="flex flex-col justify-start border border-grey-800 rounded-xl bg-white mx-[10vw] mb-5">
          <MentorSearch mentors={mentors} setFilteredMentors={setFilteredMentors}></MentorSearch>
          <Navbar selected={selected} setSelected= {setSelected}/>
        </div>
        <div className="flex justify-center px-16 gap-4 flex-wrap">
          {
            filteredMentors.map((mentor,index)=>{
              console.log(mentor);
              return <MentorCard key={index} cardData={mentor}></MentorCard>
            })
          }
        </div>
        </div>
    </>
      
  )
}

export default Mentor
