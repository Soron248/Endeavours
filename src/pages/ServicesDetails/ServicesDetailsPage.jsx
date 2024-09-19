import React from "react";
import { Layout } from "../../layouts/Layout";
import { ServicesDetailsFaq } from "../../components/ServicesDetails/ServicesDetailsFaq";
import { CHECK_ICON, SD_VIDEO_IMG, SERVICES_DETAILS01 } from "../../lib/assets";
import { ServicesDetailsWrapper } from "../../components/ServicesDetails/ServicesDetailsWrapper";
import { VideoPlayerOne } from "../../components/VideoPlayers/VideoPlayerOne";
import { BrandSeven } from "../../components/Brand/BrandSeven";

const ServicesDetailsPage = ({data}) => {
  return (
    <Layout breadcrumb={"Services"} title={"Service Details"}>
      {/* services-details-area */}
      <ServicesDetailsWrapper hideContact hideTitle>
        <div className="services-details-wrap">
          <div className="services-details-thumb">
            <img src={data.imgsrc} alt="" />
          </div>

          <div className="services-details-content">
            <h2 className="title">
              {data.headingOne}
            </h2>
            <p>
              {data.subOne}
            </p>
            <p>
              {data.subTwo}
            </p>

            <div className="sd-inner-wrap">
              <div className="row align-items-center">
                <div className="col-56">
                  <div className="content">
                    <h3 className="title-two">
                      {data.headingTwo}
                    </h3>
                    <p>
                      {data.subThree}
                    </p>

                        <ul className="list-wrap" >
                      <li>
                        <img src={CHECK_ICON} alt="" />
                        {data.point[0]}
                      </li>
                      <li>
                        <img src={CHECK_ICON} alt="" />
                        {data.point[1]}
                      </li>
                      <li>
                        <img src={CHECK_ICON} alt="" />
                        {data.point[2]}
                      </li>
                      <li>
                        <img src={CHECK_ICON} alt="" />
                        {data.point[3]}
                      </li>
                    </ul>

                  </div>
                </div>

                {/* <div className="col-44">
                  <div className="thumb">
                    <img src={SD_VIDEO_IMG} alt="" />

                    <VideoPlayerOne
                      src={"https://www.youtube.com/watch?v=6mkoGSqTqFI"}
                    />
                  </div>
                </div> */}
              </div>
            </div>

            <p>
              {data.subFour}
            </p>
            <div className="company-benefit-wrap">
              <h2 className="title-two">{data.faqHead}</h2>
              {/* <p>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen bookhas a not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchan galley of type and scrambled it to make a type specimen
                book.
              </p> */}

              {/* faq accordion */}
              <ServicesDetailsFaq faqn={data.faqName} faqp={data.faqPoint} />
            </div>
          </div>
        </div>
      </ServicesDetailsWrapper>

      {/* brand-area */}
      {/* <BrandSeven /> */}
    </Layout>
  );
};

export default ServicesDetailsPage;
