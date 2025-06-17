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
  title = "Chamchi - Trung tâm Anh ngữ STEAM",
  description = "Chamchi là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua phương pháp STEAM cho học sinh từ lớp 6 trở lên. Chúng tôi chuẩn bị cho học sinh các chứng chỉ quốc tế như KET, PET và IELTS.",
  keywords = "Chamchi, tiếng Anh, STEAM, KET, PET, IELTS, trung tâm anh ngữ, học tiếng Anh, luyện thi chứng chỉ, tiếng Anh cho học sinh",
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonicalUrl = "https://chamchi.edu.vn",
}: MetaTagsProps) {
  const fullTitle = title.includes("Chamchi") ? title : `${title} | Chamchi`

  return (
    <Head>
      {/* Thẻ meta cơ bản */}
      <title>{fullTitle}</title>
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
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:site_name" content="Chamchi" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Head>
  )
}
