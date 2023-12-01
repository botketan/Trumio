import React from "react";
import {
  GenericBrowser,
  GenericEdit,
  DevicesMacbookAndIphone,
  OtherAgent,
  MediaMonitor,
  GenericBurgerRegular,
} from "@heathmont/moon-icons-tw";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
      <Link to="/development" className="flex flex-col items-center ml-4">
        <GenericBrowser className="text-moon-24"/>
        <span>Development</span>
      </Link>
      <Link to="/design" className="flex flex-col items-center">
        <GenericEdit className="text-moon-24"/>
        <span>Design</span>
      </Link>
      <Link to="/marketing" className="flex flex-col items-center">
        <DevicesMacbookAndIphone className="text-moon-24"/>
        <span>Marketing</span>
      </Link>
      <Link to="/business" className="flex flex-col items-center">
        <OtherAgent className="text-moon-24"/>
        <span>Business</span>
      </Link>
      <Link to="/data-science" className="flex flex-col items-center">
        <MediaMonitor className="text-moon-24"/>
        <span>Data Science</span>
      </Link>
      <Link to="/other" className="flex flex-col items-center mr-4">
        <GenericBurgerRegular className="text-moon-24"/>
        <span>Other</span>
      </Link>
    </nav>
  );
};

export default Navbar;
