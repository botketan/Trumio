import { GenericInfo } from '@heathmont/moon-icons-tw';
import React from 'react';
import "./Gamification.css"
// import 'tailwindcss/tailwind.css'; // make sure TailwindCSS is imported

const GamificationProfile = () => {
  // Define your gradient colors and other style-related constants
  const gradientBlue = 'bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50';
  const gradientPurple = 'bg-gradient-to-r from-purple-300 to-purple-100';
  const boxShadow = 'shadow-lg'; // Tailwind class for shadow

  // Profile component
  const Profile = ({ name, handle, avatar }) => (
    <div className="flex flex-col justify-center items-center space-x-4 mt-[-50px]">
      <img src={avatar} alt={`${name}'s avatar`} className="w-18 ml-5 h-18 rounded-full border-4 border-white" />
      <div className='flex flex-col items-center justify-center'>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{handle}</div>
      </div>
    </div>
  );
// bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50
  // Card component for tier and sparks
  const Card = ({ title, value, text }) => (
    <div className='w-56 h-24 border border-neutral-200 border-solid rounded-xl flex flex-col items-start'>
        <div className={`w-56 h-20 ml-[-12px] mt-[-12px] px-4 pt-2.5 pb-3.5 badge rounded-xl border border-blue-300 border-opacity-40 justify-between items-center inline-flex gap-4`}>
            <div className='flex flex-col gap-2'>
                <div className="text-sm">{title}</div>
                <div className='inline-flex gap-2'>
                    <img className="h-8 w-8" src="/logo192.png" alt="pioneer"></img>
                    <div className="font-medium">{value}</div>
                </div>
            </div>
            <div>
                <GenericInfo className="h-6 w-6" />
            </div>
        </div>
        <div className='px-2 flex items-center justify-normal'>
            <p className='text-moon-14 font-["DM-Sans"]'>{text}</p>
        </div>
    </div>
  );

  return (
    <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-lg flex items-center justify-between">

      <Profile 
        name="Vidya Sagar" 
        handle="@vidya2242" 
        avatar="/Avatar.png" // Replace with actual image path
      />
      <div className='flex justify-end items-center gap-10'>
        <Card 
            title="Tier" 
            value="Pioneer" 
            text="350/500 Points to Level Up"
        />
        <Card 
            title="Sparks" 
            value="2458 Sparks" 
            text="Institute Rank: 293"
        />

      </div>
    </div>
  );
};

export default GamificationProfile;
