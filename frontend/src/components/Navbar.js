import React, { useState } from "react";
import {
  GenericBrowser,
  GenericEdit,
  DevicesMacbookAndIphone,
  OtherAgent,
  MediaMonitor,
  GenericBurgerRegular,
} from "@heathmont/moon-icons-tw";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selected,setSelected]=useState(null)

  const handleClick = (data) => {
    setSelected(data)
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
      <Link to="/development" onClick={()=>handleClick("development")} className={selected==='development'?"flex flex-col items-center ml-4 border-b border-solid border-white transition-transform duration-100 ease-in-out transform hover:scale-105 " : "flex flex-col items-center ml-4 hover:scale-105 duration-100"} >
        <GenericBrowser className="text-moon-24"/>
        <span>Development</span>
      </Link>
      <Link to="/design" onClick={()=>handleClick("design")} className={selected==='design'?"flex flex-col items-center border-b border-solid border-white transition-transform duration-100 ease-in-out transform hover:scale-105" : "flex flex-col items-center hover:scale-105 duration-100"} >
        <GenericEdit className="text-moon-24"/>
        <span>Design</span>
      </Link>
      <Link to="/marketing" onClick={()=>handleClick("marketing")} className={selected==='marketing'?"flex flex-col items-center border-b border-solid border-white transition-transform duration-100 ease-in-out transform hover:scale-105" : "flex flex-col items-center hover:scale-105 duration-100"} >
        <DevicesMacbookAndIphone className="text-moon-24"/>
        <span>Marketing</span>
      </Link>
      <Link to="/business" onClick={()=>handleClick("business")} className={selected==='business'?"flex flex-col items-center border-b border-solid border-white transition-transform duration-100 ease-in-out transform hover:scale-105" : "flex flex-col items-center hover:scale-105 duration-100"} >
        <OtherAgent className="text-moon-24"/>
        <span>Business</span>
      </Link>
      <Link to="/data-science" onClick={()=>handleClick("data-science")} className={selected==='data-science'?"flex flex-col items-center border-b border-solid border-white transition-transform duration-100 ease-in-out transform hover:scale-105" : "flex flex-col items-center hover:scale-105 duration-100"} >
        <MediaMonitor className="text-moon-24"/>
        <span>Data Science</span>
      </Link>
      <Link to="/other" onClick={()=>handleClick("other")} className={selected==='other'?"flex flex-col items-center mr-4 border-b border-solid border-white transition-transform duration-100 ease-in-out transform hover:scale-105" : "flex flex-col items-center mr-4 hover:scale-105 duration-100"} >
        <GenericBurgerRegular className="text-moon-24"/>
        <span>Other</span>
      </Link>
    </nav>
  );
};

export default Navbar;
