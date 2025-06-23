export const metadata = {
  title: "Tiếng Anh Trẻ Em Lớp 1 - 5 | Anh Ngữ Chăm Chỉ",
  description:
    "Chương trình Tiếng Anh trẻ em lớp 1 đến lớp 5 tại Anh Ngữ Chăm Chỉ giúp trẻ em phát triển kỹ năng ngôn ngữ cơ bản, tạo nền tảng vững chắc cho việc học tiếng Anh sau này.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import TiengAnhTreEm from "./children-english";
import { Address } from "@/components/address";
import { MetaTags } from "@/components/seo/meta-tags";

export default function Page() {
  return (
    <>
      <MetaTags
        title="Tiếng Anh Trẻ Em Lớp 1 - 5 | Anh Ngữ Chăm Chỉ"
        description="Chương trình Tiếng Anh trẻ em lớp 1 đến lớp 5 tại Anh Ngữ Chăm Chỉ giúp trẻ em phát triển kỹ năng ngôn ngữ cơ bản, tạo nền tảng vững chắc cho việc học tiếng Anh sau này."
        keywords="Tiếng Anh trẻ em, lớp 1, lớp 2, lớp 3, lớp 4, lớp 5, Anh Ngữ Chăm Chỉ, Chamchi, chương trình tiếng Anh trẻ em, học tiếng Anh cho trẻ em"
        ogImage="/og-image.png"
        ogType="website"
        canonicalUrl="https://www.chamchi.vn/tieng-anh-tre-em"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Trang chủ", url: "https://www.chamchi.vn" },
          {
            name: "Tiếng Anh Trẻ Em Lớp 1 - 5",
            url: "https://www.chamchi.vn/tieng-anh-tre-em",
          },
        ]}
      />

      <TiengAnhTreEm />
      <Address />
    </>
  );
}
