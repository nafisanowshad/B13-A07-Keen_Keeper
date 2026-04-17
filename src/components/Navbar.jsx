import React from "react";

import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { PiChartLine } from "react-icons/pi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="navbar bg-white">
          <div className="navbar-start">
            <a className="text-[20px] md:text-[24px] lg:text-[27px] font-bold text-[#1F2937]">
              Keen<span className="text-[#244D3F]">Keeper</span>
            </a>
          </div>
          {/* <div className="navbar-end flex text-[#64748B] font-semibold">
        <ul className="menu menu-horizontal flex-nowrap">
          <li>
            <a className="flex gap-0 items-center text-[15px] md:text-[17px] lg:text-[20px]"><RiHome2Line /> Home</a>
          </li>
          <li>
            <a className="flex gap-0 items-center text-[15px] md:text-[17px] lg:text-[20px]"><RiTimeLine /> Timeline</a>
          </li>
          <li>
            <a className="flex gap-0 items-center text-[15px] md:text-[17px] lg:text-[20px]"><PiChartLine /> Stats</a>
          </li>
        </ul>
      </div> */}

          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isActive
                  ? "bg-[#244D3F] text-white"
                  : "text-gray-500 hover:text-gray-800"
              }`
            }
          >
            <RiHome2Line 
            className="text-xl" />
            <span className="hidden sm:inline">Home</span>
          </NavLink>

          <NavLink
            to={"/timeline"}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isActive
                  ? "bg-[#244D3F] text-white"
                  : "text-gray-500 hover:text-gray-800"
              }`
            }
          >
            <RiTimeLine
             className="text-xl" />
            <span className="hidden sm:inline">Timeline</span>
          </NavLink>

          <NavLink
            to={"/status"}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isActive
                  ? "bg-[#244D3F] text-white"
                  : "text-gray-500 hover:text-gray-800"
              }`
            }
          >
            <PiChartLine 
            className="text-xl" />
            <span className="hidden sm:inline">Status</span>
          </NavLink>
        </div>
      </div>
      <hr className="border-gray-200 shadow-sm" />
    </div>
  );
};

export default Navbar;
