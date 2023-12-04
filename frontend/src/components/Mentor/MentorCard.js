import { FilesCase ,ChatChat} from '@heathmont/moon-icons-tw';
import React from 'react';

const MentorCard = ({cardData}) => {
    return ( 
        <div className="w-[250px] p-2 rounded-xl border border-neutral-200 shadow-lg overflow-hidden" >
                <div className='flex justify-center'>
                    <img src={cardData.imageUrl}  className='rounded-lg h-56 w-full' alt="" />
                </div>
                <div className="Card-content flex flex-col gap-1 p-2" >
                <h3 className="text-moon-16 font-medium transition-colors"><span>{cardData.name}</span><span className='opacity-75 text-xs ml-1'>{cardData.country}</span></h3>
                        
                    <span className='text text-cyan-950 font-medium text-sm flex justify-start items-center gap-1'>
                        <FilesCase className='otherFrame text-moon-20'/> 
                        <h3 className='text-gray-600 text-xs'>{cardData.job} at {cardData.jobLocation}</h3>
                    </span>
                    <span className='text text-cyan-950 font-medium text-sm flex justify-start items-center gap-1'>
                        <ChatChat className='text-moon-20'/>
                        <h3 className='text-gray-500 text-xs'>{cardData.noOfSessions +" sessions"} { "(" + cardData.reviews +" reviews)" }</h3>
                    </span>
                </div>
                <div className='rounded-xl flex justify-between bg-gray-10 w-full mt-5'>
                    <div className='py-3 pl-4'>
                        <h4 className='cc text-#A9A9A9 font-medium opacity-50 text-moon-10'>Experience</h4>
                        <h3 className='font-bold text-xs opacity-60'>{cardData.experience} years</h3>

                    </div>
                    <div className='py-3 pr-4'>
                        <h4 className='text-#A9A9A9 font-medium opacity-50 text-moon-10'>Avg. Attendance</h4>
                        <h3 className='font-bold text-xs opacity-60'>{cardData.avgAttendance}%</h3>
                    </div>
                </div>
        </div>
     );
}

export default MentorCard;