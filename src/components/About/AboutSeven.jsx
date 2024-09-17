import React from "react";
import { Link } from "react-router-dom";
import { Odometer } from "../Odometer/Odometer";
import {
  INNER_ABOUT_IMG01,
  INNER_ABOUT_IMG02,
  INNER_ABOUT_SHAPE01,
} from "../../lib/assets";

import a1 from "../../assets/images/about7A.jpg"
import a2 from "../../assets/images/about7B.jpg"
import a3 from "../../assets/images/dots.png"

export const AboutSeven = () => {
  return (
    <section className="about-area-seven pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about-img-seven-wrap">
              <img
                src={a2}
                alt=""
                data-aos="fade-right"
                data-aos-delay="0"
              />
              <img
                src={a1}
                alt=""
                data-aos="fade-up"
                data-aos-delay="300"
              />
              {/* <img
                src={a3}
                alt=""
                className="shape"
                data-aos="zoom-in"
                data-aos-delay="500"
              /> */}
              <div
                className="experience-wrap"
                data-aos="fade-left"
                data-aos-delay="0"
              >
                <h2 className="title">Fueling</h2>
                <p>Growth and Creativity</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-seven">
              <div className="section-title mb-30">
                <span className="sub-title">Who We are</span>
                <h2 className="title">
                Endeavours Corporation Ltd: Your Ultimate Partner in Digital Marketing,
                 Web Solutions, and Business Growth
                </h2>
              </div>
              <p>
              With a broad range of services, Endeavours Corporation Ltd. is a full-service solution provider committed to accelerating business progress. We provide a smooth, one-stop services for companies of all kinds, with experience in digital marketing, website development, import consulting, and company development.
              </p>

              {/* <div className="success-wrap-two">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <i className="flaticon-investment"></i>
                    </div>
                    <div className="content">
                      <h2 className="count">
                        <Odometer end={152} />K
                      </h2>
                      <p>Total revenue</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-business-presentation"></i>
                    </div>
                    <div className="content">
                      <h2 className="count">
                        <Odometer end={95} />%
                      </h2>
                      <p>Increase in sales</p>
                    </div>
                  </li>
                </ul>
              </div> */}

              <p className="info-two">
              Since our founding, we have collaborated with prominent figures in the Bangladeshi and international industries, offering state-of-the-art solutions that propel success in a cutthroat market. Whether you want to expand into new markets, improve your online presence, or streamline operations, our team of professionals is dedicated to offering creative, effective solutions that support your objectives.
              </p>

              <Link to="/contact" className="btn btn-three">
                Contact With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
