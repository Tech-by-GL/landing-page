"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      className="min-h-[60vh] md:min-h-[70vh] flex items-center py-8 md:py-12 lg:py-16 bg-white"
      id="about"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Về <span className="text-primary">Anh Ngữ Chăm Chỉ</span>
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            <span className="font-semibold text-primary">Chăm Chỉ</span> là
            trung tâm Anh ngữ hiện đại với sứ mệnh mang đến phương pháp học
            tiếng Anh hiệu quả và thú vị, với những đổi tập trung vào phát triển
            toàn diện cho học sinh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
              Sứ mệnh:{" "}
              <span className="text-primary">Giáo dục là Tận Hiến </span>
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
              Đối với Chăm Chỉ và đội ngũ giáo viên, giáo dục không chỉ là công
              việc mà còn là một sứ mệnh cao cả. Chúng tôi tận tâm mang đến
              những kiến thức và kỹ năng cần thiết cho học sinh, giúp các em tự
              tin và thành công trong tương lai.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
              Hành Động:{" "}
              <span className="text-primary">Đồng hành cùng Phát Triển</span>
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
              Chăm Chỉ đồng hành cùng học sinh và Phụ Huynh trong hành trình
              phát triển, cả về các kỹ năng sống lẫn kỹ năng ngôn ngữ.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
              Đổi mới:{" "}
              <span className="text-primary">STEAM & Trí Tuệ Nhân Tạo</span>
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Chăm Chỉ áp dụng phương pháp STEAM (Khoa học, Công nghệ, Kỹ thuật,
              Nghệ thuật và Toán học) kết hợp với ứng dụng Trí Tuệ Nhân Tạo{" "}
              <span className="text-primary font-bold">chamchi.ai</span> do Chăm
              Chỉ tạo ra để mang đến trải nghiệm học tập hiện đại và hiệu quả
              nhất cho học viên.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-2xl aspect-[16/9] md:aspect-[3/2] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white">
              <Image
                src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/ket-class-hat.png"
                alt="Ảnh lớp học Chamchi"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 md:mt-16 bg-primary/5 p-6 md:p-8 rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary md:w-6 md:h-6"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                10+ năm kinh nghiệm
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Chamchi đã có hơn 10 năm kinh nghiệm trong lĩnh vực giảng dạy
                tiếng Anh cho học sinh Việt Nam.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary md:w-6 md:h-6"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                200+ học viên
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                200+ học viên đã tin tưởng và lựa chọn Chamchi để cải thiện kỹ
                năng tiếng Anh của mình.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary md:w-6 md:h-6"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                98% tỷ lệ đỗ
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                98% học viên của Chamchi đã đạt được chứng chỉ quốc tế như KET,
                PET và IELTS với kết quả cao.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
