import React from 'react';
// import 'tw-elements-react/dist/css/tw-elements-react.min.css'; // Importing TW Elements CSS

const AchievementItem = ({ title, description, date, points }) => (
  <div className="flex flex-col md:flex-row justify-between items-center p-4 border-2 rounded-lg my-2">
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
        <div className="font-bold text-cyan-500">{points} Points</div>
        <div className="text-sm text-gray-500 self-start md:self-center">{date}</div>
    </div>
  </div>
);

const Achievements = ({ achievements }) => (
  <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    <div className="py-4 px-8 text-black text-2xl font-bold border-b">
      Activity
    </div>
    {achievements.map((achievement, index) => (
      <AchievementItem key={index} {...achievement} />
    ))}
  </div>
);

export default Achievements;
