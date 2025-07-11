import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { Courses } from "@/components/courses";
import { FAQSchema } from "@/components/seo/structured-data";
import { GallerySection } from "@/components/gallery-section";
import { SteamBriefSection } from "@/components/steam-section";
import { VideoCoreValue } from "@/components/video-core-values";
import TestimonialsGrid from "@/components/testimonial-grid";
import { Address } from "@/components/address";
import { MetaTags } from "@/components/seo/meta-tags";

export const metadata: Metadata = {
  title: "Anh Ngữ Chăm Chỉ - Home",
  description:
    "Chamchi là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua phương pháp STEAM kết hợp với Trí Tuệ Nhân Tạo. Khám phá các khóa học KET, PET, IELTS và tiếng Anh STEAM với giải pháp học tập đột phá.",
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
        url: "https://chamchi.vn/og-image.png",
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
      question: "Chăm Chỉ dạy những khóa học nào?",
      answer:
        "Chăm cung cấp các khóa học luyện thi KET, PET, IELTS và tiếng Anh STEAM kết hợp Trí Tuệ Nhân Tạo.",
    },
    {
      question: "Phương pháp giảng dạy của Chamchi có gì đặc biệt?",
      answer:
        "Chăm áp dụng phương pháp STEAM (Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học) vào việc dạy tiếng Anh, giúp học viên không chỉ học ngôn ngữ mà còn phát triển tư duy phản biện và kỹ năng giải quyết vấn đề.",
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
      <MetaTags
        title="Anh Ngữ Chăm Chỉ - Trung tâm Anh ngữ STEAM & Trí Tuệ Nhân Tạo"
        description="Chamchi là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua phương pháp STEAM kết hợp với Trí Tuệ Nhân Tạo. Khám phá các khóa học KET, PET, IELTS và tiếng Anh STEAM với giải pháp học tập đột phá."
        ogImage="https://chamchi.vn/og-image.png"
        ogType="website"
        canonicalUrl="https://chamchi.vn"
      />
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
