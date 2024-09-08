import React from "react";
import { CONTACT_IMG } from "../../lib/assets";

export const ContactAreaInner = () => {
  return (
    <section className="inner-contact-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="inner-contact-img">
              <img src={CONTACT_IMG} alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="inner-contact-info">
              <h2 className="title">Our Office Address</h2>
              <div className="contact-info-item">
                <h5 className="title-two">USA Office</h5>
                <ul className="list-wrap">
                  <li>
                    100 Wilshire Blvd, Suite 700 Santa <br />
                    Monica, CA 90401, USA
                  </li>
                  <li>+1 (310) 620-8565</li>
                  <li>info@gmail.com</li>
                </ul>
              </div>
              <div className="contact-info-item">
                <h5 className="title-two">Australia Office</h5>
                <ul className="list-wrap">
                  <li>
                    100 Wilshire Blvd, Suite 700 Santa <br />
                    Monica, CA 90401, USA
                  </li>
                  <li>+1 (310) 620-8565</li>
                  <li>info@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
