import React from "react";
import { Link } from "react-router-dom";
import { BREADCRUMB_SHAPE01, BREADCRUMB_SHAPE02 } from "../../lib/assets";

export const Breadcrumb = ({ text, title }) => {
  return (
    <section className="breadcrumb-area breadcrumb-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-content">
              <h2 className="title">{title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    {text}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="breadcrumb-shape-wrap">
        <img src={BREADCRUMB_SHAPE01} alt="" />
        <img src={BREADCRUMB_SHAPE02} alt="" />
      </div>
    </section>
  );
};
