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
                        <div className="text-center text-blue-600 text-sm font-medium font-dmsans leading-normal flex items-center justify-around">
                        <GenericEdit className="h-6 w-6"/><span>Edit</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex items-center py-4">
                {/* <img className="h-8 w-8 " src="/logo192.png" alt="bag"></img> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<mask id="mask0_30862_6065" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
<rect width="16" height="16" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_30862_6065)">
<path d="M2.79998 13.6C2.46998 13.6 2.18748 13.4825 1.95248 13.2475C1.71748 13.0125 1.59998 12.73 1.59998 12.4V5.20001C1.59998 4.87001 1.71748 4.58751 1.95248 4.35251C2.18748 4.11751 2.46998 4.00001 2.79998 4.00001H5.59998V2.79647C5.59998 2.4655 5.71762 2.18334 5.95291 1.95001C6.1882 1.71667 6.47104 1.60001 6.80144 1.60001H9.20438C9.53478 1.60001 9.81664 1.71751 10.05 1.95251C10.2833 2.18751 10.4 2.47001 10.4 2.80001V4.00001H13.2C13.53 4.00001 13.8125 4.11751 14.0475 4.35251C14.2825 4.58751 14.4 4.87001 14.4 5.20001V12.4C14.4 12.73 14.2825 13.0125 14.0475 13.2475C13.8125 13.4825 13.53 13.6 13.2 13.6H2.79998ZM2.79998 12.4H13.2V5.20001H2.79998V12.4ZM6.79998 4.00001H9.19998V2.80001H6.79998V4.00001Z" fill="#595D62"/>
</g>
</svg>
                <span className='ml-1'>{props.work}</span>
            </div>

            <div className="flex items-center pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
<mask id="mask0_30862_6070" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
<rect width="18" height="18" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_30862_6070)">
<path d="M7.99999 13.6L3.59999 11.4V7.39999L0.799988 5.99999L7.99999 2.39999L15.2 5.99999V11.2H14V6.59999L12.4 7.39999V11.4L7.99999 13.6ZM7.99999 8.24999L12.5167 5.99999L7.99999 3.74999L3.48332 5.99999L7.99999 8.24999ZM7.99999 12.25L11.2 10.65V7.99999L7.99999 9.59999L4.79999 7.99999V10.65L7.99999 12.25Z" fill="#595D62"/>
</g>
</svg>
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
            <Progress value={70} size="4xs" className="bg-cyan-100 my-2 [&_.progress]:bg-blue-600" />
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