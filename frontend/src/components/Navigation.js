import React, { useState } from "react";
import {
  GenericSearch,
  ChatComment,
  NotificationsBell,
} from "@heathmont/moon-icons-tw";
import { Link } from "react-router-dom";

const Navigation = ({ click, setClick }) => {
  const handleClick = (data) => {
   setClick(data);
  };
  const classSelect="px-3 h-16 flex items-center justify-center border-b-2 border-solid border-blue-500 font-medium text-blue-500 transition-all duration-100 ease-in-out";
  const classUnselect= "px-3 h-16 flex items-center justify-center transition-all duration-100 ease-in-out";
  return (
    <nav className="flex h-16 items-center justify-between my-1 shadow-lg bg-white-800 text-gray-500 px-2">
      <div className="flex justify-start items-center">
        <img
          className="w-[120px] ml-5 h-12"
          src="/trumio_logo.png" // Replace with actual image path
          alt="image"
        />
        <Link
          to="/Dashboard"
          onClick={() => handleClick("Dashboard")}
          className={
            click === "Dashboard"
              ? "flex flex-col items-center ml-4 transition-transform duration-100 ease-in-out transform  hover:cursor-pointer "
              : "flex flex-col items-center ml-4  duration-100 hover:cursor-pointer"
          }
        >
          <span className={click === "Dashboard"?`${classSelect}`:`${classUnselect}`}>Dashboard</span>
        </Link>
        <Link
          to="/Marketplace"
          onClick={() => handleClick("Marketplace")}
          className={
            click === "Marketplace"
              ? "flex flex-col items-center hover:cursor-pointer"
              : "flex flex-col items-center hover:cursor-pointer"
          }
        >
          <span className={click === "Marketplace"?`${classSelect}`:`${classUnselect}`}>Marketplace</span>
        </Link>
        <Link
          to="/Projects"
          onClick={() => handleClick("Projects")}
          className={
            click === "Projects"
              ? "flex flex-col items-center hover:cursor-pointer"
              : "flex flex-col items-center hover:cursor-pointer"
          }
        >
          <span className={click === "Projects"?`${classSelect}`:`${classUnselect}`}>Projects</span>
        </Link>
        <Link
          to="/MyTeam"
          onClick={() => handleClick("MyTeam")}
          className={
            click === "MyTeam"
              ? "flex flex-col items-center hover:cursor-pointer"
              : "flex flex-col items-center duration-100 hover:cursor-pointer"
          }
        >
          <span className={click === "MyTeam"?`${classSelect}`:`${classUnselect}`}>MyTeam</span>
        </Link>
        <Link
          to="/Truspace"
          onClick={() => handleClick("Truspace")}
          className={
            click === "Truspace"
              ? "flex flex-col items-center hover:cursor-pointer"
              : "flex flex-col items-center hover:cursor-pointer"
          }
        >
          <span className={click === "Truspace"?`${classSelect}`:`${classUnselect}`}>Truspace</span>
        </Link>
        <Link
          to="/Mentor"
          onClick={() => handleClick("Mentor")}
          className={
            click === "Mentor"
              ? "flex flex-col items-center mr-4 hover:cursor-pointer"
              : "flex flex-col items-center mr-4 hover:cursor-pointer"
          }
        >
          <span className={click === "Mentor"?`${classSelect}`:`${classUnselect}`}>Mentorship</span>
        </Link>
      </div>

      <div className="flex justify-start items-center pl-24 ">
        <span
          to="/SearchChat"
          onClick={() => handleClick("SearchChat")}
          className={
            click === "SearchChat"
              ? "flex flex-col items-center mr-4 border-b border-solid border-cyan-800 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer"
              : "flex flex-col items-center mr-4 hover:scale-105 duration-100 hover:cursor-pointer"
          }
        >
          <span className="ml-6 flex">
            <GenericSearch className="text-moon-24" />
          </span>
        </span>

        <span
          to="/Chat"
          onClick={() => handleClick("Chat")}
          className={
            click === "Chat"
              ? "flex flex-col items-center mr-4 border-b border-solid border-cyan-800 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer"
              : "flex flex-col items-center mr-4 hover:scale-105 duration-100 hover:cursor-pointer"
          }
        >
          <span className="ml-6 flex">
            <ChatComment className="text-moon-24" />
          </span>
        </span>
        <span
          to="/Notifications"
          onClick={() => handleClick("Notifications")}
          className={
            click === "Notifications"
              ? "flex flex-col items-center mr-4 border-b border-solid border-cyan-800 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer"
              : "flex flex-col items-center mr-4 hover:scale-105 duration-100 hover:cursor-pointer"
          }
        >
          <span className="ml-6 flex">
            <NotificationsBell className="text-moon-24" />
          </span>
        </span>
      
      <div className="flex flex-col gap-0 justify-center items-end">
        <h4 className="justify-start">Vidya Sagar</h4>
        <span className="text-xs justify-end"> Noob </span>
      </div>
      <img
        className="ml-4 rounded-full h-10 w-10"
        src="/Avatar.png"
        alt="image"
      />
      </div>
    </nav>
  );
};

export default Navigation;
