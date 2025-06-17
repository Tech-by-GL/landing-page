"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function VideoTestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      ref={ref}
      //bg-gradient-to-br from-white via-primary/5 to-accent/10
      className="relative bg-primary/20 py-8 px-4 md:px-12 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Text Section */}
        <div className="lg:w-2/3 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Câu chuyện Giáo Dục của 
            <span className="text-primary"> Chăm Chỉ</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Lắng nghe chia sẻ từ học viên đã trải nghiệm hành trình học tập tại
            Chamchi – nơi chắp cánh ước mơ chinh phục tiếng Anh.
          </p>
          <p className="text-base text-gray-600">
            Từ những buổi học đầu tiên còn lo lắng đến những giờ ôn luyện căng
            thẳng trước kỳ thi, mỗi học viên là một hành trình đáng tự hào. Hãy
            cùng lắng nghe câu chuyện truyền cảm hứng từ bạn học viên của chúng
            tôi.
          </p>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 w-full"
        >
          <div className="w-[320px] sm:w-[360px] md:w-[360px] lg:w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black ml-8">
            <video
              className="w-full h-full"
              controls
              preload="auto"
              poster="/thumnail.jpg" // Optional thumbnail
            >
              <source
                src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/test.mp4"
                type="video/mp4"
              />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-10"
      >
        <p className="text-sm text-gray-500 italic">
          "Mỗi học viên là một câu chuyện. Mỗi thành công là một minh chứng cho
          sự nỗ lực và đồng hành của Chamchi."
        </p>
      </motion.div>
    </section>
  );
}
