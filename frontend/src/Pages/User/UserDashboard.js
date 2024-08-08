import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
//import { IoFlowerSharp } from "react-icons/io5";
//import { TbViewfinder } from "react-icons/tb";
import { MdIncompleteCircle } from "react-icons/md";
import { PiDotsNineFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaHeadSideVirus } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { RiCommunityLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";


const UserDashboard = () => {
  return (
    <div className="board">
      <div className="rightboard">
      <div className="dashitems">
        <h1>
           
          Knowledge ground
          <PiDotsNineFill />
        </h1>
       
          <ul>
            <li><MdOutlineDashboard />Dashboard</li>
            <li><CgProfile />Profile</li>
            <li><FaHeadSideVirus />Courses</li>
            <li><LuMessagesSquare />Messages</li>
            <li><RiCommunityLine />community</li>
            <li><IoMdSettings />Setting</li>
             
          </ul>
        </div>
        <div className="downpart">
        <div className="rightdownpart">
          <p className="p3"><MdIncompleteCircle /></p>
        </div>
        <div className="leftdownaprt">
          <p className="p1">Get Verfication Badge</p>
          <p className="p2">Complete Your Account Details</p>
        </div>
      </div>
      </div>
      
      <div className="mainboard">
        <div className="mainboardrt">
          <div className="topdiv">
          <input type="text" placeholder="Search" />
           
        </div>
        </div>
        <div className="mainboardlt">Weekly news  </div>
      </div>
    </div>
  );
};

export default UserDashboard;
