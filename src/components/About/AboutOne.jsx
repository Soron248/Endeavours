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
                Empowering Businesses with Comprehensive Solutions: Digital Marketing, Web Design, Consultancy, and Import Services
                </h2>
              </div>
              <p>
              Offering expert digital marketing, web design, and consultancy services. Your trusted partner in business growth and global trade solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
