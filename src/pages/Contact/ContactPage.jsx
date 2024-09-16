import React from "react";
import { Layout } from "../../layouts/Layout";
import { ContactAreaInner } from "../../components/ContactAreas/ContactAreaInner";
import { ContactAreaMap } from "../../components/ContactAreas/ContactAreaMap";
import { RequestAreaOne } from "../../components/RequestAreas/RequestAreaOne";
import { ContactAreaOne } from "../../components/ContactAreas/ContactAreaOne";

const ContactPage = () => {
  return (
    <Layout breadcrumb={"Contact"} title={"Contact Us"}>
      {/* contact-area */}
      {/* <ContactAreaInner /> */}

      {/* map */}
      <ContactAreaOne />
    </Layout>
  );
};

export default ContactPage;
