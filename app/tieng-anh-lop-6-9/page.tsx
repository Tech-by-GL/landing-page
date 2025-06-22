import { BreadcrumbJsonLd } from "@/components/breadscrum";
import ClassFrom6to9 from "./69";
import { Address } from "@/components/address";

export const metadata = {
  title: "Tiếng Anh Lớp 6 đến lớp 9 | Anh Ngữ Chăm Chỉ",
  description:
    "Chương trình Tiếng Anh lớp 6 đến lớp 9 tại Anh Ngữ Chăm Chỉ giúp học sinh nắm vững kiến thức cơ bản, phát triển kỹ năng giao tiếp và chuẩn bị tốt cho các kỳ thi quan trọng.",
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Trang chủ", url: "https://www.chamchi.vn" },
          {
            name: "Tiếng Anh Lớp 6 đến lớp 9",
            url: "https://www.chamchi.vn/tieng-anh-lop-6-9",
          },
        ]}
      />

      <ClassFrom6to9 />
      <Address />
    </>
  );
}
