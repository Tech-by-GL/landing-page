"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import {
  MapPin,
  ArrowRight,
  Clock,
  Users,
  Target,
  CheckCircle,
  Star,
  BookOpen,
  Award,
  Zap,
  Play,
  Calendar,
  TrendingUp,
  ArrowDown,
  Sparkles,
} from "lucide-react"

const progressionCourses = [
  {
    id: 1,
    slug: "luyen-thi-ket",
    name: "KET",
    fullName: "Key English Test",
    level: "A2 - Cơ bản",
    step: 1,
    duration: "3 tháng",
    sessions: "48 buổi học",
    classSize: "10-15 học viên",
    successRate: "98%",
    price: "2.500.000đ",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: "🎯",
    description: "Bước đầu tiên trong hành trình chinh phục tiếng Anh quốc tế",
    detailedDescription:
      "Khóa học KET giúp học sinh xây dựng nền tảng tiếng Anh vững chắc theo chuẩn Cambridge. Thông qua các dự án STEAM thú vị, học sinh không chỉ học từ vựng và ngữ pháp mà còn phát triển tư duy logic và khả năng giao tiếp tự nhiên.",
    prerequisites: ["Học sinh lớp 6-9", "Kiến thức tiếng Anh cơ bản", "Đam mê khám phá và học hỏi"],
    outcomes: [
      "Đạt chứng chỉ Cambridge KET (A2)",
      "Giao tiếp cơ bản trong các tình huống hàng ngày",
      "Nền tảng vững chắc cho PET",
      "Tự tin với 4 kỹ năng cơ bản",
      "Tư duy khoa học qua các dự án STEAM",
    ],
    steamProjects: [
      "Smart Home Model - Thiết kế nhà thông minh với cảm biến",
      "Weather Station - Trạm quan sát thời tiết tự động",
      "Recycling Robot - Robot phân loại rác thải",
    ],
    skills: ["Basic Listening", "Reading Comprehension", "Simple Writing", "Everyday Speaking"],
    nextCourse: "PET",
    targetScore: "Pass (120-132 điểm)",
  },
  {
    id: 2,
    slug: "luyen-thi-pet",
    name: "PET",
    fullName: "Preliminary English Test",
    level: "B1 - Trung cấp",
    step: 2,
    duration: "4 tháng",
    sessions: "64 buổi học",
    classSize: "10-15 học viên",
    successRate: "95%",
    price: "3.200.000đ",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: "🚀",
    description: "Nâng cao kỹ năng và tự tin giao tiếp trong môi trường học thuật",
    detailedDescription:
      "Khóa học PET phát triển khả năng sử dụng tiếng Anh trong các tình huống phức tạp hơn. Học sinh tham gia các dự án STEAM nâng cao, học cách thuyết trình, tranh luận và viết báo cáo khoa học bằng tiếng Anh.",
    prerequisites: ["Đã có chứng chỉ KET hoặc trình độ A2", "Học sinh lớp 8-12", "Hoàn thành khóa KET tại Chamchi"],
    outcomes: [
      "Đạt chứng chỉ Cambridge PET (B1)",
      "Giao tiếp tự tin trong môi trường học tập",
      "Chuẩn bị tốt cho IELTS",
      "Kỹ năng viết luận cơ bản",
      "Thuyết trình dự án bằng tiếng Anh",
    ],
    steamProjects: [
      "Solar Car Challenge - Thiết kế xe năng lượng mặt trời",
      "Water Purification System - Hệ thống lọc nước thông minh",
      "3D Printing Workshop - Xưởng in 3D và thiết kế sản phẩm",
    ],
    skills: ["Advanced Grammar", "Essay Writing", "Presentation Skills", "Critical Thinking"],
    nextCourse: "IELTS",
    targetScore: "Pass/Merit/Distinction (140-170 điểm)",
  },
  {
    id: 3,
    slug: "luyen-thi-ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    level: "B2-C1 - Cao cấp",
    step: 3,
    duration: "6 tháng",
    sessions: "96 buổi học",
    classSize: "8-12 học viên",
    successRate: "92%",
    price: "4.800.000đ",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    icon: "🏆",
    description: "Chinh phục chứng chỉ quốc tế cho du học và định cư",
    detailedDescription:
      "Khóa học IELTS đỉnh cao giúp học sinh đạt trình độ tiếng Anh học thuật quốc tế. Thông qua các dự án STEAM phức tạp, học sinh phát triển khả năng nghiên cứu, phân tích và trình bày ý tưởng một cách chuyên nghiệp.",
    prerequisites: [
      "Đã có chứng chỉ PET hoặc trình độ B1",
      "Học sinh lớp 10-12, sinh viên",
      "Hoàn thành khóa PET tại Chamchi",
    ],
    outcomes: [
      "Đạt điểm IELTS 6.0-8.0",
      "Sẵn sàng cho du học quốc tế",
      "Kỹ năng học thuật chuyên sâu",
      "Tư duy phản biện bằng tiếng Anh",
      "Nghiên cứu và trình bày khoa học",
    ],
    steamProjects: [
      "AI Chatbot Development - Phát triển chatbot AI đa ngôn ngữ",
      "Sustainable City Design - Thiết kế thành phố bền vững",
      "Biomedical Innovation - Đổi mới trong y sinh học",
    ],
    skills: ["Academic Writing", "Research Skills", "Advanced Speaking", "Data Analysis"],
    nextCourse: "International Success",
    targetScore: "6.0-8.0 (tùy mục tiêu du học)",
  },
]

