import LeaderboardCards from "./LeaderboardCards";
import "./Leaderboard.css"
import { Button } from "@heathmont/moon-core-tw";
import { useState } from 'react';

    const Leaderboard = ({ cardInfo }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
       <>
            <div className={"container text-center mx-auto my-4 px-2 py-2 shadow-xl rounded-md border-2 border-gray-200 overflow-y-scroll " +(isExpanded?" h-auto":" h-[40vw]")}>
            <div className="flex justify-between items-center ">
                <h3 className="px-5">Leaderboard</h3>
                <Button onClick={()=> {setIsExpanded(!isExpanded);console.log(isExpanded)}} className="button text-blue-600 font-semibold bg-blue-100 px-3 py-2 rounded-xl cursor-pointer ">{isExpanded?"Collapse":"Expand"}</Button>
            </div>


            <div>
            {cardInfo.map((cardInfo, index) => (
                <LeaderboardCards
                rank={cardInfo.rank}
                sparks={cardInfo.sparks}
                Name={cardInfo.Name}
                imageLink={cardInfo.imageLink}
                />
            ))}
            </div>
          </div>
      </>
    );
}
export default Leaderboard;