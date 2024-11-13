// Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { pathname } = useLocation();

  // Define reusable classes
  const navLink = " duration-200  py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-2 transition-all w-full mb-1";
  const activeNavLink = "bg-[#f9f7f7] font-bold text-[#FF5151] duration-500";

  // Function to determine if a link should be active
  const getNavLinkClass = (path) => `${navLink} ${pathname === path ? activeNavLink : ""}`;

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`flex duration-200 ${!showSidebar ? "invisible" : "visible"} w-screen bg-[#22292f80] top-0 left-0 z-10`}
      ></div>
      <div
        className={`w-[250px] fixed bg-[#f9f7f7] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? "left-0" : "-left-[260px] lg:left-0"}`}
      >
        <div className="h-[70px]  mt-[10px] mb-[20px] flex justify-center items-center">
          <Link to="/" className="w-[140px]">
            <img className="w-full h-full" src="http://localhost:3000/images/VasitumLogo.png" alt="Logo" />
          </Link>
        </div>
        <div className="px-[30px] mb-[20px] text-[#686868]  ">
          <div className="text-[12px]">MAIN MENU</div>

          {/* Admin Navigation Links */}
          <Link to="/admin/dashboard" className={getNavLinkClass("/admin/dashboard")}>
            <MdDashboard />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/dashboard/orders" className={getNavLinkClass("/admin/dashboard/orders")}>
            <FaUserTimes />
            <span>Recruitment</span>
          </Link>
          <Link to="/admin/dashboard/category" className={getNavLinkClass("/admin/dashboard/category")}>
            <FaCalendarDay />
            <span>Schedule</span>
          </Link>
          <Link to="/admin/dashboard/sellers" className={getNavLinkClass("/admin/dashboard/sellers")}>
            <FaUsers />
            <span>Employee</span>
          </Link>
          <Link to="/admin/dashboard/payment-request" className={getNavLinkClass("/admin/dashboard/payment-request")}>
            <MdOutlineSupport />
            <span>Department</span>
          </Link>
        </div>

        <div className="px-[30px] text-[#686868]">
          <div className="text-[12px]" >OTHER</div>   
          <Link to="/admin/dashboard/deactive-sellers" className={getNavLinkClass("/admin/dashboard/deactive-sellers")}>
            <BiSupport />
            <span>Support</span>
          </Link>
          <Link to="/admin/dashboard/sellers-request" className={getNavLinkClass("/admin/dashboard/sellers-request")}>
            <IoSettingsSharp />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
