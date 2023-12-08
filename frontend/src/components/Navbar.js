import {React, useState} from "react";
import {
  GenericBrowser,
  GenericEdit,
  DevicesMacbookAndIphone,
  OtherAgent,
  MediaMonitor,
  GenericBurgerRegular,

} from "@heathmont/moon-icons-tw";
import { ControlsChevronRight } from '@heathmont/moon-icons-tw';

const Navbar = () => {

  const [selected, setSelected] = useState('');
  const handleClick = (data) => {
    setSelected(data);
  };

  return (
    <nav className="flex items-center justify-between mr-6 ml-6 mb-1 font-semibold text-[#595D62]  bg-white ">
      

      <nav className="flex items-center justify-between w-full m-3 flex-column " >

      <div className="flex justify-between w-full mx-3 font-dm-sans flex-column bg-gray-100  rounded-xl">
      <span onClick={()=>handleClick("all")} className={selected==='all'?"flex flex-col items-center ml-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericBrowser className="text-moon-20"/> */}
        <span className="text-moon-14">All</span>
      </span>

      <span onClick={()=>handleClick("development")} className={selected==='development'?"flex flex-col items-center ml-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericBrowser className="text-moon-20"/> */}
        <span className="text-moon-14">Development</span>
      </span>

      <span onClick={()=>handleClick("design")} className={selected==='recommendation'?"flex flex-col items-center ml-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericBrowser className="text-moon-20"/> */}
        <span className="text-moon-14">Recommendation</span>
      </span>

      <span onClick={()=>handleClick("marketing")} className={selected==='content-writing'?"flex flex-col items-center ml-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericBrowser className="text-moon-20"/> */}
        <span className="text-moon-14">Content Writing</span>
      </span>
      <span onClick={()=>handleClick("business")} className={selected==='data-science'?"flex flex-col items-center ml-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericBrowser className="text-moon-20"/> */}
        <span className="text-moon-14">Data Science</span>
      </span>
      <span to="/design" onClick={()=>handleClick("data-science")} className={selected==='design'?"flex flex-col items-center border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericEdit className="text-moon-20"/> */}
        <span className="text-moon-14">Design</span>
      </span>
      </div>

      <span to="/other" onClick={()=>handleClick("other")} className={selected==='other'?"flex flex-col items-center  border-b border-solid  transition-transform duration-100 ease-in-out transform  hover : cursor-pointer   w-6 h-6 bg-[#0578FB1F] text-[#0578FB] rounded-md justify-center " : " flex flex-col duration-100 w-6 h-6 bg-[#0578FB1F] text-[#0578FB] rounded-md items-center justify-center  "} >
        <ControlsChevronRight className="font-bold text-blue-600 text-moon-24"/>
      </span>
      
      </nav>
      
    </nav>
  );
};

export default Navbar;
