import React, { useState } from 'react';
import './Achievements.css';
import Achievements from './Achievements.js';

const AchievementExpand = ({ items }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const visibleItems = isExpanded ? items : items.slice(0, 4);

    return (
        <div className="relative bg-white rounded-xl shadow-lg border border-neutral-200" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', padding: '20px 20px 20px 20px' }}>
            <div className="w-[816px] h-8 pl-2 justify-between items-center inline-flex" style={{paddingBottom : "10px"}}>
                <div className="text-black text-base font-normal font-['DM Sans'] leading-normal">Your Badges</div>
                <div className="px-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center flex">
                <button onClick={() => setIsExpanded(!isExpanded)}><div className="text-center text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">{isExpanded ? 'Close' : 'View All'}</div></button>
                </div>
            </div>
            
            {visibleItems.map((item, index) => (
                <div style={{ flexBasis: '45%', marginBottom: '20px' }}>
                    <Achievements
                        key={index}
                        heading={item.heading}
                        description={item.description}
                        status={item.status}
                        image={item.image}
                        sparks={item.sparks}
                        isFlex={true}
                    />
                </div>
            ))}
            <div className={isExpanded ? "w-[100%] h-[0px] left-0 top-[96%] absolute border border-neutral-200" : "w-[100%] h-[0px] left-0 top-[88%] absolute border border-neutral-200"}></div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={() => setIsExpanded(!isExpanded)}>
                <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">{isExpanded ? 'Collapse' : 'Expand'}</div>
                </button>
            </div>
        </div>
    );
}

export default AchievementExpand;
