import React, { useState, useEffect } from "react";
import { Link,useLocation  } from "react-router-dom";
import cn from "classnames";
import { SERVICES_DETAILS01 } from "../../lib/assets";
import axios from "axios";

export const ServicesDetailsSidebar = ({
  hideContact = false,
  hideTitle = false,
}) => {
  const [servicesData, setServicesData] = useState([]); // Initialize state to store data
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null); // Optional: to handle errors
  // const services = [
  //   { label: "Digital Marketing", href: "/services-details" },
  //   { label: "Web Development", href: "/services-2" },
  //   { label: "Business Consultancy", href: "/services-3" },
  //   { label: "Import consultancy", href: "/services-4" },
  // ];

  // const fetchServices = async () => {
  //   try {
  //     const response = await axios.get('https://endeavours.pythonanywhere.com/api/services/');
  //     const uniqueServices = Array.from(new Set(response.data.map(s => s.id))).map(id =>
  //       response.data.find(s => s.id === id)
  //     );
  //     setServicesData(uniqueServices); // Filter for unique services
  //         // Map the fetched data to create a new array for services with label and href
  //   const mappedServices = servicesData.map((service) => ({
  //     label: service.name, // Set label to service name
  //     href: `/services-details/${service.id}`, // Create dynamic href based on service id
  //   }));
  //   setServices(mappedServices);
  //   } catch (err) {
  //     console.error('Error fetching services:', err);
  //     setError(err.message); // Update error state
  //   }
  // };

  const fetchServices = async () => {
    try {
      const response = await axios.get('https://endeavours.pythonanywhere.com/api/services/');
      
      const uniqueServices = Array.from(new Set(response.data.map(s => s.id))).map(id =>
        response.data.find(s => s.id === id)
      );
  
      setServicesData(uniqueServices); // Set unique services
  
      // Directly map from `uniqueServices`, not `servicesData`
      setServices(uniqueServices.map(service => ({
        label: service.name,
        href: `/services-details/${service.id}`,
      })));
  
    } catch (err) {
      console.error('Error fetching services:', err);
      setError(err.message);
    }
  };
  

  useEffect(() => {
      fetchServices();
  }, []);
  
  const location = useLocation(); // get the current location
  return (
    <aside className="services-sidebar">
      {/* Our Services */}
      {services ? (
        <div className="services-cat-list mb-30">
          <ul className="list-wrap">
            {services && services.map((item, idx) => (
              <li key={item.label} className={cn({ active: location.pathname === item.href })}>
                <Link to={item.href}>
                  {item.label} <i className="flaticon-right-arrow"></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="services-widget">
          <h4 className="sw-title">Our Services</h4>
          <div className="services-cat-list">
            <ul className="list-wrap">
              {services.map((item, idx) => (
                <li key={item.label} className={cn({ active: idx == 0 })}>
                  <Link to={item.href}>
                    {item.label} <i className="flaticon-right-arrow"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Brochure */}
      {/* <div className="services-widget">
        <h4 className="sw-title">Brochure</h4>
        <div className="services-brochure-wrap">
          <p>when an unknown printer took ga lley offer typey anddey.</p>
          <a
            href={SERVICES_DETAILS01}
            target="_blank"
            download
            className="download-btn"
          >
            <i className="far fa-file-pdf"></i>PDF. Download
          </a>
          <a
            href={SERVICES_DETAILS01}
            target="_blank"
            download
            className="download-btn"
          >
            <i className="far fa-file-alt"></i>DOC. Download
          </a>
        </div>
      </div> */}

      {/* contact */}
      {hideContact ? null : (
        <div className="services-widget services-sidebar-contact">
          <h4 className="title">If You Need Any Help Contact With Us</h4>
          <a href="tel:0123456789">
            <i className="flaticon-phone-call"></i> +91 705 2101 786
          </a>
        </div>
      )}

      {/* Get A Free Quote */}
      {/* <div className="services-widget">
        <h4 className="sw-title">Get a Free Quote</h4>
        <div className="services-widget-form">
          <form action="#">
            <div className="form-grp">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-grp">
              <input type="email" placeholder="E-mail Address" />
            </div>
            <div className="form-grp">
              <textarea
                name="message"
                placeholder="Type Your Message"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div> */}
    </aside>
  );
};
