import React from 'react';

const CommunityHeader = ({ communityName }) => {
  return (
    <div className="relative w-[55vw] h-48 bg-cover bg-center text-black" style={{ backgroundImage: 'url(/bgimg.jpg)' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent "></div>
      <h1 className="absolute mt-24 ml-10 p-5 text-4xl font-bold text-black opacity-70">{communityName}</h1>
    </div>
  );
};

export default CommunityHeader;