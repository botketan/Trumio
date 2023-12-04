import React, { useState } from "react";
import { Carousel } from '@heathmont/moon-core-tw';
import { ControlsChevronLeftSmall, ControlsChevronRightSmall} from '@heathmont/moon-icons-tw';
import { Link } from 'react-router-dom';
import AchievementCarousel from "./Crousel_Achievements/AchievementCarousel";

// Sample data for carousel items

const Badges = () => {
    const items1 = [
        {
          heading: "Badge 1",
          description: "Description for Badge 1",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 2",
          description: "Description for Badge 2",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 3",
          description: "Description for Badge 3",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 4",
          description: "Description for Badge 4",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 5",
          description: "Description for Badge 5",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 6",
          description: "Description for Badge 6",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 7",
          description: "Description for Badge 7",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 8",
          description: "Description for Badge 8",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 9",
          description: "Description for Badge 9",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        },
        {
          heading: "Badge 10",
          description: "Description for Badge 10",
          status: "3 days left",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
          sparks: "25 Sparks"
        }
      ];
  return (

    <div className="w-[416px] relative bg-white rounded-xl shadow-md border border-neutral-200 pl-[16px] pr-[16px]">
      
      <div className="w-96 h-8 pl-2 justify-between items-center inline-flex mt-[16px] mb-[10px]">
        <h1 className="text-zinc-600 text-base font-normal font-['DM Sans'] leading-normal">Your Badges</h1>
        <button className="px-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center flex">
          <div className="text-center text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">View All</div>
        </button>
      </div>
      <div className="h-20">

      </div>
      <AchievementCarousel items={items1} />
      
    </div>
  );
};

export default Badges;