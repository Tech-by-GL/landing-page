import Script from "next/script"

interface OrganizationSchemaProps {
  name?: string
  url?: string
  logo?: string
  description?: string
  sameAs?: string[]
}

export function OrganizationSchema({
  name = "Anh Ngữ Chăm Chỉ",
  url = "https://chamchi.vn",
  logo = "https://chamchi.vn/logo.png",
  description = "Chamchi là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua phương pháp STEAM kết hợp Trí Tuệ Nhân Tạo.",
  sameAs = ["https://www.facebook.com/ChamChiLanguageSchool/"],
}: OrganizationSchemaProps) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name,
    url,
    logo,
    description,
    sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Đường 8, Phường Trường Thọ",
      addressLocality: "Quận Thủ Đức",
      addressRegion: "TP. Hồ Chí Minh",
      postalCode: "70000",
      addressCountry: "VN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "0902-336-152",
      contactType: "customer service",
      email: "team@chamchi.vn",
      availableLanguage: ["Vietnamese", "English"],
    },
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  )
}

interface CourseSchemaProps {
  name: string
  description: string
  provider?: string
  url?: string
}

export function CourseSchema({
  name,
  description,
  provider = "Chamchi",
  url = "https://chamchi.vn",
}: CourseSchemaProps) {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: url,
    },
  }

  return (
    <Script
      id={`course-schema-${name.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
    />
  )
}

interface FAQSchemaProps {
  questions: {
    question: string
    answer: string
  }[]
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

interface WebsiteSchemaProps {
  name?: string
  url?: string
  description?: string
}

export function WebsiteSchema({
  name = "Anh Ngữ Chăm Chỉ",
  url = "https://chamchi.vn",
  description = "Chamchi là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua phương pháp STEAM cho học sinh từ lớp 6 trở lên.",
}: WebsiteSchemaProps) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: {
    name: string
    url: string
  }[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}
