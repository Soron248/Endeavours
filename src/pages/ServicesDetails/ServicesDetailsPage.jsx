import React, { useState, useEffect } from "react";
import { Layout } from "../../layouts/Layout";
import { ServicesDetailsFaq } from "../../components/ServicesDetails/ServicesDetailsFaq";
import { CHECK_ICON, SD_VIDEO_IMG, SERVICES_DETAILS01 } from "../../lib/assets";
import { ServicesDetailsWrapper } from "../../components/ServicesDetails/ServicesDetailsWrapper";
import { VideoPlayerOne } from "../../components/VideoPlayers/VideoPlayerOne";
import { BrandSeven } from "../../components/Brand/BrandSeven";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet"; // Import Helmet

const ServicesDetailsPage = () => {
  const { id } = useParams();
  console.log(id)
  const [serviceDetails, setServiceDetails] = useState(null); // To store the fetched service details
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling
  
  const location = useLocation();
  
  const eventName = location.pathname.slice(1);

  useEffect(() => {
    if (id) {
      // Start loading state
      setLoading(true);
      setError(null);

      // Fetch data from the API using the id
      axios
        .get(`https://endeavours.pythonanywhere.com/api/services/${id}`)
        .then((response) => {
          // Store the service details in the state
          setServiceDetails(response.data);
          console.log(id)

        })
        .catch((error) => {
          // Handle any errors
          setError("Error fetching service details.");
        })
        .finally(() => {
          // Stop loading state
          setLoading(false);
        });
    }
  console.log(id)

  }, [id]); // Trigger the effect when 'id' changes

  // Show loading state while the API is being fetched
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // // Show error message if there is an error
  // if (error) {
  //   return <div>{error}</div>;
  // }

  // Extract meta keywords from the service details
  const metaKeywords = serviceDetails?.meta_keywords?.map((keyword) => keyword.name).join(", ") || "";
  console.log(id)

  
      useEffect(() => {
        if (window.dataLayer && serviceDetails) {
          window.dataLayer.push({
            event: serviceDetails.meta_title || "Home",
            page_path: location.pathname + location.search,
            page_title: (serviceDetails.meta_title || "Home"), 
            serviceName: serviceDetails.meta_title || "",
            serviceID: id || ""
          });
        }
      }, [serviceDetails]);
  
  return (
    <Layout breadcrumb={"Services"} title={"Service Details"}>
      {/* Adding dynamic metadata using Helmet for service details */}
      {serviceDetails && (
        <Helmet>
          <title>{serviceDetails.meta_title} - Service Details</title>
          <meta name="description" content={serviceDetails.meta_description} />
          <meta
            property="og:title"
            content={`${serviceDetails.meta_title} - Service Details`}
          />
          <meta name="keywords" content={metaKeywords} />
        </Helmet>
      )}
      {/* services-details-area */}
      {serviceDetails &&<ServicesDetailsWrapper hideContact hideTitle>
        <div className="services-details-wrap">
          <div className="services-details-thumb">
            <img src={serviceDetails.service_detail_page_image} alt={serviceDetails.name} />
          </div>

          {serviceDetails && serviceDetails.description_sections.map((detail,index)=>{
            return(
              <div className="services-details-content" key={detail.id}>
              <h2 style={{marginTop:"50px"}} >
                {detail.name}
              </h2>
              <p>
                {detail.description}
              </p>
  
              <div className="sd-inner-wrap">
                <div className="row align-items-center">
                  <div className="col-56">
                    <div className="content">
                      {/* <h3 className="title-two">
                        {detail.headingTwo}
                      </h3>
                      <p>
                        {detail.subThree}
                      </p> */}
  
                        <ul className="list-wrap" >
                          {detail && detail.bullet_points.map((p,i)=>{
                            return(
                              <li key={i}>
                              <img src={CHECK_ICON} alt="" />
                              {p.name}
                            </li>
                            )
                          })}
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
                {detail.short_description}
              </p>
              <div className="company-benefit-wrap" >
                {/* {detail.accordions && <h2 className="title-two">Services benifit:</h2>} */}
                {/* <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen bookhas a not only five centuries, but
                  also the leap into electronic typesetting, remaining essentially
                  unchan galley of type and scrambled it to make a type specimen
                  book.
                </p> */}
  
                {/* faq accordion */}
                <ServicesDetailsFaq accordion={detail.accordions}/>
              </div>
            </div>
            )
          })}

        </div>
      </ServicesDetailsWrapper>}

      {/* brand-area */}
      {/* <BrandSeven /> */}
    </Layout>
  );
};

export default ServicesDetailsPage;