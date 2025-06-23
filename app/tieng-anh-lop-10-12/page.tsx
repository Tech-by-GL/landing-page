export const metadata = {
  title: "Testimonials | Anh Ngữ Chăm Chỉ",
  description:
    "Những chia sẽ chân thành từ học viên Anh Ngữ Chăm Chỉ về hành trình chinh phục tiếng Anh của họ. Từ những khó khăn ban đầu đến những thành công đáng tự hào, hãy cùng lắng nghe câu chuyện của họ.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import From10to12 from "./1012";
import { Address } from "@/components/address";
import { MetaTags } from "@/components/seo/meta-tags";

export default function Page() {
  return (
    <>
      <MetaTags
        title="Tiếng Anh Lớp 10 đến lớp 12 | Anh Ngữ Chăm Chỉ"
        description="Chương trình tiếng Anh từ lớp 10 đến lớp 12 tại Anh Ngữ Chăm Chỉ giúp học sinh nắm vững kiến thức và kỹ năng cần thiết để thành công trong kỳ thi tốt nghiệp và các kỳ thi quốc tế."
        keywords="Tiếng Anh lớp 10, Tiếng Anh lớp 11, Tiếng Anh lớp 12, Anh Ngữ Chăm Chỉ, Chamchi, chương trình tiếng Anh, học tiếng Anh, kỹ năng tiếng Anh"
        ogImage="/og-image.png"
        ogType="website"
        canonicalUrl="https://www.chamchi.vn/tieng-anh-lop-10-12"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Trang chủ", url: "https://www.chamchi.vn" },
          {
            name: "Tiếng Anh Lớp 10 đến lớp 12",
            url: "https://www.chamchi.vn/tieng-anh-lop-10-12",
          },
        ]}
      />

      <From10to12 />
      <Address />
    </>
  );
}
