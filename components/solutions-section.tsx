"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Play, Pause, Volume2, BookOpen, Mic, Headphones } from "lucide-react"

const solutions = [
  {
    id: 1,
    icon: Mic,
    title: "Khắc phục phát âm sai",
    problem: "Nhiều học sinh gặp khó khăn trong việc phát âm chính xác các âm tiếng Anh",
    solution: "Chamchi sử dụng công nghệ AI để phân tích phát âm và đưa ra phản hồi tức thì",
    methodology: [
      "Sử dụng phần mềm phân tích giọng nói chuyên nghiệp",
      "Luyện tập phát âm theo từng âm vị cụ thể",
      "Thực hành với giáo viên bản ngữ 1-1",
      "Ghi âm và so sánh với chuẩn phát âm quốc tế",
    ],
    image: "/placeholder.svg?height=400&width=600",
    video: "/videos/pronunciation-training.mp4",
    results: "95% học viên cải thiện phát âm sau 3 tháng",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Cải thiện kỹ năng đọc hiểu",
    problem: "Học sinh thường gặp khó khăn trong việc hiểu nội dung và phân tích văn bản tiếng Anh",
    solution: "Phương pháp đọc hiểu tích cực kết hợp với các dự án STEAM thực tế",
    methodology: [
      "Kỹ thuật đọc lướt (Skimming) và đọc tìm thông tin (Scanning)",
      "Phân tích cấu trúc văn bản và từ vựng trong ngữ cảnh",
      "Thực hành với các chủ đề khoa học và công nghệ",
      "Sử dụng sơ đồ tư duy để tổ chức thông tin",
    ],
    image: "/placeholder.svg?height=400&width=600",
    video: "/videos/reading-comprehension.mp4",
    results: "90% học viên tăng tốc độ đọc và hiểu bài",
  },
  {
    id: 3,
    icon: Headphones,
    title: "Nâng cao khả năng nghe hiểu",
    problem: "Học sinh khó theo kịp tốc độ nói tự nhiên và hiểu các giọng điệu khác nhau",
    solution: "Hệ thống luyện nghe đa cấp độ với nội dung STEAM hấp dẫn",
    methodology: [
      "Luyện nghe từ chậm đến nhanh một cách có hệ thống",
      "Tiếp xúc với nhiều giọng điệu: Anh, Mỹ, Úc",
      "Sử dụng video khoa học và công nghệ làm tài liệu",
      "Kỹ thuật ghi chú và dự đoán nội dung",
    ],
    image: "/placeholder.svg?height=400&width=600",
    video: "/videos/listening-skills.mp4",
    results: "88% học viên cải thiện khả năng nghe hiểu",
  },
]

export function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()
  const [activeTab, setActiveTab] = useState(0)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

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
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const toggleVideo = (index: number) => {
    setPlayingVideo(playingVideo === index ? null : index)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50" id="solutions" ref={ref}>
      <div className="container-custom pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Giải pháp <span className="text-primary">đột phá</span> cho từng thách thức
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Chamchi hiểu rõ những khó khăn mà học sinh gặp phải khi học tiếng Anh. Chúng tôi đã phát triển các giải pháp
            cụ thể, khoa học và hiệu quả để giúp học sinh vượt qua mọi rào cản.
          </p>
        </motion.div>

        {/* Solution Tabs */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <motion.button
                key={solution.id}
                variants={item}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-primary/10 hover:text-primary shadow-md"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="h-5 w-5" />
                <span className="hidden sm:inline">{solution.title}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Active Solution Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                {React.createElement(solutions[activeTab].icon, {
                  className: "h-8 w-8 text-primary",
                })}
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{solutions[activeTab].title}</h3>
              </div>

              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                  <h4 className="font-bold text-red-800 mb-2">🚫 Thách thức:</h4>
                  <p className="text-red-700">{solutions[activeTab].problem}</p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <h4 className="font-bold text-green-800 mb-2">✅ Giải pháp Chamchi:</h4>
                  <p className="text-green-700">{solutions[activeTab].solution}</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <h4 className="font-bold text-blue-800 mb-3">🎯 Phương pháp cụ thể:</h4>
                  <ul className="space-y-2">
                    {solutions[activeTab].methodology.map((method, index) => (
                      <li key={index} className="flex items-start gap-2 text-blue-700">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <h4 className="font-bold text-yellow-800 mb-2">📊 Kết quả:</h4>
                  <p className="text-yellow-700 font-semibold">{solutions[activeTab].results}</p>
                </div>
              </div>
            </div>

            {/* Media Side */}
            <div className="relative bg-gray-100">
              <div className="relative h-full min-h-[400px]">
                <Image
                  src={solutions[activeTab].image || "/placeholder.svg"}
                  alt={solutions[activeTab].title}
                  fill
                  className="object-cover"
                />

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <motion.button
                    onClick={() => toggleVideo(activeTab)}
                    className="bg-white/90 hover:bg-white text-primary rounded-full p-4 shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {playingVideo === activeTab ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                  </motion.button>
                </div>

                {/* Video Player (simulated) */}
                {playingVideo === activeTab && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black flex items-center justify-center"
                  >
                    <div className="text-white text-center">
                      <Volume2 className="h-12 w-12 mx-auto mb-4 animate-pulse" />
                      <p className="text-lg">Video đang phát...</p>
                      <p className="text-sm opacity-75">{solutions[activeTab].title}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-primary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sẵn sàng trải nghiệm phương pháp học đột phá?</h3>
            <p className="text-gray-700 mb-6">
              Đăng ký ngay để được tư vấn miễn phí và trải nghiệm buổi học thử không mất phí
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Đăng ký học thử miễn phí
              </motion.button>
              <motion.button className="btn-accent" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Tư vấn trực tiếp
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
