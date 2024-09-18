import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo.png";

export const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area footer-bg">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-3 col-md-7">
                <div className="footer-widget">
                  <h4 className="fw-title">Information</h4>
                  <div className="footer-info">
                    <ul className="list-wrap">
                      <li>
                        <div className="icon">
                          <i className="flaticon-pin"></i>
                        </div>
                        <div className="content">
                          <p>Nikunja 2,Khilkhet, Dhaka</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="content">
                          <a href="tel:8801716455355">+880 1716 455 355</a>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-clock"></i>
                        </div>
                        <div className="content">
                          <p>
                            thurs – Sat: 10 am – 6 pm, <br /> Friday:{" "}
                            <span>CLOSED</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Menu</h4>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/about">Company</Link>
                      </li>
                      <li>
                        <Link to="/contact">Careers</Link>
                      </li>
                      <li>
                        <Link to="/contact">Press media</Link>
                      </li>
                      <li>
                        <Link to="/blog">Our Blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-3 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Quick Links</h4>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/contact">How it’s Work</Link>
                      </li>
                      <li>
                        <Link to="/contact">Partners</Link>
                      </li>
                      <li>
                        <Link to="/contact">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/contact">Case Studies</Link>
                      </li>
                      <li>
                        <Link to="/contact">Pricing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-4 col-md-7">
                <div className="footer-widget">
                  <h4 className="fw-title">Subscribe to Our Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>
                      Sign up to Privitar’s weekly newsletter to get the latest
                      updates.
                    </p>
                    <form action="#">
                      <input type="email" placeholder="enter your e-mail" />
                      <button type="submit">Subscribe</button>
                    </form>
                    <span>We don’t send you any spam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="left-sider">
                  <div className="f-logo">
                    <Link to="/">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                  <div className="copyright-text">
                    <p>Copyright © Endeavours | All Right Reserved</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-social">
                  <ul className="list-wrap">
                    <li>
                      <a href="https://www.facebook.com/share/B8D99SA7vM7nwGNV/?mibextid=qi2Omg">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a href="https://www.instagram.com/endeavoursbd?igsh=MTVtY21lOHBqc3F0bQ==">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li> */}
                    <li>
                      <a href="https://www.linkedin.com/company/endeavoursbd/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
