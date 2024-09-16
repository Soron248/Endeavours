import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutSeven } from "../../components/About/AboutSeven";
import { FeatureFive } from "../../components/Features/FeatureFive";
import { TeamAreaThree } from "../../components/TeamAreas/TeamAreaThree";
import { TestimonialAreaOne } from "../../components/TestimonialAreas/TestimonialAreaOne";
import { BrandSix } from "../../components/Brand/BrandSix";

const AboutPage = () => {
  return (
    <Layout breadcrumb={"About"} title={"About us"}>
      {/* about-area */}
      <AboutSeven />

      {/* features-area */}
      <FeatureFive />

      {/* team-area */}
      <TeamAreaThree />

      {/* testimonial-area  */}
      {/* <TestimonialAreaOne /> */}

      {/* brand-area */}
      <BrandSix />
    </Layout>
  );
};

export default AboutPage;
