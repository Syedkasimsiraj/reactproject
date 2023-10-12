import React from "react";
import ProfilePic from "../Assets/Siraj-image.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">User Review</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        "The food was exquisite, bursting with flavors that delighted my taste buds. 
        The presentation was impeccable, and the portion size was just right. 
        A culinary experience worth savoring!".
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "The food was exquisite, bursting with flavors that delighted my taste buds.
         The presentation was impeccable, and the portion size was just right. A culinary experience worth savoring!".
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Syed Kasim</h2>
      </div>
    </div>
  );
};

export default Testimonial;
