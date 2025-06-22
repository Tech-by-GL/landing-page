import Head from "next/head"
import Script from "next/script"

interface EnhancedSEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  locale?: string
  siteName?: string
  noindex?: boolean
  alternateLanguages?: {
    lang: string
    url: string
  }[]
  articleSchema?: {
    headline: string
    image: string
    datePublished: string
    dateModified?: string
    author: {
      name: string
      url?: string
    }
  }
  courseSchema?: {
    name: string
    description: string
    provider: string
    url: string
  }
  breadcrumbSchema?: {
    items: {
      name: string
      url: string
    }[]
  }
  faqSchema?: {
    questions: {
      question: string
      answer: string
    }[]
  }
}

export function EnhancedSEO({
  title,
  description,
  canonical = typeof window !== "undefined" ? window.location.href : "",
  ogImage = "https://chamchi.vn/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = [],
  author = "Chamchi",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = "vi_VN",
  siteName = "Anh Ngữ Chăm Chỉ",
  noindex = false,
  alternateLanguages = [],
  articleSchema,
  courseSchema,
  breadcrumbSchema,
  faqSchema,
}: EnhancedSEOProps) {
  // Format the title
  const formattedTitle = title.includes("Chamchi") ? title : `${title} | Chamchi`

  // Generate JSON-LD schema
  const generateSchemaMarkup = () => {
    const schemas = []

    // Website schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: "https://chamchi.vn",
      description: description,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://chamchi.vn/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    })

    // Organization schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Chamchi",
      url: "https://chamchi.vn",
      logo: "https://chamchi.vn/logo.png",
      description:
        "Chamchi là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua phương pháp STEAM cho học sinh từ lớp 6 trở lên.",
      sameAs: ["https://facebook.com/chamchi", "https://instagram.com/chamchi", "https://youtube.com/chamchi"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Đường Nguyễn Huệ",
        addressLocality: "Quận 1",
        addressRegion: "TP. Hồ Chí Minh",
        postalCode: "70000",
        addressCountry: "VN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+84-123-456-789",
        contactType: "customer service",
        email: "info@chamchi.vn",
        availableLanguage: ["Vietnamese", "English"],
      },
    })

    // Article schema
    if (articleSchema) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: articleSchema.headline,
        image: articleSchema.image,
        datePublished: articleSchema.datePublished,
        dateModified: articleSchema.dateModified || articleSchema.datePublished,
        author: {
          "@type": "Person",
          name: articleSchema.author.name,
          url: articleSchema.author.url,
        },
        publisher: {
          "@type": "Organization",
          name: "Chamchi",
          logo: {
            "@type": "ImageObject",
            url: "https://chamchi.vn/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonical,
        },
      })
    }

    // Course schema
    if (courseSchema) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Course",
        name: courseSchema.name,
        description: courseSchema.description,
        provider: {
          "@type": "Organization",
          name: courseSchema.provider,
          sameAs: courseSchema.url,
        },
      })
    }

    // Breadcrumb schema
    if (breadcrumbSchema) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbSchema.items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      })
    }

    // FAQ schema
    if (faqSchema) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSchema.questions.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
      })
    }

    return schemas
  }

  const schemaMarkup = generateSchemaMarkup()

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{formattedTitle}</title>
        <meta name="description" content={description} />
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
        <meta name="author" content={author} />
        {noindex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        )}

        {/* Canonical Link */}
        <link rel="canonical" href={canonical} />

        {/* Alternate Languages */}
        {alternateLanguages.map((alt) => (
          <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.url} />
        ))}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={locale} />
        {publishedTime && <meta property="article:published_time" content={publishedTime} />}
        {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        {section && <meta property="article:section" content={section} />}
        {tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@chamchi" />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Vietnamese" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
      </Head>

      {/* JSON-LD Schema */}
      {schemaMarkup.map((schema, index) => (
        <Script
          key={`schema-${index}`}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
