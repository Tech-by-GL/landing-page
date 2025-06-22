"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "5 phương pháp học tiếng Anh hiệu quả cho học sinh THCS",
    excerpt:
      "Khám phá 5 phương pháp học tiếng Anh hiệu quả giúp học sinh THCS cải thiện kỹ năng ngôn ngữ một cách nhanh chóng và bền vững.",
    image: "/placeholder.svg?height=200&width=300",
    date: "15/04/2023",
    slug: "5-phuong-phap-hoc-tieng-anh-hieu-qua",
  },
  {
    id: 2,
    title: "Làm thế nào để chuẩn bị tốt cho kỳ thi IELTS?",
    excerpt: "Những bí quyết và chiến lược giúp bạn chuẩn bị tốt nhất cho kỳ thi IELTS và đạt được điểm số mong muốn.",
    image: "/placeholder.svg?height=200&width=300",
    date: "02/05/2023",
    slug: "lam-the-nao-de-chuan-bi-tot-cho-ky-thi-ielts",
  },
  {
    id: 3,
    title: "Lợi ích của việc học tiếng Anh thông qua phương pháp STEAM",
    excerpt:
      "Tìm hiểu về những lợi ích tuyệt vời của việc học tiếng Anh thông qua phương pháp STEAM và cách áp dụng vào việc học hàng ngày.",
    image: "/placeholder.svg?height=200&width=300",
    date: "18/05/2023",
    slug: "loi-ich-cua-viec-hoc-tieng-anh-thong-qua-phuong-phap-steam",
  },
]

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-6 md:py-8 lg:py-10 bg-gray-50" id="blog" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Blog <span className="text-primary">Chamchi</span>
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Cập nhật những bài viết mới nhất về phương pháp học tiếng Anh, kỹ năng học tập và các thông tin hữu ích khác
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <meta itemProp="datePublished" content={post.date.split("/").reverse().join("-")} />
              <meta itemProp="author" content="Chamchi" />
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-40 md:h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    itemProp="image"
                  />
                </div>

                <div className="p-4 md:p-6">
                  <div className="text-xs md:text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2" itemProp="headline">
                    {post.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 line-clamp-3" itemProp="description">
                    {post.excerpt}
                  </p>

                  <span className="text-primary font-medium hover:underline text-sm md:text-base">Đọc thêm →</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
        >
          <Link href="/blog" className="btn-primary">
            Xem tất cả bài viết
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
