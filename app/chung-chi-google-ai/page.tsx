export const metadata = {
  title: "Google AI Cert | Anh Ngữ Chăm Chỉ",
  description: "Khoá học lấy tính chỉ Google AI do Chăm Chỉ thiết kế.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import GoogleAICert from "./ai";

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Trang chủ", url: "https://www.chamchi.vn" },
          {
            name: "Chứng Chỉ Google AI",
            url: "https://www.chamchi.vn/chung-chi-google-ai",
          },
        ]}
      />
      <GoogleAICert />
    </>
  );
}
