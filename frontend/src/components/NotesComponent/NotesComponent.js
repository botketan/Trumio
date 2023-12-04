import NotesCard from "./NotesCard";


export default function NotesComponent({noteslist}) {
    return (
    <div className="container mx-auto my-auto bg-white rounded-xl shadow-md border border-neutral-200 p-4">
            <div className="w-[55vw] h-8 pl-2 justify-between items-center inline-flex">
                <div className="text-zinc-600 text-base font-normal font-['DM Sans'] ">Notes</div>
                    <div className="justify-start items-center gap-2 flex">
                        <div className="pl-1 pr-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-1 flex">
                        <img src= {require("../../Assets/Plus.png")} alt ="" className="w-6 h-6 relative" ></img>
                        <button className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">Compose</button>
                        </div>
                        <div className="px-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center flex">
                        <button className="text-center text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">View All</button>
                        </div>
                    </div>
            </div>
            <div className="w-[55vw] h-[172px] bg-gradient-to-r from-blue-400 via-blue-200 to-blue-0 rounded-xl border border-blue-300 justify-center items-center flex gap-[15px] my-4" >
                    <div className="w-[464px] h-[156px] relative bg-white rounded-lg border border-neutral-200">
                        <div className="w-[436px] left-[16px] top-[16px] absolute text-black text-base font-medium font-['DM Sans'] leading-normal">{noteslist[0].title}</div>
                        <div className="w-[436px] h-[59px] left-[16px] top-[44px] absolute text-zinc-600 text-sm font-normal font-['DM Sans'] leading-tight">{noteslist[0].description.slice(0,150)+"..."}.</div>
                        <div className="left-[16px] top-[118px] absolute text-black text-opacity-60 text-xs font-normal font-['DM Sans'] leading-none">Updated 2 days ago</div>
                    </div>
                    <div className="w-[290px] h-[150px] bg-transparent rounded-lg ">
                    <div className="text-zinc-600 text-sm font-normal font-['DM Sans'] leading-tight">Continue Writing...</div>
                    <div className="container mx-auto my-2 flex flex-row flex-wrap gap-1 ">
                        <button className="w-[226px] h-8 pl-1 pr-3 py-1 bg-blue-600 rounded-lg justify-center items-center gap-1 inline-flex">
                            <img src={require("../../Assets/star.png")} alt="" className="w-6 h-6 relative" />
                            <div className="text-white text-sm font-medium font-['DM Sans'] leading-normal">Suggest Content Expansion</div>
                        </button>
                        <button className="w-[132px] h-8 pl-1 pr-3 py-1 bg-blue-600 rounded-lg justify-center items-center gap-1 inline-flex">
                            <img src={require("../../Assets/star.png")} alt="" className="w-6 h-6 relative" />
                            <div className="text-white text-sm font-medium font-['DM Sans'] leading-normal">Fact Checker</div>
                        </button>
                        <button className="w-[130px] h-8 pl-1 pr-3 py-1 bg-blue-600 rounded-lg justify-center items-center gap-1 inline-flex">
                            <img src={require("../../Assets/star.png")} alt="" className="w-6 h-6 relative" />
                            <div className="text-white text-sm font-medium font-['DM Sans'] leading-normal">Change Tone</div>
                        </button>
                        <button className="w-[125px] h-8 pl-1 pr-3 py-1 bg-blue-600 rounded-lg justify-center items-center gap-1 inline-flex">
                            <img src={require("../../Assets/star.png")} alt="" className="w-6 h-6 relative" />
                            <div className="text-white text-sm font-medium font-['DM Sans'] leading-normal">Chat with AI</div>
                        </button>
                    </div>
            </div>
        </div>
        <div className="container w-[55vw] my-5 mx-auto inline-flex gap-2">
            {noteslist.map((notesCardData) => {
                return(
                    NotesCard({notesCardData})
                )
            })}
        </div>
    </div>
    );
};