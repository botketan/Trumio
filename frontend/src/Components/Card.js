import { FilesCase ,ChatChat} from '@heathmont/moon-icons-tw';

const Card = ({cardData}) => {
    return ( 
        <div className="Card p-2 rounded-xl" >
                <div className='cardImage'>
                    <img src={cardData.imageUrl}  className="" alt="" />

                </div>
                <div className="Card-content text-xl " >
                    <span className='font '>
                        <h3>{cardData.name}  &nbsp;
                            <p className='lowercase  text-cyan-950 inline text-xl'>
                                {cardData.country}
                            </p>
                        </h3>
                    </span>
                    <span className='text text-cyan-950 font-medium'>
                        <FilesCase className='otherFrame text-moon-32'/> 
                        <h3>{cardData.job}</h3>
                        <h3 className='text-cyan-800'>&nbsp;{ "  at  "} &nbsp;</h3>
                        <h3>{cardData.jobLocation}</h3>
                    </span>
                    <span className='text-cyan-950 font-medium'>
                        <ChatChat className='text-moon-32'/>
                        <h3>{cardData.noOfSessions +" sessions"} &nbsp;</h3>
                        <h3 className='text-cyan-800'>{ "(" + cardData.reviews +" reviews)" }</h3>
                    </span>
                </div>
                <span className='m-2 bg-slate-200 rounded-xl justify-between'>
                    <div className='p-3'>
                        <h4 className='cc text-cyan-700 font-medium '>Experience</h4>
                        <h3 className='font-semibold text-cyan-950'>{cardData.experience} &nbsp; years</h3>

                    </div>
                    <div className='p-3'>
                        <h4 className='text-cyan-700 font-medium '>Avg. Attendance</h4>
                        <h3 className='font-semibold text-cyan-950'>{cardData.avgAttendance}%</h3>
                        
                    </div>
                </span>
        </div>
     );
}
 
export default Card;