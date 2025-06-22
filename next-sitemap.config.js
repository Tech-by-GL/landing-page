/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.chamchi.vn",

  // Tự động tạo robots.txt
  generateRobotsTxt: true,

  // Tạo sitemap index (sitemap.xml → chứa sitemap-0.xml + các file khác nếu có)
  generateIndexSitemap: true,

  // Nếu số lượng URL lớn hơn giá trị này thì sẽ chia nhiều sitemap nhỏ
  sitemapSize: 7000,

  // Cấu hình mặc định cho mỗi trang
  changefreq: "weekly",
  priority: 0.7,

  // Loại trừ những route không cần index
  exclude: ["/admin/*", "/api/*"],

  // Cấu hình thêm cho robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        disallow: "/images/private/*",
      },
    ],
    // Thêm các sitemap bổ sung ngoài sitemap tự động
    additionalSitemaps: ["https://www.chamchi.vn/my-custom-sitemap.xml"],
  },
};
