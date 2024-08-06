import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
//import bg1 from '../../images/bg1.jpg';
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="Homebody">
      <div className="navbar1">
        <div className="items1">
          <ul>
          <Link to="/dsa"><li>DSA</li></Link>
            <Link to="/math"><li>Math</li></Link>
            <Link to="/operatingsystem"><li>Operating System</li></Link>
            <Link to="/python"><li>Python</li></Link>
          </ul>
        </div>
        <div className="firstfield">
          <p>What You Want To Learn ?</p>
          <input type="text" placeholder="what you want to learn today ?" />
          <p>Checkout our - Video Course | Certificates | Tutorials</p>
        </div>
      </div>

      <div className="startlr">
        <div className="stlr">
          <p className="p0">Start <span style={{color:"green"}}>Learning</span></p>
          <div className="stlrlft">
            <button className="btn0">See all</button>
            <button className="btn3">
              <MdOutlineKeyboardArrowLeft />
            </button>
            <button className="btn2">
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>

        <div className="smcrds">
          <div className="smcrds1">
            <div className="smcrd1 c0">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>
            <div className="smcrd1 c10">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>

            <div className="smcrd1 c11">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>
          </div>
          <div className="smcrds1">
            <div className="smcrd1 c1">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>
            <div className="smcrd1 c2">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>
            <div className="smcrd1 c3">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>
          </div>

          <div className="smcrds1">
            <div className="smcrd1 c4">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>
            <div className="smcrd1 c5">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>
            <div className="smcrd1 c6">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>
          </div>

          <div className="smcrds1">
            <div className="smcrd1 c7">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>
            <div className="smcrd1 c8">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>
            <div className="smcrd1 c9">
              <p className="p1">Start Learning</p>
              <p className="p2">Python</p>
            </div>
          </div>
        </div>

        <p className="p0" style={{ marginTop: "2rem" }}>
          Learn Future <span style={{color:"green"}}>Skills With us</span>
        </p>
        <div className="alltech">
          <div className="alltech1">
            <div className="alltech11" style={{ flexDirection: "column" }}>
              <p className="p9">Web Technologies</p>
              <div
                className="smcrds1"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <div className="smcrd1 c7" style={{ border: "1px solid red" }}>
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c7">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
              </div>
            </div>

            <div className="alltech11" style={{ flexDirection: "column" }}>
              <p className="p9">Web Technologies</p>
              <div
                className="smcrds1"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <div className="smcrd1 c7" style={{ border: "1px solid red" }}>
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c7">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
              </div>
            </div>
          </div>

          <div className="alltech1">
            <div className="alltech11" style={{ flexDirection: "column" }}>
              <p className="p9">Web Technologies</p>
              <div
                className="smcrds1"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <div className="smcrd1 c7" style={{ border: "1px solid red" }}>
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c7">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
              </div>
            </div>




            <div className="alltech11" style={{ flexDirection: "column" }}>
              <p className="p9">Web Technologies</p>
              <div
                className="smcrds1"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <div className="smcrd1 c7" style={{ border: "1px solid red" }}>
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c7">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
              </div>
            </div>

          </div>



          <div className="alltech1">
            <div className="alltech11" style={{ flexDirection: "column" }}>
              <p className="p9">Web Technologies</p>
              <div
                className="smcrds1"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <div className="smcrd1 c7" style={{ border: "1px solid red" }}>
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c7">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
              </div>
            </div>



            <div className="alltech11" style={{ flexDirection: "column" }}>
              <p className="p9">Web Technologies</p>
              <div
                className="smcrds1"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <div className="smcrd1 c7" style={{ border: "1px solid red" }}>
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c7">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c8">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
                <div className="smcrd1 c9">
                  <p className="p1">Start Learning</p>
                  <p className="p2">Python</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='twooptions'>
      <div className='firstfield'>
        <p>What You Want To Learn ?</p>
        <input type='text' placeholder='Enter what you want to learn today'/>
      </div> 
      /*<div className='firstfield'>
        <p>What You Are Preparing For ?</p>
        <input type='text' placeholder='Enter what you are preparing now'/>
      </div>
     </div> */}
      <h2>Start Learning</h2>
      <div className="cards">
        <div className="card1">
          <img src="" alt="courseimg" />
          <p className="p1">
            This Is The DSA Course Made For You To learn Data Structure And
            Algorithms
          </p>
          <p className="p2">Beginner to Advance</p>
          <div className="carddown">
            <p className="p3">Free Course</p>
            <p className="p4">Explore</p>
          </div>
        </div>
        <div className="card1">
          <img src="" alt="courseimg" />
          <p className="p1">
            This Is The DSA Course Made For You To learn Data Structure And
            Algorithms
          </p>
          <p className="p2">Beginner to Advance</p>
          <div className="carddown">
            <p className="p3">Free Course</p>
            <p className="p4">Explore</p>
          </div>
        </div>
        <div className="card1">
          <img src="" alt="courseimg" />
          <p className="p1">
            This Is The DSA Course Made For You To learn Data Structure And
            Algorithms
          </p>
          <p className="p2">Beginner to Advance</p>
          <div className="carddown">
            <p className="p3">Free Course</p>
            <p className="p4">Explore</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Homepage;
