import React from "react";
import {Link} from 'react-router-dom';
import bg2 from '../../images/bg2.jpg';
import { TbCategory2 } from "react-icons/tb";

const hideAllElements = () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`item${i}`).style.display = 'none';
  }
};


const hideElement = () => {
  hideAllElements();
  document.getElementById('item1').style.display = 'block';
};
const hideElement1 = () => {
  hideAllElements();
  document.getElementById('item2').style.display = 'block';
};
const hideElement2 = () => {
  hideAllElements();
  document.getElementById('item3').style.display = 'block';
};
const hideElement3 = () => {
  hideAllElements();
  document.getElementById('item4').style.display = 'block';
};
const hideElement4 = () => {
  hideAllElements();
  document.getElementById('item5').style.display = 'block';
};
const hideElement5 = () => {
  hideAllElements();
  document.getElementById('item6').style.display = 'block';
};
const hideElement6 = () => {
  hideAllElements();
  document.getElementById('item7').style.display = 'block';
};
const hideElement7 = () => {
  hideAllElements();
  document.getElementById('item8').style.display = 'block';
};
const hideElement8 = () => {
  hideAllElements();
  document.getElementById('item9').style.display = 'block';
};

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="items">
          <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/courses"><li>Courses</li></Link>
          <Link><li>Interview preparation</li></Link>
          <Link><li>Govt. Exam</li></Link>
           
          <Link><div className="cat">
          <li><TbCategory2 style={{display:"inline"}}/>Category</li>
          <div className="cate">
            <div className="cat-cont">
               
              <div className="cat-cont-left">
                <ul>
                  <li className="cat1" onClick={hideElement}>MERN Stack</li>
                  <li onClick={hideElement1}>Networking</li>
                  <li onClick={hideElement2}>AI</li>
                  <li onClick={hideElement3}>Machine Learning</li>
                  <li onClick={hideElement4}>Deep Learning</li>
                  <li onClick={hideElement5}>Database</li>
                  <li onClick={hideElement6}>IOT</li>
                  <li onClick={hideElement7}>Web Development</li>
                  <li onClick={hideElement8}>SEO</li>
                </ul>
              </div>
              <div className="cat-cont-right">
                <div className="show1" id="item1" >
                 <div className="ul1">
                 <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React</li>
                  
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                 
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>Tailwind</li>
                  <li>Nodejs</li> 
                  <li>Bootstrap</li>
                  </ul>
                  </div>
                 </div> 


                 <div className="show2 " id="item2">
                 <div className="ul1">
                 <ul>
                  <li>Network</li>
                  <li>Networking</li>
                  <li>React</li>
                  
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                 
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>Tailwind</li>
                  <li>Nodejs</li> 
                  <li>Bootstrap</li>
                  </ul>
                  </div>
                 </div> 




                 <div className="show3" id="item3">
                 <div className="ul1">
                 <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React</li>
                  
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                 
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>Tailwind</li>
                  <li>Nodejs</li> 
                  <li>Bootstrap</li>
                  </ul>
                  </div>
                 </div> 




                 <div className="show4" id="item4">
                 <div className="ul1">
                 <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React</li>
                  
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                 
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>Tailwind</li>
                  <li>Nodejs</li> 
                  <li>Bootstrap</li>
                  </ul>
                  </div>
                 </div> 




                 <div className="show5" id="item5">
                 <div className="ul1">
                 <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React</li>
                  
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                 
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>Tailwind</li>
                  <li>Nodejs</li> 
                  <li>Bootstrap</li>
                  </ul>
                  </div>
                 </div> 




                 <div className="show6" id="item6">
                 <div className="ul1">
                 <ul>
                  <li>MongoDB</li>
                  <li>SQL</li>
                  <li>NoSql</li>
                  
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                 
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>Tailwind</li>
                  <li>Nodejs</li> 
                  <li>Bootstrap</li>
                  </ul>
                  </div>
                 </div> 




                 <div className="show7" id="item7">
                 <div className="ul1">
                 <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React</li>
                  
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                 
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>Tailwind</li>
                  <li>Nodejs</li> 
                  <li>Bootstrap</li>
                  </ul>
                  </div>
                 </div> 



                 <div className="show8" id="item8">
                 <div className="ul1">
                 <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React</li>
                  
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                 
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>Tailwind</li>
                  <li>Nodejs</li> 
                  <li>Bootstrap</li>
                  </ul>
                  </div>
                 </div> 


                 <div className="show9" id="item9">
                 <div className="ul1">
                 <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React</li>
                  
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                 
                  </ul>
                  </div>
                  <div className="ul1">
                    <ul>
                  <li>Tailwind</li>
                  <li>Nodejs</li> 
                  <li>Bootstrap</li>
                  </ul>
                  </div>
                 </div> 


                 









              </div>
              </div>
              </div>
            
            </div></Link>
          
             
          </ul>
        </div>

        <div className="right">
          <div className="search">
            <input type="text" className="srch" placeholder="Search..." />
            <button>Search</button>
          </div>
          <div className="profile">
            <span><img src={bg2} alt="Profile" /></span>
            <div className="profile-cont">
              <p>Profile</p>
              <Link to='/userdashboard/123'><p>Dashboard</p></Link>
              <p>Logout</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
