"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import {
  Globe,
  BookOpen,
  Brain,
  Users,
  Lightbulb,
  Award,
  Heart,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

const philosophyPillars = [
  {
    icon: Globe,
    title: "Chuẩn quốc tế, không chỉ điểm số",
    description:
      "Chúng tôi hướng đến việc phát triển năng lực tiếng Anh thực sự theo chuẩn quốc tế Cambridge và IELTS, thay vì chỉ tập trung vào điểm số trong các kỳ thi truyền thống.",
    color: "from-blue-500 to-cyan-600",
    stats: "98% học viên đạt chứng chỉ quốc tế",
  },
  {
    icon: Brain,
    title: "Tiếng Anh như ngôn ngữ thứ hai",
    description:
      "Thông qua phương pháp STEAM, học sinh không chỉ học 'về' tiếng Anh mà thực sự sử dụng tiếng Anh như một công cụ để khám phá, sáng tạo và giải quyết vấn đề.",
    color: "from-purple-500 to-violet-600",
    stats: "100% môi trường tiếng Anh",
  },
  {
    icon: Heart,
    title: "Phát triển toàn diện con người",
    description:
      "Chúng tôi tin rằng giáo dục không chỉ là truyền đạt kiến thức mà còn là nuôi dưỡng tư duy, kỹ năng sống và nhân cách của từng học sinh.",
    color: "from-pink-500 to-rose-600",
    stats: "5 lĩnh vực phát triển đồng thời",
  },
  {
    icon: Lightbulb,
    title: "Học qua trải nghiệm thực tế",
    description:
      "Mỗi bài học đều gắn liền với dự án thực tế, giúp học sinh hiểu sâu và nhớ lâu kiến thức thông qua việc ứng dụng vào cuộc sống.",
    color: "from-orange-500 to-amber-600",
    stats: "3-4 tuần mỗi dự án STEAM",
  },
]

export const traditionalVsModern = {
  traditional: {
    title: "Phương pháp truyền thống",
    icon: "📚",
    characteristics: [
      "Tập trung vào điểm số trong trường",
      "Học thuộc lòng từ vựng và ngữ pháp",
      "Ít cơ hội thực hành giao tiếp",
      "Học tách biệt với thực tế",
      "Đánh giá qua bài kiểm tra viết",
    ],
    color: "bg-gray-100 border-gray-300",
    textColor: "text-gray-600",
  },
  modern: {
    title: "Phương pháp Chamchi",
    icon: "🚀",
    characteristics: [
      "Hướng đến chứng chỉ quốc tế",
      "Học qua dự án và trải nghiệm",
      "Giao tiếp tự nhiên trong môi trường STEAM",
      "Ứng dụng tiếng Anh vào khoa học & công nghệ",
      "Đánh giá toàn diện 4 kỹ năng",
    ],
    color: "bg-primary/10 border-primary/30",
    textColor: "text-primary",
  },
}

const developmentAreas = [
  {
    area: "Ngôn ngữ",
    description: "4 kỹ năng tiếng Anh theo chuẩn quốc tế",
    icon: "🗣️",
    skills: ["Listening", "Speaking", "Reading", "Writing"],
  },
  {
    area: "Tư duy",
    description: "Tư duy phản biện và giải quyết vấn đề",
    icon: "🧠",
    skills: ["Critical Thinking", "Problem Solving", "Analysis", "Creativity"],
  },
  {
    area: "Khoa học",
    description: "Kiến thức STEAM ứng dụng thực tế",
    icon: "🔬",
    skills: ["Science", "Technology", "Engineering", "Mathematics"],
  },
  {
    area: "Xã hội",
    description: "Kỹ năng giao tiếp và làm việc nhóm",
    icon: "👥",
    skills: ["Communication", "Collaboration", "Leadership", "Empathy"],
  },
  {
    area: "Cảm xúc",
    description: "Tự tin và đam mê học tập",
    icon: "❤️",
    skills: ["Confidence", "Motivation", "Resilience", "Growth Mindset"],
  },
]