const steamMethodology = {
  title: "Phương pháp STEAM",
  subtitle: "Học tiếng Anh qua dự án thực tế",
  description:
    "STEAM không phải là một cấp độ riêng biệt, mà là phương pháp giảng dạy độc đáo được áp dụng xuyên suốt tất cả các khóa học tại Chamchi.",
  components: [
    {
      letter: "S",
      title: "Science",
      titleVi: "Khoa học",
      description: "Học từ vựng khoa học qua thí nghiệm thực tế",
      color: "from-blue-500 to-blue-600",
    },
    {
      letter: "T",
      title: "Technology",
      titleVi: "Công nghệ",
      description: "Sử dụng công nghệ hiện đại trong học tập",
      color: "from-green-500 to-green-600",
    },
    {
      letter: "E",
      title: "Engineering",
      titleVi: "Kỹ thuật",
      description: "Giải quyết vấn đề bằng tiếng Anh",
      color: "from-orange-500 to-orange-600",
    },
    {
      letter: "A",
      title: "Arts",
      titleVi: "Nghệ thuật",
      description: "Sáng tạo và thể hiện bằng ngôn ngữ",
      color: "from-purple-500 to-purple-600",
    },
    {
      letter: "M",
      title: "Mathematics",
      titleVi: "Toán học",
      description: "Tư duy logic và phân tích số liệu",
      color: "from-red-500 to-red-600",
    },
  ],
}

