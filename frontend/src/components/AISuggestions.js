import { Input } from '@heathmont/moon-core-tw'
import React from 'react'

const AISuggestions = ({setAi}) => {
  return (
    <div className='flex flex-col h-24 justify-center'>
        <div className="container mx-auto my-2 flex flex-row flex-wrap gap-1 h-12 items-center">
            <button className="w-[226px] h-8 pl-1 pr-3 py-1 bg-blue-600 rounded-lg justify-center items-center gap-1 inline-flex" onClick={()=>{
                setAi('Suggest Content expansion');
            }}>
                <img src={require("../Assets/star.png")} alt="" className="w-6 h-6 relative" />
                <div className="text-white text-sm font-medium font-['DM Sans'] leading-normal">Suggest Content Expansion</div>
            </button>
            <button className="w-[132px] h-8 pl-1 pr-3 py-1 bg-blue-600 rounded-lg justify-center items-center gap-1 inline-flex" onClick={()=>{
                setAi('Fact Checker');
            }}>
                <img src={require("../Assets/star.png")} alt="" className="w-6 h-6 relative" />
                <div className="text-white text-sm font-medium font-['DM Sans'] leading-normal">Fact Checker</div>
            </button>
            <button className="w-[130px] h-8 pl-1 pr-3 py-1 bg-blue-600 rounded-lg justify-center items-center gap-1 inline-flex" onClick={()=>{
                setAi('Change tone');
            }}>
                <img src={require("../Assets/star.png")} alt="" className="w-6 h-6 relative" />
                <div className="text-white text-sm font-medium font-['DM Sans'] leading-normal">Change Tone</div>
            </button>
            <button className="w-[125px] h-8 pl-1 pr-3 py-1 bg-blue-600 rounded-lg justify-center items-center gap-1 inline-flex">
                <img src={require("../Assets/star.png")} alt="" className="w-6 h-6 relative" />
                <div className="text-white text-sm font-medium font-['DM Sans'] leading-normal">Chat with AI</div>
            </button>
        </div>
        <div className='h-12'>
            <Input type="text" placeholder="Or ask for anything else by typing here..." id="size-sm" />
        </div>
    </div>
  )
}

export default AISuggestions
