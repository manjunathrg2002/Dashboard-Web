import React from "react";
import { FiSearch } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full lg:px-7 z-40">
      <div className="lg:ml-[260px] h-[80px] flex justify-between items-center bg-white px-5 transition-all">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-white"
        >
          <span>
            <IoMenu className="text-[#B2B2B2] text-[24px] mt-1" />
          </span>
        </div>

        {/* Search icon visible on mobile and small size */}
        <div className="flex items-center md:hidden mr-20">
          <FiSearch className="text-[#B2B2B2] text-[16px]" />
        </div>

        {/* Search input visible on medium and larger screens */}
        <div className="hidden md:block">
          <div className="relative flex items-center">
            <input
              className="px-3 py-2 outline-none rounded-md text-[#423d72] focus:border-indigo-300 bg-[#f1f1f1] w-[300px]"
              type="text"
              name="search"
              placeholder="Search"
            />
            <FiSearch className="absolute right-3 text-slate-500" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 relative">
          {/* Notification icon with red dot */}
          <div className="relative">
            <IoNotifications className="text-[#B2B2B2] text-[24px]" />
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-2 h-2 flex items-center justify-center" />
          </div>

          {/* Message icon */}
          <RiMessage2Fill className="text-[#B2B2B2] text-[24px]" />

          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <img
                className="w-[45px] h-[45px] rounded-full overflow-hidden"
                src="http://localhost:3000/images/MaskGroup.jpg"
                alt=""
              />

              <div className="justify-end items-center flex-col text-end hidden md:block">
                <h2 className="text-md font-bold">Admirra John</h2>
              </div>
              <FaChevronDown className="text-[#B2B2B2]" />
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="border-t border-gray-300" />
    </div>
  );
};

export default Header;
