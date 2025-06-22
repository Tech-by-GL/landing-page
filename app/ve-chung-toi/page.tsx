export const metadata = {
  title: "Chúng tôi là Chăm Chỉ",
  description: "Khám phá hành trình và sứ mệnh của Anh Ngữ Chăm Chỉ trong việc mang đến những khóa học tiếng Anh chất lượng cao, giúp học viên chinh phục tiếng Anh một cách hiệu quả và tự tin.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import AboutUsPage from "./ve-chung-toi";
import { Address } from "@/components/address";

export default function Page() {
  return (
    <>
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
