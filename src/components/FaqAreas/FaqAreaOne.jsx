import React from "react";
import {
  FAQ_IMG01,
  FAQ_IMG02,
  FAQ_SHAPE02,
  FAQ_SHAPE03,
} from "../../lib/assets";

import faq1 from "../../assets/images/faq1.jpg"
import faq2 from "../../assets/images/faq2.jpg"
import faql from "../../assets/images/faql.jpg"
import faqr from "../../assets/images/faqr.jpg"

export const FaqAreaOne = () => {
  return (
    <section className="faq-area">
      <div className="faq-bg-shape"></div>

      <div className="faq-shape-wrap">
        {/* <img src={faqr} alt="" /> */}
        {/* <img src={FAQ_SHAPE03} alt="" /> */}
      </div>

      <div className="container">
        <div className="row align-items-end justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="faq-img-wrap">
              <img src={faq1} alt="" />
              <img src={faq2} alt="" data-parallax='{"y" : 100 }' />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq-content">
              <div className="section-title mb-30 tg-heading-subheading animation-style2">
                <span className="sub-title tg-element-title">
                  Our Service Benifits
                </span>
                <h2 className="title tg-element-title">
                  Keep Your Business Safe & Ensure High Availability.
                </h2>
              </div>
              <p>
              Trust us to deliver tailored solutions that drive success and optimize performance.
              </p>

              <div className="accordion-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                       Targeted Growth Strategies
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                        Our digital marketing and consultancy services are designed to drive measurable growth and maximize your business potential.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Customized Web Solutions
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                        We offer tailored web design services that enhance user experience and reflect your brand’s unique identity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Streamlined Import Processes: 
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                        Our import consultancy ensures efficient, compliant, and cost-effective international trade solutions for your business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
