// src/app/about-us/page.tsx
import { AboutUs } from "@/components/about-us";
import { BreadcrumbJsonLd } from "@/components/breadscrum";
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
      <BreadcrumbJsonLd
            items={[
              { name: "Trang chủ", url: "https://www.chamchi.vn" },
              {
                name: "Phương Pháp STEAM của Chăm Chỉ",
                url: "https://www.chamchi.vn/steam",
              },
            ]}
          />
          
      <MethodologySection />
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
