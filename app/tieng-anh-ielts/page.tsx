export const metadata = {
  title: "Chứng Chỉ IELTS | Anh Ngữ Chăm Chỉ",
  description:
    "Chương trình IELTS tại Anh Ngữ Chăm Chỉ giúp học sinh chuẩn bị tốt nhất cho kỳ thi IELTS, với phương pháp học STEAM Hiện đại, cách công cụ AI mạnh mẽ, và đội ngũ giáo viên giàu kinh nghiệm.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import IELTSPage from "./ielts";
import { Address } from "@/components/address";
import { MetaTags } from "@/components/seo/meta-tags";

export default function Page() {
  return (
    <>
      <MetaTags
        title="Chứng Chỉ IELTS | Anh Ngữ Chăm Chỉ"
        description="Chương trình IELTS tại Anh Ngữ Chăm Chỉ giúp học sinh chuẩn bị tốt nhất cho kỳ thi IELTS, với phương pháp học STEAM Hiện đại, cách công cụ AI mạnh mẽ, và đội ngũ giáo viên giàu kinh nghiệm."
        keywords="Chứng chỉ IELTS, Anh Ngữ Chăm Chỉ, Chamchi, chương trình IELTS, học tiếng Anh, phương pháp STEAM, giáo viên giàu kinh nghiệm"
        ogImage="/og-image.png"
        ogType="website"
        canonicalUrl="https://www.chamchi.vn/tieng-anh-ielts"
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Trang chủ", url: "https://www.chamchi.vn" },
          {
            name: "Chứng Chỉ IELTS",
            url: "https://www.chamchi.vn/tieng-anh-ielts",
          },
        ]}
      />
      <IELTSPage />
      <Address />
    </>
  );
}
