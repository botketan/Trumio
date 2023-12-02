import { FilesCase,GenericEdit } from '@heathmont/moon-icons-tw';
 const ProfileCard=({props})=>{
    return <>
       <div className="container mx-auto h-1/4 w-1/4 p-4 shadow-xl rounded-lg">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="h-20 w-20 rounded-full" src={props.profilePic ? props.profilePic : "/logo192.png"} alt="image"></img>
                    <div>
                        <h2 className='font-bold'>{props.name}</h2>
                        <span>{props.userId}</span>
                    </div>
                </div>

                <div>
                <butoon className="flex items-center bg-cyan-100 px-2 rounded-md cursor-pointer">
                    {/* <img className="h-8 w-8" src="/logo192.png" alt="edit"></img> */}
                    <GenericEdit className="h-6 w-8"/>
                    <span className='pr-2'>Edit</span>
                </butoon>
                </div>
            </div>

            <div className="flex items-center py-4">
                {/* <img className="h-8 w-8 " src="/logo192.png" alt="bag"></img> */}
                <FilesCase className="h-8 w-8"/>
                <span>{props.work}</span>
            </div>

            <div className="flex items-center pb-4">
                <img className="h-8 w-8 " src="/logo192.png" alt="cap"></img>
                <span>{props.education}</span>
            </div>
            <hr></hr>

            <div className="pt-4">
                <div className="flex justify-between">
                    <div>
                    <span>Tier Info</span>
                    <div className="flex items-center ">
                        <img className="h-12 w-12" src="/logo192.png" alt="pioneer"></img>
                        <span className='font-bold ml-2'>{props.tier}</span>
                    </div>
                    </div>


                    <div>
                    <span>Sparks</span>
                    <div className="flex items-center ">
                        <img className="h-12 w-12" src="/logo192.png" alt="Sparks"></img>
                        <span className='font-bold ml-2'>{props.sparks} Sparks</span>
                    </div>
                    </div>

                </div>
            </div>
       </div> 
    </>
}

export default ProfileCard