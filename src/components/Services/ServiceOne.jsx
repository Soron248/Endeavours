import React, { useState, useEffect,useMemo  } from "react";
import { ServiceOneItem } from "./ServiceOneItem";
import { SlickSlider } from "../SlickSlider/SlickSlider";
import axios from 'axios';

export const ServiceOne = () => {
  const [services, setServices] = useState([]); // Initialize state to store data
  const [error, setError] = useState(null); // Optional: to handle errors
  const slick_settings_brands = useMemo(() => ({
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  }), []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('https://endeavours.pythonanywhere.com/api/services/');
      const uniqueServices = Array.from(new Set(response.data.map(s => s.id))).map(id =>
        response.data.find(s => s.id === id)
      );
      setServices(uniqueServices); // Filter for unique services
    } catch (err) {
      console.error('Error fetching services:', err);
      setError(err.message); // Update error state
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  console.log("Rendered services:", services); // Debug to ensure unique items

  return (
    <section className="services-area services-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title white-title text-center mb-50">
              <span className="sub-title">Our Dedicated Services</span>
              <h2 className="title">
                Spotlight Some Most <br />
                Important Features We Have
              </h2>
            </div>
          </div>
        </div>
        <div className="row services-active">
          <SlickSlider settings={slick_settings_brands}>
            {services.map((service) => (
              <div key={service.id} className="col-lg-4">
                <ServiceOneItem service={service} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};
