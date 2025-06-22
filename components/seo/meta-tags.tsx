import Head from "next/head"

interface MetaTagsProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
}

export function MetaTags({
  title = "Anh Ngữ Chăm Chỉ",
  description = "Chamchi là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua phương pháp STEAM kết hợp với Trí Tuệ Nhân Tạo. Chúng tôi chuẩn bị cho học sinh các chứng chỉ quốc tế như KET, PET và IELTS.",
  keywords = "Anh Ngữ Chăm Chỉ, Trung Tâm Anh Ngữ, Chăm Chỉ, Trung Tâm Chăm Chỉ, Anh Ngữ Phường Trường Thọ, Chamchi, tiếng Anh, STEAM, KET, PET, IELTS, trung tâm anh ngữ, học tiếng Anh, luyện thi chứng chỉ, tiếng Anh cho học sinh",
  ogImage = "/og-image.png",
  ogType = "website",
  canonicalUrl = "https://chamchi.vn",
}: MetaTagsProps) {
  // const fullTitle = title.includes("Chamchi") ? title : `${title} | Chamchi`

  return (
    <Head>
      {/* Thẻ meta cơ bản */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Vietnamese" />
      <meta name="author" content="Chamchi" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:site_name" content="Chamchi" />
    </Head>
  )
}
