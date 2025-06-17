import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { CoreValues } from "@/components/core-values";
import { MethodologySection } from "@/components/methodology-section";
import { SolutionsSection } from "@/components/solutions-section";
import { ClassroomShowcase } from "@/components/classroom-showcase";
import { Testimonials } from "@/components/testimonials";
import { Courses } from "@/components/courses";
import { BlogSection } from "@/components/blog-section";
import { Features } from "@/components/features";
import { AboutUs } from "@/components/about-us";
import { FAQSchema } from "@/components/seo/structured-data";
import TeamGallery from "@/components/team-gallery";
import CenterCarousel from "@/components/carousel";
import { GallerySection } from "@/components/gallery-section";
import { SteamMethodSection } from "@/components/steam-method-section";
import { SteamBriefSection } from "@/components/steam-section";
import CompanyMarquee from "@/components/marquee";
import { VideoCoreValue } from "@/components/video-core-values";
import TestimonialsGrid from "@/components/testimonial-grid";
import { EducationalPhilosophy } from "@/components/educational-philosophy";
import { LearningRoadmap } from "@/components/learning-roadmap";
import { CourseGallery } from "./tieng-anh-lop-6-9/page";
import { Address } from "@/components/address";

export const metadata: Metadata = {
  title: "Trang chủ | Chamchi - Trung tâm Anh ngữ STEAM",
  description:
    "Chamchi là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua phương pháp STEAM cho học sinh từ lớp 6 trở lên. Khám phá các khóa học KET, PET, IELTS và tiếng Anh STEAM với giải pháp học tập đột phá.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Chamchi",
    "tiếng Anh STEAM",
    "trung tâm tiếng Anh",
    "luyện thi KET",
    "luyện thi PET",
    "luyện thi IELTS",
    "phương pháp học tiếng Anh",
    "tiếng Anh cho học sinh",
    "trung tâm anh ngữ uy tín",
    "học tiếng Anh hiệu quả",
  ],
  openGraph: {
    title: "Chamchi - Trung tâm Anh ngữ STEAM hiện đại",
    description:
      "Học tiếng Anh hiệu quả với phương pháp STEAM độc đáo. Tỷ lệ đỗ chứng chỉ quốc tế lên đến 98%.",
    images: [
      {
        url: "https://chamchi.edu.vn/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Chamchi - Trung tâm Anh ngữ STEAM",
      },
    ],
  },
};

export default function Home() {
  const faqQuestions = [
    {
      question: "Chamchi dạy những khóa học nào?",
      answer:
        "Chamchi cung cấp các khóa học luyện thi KET, PET, IELTS và tiếng Anh STEAM cho học sinh từ lớp 6 trở lên.",
    },
    {
      question: "Phương pháp giảng dạy của Chamchi có gì đặc biệt?",
      answer:
        "Chamchi áp dụng phương pháp STEAM (Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học) vào việc dạy tiếng Anh, giúp học viên không chỉ học ngôn ngữ mà còn phát triển tư duy phản biện và kỹ năng giải quyết vấn đề.",
    },
    {
      question: "Tỷ lệ đỗ chứng chỉ của học viên Chamchi là bao nhiêu?",
      answer:
        "Tỷ lệ đỗ chứng chỉ của học viên Chamchi đạt 98%, một trong những tỷ lệ cao nhất trong ngành.",
    },
    {
      question: "Chamchi có những tính năng hỗ trợ học tập nào?",
      answer:
        "Chamchi cung cấp nhiều tính năng hỗ trợ học tập như ứng dụng di động, bài kiểm tra trực tuyến, phòng thực hành ngôn ngữ và hệ thống theo dõi tiến độ.",
    },
    {
      question: "Làm thế nào để đăng ký học tại Chamchi?",
      answer:
        "Bạn có thể đăng ký học tại Chamchi bằng cách điền form đăng ký trên website, gọi điện thoại hoặc đến trực tiếp trung tâm để được tư vấn miễn phí.",
    },
    {
      question: "Chamchi có cung cấp khóa học thử không?",
      answer:
        "Có, Chamchi cung cấp buổi học thử miễn phí để học viên có thể trải nghiệm phương pháp giảng dạy và môi trường học tập trước khi đăng ký khóa học chính thức.",
    },
  ];

  return (
    <>
      <FAQSchema questions={faqQuestions} />

      <HeroSection />

      <VideoCoreValue />

      <Courses />

      <SteamBriefSection />

      <GallerySection />

      <TestimonialsGrid />
      
      <Address />

      {/* <BlogSection /> */}
    </>
  );
}
