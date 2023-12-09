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
      <img src={avatar} alt={`${name}'s avatar`} className="w-24 ml-5 h-24 rounded-full border-4 border-white" />
      <div className='flex flex-col items-center justify-center'>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{handle}</div>
      </div>
    </div>
  );
// bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50
  // Card component for tier and sparks
  const Card1 = ({ title, value, text,img }) => (
    <div className='w-56 h-24 border border-neutral-200 border-solid rounded-xl flex flex-col items-start'>
        <div className={`w-56 h-20 ml-[-12px] mt-[-12px] px-4 pt-2.5 pb-3.5 badge rounded-xl border border-blue-300 border-opacity-40 justify-between items-center inline-flex gap-4`}>
            <div className='flex flex-col gap-2'>
                <div className="text-sm">{title}</div>
                <div className='inline-flex gap-2'>
                    <img className="w-[21.42px] h-6" src={img} alt="pioneer"></img>
                    <div className="font-medium">{value}</div>
                </div>
            </div>
            <div>
                <GenericInfo className="h-6 w-6" />
            </div>
        </div>
        <div className='px-2 flex items-center justify-normal'>
            <p className='text-moon-14 '>{text}</p>
        </div>
    </div>
  );
  const Card2 = ({ title, value, text,img }) => (
    <div className='w-56 h-24 border border-neutral-200 border-solid rounded-xl flex flex-col items-start'>
        <div className={`w-56 h-20 ml-[-12px] mt-[-12px] px-4 pt-2.5 pb-3.5 badge rounded-xl border border-blue-300 border-opacity-40 justify-between items-center inline-flex gap-4`}>
            <div className='flex flex-col gap-2'>
                <div className="text-sm">{title}</div>
                <div className='inline-flex gap-2'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 bg-blue-600 rounded-xl justify-center items-center gap-1 inline-flex">
                <g id="Other">
                <path id="lightning" d="M13.6869 5.77037C13.7527 5.67958 13.8303 5.59732 13.8954 5.50603C14.309 4.92611 13.9134 4.0625 13.1633 4.0625H9.51153C9.25445 4.0625 9.00972 4.17473 8.83939 4.37073L6.1645 8.4813C5.65214 9.07087 6.06334 10 6.83664 10H7.00456C7.71109 10 8.12232 10.7806 7.78229 11.3704C7.73539 11.4518 7.68458 11.5315 7.64892 11.6184L6.36799 14.7395C6.29667 14.9132 6.17755 15.0715 6.14345 15.2563C6.08217 15.5883 6.32495 15.9375 6.69982 15.9375C6.80693 15.9375 6.91182 15.9065 7.00227 15.8481L12.513 11.422C13.1534 11.0086 12.8657 10 12.1074 10C11.4542 10 11.1196 9.22409 11.5248 8.7358C11.5606 8.69266 11.5986 8.65091 11.6315 8.60552L13.6869 5.77037Z" fill="white"/>
                </g>
                </svg>
                    <div className="font-medium">{value}</div>
                </div>
            </div>
            <div>
                <GenericInfo className="h-6 w-6" />
            </div>
        </div>
        <div className='px-2 flex items-center justify-normal'>
            <p className='text-moon-14 '>{text}</p>
        </div>
    </div>
  );

  return (
    <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-lg flex items-center justify-between">

      <Profile 
        name="Ravi Kishor"
        handle="@rkis"
        avatar="https://img.freepik.com/premium-vector/avatar-man-with-beard-office-worker-wearing-glasses-it-developer-engineer-programmer_277909-144.jpg" // Replace with actual image path
      />
      <div className='flex justify-end items-center gap-10'>
        <Card1
            title="Tier" 
            value="Visionary" 
            text="0/750 Points to Level Up"
            img="/visionary.png"
        />
        <Card2
            title="Sparks" 
            value="2608 Sparks" 
            text="Institute Rank: 293"
        />

      </div>
    </div>
  );
};

export default GamificationProfile;
