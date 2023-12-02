import LeaderboardCards from "./LeaderboardCards";
import "./Leaderboard.css"
const Leaderboard = ({ cardInfo }) => {
    return (
       <>
            <div className="container text-center mx-auto my-4 h-1/2 w-1/3 px-2 py-2 shadow-xl rounded-md border-2 border-gray-200">
            <div className="flex justify-between items-center ">
                <h3 className="px-5">Leaderboard</h3>
                <button className="button text-blue-600 font-semibold flex items-center bg-blue-200 px-6 py-3 rounded-md cursor-pointer ">Expand</button>
            </div>


            <div>
            {cardInfo.map((cardInfo, index) => (
                <LeaderboardCards
                rank={cardInfo.rank}
                sparks={cardInfo.sparks}
                Name={cardInfo.Name}
                />
            ))}
            </div>
          </div>
      </>
    );
}
export default Leaderboard;