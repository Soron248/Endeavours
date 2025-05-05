import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const ServiceOneItem = ({ service }) => {
  // console.log("Rendering ServiceOneItem:", service.id);

  return (
    <div className="services-item">
      <div className="services-content">
        <div className="content-top">
          <div className="icon">
            <i className="flaticon-business-presentation"></i>
            {/* <img src={service.icon} alt="icon" /> */}
          </div>
          <h2 className="title">{service.name}</h2>
        </div>
        <div className="services-thumb">
          <img src={service.service_image} alt={service.name} />
          <Link to={`/services-details/${service.id}`} className="btn transparent-btn">
            Our Services
          </Link>
        </div>
        <ul className="list-wrap">
          {service.initial_bullet_points &&
            service.initial_bullet_points.map((point) => (
              <li key={point.id}>{point.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};
