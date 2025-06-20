export const metadata = {
  title: "Testimonials | Anh Ngữ Chăm Chỉ",
  description:
    "Những chia sẽ chân thành từ học viên Anh Ngữ Chăm Chỉ về hành trình chinh phục tiếng Anh của họ. Từ những khó khăn ban đầu đến những thành công đáng tự hào, hãy cùng lắng nghe câu chuyện của họ.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import From10to12 from "./1012";

export default function Page() {
  return (
    <>
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
    </>
  );
}
