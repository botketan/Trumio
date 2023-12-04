import { FilesCase ,ChatChat} from '@heathmont/moon-icons-tw';
import React from 'react';

const MentorCard = ({cardData}) => {
    return ( 
        <div className="Card p-2 rounded-xl" >
                <div className='cardImage'>
                    <img src={cardData.imageUrl}  className='rounded-lg' alt="" />

                </div>
                <div className="Card-content my-2" >
                <h3 className="text-moon-16 font-medium transition-colors">{cardData.name} &nbsp; {cardData.country}</h3>
                        
                    <span className='text text-cyan-950 font-medium'>
                        <FilesCase className='otherFrame text-moon-20'/> 
                        <h3>{cardData.job} at {cardData.jobLocation}</h3>
                    </span>
                    <span className='text-cyan-950 font-medium'>
                        <ChatChat className='text-moon-20'/>
                        <h3>{cardData.noOfSessions +" sessions"} { "(" + cardData.reviews +" reviews)" }</h3>
                    </span>
                </div>
                <div className='m-2 rounded-xl flex justify-between'>
                    <div className='py-3'>
                        <h4 className='cc text-cyan-700 font-medium '>Experience</h4>
                        <h3 className='font-medium text-cyan-950'>{cardData.experience} years</h3>

                    </div>
                    <div className='py-3'>
                        <h4 className='text-cyan-700 font-medium '>Avg. Attendance</h4>
                        <h3 className='font-medium text-cyan-950'>{cardData.avgAttendance}%</h3>

                    </div>
                </div>
        </div>
     );
}

export default MentorCard;