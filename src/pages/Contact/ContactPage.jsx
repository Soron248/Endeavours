import React from "react";
import { Layout } from "../../layouts/Layout";
import { ContactAreaInner } from "../../components/ContactAreas/ContactAreaInner";
import { ContactAreaMap } from "../../components/ContactAreas/ContactAreaMap";

const ContactPage = () => {
  return (
    <Layout breadcrumb={"Contact"} title={"Contact Us"}>
      {/* contact-area */}
      <ContactAreaInner />

      {/* map */}
      <ContactAreaMap />
    </Layout>
  );
};

export default ContactPage;
