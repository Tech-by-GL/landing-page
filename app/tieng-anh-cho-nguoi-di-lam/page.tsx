export const metadata = {
  title: "Tiếng Anh Cho Người Đi Làm | Anh Ngữ Chăm Chỉ",
  description:
    "Chương trình IELTS tại Anh Ngữ Chăm Chỉ giúp học sinh chuẩn bị tốt nhất cho kỳ thi IELTS, với phương pháp học STEAM Hiện đại, cách công cụ AI mạnh mẽ, và đội ngũ giáo viên giàu kinh nghiệm.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import WorkingPeoplePage from "./working";
import { Address } from "@/components/address";

export default function Page() {
  return (
    <>
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
