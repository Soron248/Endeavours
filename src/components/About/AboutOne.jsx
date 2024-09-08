import React from "react";
import ABOUT_IMG01 from "../../assets/images/bgSajal.webp"
import ABOUT_IMG_SHAPE01 from "../../assets/images/sajal.jpg"
import ABOUT_IMG_SHAPE02 from "../../assets/images/dots.png"

export const AboutOne = () => {
  return (
    <section className="about-area about-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-img-wrap">
              <img src={ABOUT_IMG_SHAPE01} alt="" className="main-img" />
              <img src={ABOUT_IMG01} alt="" />
              <img src={ABOUT_IMG_SHAPE02} alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-title mb-25 tg-heading-subheading animation-style2">
                <span className="sub-title tg-element-title">
                  What We are Doing
                </span>
                <h2 className="title tg-element-title">
                  Changing The Way To Do Best Business Solutions
                </h2>
              </div>
              <p>
              we are dedicated to driving business success through
innovative solutions and comprehensive support. With expertise across various
sectors, we help businesses navigate the complexities of the modern market, ensuring
they have the tools and strategies needed to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
