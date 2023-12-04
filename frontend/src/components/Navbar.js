import {React, useState} from "react";
import {
  GenericBrowser,
  GenericEdit,
  DevicesMacbookAndIphone,
  OtherAgent,
  MediaMonitor,
  GenericBurgerRegular,
} from "@heathmont/moon-icons-tw";

const Navbar = () => {

  const [selected, setSelected] = useState('');
  const handleClick = (data) => {
    setSelected(data);
  };

  return (
    <nav className="flex items-center justify-between bg-white text-black border border-down">
      <span onClick={()=>handleClick("development")} className={selected==='development'?"flex flex-col items-center ml-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center ml-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        <GenericBrowser className="text-moon-20"/>
        <span className="text-moon-14">Development</span>
      </span>
      <span to="/design" onClick={()=>handleClick("design")} className={selected==='design'?"flex flex-col items-center border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"} >
        <GenericEdit className="text-moon-20"/>
        <span className="text-moon-14">Design</span>
      </span>
      <span to="/marketing" onClick={()=>handleClick("marketing")} className={selected==='marketing'?"flex flex-col items-center border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"} >
        <DevicesMacbookAndIphone className="text-moon-20"/>
        <span className="text-moon-14">Marketing</span>
      </span>
      <span to="/business" onClick={()=>handleClick("business")} className={selected==='business'?"flex flex-col items-center border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"} >
        <OtherAgent className="text-moon-20"/>
        <span className="text-moon-14">Business</span>
      </span>
      <span to="/data-science" onClick={()=>handleClick("data-science")} className={selected==='data-science'?"flex flex-col items-center border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center hover:scale-105 duration-100 hover:cursor-pointer"} >
        <MediaMonitor className="text-moon-20"/>
        <span className="text-moon-14">Data Science</span>
      </span>
      <span to="/other" onClick={()=>handleClick("other")} className={selected==='other'?"flex flex-col items-center mr-4 border-b text-blue-600 border-solid border-blue-600 transition-transform duration-100 ease-in-out transform hover:scale-105 hover:cursor-pointer p-3" : "p-3 flex flex-col items-center mr-4 hover:scale-105 duration-100 hover:cursor-pointer"} >
        <GenericBurgerRegular className="text-moon-20"/>
        <span className="text-moon-14">Other</span>
      </span>
    </nav>
  );
};

export default Navbar;
