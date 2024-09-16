import React from "react";
// import { BANNER_SHAPE } from "../../lib/assets";
import BANNER_SHAPE from "../../assets/images/dots.png"
import { Link } from "react-router-dom";
import { SlickSlider } from "../SlickSlider/SlickSlider";
import cn from "classnames";

export const SliderAreaOne = () => {
  const slick_settings_brands = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    fade: true,
    arrows: false,
    responsive: [{ breakpoint: 767, settings: { dots: true, arrows: false } }],
  };

  // Array of slide data
  const slidesData = [
    {
      id: "one",
      heading: "Transform Your Online Presence Today & We Are Expert In This Field",
      description:"With the help of our innovative digital marketing techniques, grow your company. Reach the appropriate audience and produce tangible outcomes. We possess the know-how to improve your brand and expand your business on the internet, ranking from social media management to SEO",
      // image: BANNER_SHAPE_1,
    },
    {
      id: "two",
      heading: "Professional Website Development Solutions. Build Your Dream Website with Us",
      description:"Our skilled team creates responsive, effective websites that increase engagement and conversions from design to launch. With our specialized website creation services, which guarantee scalability, security, and flawless performance, you may expand your online presence.",
      // image: BANNER_SHAPE_2,
    },
    {
      id: "three",
      heading: "Drive Success with Proven Strategies, Unlock Your Business Potential",
      description:"Join up with us to confidently and clearly lead your market through innovation, growth, and leadership. Our business development specialists offer perceptions and tactics to assist you in ascending to new heights within your sector.",
      // image: BANNER_SHAPE_3,
    },
    {
      id: "four",
      heading: "Streamline Your Import Process, Expand Your Global Reach",
      description:"We successfully source, negotiate, and manage your global supply chain with the aid of our import consultant services. Expert consultancy services to navigate international markets with ease and efficiency"
      // image: BANNER_SHAPE_3,
    },
  ];

  return (
    <section className="slider-area">
      <div className="slider-active">
        <SlickSlider settings={slick_settings_brands}>
          {slidesData.map((item) => (
            <div key={item.id} className={cn("single-slider slider-bg ", item.id)}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="slider-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".2s"
                      >
                       WE ARE EXPERT IN THIS FIELD
                      </span>
                      <h2
                        className="title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        {item.heading}
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        {item.description}
                      </p>
                      <Link
                        to="/services-details"
                        className="btn"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                      >
                        Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-shape">
                <img
                  src={BANNER_SHAPE}
                  alt=""
                  data-animation="zoomIn"
                  data-delay=".8s"
                />
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};
