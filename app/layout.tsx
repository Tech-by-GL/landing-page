import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { FloatingButtons } from "@/components/floating-buttons"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/structured-data"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ThemeProvider } from "@/components/theme-provider"
import Head from "next/head";

const nunito = Nunito({
  subsets: ["vietnamese", "latin"],
  display: "swap",
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://chamchi.vn"),
  title: {
    default: "Anh Ngữ Chăm Chỉ",
    template: "%s | Chamchi",
  },
  description:
    "Chamchi là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua phương pháp STEAM Kết hợp Trí Tuệ Nhân Tạo. Chúng tôi chuẩn bị cho học sinh các chứng chỉ quốc tế như KET, PET và IELTS.",
  keywords: [
    "Chamchi",
    "Chăm Chỉ",
    "Anh Ngữ Chăm Chỉ",
    "trung tâm Anh ngữ Chăm Chỉ",
    "tiếng Anh",
    "STEAM",
    "KET",
    "PET",
    "IELTS",
    "trung tâm anh ngữ",
    "học tiếng Anh",
    "luyện thi chứng chỉ",
    "tiếng Anh cho học sinh",
    "phương pháp học tiếng Anh",
    "tiếng Anh STEAM",
    "luyện thi tiếng Anh",
    "trung tâm tiếng Anh uy tín",
    "trung tâm tiếng Anh ở Thủ Đức",
    "trung tâm anh ngữ ở Thủ Đức",
    "trung tâm anh ngữ kết hợp máy tính",
  ],
  authors: [{ name: "Chamchi", url: "https://chamchi.vn" }],
  creator: "Chamchi",
  publisher: "Chamchi",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://chamchi.vn",
    title: "Chamchi - Trung tâm Anh ngữ STEAM & Trí Tuệ Nhân Tạo",
    description:
      "Chăm Chỉ là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua phương pháp STEAM kết hợp Trí Tuệ Nhân Tạo.",
    siteName: "Anh Ngữ Chăm Chỉ",
    images: [
      {
        url: "https://chamchi.vn/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anh Ngữ Chăm Chỉ - Trung tâm Anh ngữ STEAM & Trí Tuệ Nhân Tạo",
      },
    ],
    
  },
  icons: {
    icon: "/favicon.ico",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Chamchi - Trung tâm Anh ngữ STEAM",
  //   description:
  //     "Chamchi là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua phương pháp STEAM cho học sinh từ lớp 6 trở lên.",
  //   images: ["https://chamchi.vn/og-image.png"],
  //   creator: "@chamchi",
  //   site: "@chamchi",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
  category: "education",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={nunito.variable}>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Anh Ngữ Chăm Chỉ</title>
        <meta name="description" content={`
          Anh Ngữ Chăm Chỉ là trung tâm Anh Ngữ ứng dụng trí tuệ nhân tạo (AI) vào dạy học để nâng cao chất lượng giảng dạy. Chúng tôi không chạy theo kinh doanh – chỉ tập trung vào học trò. Tại đây, học viên được chăm sóc kỹ lưỡng và học tiếng Anh theo cách hiệu quả nhất.
          `} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Anh Ngữ Chăm Chỉ",
              alternateName: "Chamchi",
              url: "https://chamchi.vn",
              logo: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/ChamChiHatLogo.png",
            }),
          }}
        />
      </Head>

      <body className="min-h-screen bg-white flex flex-col">
        <ThemeProvider defaultTheme="light">
          <OrganizationSchema />
          <WebsiteSchema />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
          <MobileNavigation />
        </ThemeProvider>

        
      </body>
    </html>
  )
}
