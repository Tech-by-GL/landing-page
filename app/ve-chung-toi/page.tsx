export const metadata = {
  title: "Chúng tôi là Chăm Chỉ",
  description:
    "Khám phá hành trình và sứ mệnh của Anh Ngữ Chăm Chỉ trong việc mang đến những khóa học tiếng Anh chất lượng cao, giúp học viên chinh phục tiếng Anh một cách hiệu quả và tự tin.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import AboutUsPage from "./ve-chung-toi";
import { Address } from "@/components/address";
import { MetaTags } from "@/components/seo/meta-tags";

export default function Page() {
  return (
    <>
      <MetaTags
        title="Chúng tôi là Chăm Chỉ"
        description="Khám phá hành trình và sứ mệnh của Anh Ngữ Chăm Chỉ trong việc mang đến những khóa học tiếng Anh chất lượng cao, giúp học viên chinh phục tiếng Anh một cách hiệu quả và tự tin."
        keywords="Chăm Chỉ, Anh Ngữ Chăm Chỉ, Chamchi, về chúng tôi, sứ mệnh, hành trình, khóa học tiếng Anh"
        ogImage="/og-image.png"
        ogType="website"
        canonicalUrl="https://www.chamchi.vn/ve-chung-toi"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Trang chủ", url: "https://www.chamchi.vn" },
          {
            name: "Về Chúng Tôi",
            url: "https://www.chamchi.vn/ve-chung-toi",
          },
        ]}
      />
      <AboutUsPage />
      <Address />
    </>
  );
}
