import React, { useState } from "react";
import { Carousel } from '@heathmont/moon-core-tw';
import { ControlsChevronLeftSmall, ControlsChevronRightSmall} from '@heathmont/moon-icons-tw';
import { Link } from 'react-router-dom';
import AchievementCarousel from "./Crousel_Achievements/AchievementCarousel";

// Sample data for carousel items

const Badges = ({badges}) => {
  const items1 = [
    {
      heading: "Star Mentee",
      description: "Booked 10 mentorship sessions",
      status: "3 days left",
      image: "https://cdn.iconscout.com/icon/premium/png-512-thumb/star-2996120-2492152.png?f=webp&w=256",
      sparks: "150 Sparks"
    },
    {
      heading: "Finisher",
      description: "Completed your first project",
      status: "3 days left",
      image: "https://cdn.iconscout.com/icon/premium/png-512-thumb/finisher-6793663-5562502.png?f=webp&w=256",
      sparks: "100 Sparks"
    },
    {
      heading: "Gold-rate work",
      description: "Completed 3 tasks",
      status: "3 days left",
      image: "https://lh3.googleusercontent.com/50yFntI4vajNAs2MabEB8t02Q780J_4BCTBA2uIt_WArQz87AXOfUKbcA49G5BtbU5nujCU=s85",
      sparks: "50 Sparks"
    },
    {
      heading: "Upcoming Speaker",
      description: "Posted first time in the community",
      status: "3 days left",
      image: "https://us.v-cdn.net/6031588/uploads/editor/kh/4sd0ejkgv25u.png",
      sparks: "50 Sparks"
    },
    {
      heading: "Diamond",
      description: "Description for Diamond badge",
      status: "3 days left",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
      sparks: "25 Sparks"
    },
    {
      heading: "Crystal",
      description: "Description for Crystal",
      status: "3 days left",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
      sparks: "25 Sparks"
    },
    {
      heading: "Ruby",
      description: "Description for Ruby",
      status: "3 days left",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
      sparks: "25 Sparks"
    },
    {
      heading: "Platinum",
      description: "Description for Platinum",
      status: "3 days left",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
      sparks: "25 Sparks"
    },
    {
      heading: "Emerald",
      description: "Description for Emerald",
      status: "3 days left",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
      sparks: "25 Sparks"
    },
    {
      heading: "Topaz",
      description: "Description for Topaz",
      status: "3 days left",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroBwNcmJFu3Q7gjYq18s9vaaY8-QTbOW5_Q&usqp=CAU",
      sparks: "25 Sparks"
    }
  ];
  
      // console.log(badges);
  return (

    <div className="w-full relative bg-white rounded-xl shadow-md border border-neutral-200 pl-[16px] pr-[16px] pb-4">
      
      <div className="w-96 h-8 pl-2 justify-between items-center inline-flex mt-[16px] mb-[10px]">
        <h1 className="text-zinc-600 text-base font-normal font-dmsans leading-normal">Your Badges</h1>
        <Link to="/Gamification"><button className="px-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center flex">
          <div className="text-center text-blue-600 text-sm font-medium font-dmsans leading-normal">View All</div>
        </button>
        </Link>
      </div>
      <AchievementCarousel items={items1} />
      
    </div>
  );
};

export default Badges;