import React, { useState } from "react";
import {
  GenericSearch,
  ChatComment,
  NotificationsBell,
} from "@heathmont/moon-icons-tw";
import { Link } from "react-router-dom";

const Navigation = ({ click, setClick }) => {
  const handleClick = (data) => {
   // setClick(data);
  };

  return (
    <nav className="flex items-center justify-between my-1 shadow-sm shadow-gray-300 bg-white-800 text-gray-500 p-4">
      <img
        className="w-10 ml-5"
        src="C:\Users\PRIYANSH MATHUR\Downloads\download.png"
        alt="image"
      />
      <div className="flex justify-start items-center">
        <span
          to="/Dashboard"
          onClick={() => handleClick("Dashboard")}
          className={
            click === "Dashboard"
              ? "flex flex-col items-center ml-4 border-b border-solid border-white transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer "
              : "flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"
          }
        >
          <span className="ml-6">Dashboard</span>
        </span>
        <span
          to="/Marketplace"
          onClick={() => handleClick("Marketplace")}
          className={
            click === "Marketplace"
              ? "flex flex-col items-center border-b border-solid border-cyan-800 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer"
              : "flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"
          }
        >
          <span className="ml-6">Marketplace</span>
        </span>
        <span
          to="/Projects"
          onClick={() => handleClick("Projects")}
          className={
            click === "Projects"
              ? "flex flex-col items-center mr-4 border-b border-solid border-cyan-800 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer"
              : "flex flex-col items-center mr-4 hover:scale-105 duration-100 hover:cursor-pointer"
          }
        >
          <span className="ml-6">Projects</span>
        </span>
        <span
          to="/MyTeam"
          onClick={() => handleClick("MyTeam")}
          className={
            click === "MyTeam"
              ? "flex flex-col items-center border-b border-solid border-cyan-800 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer"
              : "flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"
          }
        >
          <span className="ml-6">MyTeam</span>
        </span>
        <span
          to="/Truspace"
          onClick={() => handleClick("Truspace")}
          className={
            click === "Truspace"
              ? "flex flex-col items-center border-b border-solid border-cyan-800 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer"
              : "flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"
          }
        >
          <span className="ml-6">Truspace</span>
        </span>
        <span
          to="/Mentorship"
          onClick={() => handleClick("Mentorship")}
          className={
            click === "Mentorship"
              ? "flex flex-col items-center mr-4 border-b border-solid border-cyan-800 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer"
              : "flex flex-col items-center mr-4 hover:scale-105 duration-100 hover:cursor-pointer"
          }
        >
          <span className="ml-6">Mentorship</span>
        </span>
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
      </div>
      <div className=" justify-end items-center">
        <h4 className="justify-start">Priyansh Mathur</h4>
        <span className="text-xs justify-end"> Noob </span>
      </div>
      <img
        className="ml-4 rounded-full"
        src="C:\Users\PRIYANSH MATHUR\Downloads\download.png"
        alt="image"
      />
    </nav>
  );
};

export default Navigation;
