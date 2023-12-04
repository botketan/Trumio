import { FilesCase,GenericEdit } from '@heathmont/moon-icons-tw';
import { Progress } from '@heathmont/moon-core-tw';
 const ProfileCard=({props})=>{
    return <>
       <div className="container border border-neutral-200 mx-auto h-1/4  p-4 shadow-md rounded-lg" style={{width:"416px",height:'318px'}}>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img className="h-16 w-16 rounded-full" src={props.profilePic ? props.profilePic : "/logo192.png"} alt="image"></img>
                    <div>
                        <h2 className='font-medium'>{props.name}</h2>
                        <span className='font-light'>{props.userId}</span>
                    </div>
                </div>

                <div>
                    <button className="ml-2 px-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center flex">
                        <div className="text-center text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal flex items-center justify-around">
                        <GenericEdit className="h-6 w-6"/><span>Edit</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex items-center py-4">
                {/* <img className="h-8 w-8 " src="/logo192.png" alt="bag"></img> */}
                <FilesCase className="h-6 w-8"/>
                <span className='ml-1'>{props.work}</span>
            </div>

            <div className="flex items-center pb-4">
                <img className="h-8 w-8 " src="/school.png" alt="cap"></img>
                <span className='ml-1'>{props.education}</span>
            </div>
            <hr></hr>

            <div className="pt-4">
                <div className="flex justify-between">
                    <div>
                    <span className="font-light">Tier Info</span>
                    <div className="flex items-center ">
                        <img className="h-6 w-5" src={props.tierPic} alt="pioneer"></img>
                        <span className='font-medium ml-2'>{props.tier}</span>
                    </div>
                    </div>


                    <div >
                    <span className='font-light'>Sparks</span>
                    <div className="flex items-center ">
                        <img className="h-7 w-7" src="/logo192.png" alt="Sparks"></img>
                        <span className='ml-2 font-medium'>{props.sparks} Sparks</span>
                    </div>
                    </div>

                </div>
            </div>
            <Progress value={75} size="4xs" className="bg-cyan-100 my-2" />
                <div className='flex justify-between'>
                    <div className='flex items-center '>
                        <span className="mr-2 font-light">Advance towards</span>
                        <img className="h-6 w-5" src={props.nextTierPic} alt="advance towards"></img>
                        <span className='ml-2 font-medium'>{props.advanceTowards}</span>
                    </div>
                    <div className="flex items-center">
                        <span>{props.points}/500 Points</span>
                    </div>
                </div>
       </div> 
    </>
}

export default ProfileCard