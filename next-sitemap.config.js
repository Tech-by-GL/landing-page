/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.chamchi.vn',
    generateRobotsTxt: true,          // tạo robots.txt
    generateIndexSitemap: true,       // tạo sitemap-index.xml nếu nhiều sitemap
    sitemapSize: 7000,                // chia nhỏ nếu > 7000 url (mặc định 5000)
    changefreq: 'weekly',             // tần suất cập nhật mặc định
    priority: 0.7,                    // độ ưu tiên mặc định
    // Ngoại lệ (nếu cần)
    exclude: ['/admin/*', '/api/*'],  // bỏ qua các route này
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.chamchi.vn/my-custom-sitemap.xml',
      ],
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: 'Googlebot-Image', disallow: '/images/private/*' },
      ],
    },
  };