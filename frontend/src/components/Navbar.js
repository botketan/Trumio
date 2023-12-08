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
    <nav className="flex items-center justify-between m-6 mx-20 font-semibold text-[#595D62]  bg-white border-2 border-gray-300 border-solid border-1">
      

      <nav className="flex items-center justify-center justify-between w-full m-3 flex-column " >

      <div className="flex justify-between w-full mx-3 font-dm-sans flex-column bg-[#ebebec]  rounded-xl">
      <span onClick={()=>handleClick("all")} className={selected==='all'?"flex flex-col items-center ml-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericBrowser className="text-moon-20"/> */}
        <span className="text-moon-14">All</span>
      </span>

      <span onClick={()=>handleClick("avaliable-asap")} className={selected==='avaliable-asap'?"flex flex-col items-center ml-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericBrowser className="text-moon-20"/> */}
        <span className="text-moon-14">Avaliable ASAP</span>
      </span>

      <span onClick={()=>handleClick("recommendation")} className={selected==='recommendation'?"flex flex-col items-center ml-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericBrowser className="text-moon-20"/> */}
        <span className="text-moon-14">Recommendation</span>
      </span>

      <span onClick={()=>handleClick("content-writing")} className={selected==='content-writing'?"flex flex-col items-center ml-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericBrowser className="text-moon-20"/> */}
        <span className="text-moon-14">Content Writing</span>
      </span>
      <span onClick={()=>handleClick("data-science")} className={selected==='data-science'?"flex flex-col items-center ml-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericBrowser className="text-moon-20"/> */}
        <span className="text-moon-14">Data Science</span>
      </span>
      <span to="/design" onClick={()=>handleClick("design")} className={selected==='design'?"flex flex-col items-center border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <GenericEdit className="text-moon-20"/> */}
        <span className="text-moon-14">Design</span>
      </span>
      <span to="/marketing" onClick={()=>handleClick("engneering")} className={selected==='engneering'?"flex flex-col items-center border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <DevicesMacbookAndIphone className="text-moon-20"/> */}
        <span className="text-moon-14">Engneering</span>
      </span>
      <span to="/business" onClick={()=>handleClick("marketing")} className={selected==='marketing'?"flex flex-col items-center border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <OtherAgent className="text-moon-20"/> */}
        <span className="text-moon-14">Marketing</span>
      </span>
      <span to="/data-science" onClick={()=>handleClick("no-low-code")} className={selected==='no-low-code'?"flex flex-col items-center border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <MediaMonitor className="text-moon-20"/> */}
        <span className="text-moon-14">No/Low Code</span>
      </span>
      <span to="/data-science" onClick={()=>handleClick("product")} className={selected==='product'?"flex flex-col items-center border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"} >
        {/* <MediaMonitor className="text-moon-20"/> */}
        <span className="text-moon-14">Product</span>
      </span>
      </div>

      <span to="/other" onClick={()=>handleClick("other")} className={selected==='other'?"flex flex-col items-center  border-b text-blue-600 border-solid  transition-transform duration-100 ease-in-out transform  hover:cursor-pointer   w-9 h-9 bg-[#0578FB1F] text-[#0578FB] rounded-md items-center justify-center" : " flex flex-col items-center duration-100 w-9 h-9 bg-[#0578FB1F] text-[#0578FB] rounded-md items-center justify-center  "} >
        {/* <GenericBurgerRegular className="text-moon-20"/> */}
        <ControlsChevronRight className="font-bold text-blue-600 text-moon-24"/>
        {/* <span className="text-moon-14">Other</span> */}
      </span>
      
      </nav>
      
    </nav>
  );
};

export default Navbar;
