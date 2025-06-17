"use client"

import { useEffect, useRef } from "react"
import { BookOpen, Heart, TrendingUp } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"

export function CoreValues() {
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
      className="min-h-[60vh] md:min-h-[70vh] flex items-center py-8 md:py-12 lg:py-16 bg-gray-50"
      id="values"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Giá trị cốt lõi của <span className="text-primary">Chamchi</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Chúng tôi tin rằng mỗi học sinh đều có tiềm năng riêng và xứng đáng được học tập trong một môi trường thúc
            đẩy sự phát triển toàn diện.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          <motion.div
            variants={item}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
              <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Học tập cá nhân hóa</h3>
            <p className="text-sm md:text-base text-gray-700 text-center">
              Chúng tôi hiểu rằng mỗi học sinh có phong cách học tập và tốc độ tiến bộ khác nhau. Chương trình học tại
              Chamchi được thiết kế riêng cho từng học sinh.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
              <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Học tập vui vẻ</h3>
            <p className="text-sm md:text-base text-gray-700 text-center">
              Chúng tôi tin rằng việc học nên là một trải nghiệm thú vị. Các lớp học tại Chamchi được thiết kế để tạo ra
              một môi trường học tập vui vẻ và hấp dẫn.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Tiến bộ hàng ngày</h3>
            <p className="text-sm md:text-base text-gray-700 text-center">
              Chúng tôi khuyến khích học sinh tiến bộ mỗi ngày. Hệ thống theo dõi tiến độ của chúng tôi giúp học sinh và
              phụ huynh theo dõi sự phát triển và đạt được mục tiêu.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
