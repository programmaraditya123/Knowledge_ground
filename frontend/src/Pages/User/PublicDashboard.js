import React from "react";
import { IoFlowerSharp } from "react-icons/io5";
import { TbViewfinder } from "react-icons/tb";
import { MdIncompleteCircle } from "react-icons/md";

const PublicDashboard = () => {
  return (
    <div className="board">
      <div className="rightboard">
      <div className="dashitems">
        <h1>
          <IoFlowerSharp />
          Knowledge ground
        </h1>
       
          <ul>
            <li><TbViewfinder />Overview</li>
            <li>Course</li>
            <li>My Course</li>
            <li>Learning progress</li>
            <li>community</li>
            <p>WORKSPACE</p>
            <li>Overview</li>
            <li>Learning Progress</li>
            <li>My Course</li>
            <li>Community</li>
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
        <div className="topdiv">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default PublicDashboard;
