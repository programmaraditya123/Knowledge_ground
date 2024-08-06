import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="items">
          <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/courses">Courses</Link>
            {/* <Link to="/"><li>Dashboard</li></Link> */}
            {/* <Link to="/"><li>Home</li></Link>
            <Link to="/dsa"><li>DSA</li></Link>
            <Link to="/math"><li>MAth</li></Link>
            <Link to="/operatingsystem"><li>Operating System</li></Link>
            <Link to="/python"><li>Python</li></Link>
            <li>Javascript</li>
            <li>Nodejs</li>
            <li>MongoDB</li>
            <li>Flask</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SSC</li> */}
          </ul>
        </div>

        <div className="right">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          <div className="profile">
            <img src="" alt="Profile" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
