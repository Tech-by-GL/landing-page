// src/app/about-us/page.tsx
import { AboutUs } from "@/components/about-us";
import { MethodologySection } from "@/components/methodology-section";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <MethodologySection />
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
