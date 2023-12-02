import React from "react";

const LeaderboardCards = ({Name,sparks,rank, imageLink})=>{
    return (
    <div className="container mx-auto my-3 p-4 rounded-lg border-2 border-gray-200 border-solid ">
        <div className="flex items-center justify-between">
           
            <div className="container flex  ">
            <img className="h-10 w-10 rounded-full" src={imageLink} alt="img" />
                <div className="px-2 ">
                    <h3 className='font-semibold font-sans text-left'>{Name}</h3>
                    <p className="text-gray-400 text-left ">{sparks +" sparks "}</p>
                </div>
            </div>

            <div >
                <h4 className="text-blue-500 font-mono font-semibold" >{"#"+ rank}</h4>
            </div>
        </div>
    </div>
    )
}
export default LeaderboardCards;