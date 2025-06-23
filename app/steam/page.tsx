// src/app/about-us/page.tsx
import { AboutUs } from "@/components/about-us";
import { BreadcrumbJsonLd } from "@/components/breadscrum";
import { MethodologySection } from "@/components/methodology-section";
import { MetaTags } from "@/components/seo/meta-tags";
import React from "react";

export const metadata = {
  title: "Phương Pháp STEAM | Anh Ngữ Chăm Chỉ",
  description:
    "Phương pháp STEAM tại Anh Ngữ Chăm Chỉ kết hợp giữa khoa học, công nghệ, kỹ thuật, nghệ thuật và toán học để mang đến trải nghiệm học tập toàn diện và hiện đại nhất cho học viên.",
};

const AboutUsPage = () => {
  return (
    <>
      <MetaTags 
        title="Phương Pháp STEAM | Anh Ngữ Chăm Chỉ"
        description="Phương pháp STEAM tại Anh Ngữ Chăm Chỉ kết hợp giữa khoa học, công nghệ, kỹ thuật, nghệ thuật và toán học để mang đến trải nghiệm học tập toàn diện và hiện đại nhất cho học viên."
        keywords="Phương pháp STEAM, Anh Ngữ Chăm Chỉ, học tiếng Anh, giáo dục hiện đại, khoa học, công nghệ, kỹ thuật, nghệ thuật, toán học"
        ogImage="https://www.chamchi.vn/og-image.png"
        ogType="website"
        canonicalUrl="https://www.chamchi.vn/steam"
      />

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
