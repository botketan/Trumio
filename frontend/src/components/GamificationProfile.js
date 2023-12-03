import { GenericInfo } from '@heathmont/moon-icons-tw';
import React from 'react';
// import 'tailwindcss/tailwind.css'; // make sure TailwindCSS is imported

const GamificationProfile = () => {
  // Define your gradient colors and other style-related constants
  const gradientBlue = 'bg-gradient-to-r from-blue-300 to-blue-100';
  const gradientPurple = 'bg-gradient-to-r from-purple-300 to-purple-100';
  const boxShadow = 'shadow-lg'; // Tailwind class for shadow

  // Profile component
  const Profile = ({ name, handle, avatar }) => (
    <div className="flex flex-col items-center space-x-4">
      <img src={avatar} alt={`${name}'s avatar`} className="w-16 h-16 rounded-full" />
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{handle}</div>
      </div>
    </div>
  );

  // Card component for tier and sparks
  const Card = ({ title, value, text }) => (
    <div className='h-28 border border-neutral-200 border-solid rounded-xl flex flex-col items-start'>
        <div className={`w-56 h-20 px-4 pt-2.5 pb-3.5 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 rounded-xl border border-blue-300 border-opacity-40 justify-between items-center inline-flex gap-4`}>
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
    <div className="p-6 bg-white rounded-2xl shadow-lg flex items-center justify-between">
      <Profile 
        name="Vidya Sagar" 
        handle="@vidya2242" 
        avatar="https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" // Replace with actual image path
      />
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
  );
};

export default GamificationProfile;
