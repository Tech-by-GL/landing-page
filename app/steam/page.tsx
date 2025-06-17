// src/app/about-us/page.tsx
import { AboutUs } from "@/components/about-us";
import { MethodologySection } from "@/components/methodology-section";
import React from "react";

export const metadata = {
  title: "Phương Pháp STEAM | Anh Ngữ Chăm Chỉ",
  description:
    "Phương pháp STEAM tại Anh Ngữ Chăm Chỉ kết hợp giữa khoa học, công nghệ, kỹ thuật, nghệ thuật và toán học để mang đến trải nghiệm học tập toàn diện và hiện đại nhất cho học viên.",
};

const AboutUsPage = () => {
  return (
    <>
      <MethodologySection />
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
