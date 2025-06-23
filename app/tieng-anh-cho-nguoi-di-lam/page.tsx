export const metadata = {
  title: "Tiếng Anh Cho Người Đi Làm | Anh Ngữ Chăm Chỉ",
  description:
    "Chương trình IELTS tại Anh Ngữ Chăm Chỉ giúp học sinh chuẩn bị tốt nhất cho kỳ thi IELTS, với phương pháp học STEAM Hiện đại, cách công cụ AI mạnh mẽ, và đội ngũ giáo viên giàu kinh nghiệm.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import WorkingPeoplePage from "./working";
import { Address } from "@/components/address";
import { MetaTags } from "@/components/seo/meta-tags";

export default function Page() {
  return (
    <>
      <MetaTags
        title="Tiếng Anh Cho Người Đi Làm | Anh Ngữ Chăm Chỉ"
        description="Chương trình IELTS tại Anh Ngữ Chăm Chỉ giúp học sinh chuẩn bị tốt nhất cho kỳ thi IELTS, với phương pháp học STEAM Hiện đại, cách công cụ AI mạnh mẽ, và đội ngũ giáo viên giàu kinh nghiệm."
        keywords="Tiếng Anh cho người đi làm, Anh Ngữ Chăm Chỉ, Chamchi, chương trình IELTS, học tiếng Anh, phương pháp STEAM, giáo viên giàu kinh nghiệm"
        ogImage="/og-image.png"
        ogType="website"
        canonicalUrl="https://www.chamchi.vn/tieng-anh-cho-nguoi-di-lam"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Trang chủ", url: "https://www.chamchi.vn" },
          {
            name: "Tiếng Anh Cho Người Đi Làm",
            url: "https://www.chamchi.vn/tieng-anh-cho-nguoi-di-lam",
          },
        ]}
      />
      <WorkingPeoplePage />
      <Address />
    </>
  );
}
