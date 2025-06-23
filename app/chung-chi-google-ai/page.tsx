export const metadata = {
  title: "Google AI Cert | Anh Ngữ Chăm Chỉ",
  description: "Khoá học lấy tính chỉ Google AI do Chăm Chỉ thiết kế.",
};

import { BreadcrumbJsonLd } from "@/components/breadscrum";
import GoogleAICert from "./ai";
import { Address } from "@/components/address";
import { MetaTags } from "@/components/seo/meta-tags";

export default function Page() {
  return (
    <>
      <MetaTags
        title="Google AI Cert | Anh Ngữ Chăm Chỉ"
        description="Khoá học lấy tính chỉ Google AI do Chăm Chỉ thiết kế."
        keywords="Google AI, chứng chỉ Google AI, khoá học Google AI, Anh Ngữ Chăm Chỉ, Chamchi, tiếng Anh, STEAM, Trí Tuệ Nhân Tạo"
        ogImage="https://www.chamchi.vn/og-image.png"
        ogType="website"
        canonicalUrl="https://www.chamchi.vn/chung-chi-google-ai"
      />

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
      <Address />
    </>
  );
}
