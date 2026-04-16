import React from 'react';

import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { PiChartLine } from "react-icons/pi";

const Navbar = () => {
    return (
        <div>
         <div className="w-11/12 mx-auto">
    <div className="navbar bg-white">
      <div className="navbar-start">
        <a className="text-[20px] md:text-[24px] lg:text-[27px] font-bold text-[#1F2937]">Keen<span className="text-[#244D3F]">Keeper</span></a>
      </div>
      <div className="navbar-end flex text-[#64748B] font-semibold">
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
      </div>
    </div>
     </div>
    <hr className="border-gray-200 shadow-sm" />
     </div>
    );
};

export default Navbar;