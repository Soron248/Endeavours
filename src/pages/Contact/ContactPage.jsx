import React, { useEffect } from "react";
import { Layout } from "../../layouts/Layout";
import { ContactAreaInner } from "../../components/ContactAreas/ContactAreaInner";
import { ContactAreaMap } from "../../components/ContactAreas/ContactAreaMap";
import { RequestAreaOne } from "../../components/RequestAreas/RequestAreaOne";
import { ContactAreaOne } from "../../components/ContactAreas/ContactAreaOne";
import { Helmet } from "react-helmet";

const ContactPage = () => {
    useEffect(() => {
            if (window.dataLayer) {
              window.dataLayer.push({
                event: "Endeavours Contact",
                page_path: "/contact",
                page_title: "Contact page", 
              });
            }
          }, []);
  return (
    <Layout breadcrumb={"Contact"} title={"Contact Us"}>
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content={"Contact page content"} />
        <meta property="og:title" content={"Contact page"} />
        <meta name="keywords" content={"Contact page content"} />
      </Helmet>
      {/* contact-area */}
      {/* <ContactAreaInner /> */}

      {/* map */}
      <ContactAreaOne />
    </Layout>
  );
};

export default ContactPage;