export function LearningRoadmap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "projects">("overview")

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
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" id="roadmap" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            <span>Lộ trình học tập</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lộ trình chinh phục <span className="text-primary">chứng chỉ quốc tế</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Hành trình từ KET đến IELTS với phương pháp STEAM độc đáo - Mỗi bước tiến đều vững chắc và bền vững
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm text-gray-600">Tỷ lệ đỗ KET</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-600">Tỷ lệ đỗ PET</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-purple-600">92%</div>
              <div className="text-sm text-gray-600">Tỷ lệ đỗ IELTS</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-gray-600">Học viên thành công</div>
            </div>
          </div>
        </motion.div> */}

        {/* Linear Progression Roadmap */}
        <motion.div variants={container} initial="hidden" animate={controls} className="mb-16">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full transform -translate-y-1/2 z-0"></div>

              {/* Course Cards */}
              <div className="relative z-10 grid grid-cols-3 gap-8">
                {progressionCourses.map((course, index) => (
                  <motion.div key={course.id} variants={item} className="relative">
                    {/* Connection Point */}
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-current rounded-full z-20"
                      style={{ color: course.color.split(" ")[1] }}
                    ></div>

                    {/* Course Card */}
                    <motion.div
                      className={`${course.bgColor} ${course.borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer mt-16`}
                      onClick={() => setSelectedCourse(course.id)}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div
                          className={`w-8 h-8 bg-gradient-to-r ${course.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                        >
                          {course.step}
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="text-center pt-4">
                        <div className="text-4xl mb-3">{course.icon}</div>
                        <div
                          className={`inline-block bg-gradient-to-r ${course.color} text-white px-4 py-2 rounded-full text-lg font-bold mb-3`}
                        >
                          {course.name}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.level}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                        {/* Key Metrics */}
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Thời gian:</span>
                            <span className="font-medium">{course.duration}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Tỷ lệ đỗ:</span>
                            <span className="font-medium text-green-600">{course.successRate}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Mục tiêu:</span>
                            <span className="font-medium text-primary">{course.targetScore}</span>
                          </div>
                        </div>

                        <button className="mt-4 w-full bg-white/80 hover:bg-white text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                          Xem chi tiết
                        </button>
                      </div>
                    </motion.div>

                    {/* Arrow to Next Course */}
                    {index < progressionCourses.length - 1 && (
                      <motion.div
                        className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-30"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.3 }}
                      >
                        <div className="bg-white rounded-full p-2 shadow-md">
                          <ArrowRight className="h-5 w-5 text-primary" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-8">
            {progressionCourses.map((course, index) => (
              <motion.div key={course.id} variants={item} className="relative">
                {/* Course Card */}
                <motion.div
                  className={`${course.bgColor} ${course.borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                  onClick={() => setSelectedCourse(course.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Step Badge */}
                  <div className="absolute -top-3 -left-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${course.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                    >
                      {course.step}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    {/* Course Icon & Name */}
                    <div className="text-center sm:text-left">
                      <div className="text-3xl mb-2">{course.icon}</div>
                      <div
                        className={`inline-block bg-gradient-to-r ${course.color} text-white px-3 py-1 rounded-full text-sm font-bold mb-2`}
                      >
                        {course.name}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{course.level}</h3>
                    </div>

                    {/* Course Details */}
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-white/60 rounded-lg p-2">
                          <div className="text-gray-600">Thời gian</div>
                          <div className="font-medium">{course.duration}</div>
                        </div>
                        <div className="bg-white/60 rounded-lg p-2">
                          <div className="text-gray-600">Tỷ lệ đỗ</div>
                          <div className="font-medium text-green-600">{course.successRate}</div>
                        </div>
                      </div>

                      <button className="mt-3 w-full bg-white/80 hover:bg-white text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow to Next Course */}
                {index < progressionCourses.length - 1 && (
                  <motion.div
                    className="flex justify-center my-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.3 }}
                  >
                    <div className="bg-white rounded-full p-3 shadow-md">
                      <ArrowDown className="h-5 w-5 text-primary" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* STEAM Methodology Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Phương pháp độc quyền</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{steamMethodology.title}</h3>
            <p className="text-lg text-gray-700 mb-2">{steamMethodology.subtitle}</p>
            <p className="text-gray-600 max-w-3xl mx-auto">{steamMethodology.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {steamMethodology.components.map((component, index) => (
              <motion.div
                key={component.letter}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${component.color} rounded-2xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <span className="text-white font-bold text-xl md:text-2xl">{component.letter}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{component.titleVi}</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{component.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 text-sm md:text-base">
              <strong className="text-primary">Tất cả khóa học</strong> tại Chamchi đều sử dụng phương pháp STEAM để đảm
              bảo học sinh
              <strong className="text-accent"> học tiếng Anh một cách tự nhiên và hiệu quả</strong>
            </p>
          </div>
        </motion.div> */}

        {/* Course Comparison Table */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          <div className="bg-gradient-to-r from-primary to-accent p-6">
            <h3 className="text-2xl font-bold text-white text-center">So sánh chi tiết các khóa học</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-4 text-left text-sm font-medium text-gray-900 min-w-[120px]">Tiêu chí</th>
                  {progressionCourses.map((course) => (
                    <th
                      key={course.id}
                      className="px-4 py-4 text-center text-sm font-medium text-gray-900 min-w-[150px]"
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-2xl mb-1">{course.icon}</span>
                        <span className="font-bold">{course.name}</span>
                        <span className="text-xs text-gray-600">{course.level}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Mục tiêu điểm số</td>
                  {progressionCourses.map((course) => (
                    <td key={course.id} className="px-4 py-4 text-sm text-center">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {course.targetScore}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Thời gian học</td>
                  {progressionCourses.map((course) => (
                    <td key={course.id} className="px-4 py-4 text-sm text-center font-medium">
                      {course.duration}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Số buổi học</td>
                  {progressionCourses.map((course) => (
                    <td key={course.id} className="px-4 py-4 text-sm text-center">
                      {course.sessions}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Sĩ số lớp</td>
                  {progressionCourses.map((course) => (
                    <td key={course.id} className="px-4 py-4 text-sm text-center">
                      {course.classSize}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Tỷ lệ thành công</td>
                  {progressionCourses.map((course) => (
                    <td key={course.id} className="px-4 py-4 text-sm text-center">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {course.successRate}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Học phí</td>
                  {progressionCourses.map((course) => (
                    <td key={course.id} className="px-4 py-4 text-sm text-center font-semibold text-primary">
                      {course.price}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div> */}

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sẵn sàng bắt đầu hành trình?</h3>
            <p className="text-gray-700 mb-6">
              Đăng ký tư vấn miễn phí để được định hướng lộ trình học tập phù hợp nhất với trình độ hiện tại
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="h-5 w-5" />
                Đặt lịch tư vấn miễn phí
              </motion.button>
              <motion.button
                className="btn-accent flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-5 w-5" />
                Học thử trực tuyến
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const course = progressionCourses.find((c) => c.id === selectedCourse)
                if (!course) return null

                return (
                  <div>
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{course.icon}</div>
                          <div>
                            <h3 className="text-2xl font-bold">{course.fullName}</h3>
                            <p className="text-white/90">{course.level}</p>
                            <p className="text-white/80 text-sm">Bước {course.step} trong lộ trình học tập</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedCourse(null)}
                          className="text-white/80 hover:text-white text-2xl"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-gray-200">
                      <div className="flex">
                        {[
                          { id: "overview", label: "Tổng quan", icon: BookOpen },
                          { id: "curriculum", label: "Chương trình", icon: TrendingUp },
                          { id: "projects", label: "Dự án STEAM", icon: Zap },
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                              activeTab === tab.id
                                ? "text-primary border-b-2 border-primary"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            <tab.icon className="h-4 w-4" />
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {activeTab === "overview" && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Mô tả khóa học</h4>
                            <p className="text-gray-700 leading-relaxed">{course.detailedDescription}</p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-3">Điều kiện đầu vào</h4>
                              <ul className="space-y-2">
                                {course.prerequisites.map((req, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-700 text-sm">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-3">Kết quả đạt được</h4>
                              <ul className="space-y-2">
                                {course.outcomes.map((outcome, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <Star className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-700 text-sm">{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                              <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                              <div className="font-bold text-gray-900">{course.duration}</div>
                              <div className="text-sm text-gray-600">Thời gian</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                              <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                              <div className="font-bold text-gray-900">{course.classSize}</div>
                              <div className="text-sm text-gray-600">Sĩ số lớp</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                              <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                              <div className="font-bold text-gray-900">{course.successRate}</div>
                              <div className="text-sm text-gray-600">Tỷ lệ đỗ</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                              <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                              <div className="font-bold text-gray-900">{course.price}</div>
                              <div className="text-sm text-gray-600">Học phí</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "curriculum" && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold text-gray-900">Kỹ năng trọng tâm</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {course.skills.map((skill, index) => (
                              <div
                                key={index}
                                className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-center font-medium text-sm"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 bg-blue-50 rounded-lg p-4">
                            <h5 className="font-bold text-gray-900 mb-2">Phương pháp STEAM được áp dụng:</h5>
                            <p className="text-gray-600 text-sm">
                              Tất cả nội dung học tập đều được tích hợp với các dự án STEAM thực tế, giúp học sinh học
                              tiếng Anh một cách tự nhiên và hiệu quả thông qua việc giải quyết các vấn đề khoa học và
                              công nghệ.
                            </p>
                          </div>
                        </div>
                      )}

                      {activeTab === "projects" && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold text-gray-900">Dự án STEAM tiêu biểu</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {course.steamProjects.map((project, index) => (
                              <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                              >
                                <div className="text-2xl mb-2">⚗️</div>
                                <h5 className="font-bold text-gray-900 mb-2">{project.split(" - ")[0]}</h5>
                                <p className="text-sm text-gray-600">{project.split(" - ")[1]}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 bg-accent/10 rounded-lg p-4">
                            <h5 className="font-bold text-gray-900 mb-2">Lợi ích của dự án STEAM:</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Học tiếng Anh qua ngữ cảnh thực tế</li>
                              <li>• Phát triển tư duy phản biện và sáng tạo</li>
                              <li>• Kỹ năng thuyết trình và làm việc nhóm</li>
                              <li>• Chuẩn bị cho môi trường học tập quốc tế</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-200 p-6">
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                          href={`/courses/${course.slug}`}
                          className="btn-primary flex items-center justify-center gap-2"
                        >
                          <BookOpen className="h-4 w-4" />
                          Xem chi tiết khóa học
                        </Link>
                        <button className="btn-accent flex items-center justify-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Đăng ký học thử
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