export function EducationalPhilosophy() {
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
        duration: 0.8,
      },
    },
  }

  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"
      id="philosophy"
      ref={ref}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            <span>Triết lý giáo dục</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Giáo dục <span className="text-primary">toàn diện</span> cho tương lai
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tại Chamchi, chúng tôi không chỉ dạy tiếng Anh mà còn nuôi dưỡng những công dân toàn cầu có tư duy sáng tạo,
            kỹ năng 21st century và khả năng sử dụng tiếng Anh như ngôn ngữ thứ hai thực sự.
          </p>
        </motion.div>

        {/* Philosophy Pillars */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {philosophyPillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center shrink-0`}
                >
                  <pillar.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{pillar.description}</p>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    <TrendingUp className="h-3 w-3" />
                    {pillar.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Traditional vs Modern Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Sự khác biệt trong <span className="text-primary">phương pháp giáo dục</span>
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Chamchi đi tiên phong trong việc thay đổi cách tiếp cận giáo dục tiếng Anh, từ học thuộc lòng sang học qua
              trải nghiệm thực tế.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traditional Method */}
            <motion.div
              className={`${traditionalVsModern.traditional.color} border-2 rounded-2xl p-8`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{traditionalVsModern.traditional.icon}</div>
                <h4 className="text-xl font-bold text-gray-900">{traditionalVsModern.traditional.title}</h4>
              </div>
              <ul className="space-y-3">
                {traditionalVsModern.traditional.characteristics.map((char, index) => (
                  <li key={index} className={`flex items-start gap-3 ${traditionalVsModern.traditional.textColor}`}>
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 shrink-0"></span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Modern Method */}
            <motion.div
              className={`${traditionalVsModern.modern.color} border-2 rounded-2xl p-8 relative overflow-hidden`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 bg-accent text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                Phương pháp mới
              </div>

              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{traditionalVsModern.modern.icon}</div>
                <h4 className="text-xl font-bold text-gray-900">{traditionalVsModern.modern.title}</h4>
              </div>
              <ul className="space-y-3">
                {traditionalVsModern.modern.characteristics.map((char, index) => (
                  <li key={index} className={`flex items-start gap-3 ${traditionalVsModern.modern.textColor}`}>
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="font-medium">{char}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Arrow indicating progression */}
          <div className="flex justify-center mt-8">
            <motion.div
              className="flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
            >
              <span className="text-gray-600 font-medium">Tiến hóa giáo dục</span>
              <ArrowRight className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold">Tương lai</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Comprehensive Development Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <span className="text-primary">5 lĩnh vực</span> phát triển toàn diện
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Mỗi học sinh tại Chamchi được phát triển đồng thời trên 5 lĩnh vực quan trọng, tạo nền tảng vững chắc cho
              thành công trong tương lai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {developmentAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{area.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{area.area}</h4>
                <p className="text-sm text-gray-600 mb-4">{area.description}</p>

                <div className="space-y-1">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Representation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tiếng Anh như <span className="text-primary">ngôn ngữ thứ hai</span> thực sự
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tư duy bằng tiếng Anh</h4>
                    <p className="text-gray-700 text-sm">
                      Học sinh không dịch từ tiếng Việt mà tư duy trực tiếp bằng tiếng Anh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Sử dụng tự nhiên</h4>
                    <p className="text-gray-700 text-sm">
                      Tiếng Anh trở thành công cụ để học tập và khám phá, không phải mục tiêu cuối cùng
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Giao tiếp hiệu quả</h4>
                    <p className="text-gray-700 text-sm">
                      Tự tin giao tiếp trong mọi tình huống, từ học thuật đến đời sống hàng ngày
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="font-bold text-gray-900">Kết quả đạt được:</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Học sinh có thể sử dụng tiếng Anh để học các môn khoa học, thuyết trình dự án, và giao tiếp tự nhiên
                  như người bản ngữ trong lĩnh vực chuyên môn.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative h-64 md:h-80 bg-white rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Học sinh Chamchi sử dụng tiếng Anh tự nhiên trong dự án STEAM"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <h4 className="font-bold mb-1">Học sinh thuyết trình dự án AI</h4>
                    <p className="text-sm opacity-90">100% bằng tiếng Anh, tự tin và chuyên nghiệp</p>
                  </div>
                </div>

                {/* Success Indicators */}
                <div className="absolute top-4 left-4">
                  <div className="bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✓ Tư duy tiếng Anh
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✓ Giao tiếp tự nhiên
                  </div>
                </div>
              </div>

              {/* Floating Achievement Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-accent text-gray-900 px-4 py-2 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="text-sm font-bold">Chuẩn quốc tế</div>
                <div className="text-xs opacity-75">Cambridge & IELTS</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
              >
                <div className="text-sm font-bold">STEAM Method</div>
                <div className="text-xs opacity-90">Learn by Doing</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Cùng xây dựng tương lai cho con em chúng ta
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Tại Chamchi, chúng tôi không chỉ dạy tiếng Anh mà còn chuẩn bị cho các em những kỹ năng cần thiết để thành
              công trong thế giới toàn cầu hóa. Hãy để chúng tôi đồng hành cùng con em bạn trên hành trình này.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Tầm nhìn quốc tế</h4>
                <p className="text-sm text-gray-600">Chuẩn bị cho môi trường học tập và làm việc toàn cầu</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Tư duy sáng tạo</h4>
                <p className="text-sm text-gray-600">Phát triển khả năng tư duy phản biện và giải quyết vấn đề</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Thành công bền vững</h4>
                <p className="text-sm text-gray-600">Nền tảng vững chắc cho thành công trong học tập và sự nghiệp</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="h-5 w-5" />
                Tìm hiểu triết lý giáo dục
              </motion.button>
              <motion.button
                className="btn-accent flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="h-5 w-5" />
                Gặp gỡ đội ngũ giáo viên
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
