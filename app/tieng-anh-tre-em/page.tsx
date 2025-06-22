export const metadata = {
  title: "Tiếng Anh Trẻ Em Lớp 1 - 5 | Anh Ngữ Chăm Chỉ",
  description:
    "Chương trình Tiếng Anh trẻ em lớp 1 đến lớp 5 tại Anh Ngữ Chăm Chỉ giúp trẻ em phát triển kỹ năng ngôn ngữ cơ bản, tạo nền tảng vững chắc cho việc học tiếng Anh sau này.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import TiengAnhTreEm from "./children-english";
import { Address } from "@/components/address";

export default function Page() {
  return (
    <>
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
