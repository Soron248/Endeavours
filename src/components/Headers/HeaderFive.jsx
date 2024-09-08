import React from "react";
import { MobileMenu } from "./MobileMenu";
import { useStickyMenu } from "../../lib/hooks/useStickyMenu";
import { LOGO } from "../../lib/assets";
import logo from "../../assets/img/logo/logo.png"
import { NavMenus } from "./NavMenus";
import { Link } from "react-router-dom";

export const HeaderFive = () => {
  // menu sticky
  useStickyMenu();

  return (
    <header className="header-style-five transparent-header">
      <div id="sticky-header" className="menu-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <Link to="/">
                    <img src={logo} alt="Logo" width="200" height="200" />
                    </Link>
                  </div>

                  {/* nav links */}
                  <NavMenus />

                  <div className="header-action">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <Link to="/contact" className="btn btn-two">
                          Start Free Trail
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* Mobile Menu  */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
