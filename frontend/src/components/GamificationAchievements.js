import React from 'react';
// import 'tw-elements-react/dist/css/tw-elements-react.min.css'; // Importing TW Elements CSS
const AchievementItem = ({ title, description, date, points }) => (
  <div className="flex flex-col md:flex-row justify-between items-center p-4 border border-neutral-200 rounded-lg my-2">
    <div className="flex items-center mb-2 md:mb-0">
      <div className="rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center mr-4">
        <span className="text-primary">🏆</span> {/* Icon Placeholder */}
      </div>
      <div>
        <div className="font-medium text-lg text-gray-800">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </div>
    <div className='flex-col'>
    <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">{points} Sparks</div>
        <div className="text-sm text-gray-500 self-start md:self-center">{date}</div>
    </div>
  </div>
);

const GamificationAchievements = ({ achievements }) => (
  <div className=" bg-white rounded-lg shadow-lg overflow-hidden p-4 border">
    <div className="text-black text-base font-normal font-['DM Sans'] leading-normal">
      Activity
    </div>
    {achievements.map((achievement, index) => (
      <AchievementItem key={index} {...achievement} />
    ))}
  </div>
)

export default GamificationAchievements;
