import React from 'react';
// import 'tailwindcss/tailwind.css'; // make sure TailwindCSS is imported

const GamificationProfile = () => {
  // Define your gradient colors and other style-related constants
  const gradientBlue = 'bg-gradient-to-r from-blue-400 to-blue-500';
  const gradientPurple = 'bg-gradient-to-r from-purple-400 to-purple-500';
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
  const Card = ({ title, value, gradient }) => (
    <div className={`rounded-xl p-4 ${gradient} ${boxShadow} text-white`}>
      <div className="text-sm">{title}</div>
      <div className="font-bold">{value}</div>
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
        title="Pioneer" 
        value="350/500 Points to Level Up" 
        gradient={gradientPurple} 
      />
      <Card 
        title="2458 Sparks" 
        value="Institute Rank: 293" 
        gradient={gradientBlue} 
      />
    </div>
  );
};

export default GamificationProfile;
