"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { X, Users, Monitor, Lightbulb, Wifi } from "lucide-react"

const classrooms = [
  {
    id: 1,
    name: "Phòng học STEAM Lab",
    description: "Không gian học tập hiện đại với công nghệ tương tác, nơi học sinh thực hiện các dự án STEAM sáng tạo",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Bảng tương tác thông minh", "Máy tính cá nhân", "Khu vực thí nghiệm", "Không gian làm việc nhóm"],
    capacity: "15 học sinh",
    equipment: "Projector 4K, Sound system, Interactive whiteboard",
  },
  // {
  //   id: 2,
  //   name: "Phòng luyện Speaking",
  //   description: "Phòng học được thiết kế đặc biệt để phát triển kỹ năng nói với hệ thống âm thanh chuyên nghiệp",
  //   image: "/placeholder.svg?height=400&width=600",
  //   features: ["Hệ thống ghi âm chuyên nghiệp", "Micro cá nhân", "Phần mềm phân tích giọng nói", "Góc thuyết trình"],
  //   capacity: "12 học sinh",
  //   equipment: "Professional microphones, Audio recording system, Voice analysis software",
  // },
  {
    id: 3,
    name: "Phòng học Brain Box",
    description: "Không gian học tập ấm cúng với thiết kế hiện đại, tạo môi trường học tập thoải mái và hiệu quả",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Bàn ghế ergonomic", "Ánh sáng tự nhiên", "Không gian mở", "Thư viện mini"],
    capacity: "18 học sinh",
    equipment: "Smart TV, Air conditioning, Natural lighting system",
  },
  // {
  //   id: 4,
  //   name: "Phòng học nhóm nhỏ",
  //   description:
  //     "Không gian intimate cho các lớp học nhóm nhỏ, tạo điều kiện tương tác tối đa giữa giáo viên và học sinh",
  //   image: "/placeholder.svg?height=400&width=600",
  //   features: ["Bàn tròn thảo luận", "Bảng viết di động", "Góc đọc sách", "Khu vực trò chơi học tập"],
  //   capacity: "8 học sinh",
  //   equipment: "Portable whiteboard, Tablet devices, Educational games",
  // },
  // {
  //   id: 5,
  //   name: "Phòng thi mô phỏng",
  //   description: "Môi trường thi cử chuyên nghiệp, mô phỏng chính xác các kỳ thi quốc tế như IELTS, KET, PET",
  //   image: "/placeholder.svg?height=400&width=600",
  //   features: ["Cabin thi riêng biệt", "Hệ thống ghi âm thi", "Máy tính thi", "Camera giám sát"],
  //   capacity: "20 học sinh",
  //   equipment: "Individual test stations, Recording equipment, Computers, Surveillance system",
  // },
  {
    id: 6,
    name: "Khu vực nghỉ ngơi",
    description: "Không gian thư giãn và giao lưu, nơi học sinh có thể nghỉ ngơi và thực hành tiếng Anh tự nhiên",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Sofa thoải mái", "Khu vực đọc sách", "Máy pha cà phê", "Board games tiếng Anh"],
    capacity: "30 người",
    equipment: "Comfortable seating, Book corner, Coffee machine, English board games",
  },
]

export function ClassroomShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(classrooms.length / 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(classrooms.length / 2)) % Math.ceil(classrooms.length / 2))
  }

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
    <section className="section-padding bg-white mb-8 mt-16" id="classrooms" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Không gian học tập <span className="text-primary">hiện đại</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Khám phá các phòng học được thiết kế chuyên biệt tại Chamchi, nơi công nghệ và giáo dục kết hợp để tạo ra
            môi trường học tập tối ưu cho từng học sinh.
          </p>
        </motion.div>

        {/* Classroom Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {classrooms.map((classroom, index) => (
            <motion.div
              key={classroom.id}
              variants={item}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={classroom.image || "/placeholder.svg"}
                  alt={classroom.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{classroom.name}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>{classroom.capacity}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{classroom.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Monitor className="h-4 w-4 text-primary" />
                    <span className="font-medium">Trang thiết bị:</span>
                  </div>
                  <p className="text-xs text-gray-600 pl-6">{classroom.equipment}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span className="font-medium">Đặc điểm nổi bật:</span>
                  </div>
                  <ul className="text-xs text-gray-600 pl-6 space-y-1">
                    {classroom.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Công nghệ hiện đại</h3>
              <p className="text-gray-700 text-sm">Trang bị đầy đủ thiết bị công nghệ tiên tiến hỗ trợ việc học tập</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lớp học nhỏ</h3>
              <p className="text-gray-700 text-sm">Tối đa 15-20 học sinh mỗi lớp để đảm bảo chất lượng giảng dạy</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thiết kế thông minh</h3>
              <p className="text-gray-700 text-sm">Không gian được thiết kế để tối ưu hóa việc học tập và tương tác</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Wifi className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kết nối toàn diện</h3>
              <p className="text-gray-700 text-sm">WiFi tốc độ cao và hệ thống mạng ổn định trong toàn bộ trung tâm</p>
            </div>
          </div>
        </motion.div>

        {/* Modal for detailed view */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="relative h-64 md:h-96 w-full">
                  <Image
                    src={classrooms[selectedImage].image || "/placeholder.svg"}
                    alt={classrooms[selectedImage].name}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {classrooms[selectedImage].name}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">{classrooms[selectedImage].description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        Đặc điểm nổi bật
                      </h4>
                      <ul className="space-y-2">
                        {classrooms[selectedImage].features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Monitor className="h-5 w-5 text-primary" />
                        Trang thiết bị
                      </h4>
                      <p className="text-gray-700">{classrooms[selectedImage].equipment}</p>

                      <h4 className="font-bold text-gray-900 mb-2 mt-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Sức chứa
                      </h4>
                      <p className="text-gray-700">{classrooms[selectedImage].capacity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
