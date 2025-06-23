export const metadata = {
  title: "Testimonials | Anh Ngữ Chăm Chỉ",
  description:
    "Những chia sẽ chân thành từ học viên Anh Ngữ Chăm Chỉ về hành trình chinh phục tiếng Anh của họ. Từ những khó khăn ban đầu đến những thành công đáng tự hào, hãy cùng lắng nghe câu chuyện của họ.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import FullPageTestimonials from "./testimonials";
import { MetaTags } from "@/components/seo/meta-tags";

export default function Page() {
  return (
    <>
      <MetaTags
        title="Testimonials | Anh Ngữ Chăm Chỉ"
        description="Những chia sẽ chân thành từ học viên Anh Ngữ Chăm Chỉ về hành trình chinh phục tiếng Anh của họ. Từ những khó khăn ban đầu đến những thành công đáng tự hào, hãy cùng lắng nghe câu chuyện của họ."
        keywords="Testimonials, Anh Ngữ Chăm Chỉ, Chamchi, học viên, tiếng Anh, thành công, chia sẻ"
        ogImage="/og-image.png"
        ogType="website"
        canonicalUrl="https://www.chamchi.vn/testimonial"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Trang chủ", url: "https://www.chamchi.vn" },
          {
            name: "Testimonials - Những thế hệ học sinh thành công",
            url: "https://www.chamchi.vn/testimonials",
          },
        ]}
      />
      <FullPageTestimonials />
    </>
  );
}
