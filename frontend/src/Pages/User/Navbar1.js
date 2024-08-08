import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        right: "10px", // Adjust as necessary
        zIndex: 1
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
         
        left: "10px",  
        zIndex: 1
      }}
      onClick={onClick}
    />
  );
};

function Navbar1() {
  const [display] = useState(true);
  const [width] = useState(600);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container navbar2">
       
      <div
        style={{
          width: width + "auto",
          justifyContent:"space-around",
          display: display ? "block" : "none"
        }}
      >
        <Slider {...settings}>
          <div>
            <Link to="/python"><h3>Python</h3></Link>
          </div>
          <div>
           <Link to="/dsa"><h3>DSA</h3></Link>
          </div>
          <div>
           <Link to="/operatingsystem"><h3>Operating System</h3></Link>
          </div>
          <div>
            <Link to="/math"><h3>Math</h3></Link>
          </div>
          <div>
            <h3>MongoDb</h3>
          </div>
          <div>
            <h3>HTML</h3>
          </div>
          <div>
            <h3>CSS</h3>
          </div>
          <div>
            <h3>Bootstrap</h3>
          </div>
          <div>
            <h3>React</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Navbar1;

