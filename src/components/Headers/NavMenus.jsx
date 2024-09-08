import React from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

export const NavMenus = () => {
  const { pathname } = useLocation();

  const isActiveCn = (path) => {
    return path === pathname ? "active" : "";
  };

  const homeLinkList = [
    {
      to: "/",
      title: "Finance",
    },
    {
      to: "/home-2",
      title: "Consulting",
    },
    {
      to: "/home-3",
      title: "Insurance",
    },
    {
      to: "/home-4",
      title: "Digital Agency",
    },
    {
      to: "/home-5",
      title: "Business",
    },
  ];

  const aboutLinkList = [
    {
      to: "/about",
      title: "About One",
    },
    {
      to: "/about-2",
      title: "About Two",
    },
    {
      to: "/about-3",
      title: "About Three",
    },
    {
      to: "/about-4",
      title: "About Four",
    },
    {
      to: "/about-5",
      title: "About Five",
    },
  ];

  const servicesLinkList = [
    {
      to: "/services",
      title: "Services One",
    },
    {
      to: "/services-2",
      title: "Services Two",
    },
    {
      to: "/services-3",
      title: "Services Three",
    },
    {
      to: "/services-4",
      title: "Services Four",
    },
    {
      to: "/services-5",
      title: "Services Five",
    },
  ];

  const servicesDetailsLinkList = [
    {
      to: "/services-details",
      title: "Services Details One",
    },
    {
      to: "/services-details-2",
      title: "Services Details Two",
    },
    {
      to: "/services-details-3",
      title: "Services Details Three",
    },
    {
      to: "/services-details-4",
      title: "Services Details Four",
    },
    {
      to: "/services-details-5",
      title: "Services Details Five",
    },
  ];

  return (
    <div className="navbar-wrap main-menu d-none d-lg-flex">
      <ul className="navigation">
        {/* home */}
        <li
          className={cn("menu-item-has-children", {
            active: homeLinkList.map((el) => el.to).includes(pathname),
          })}
        >
          
                <Link to="/">Home</Link>
              
        </li>

        {/* about */}
        <li
          className={cn("menu-item-has-children", {
            active: aboutLinkList.map((el) => el.to).includes(pathname),
          })}
        >
          <a href="#">About Us</a>
          <ul className="sub-menu">
            {aboutLinkList.map((el) => (
              <li key={el.to} className={cn(isActiveCn(el.to))}>
                <Link to={el.to}>{el.title}</Link>
              </li>
            ))}
          </ul>
        </li>

        {/* pages */}
        <li
          className={cn("menu-item-has-children", {
            active: [
              ...servicesLinkList,
              ...servicesDetailsLinkList,
              "/project-details",
              "/team-details",
              "/error",
            ]
              .map((el) => el.to)
              .includes(pathname),
          })}
        >
          <a href="#">Pages</a>
          <ul className="sub-menu">
            <li
              className={cn("menu-item-has-children", {
                active: [...servicesLinkList]
                  .map((el) => el.to)
                  .includes(pathname),
              })}
            >
              <Link to="/services">Services</Link>
              <ul className="sub-menu">
                {servicesLinkList.map((el) => (
                  <li key={el.to} className={cn(isActiveCn(el.to))}>
                    <Link to={el.to}>{el.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li
              className={cn("menu-item-has-children", {
                active: [...servicesDetailsLinkList]
                  .map((el) => el.to)
                  .includes(pathname),
              })}
            >
              <Link to="/services-details">Services Details</Link>
              <ul className="sub-menu">
                {servicesDetailsLinkList.map((el) => (
                  <li key={el.to} className={cn(isActiveCn(el.to))}>
                    <Link to={el.to}>{el.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className={cn(isActiveCn("/project-details"))}>
              <Link to="/project-details">Portfolio Details</Link>
            </li>
            <li className={cn(isActiveCn("/team-details"))}>
              <Link to="/team-details">Team Details</Link>
            </li>
            <li className={cn(isActiveCn("/error"))}>
              <Link to="/error">404 Error</Link>
            </li>
          </ul>
        </li>

        {/* blog */}
        <li
          className={cn("menu-item-has-children", {
            active: ["/blog", "/blog-details"].includes(pathname),
          })}
        >
          <a href="#">Blog</a>
          <ul className="sub-menu">
            <li className={cn(isActiveCn("/blog"))}>
              <Link to="/blog">Our Blog</Link>
            </li>
            <li className={cn(isActiveCn("/blog-details"))}>
              <Link to="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li>

        {/* contact */}
        <li className={cn(isActiveCn("/contact"))}>
          <Link to="/contact">contacts</Link>
        </li>
      </ul>
    </div>
  );
};
