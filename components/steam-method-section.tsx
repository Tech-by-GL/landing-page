"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import {
  Atom,
  Cpu,
  Cog,
  Palette,
  Calculator,
  Clock,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Brain,
  Zap,
} from "lucide-react"

const steamComponents = [
  {
    id: "science",
    letter: "S",
    title: "Science",
    titleVi: "Khoa học",
    icon: Atom,
    color: "from-blue-500 to-blue-600",
    description: "Khám phá thế giới tự nhiên qua tiếng Anh",
    details: "Học sinh tìm hiểu các hiện tượng khoa học, thực hiện thí nghiệm và trình bày kết quả bằng tiếng Anh.",
    activities: ["Thí nghiệm khoa học", "Quan sát thiên nhiên", "Dự án nghiên cứu", "Thuyết trình khoa học"],
    duration: "Tuần 1-2",
  },
  {
    id: "technology",
    letter: "T",
    title: "Technology",
    titleVi: "Công nghệ",
    icon: Cpu,
    color: "from-green-500 to-green-600",
    description: "Ứng dụng công nghệ trong học tập",
    details: "Sử dụng các công cụ công nghệ hiện đại để tạo ra sản phẩm học tập và giao tiếp bằng tiếng Anh.",
    activities: ["Lập trình cơ bản", "Thiết kế ứng dụng", "Sử dụng AI", "Tạo nội dung số"],
    duration: "Tuần 2-3",
  },
  {
    id: "engineering",
    letter: "E",
    title: "Engineering",
    titleVi: "Kỹ thuật",
    icon: Cog,
    color: "from-orange-500 to-orange-600",
    description: "Thiết kế và xây dựng giải pháp",
    details: "Phát triển tư duy kỹ thuật thông qua việc thiết kế, xây dựng và cải tiến các sản phẩm.",
    activities: ["Thiết kế mô hình", "Xây dựng robot", "Giải quyết vấn đề", "Tối ưu hóa"],
    duration: "Tuần 3-4",
  },
  {
    id: "arts",
    letter: "A",
    title: "Arts",
    titleVi: "Nghệ thuật",
    icon: Palette,
    color: "from-purple-500 to-purple-600",
    description: "Sáng tạo và thể hiện ý tưởng",
    details: "Kết hợp nghệ thuật với ngôn ngữ để tạo ra những sản phẩm sáng tạo và ý nghĩa.",
    activities: ["Thiết kế đồ họa", "Sáng tác", "Biểu diễn", "Triển lãm"],
    duration: "Xuyên suốt",
  },
  {
    id: "mathematics",
    letter: "M",
    title: "Mathematics",
    titleVi: "Toán học",
    icon: Calculator,
    color: "from-red-500 to-red-600",
    description: "Tư duy logic và phân tích",
    details: "Áp dụng toán học để giải quyết các vấn đề thực tế và trình bày bằng tiếng Anh.",
    activities: ["Phân tích dữ liệu", "Mô hình hóa", "Thống kê", "Giải thuật"],
    duration: "Tuần 1-4",
  },
]

const moduleStructure = [
  {
    week: "Tuần 1",
    title: "Khám phá & Định hướng",
    description: "Giới thiệu chủ đề, từ vựng chuyên ngành và mục tiêu dự án",
    activities: ["Brainstorming session", "Vocabulary building", "Project planning"],
    focus: "Foundation",
    color: "bg-blue-50 border-blue-200",
  },
  {
    week: "Tuần 2",
    title: "Nghiên cứu & Phát triển",
    description: "Tìm hiểu sâu về chủ đề và bắt đầu thực hiện dự án",
    activities: ["Research & investigation", "Skill development", "Prototype creation"],
    focus: "Development",
    color: "bg-green-50 border-green-200",
  },
  {
    week: "Tuần 3",
    title: "Thực hiện & Hoàn thiện",
    description: "Hoàn thành dự án và chuẩn bị cho việc trình bày",
    activities: ["Project completion", "Testing & refinement", "Presentation prep"],
    focus: "Implementation",
    color: "bg-orange-50 border-orange-200",
  },
  {
    week: "Tuần 4",
    title: "Trình bày & Đánh giá",
    description: "Thuyết trình dự án và nhận phản hồi từ giáo viên và bạn bè",
    activities: ["Project presentation", "Peer review", "Reflection & assessment"],
    focus: "Evaluation",
    color: "bg-purple-50 border-purple-200",
  },
]

const benefits = [
  {
    icon: Brain,
    title: "Tư duy tích hợp",
    description: "Kết hợp nhiều lĩnh vực kiến thức trong một dự án",
  },
  {
    icon: Target,
    title: "Học có mục đích",
    description: "Mỗi hoạt động đều hướng tới mục tiêu cụ thể",
  },
  {
    icon: Users,
    title: "Hợp tác hiệu quả",
    description: "Phát triển kỹ năng làm việc nhóm và giao tiếp",
  },
  {
    icon: Lightbulb,
    title: "Sáng tạo không giới hạn",
    description: "Khuyến khích tư duy sáng tạo và đổi mới",
  },
]

export function SteamMethodSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()
  const [activeComponent, setActiveComponent] = useState<string | null>(null)
  const [selectedWeek, setSelectedWeek] = useState(0)

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
    <section
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      id="steam-method"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            <span>Phương pháp độc quyền</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Phương pháp{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">STEAM</span> tại
            Chamchi
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Học tiếng Anh thông qua các dự án thực tế kết hợp{" "}
            <strong>Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học</strong>. Mỗi module kéo dài{" "}
            <strong>3-4 tuần</strong> để đảm bảo kiến thức được củng cố sâu sắc.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <div className="text-2xl font-bold text-primary mb-1">3-4 tuần</div>
              <div className="text-sm text-gray-600">Thời gian mỗi module</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <div className="text-2xl font-bold text-primary mb-1">5 lĩnh vực</div>
              <div className="text-sm text-gray-600">Tích hợp trong học tập</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-gray-600">Học qua dự án thực tế</div>
            </div>
          </div>
        </motion.div>

        {/* STEAM Components */}
        <motion.div variants={container} initial="hidden" animate={controls} className="mb-16 md:mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5 Thành phần của STEAM</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Mỗi thành phần đóng vai trò quan trọng trong việc phát triển toàn diện kỹ năng tiếng Anh và tư duy của học
              sinh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
            {steamComponents.map((component, index) => {
              const IconComponent = component.icon
              return (
                <motion.div
                  key={component.id}
                  variants={item}
                  className="group relative"
                  onMouseEnter={() => setActiveComponent(component.id)}
                  onMouseLeave={() => setActiveComponent(null)}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${component.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <div className="text-center">
                      <div className="text-3xl font-black text-gray-900 mb-2">{component.letter}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{component.titleVi}</h4>
                      <p className="text-sm text-gray-600 mb-3">{component.description}</p>
                      <div className="text-xs text-primary font-medium">{component.duration}</div>
                    </div>

                    {/* Hover Details */}
                    <AnimatePresence>
                      {activeComponent === component.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute inset-0 bg-white rounded-xl p-4 shadow-xl z-10 border-2 border-primary/20"
                        >
                          <div className="h-full flex flex-col">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${component.color} rounded-lg flex items-center justify-center mb-3`}
                            >
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>

                            <h4 className="font-bold text-gray-900 mb-2">{component.titleVi}</h4>
                            <p className="text-sm text-gray-700 mb-3 flex-1">{component.details}</p>

                            <div className="space-y-1">
                              {component.activities.slice(0, 2).map((activity, idx) => (
                                <div key={idx} className="flex items-center text-xs text-gray-600">
                                  <CheckCircle className="h-3 w-3 text-primary mr-1" />
                                  <span>{activity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Module Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Cấu trúc Module 4 Tuần</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Mỗi module được thiết kế khoa học để đảm bảo kiến thức được tiếp thu và củng cố một cách hiệu quả nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {moduleStructure.map((week, index) => (
              <motion.div
                key={index}
                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedWeek === index
                    ? "bg-primary/10 border-primary shadow-lg scale-105"
                    : `${week.color} hover:shadow-md hover:scale-102`
                }`}
                onClick={() => setSelectedWeek(index)}
                whileHover={{ y: -2 }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2">{week.week}</h4>
                  <h5 className="text-base font-semibold text-gray-800 mb-3">{week.title}</h5>
                  <p className="text-sm text-gray-700 mb-4">{week.description}</p>

                  <div className="space-y-2">
                    {week.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <ArrowRight className="h-3 w-3 text-primary mr-2" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full inline-block">
                    {week.focus}
                  </div>
                </div>

                {selectedWeek === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                  >
                    <CheckCircle className="h-4 w-4 text-white" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits & Visual Example */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Tại sao STEAM hiệu quả?</h3>

            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-700">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">Kết quả đạt được:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Tiếng Anh tự nhiên và thành thạo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Tư duy phản biện và sáng tạo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Kỹ năng thế kỷ 21
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Tự tin giao tiếp quốc tế
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Visual Example */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Học sinh thực hiện dự án STEAM tại Chamchi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-lg font-bold mb-2">Dự án: "Smart Garden"</h4>
                  <p className="text-sm opacity-90">
                    Học sinh thiết kế hệ thống tưới cây thông minh và trình bày bằng tiếng Anh
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {steamComponents.map((component) => (
                    <div key={component.id} className="text-center">
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${component.color} rounded-lg flex items-center justify-center mb-1 mx-auto`}
                      >
                        <span className="text-white text-xs font-bold">{component.letter}</span>
                      </div>
                      <div className="text-xs text-gray-600">{component.titleVi}</div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-700 mb-2">Module hoàn thành trong</div>
                  <div className="text-2xl font-bold text-primary">4 tuần</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              Dự án thực tế
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              100% tiếng Anh
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Sẵn sàng trải nghiệm phương pháp STEAM?</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Đăng ký ngay để con bạn được trải nghiệm buổi học STEAM miễn phí và khám phá cách học tiếng Anh hiệu quả
              nhất
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="inline-block h-5 w-5 mr-2" />
                Học thử STEAM miễn phí
              </motion.button>
              <motion.button
                className="bg-accent text-gray-900 font-bold py-3 px-8 rounded-xl hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="inline-block h-5 w-5 mr-2" />
                Tư vấn chương trình học
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
