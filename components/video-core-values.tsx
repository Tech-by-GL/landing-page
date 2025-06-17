"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";

import {
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  BookOpen,
  Heart,
  TrendingUp,
  Quote,
  Play,
  Pause,
} from "lucide-react";
import VideoTestimonialSection from "./video-testimonials";
import { traditionalVsModern } from "./educational-philosophy";
import { CoreValues } from "./core-values";

export function VideoCoreValue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(
    null
  );

  const [isPlaying, setIsPlaying] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      className="flex items-center py-8 md:py-8 bg-gradient-to-br from-primary/5 via-white to-accent/5"
      // id="testimonials"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16"
        >
          {/* Text Section */}
          <div className="lg:w-3/5 text-center lg:text-left">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Câu chuyện học viên thực tế
              </h2> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-8">
              Tại sao lại là {" "}
              <span className="text-primary">Chăm Chỉ</span> ??
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Chúng tôi là{" "}
              <motion.span
                className="text-primary underline underline-offset-4 decoration-primary/40"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Chăm Chỉ
              </motion.span>{" "}
              – bởi vì chúng tôi tin rằng: chỉ cần bạn cố gắng{" "}
              <motion.span
                className="underline underline-offset-4 decoration-amber-400/50"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                mỗi ngày
              </motion.span>
              , bạn chắc chắn sẽ tiến bộ. Không cần phải giỏi ngay từ đầu, chỉ
              cần bạn chăm chỉ, bạn sẽ tốt hơn chính mình ngày hôm qua. Và chính
              điều đó, từng bước nhỏ mỗi ngày, chính là{" "}
              <motion.span
                className="underline underline-offset-4 decoration-green-400/50"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                sự phát triển
              </motion.span>{" "}
              thật sự. Giá trị cốt lõi của chúng tôi:
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-5 md:p-6 rounded-xl shadow-md mt-16">
              <p className="text-gray-800 text-base md:text-lg italic relative pl-10 leading-relaxed">
                <Quote className="absolute left-2 top-1 text-primary w-6 h-6" />
                Tại <span className="font-semibold text-primary">Chăm Chỉ</span>
                , chúng tôi không tìm kiếm sự hoàn hảo – chúng tôi đồng hành
                cùng nỗ lực.
              </p>
              <p className="mt-4 text-right text-sm text-gray-600 font-medium">
                — Mr. Cao Duy Thắng, Hiệu Trưởng
              </p>
            </div>
          </div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <div className="w-[320px] sm:w-[360px] md:w-[360px] lg:w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black">
              <video
                className="w-full h-full"
                controls
                preload="auto"
                poster="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/thumnail.jpg" // Optional thumbnail
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
      </div>
    </section>
  );
}

const CompareSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Sự khác biệt trong{" "}
            <span className="text-primary">phương pháp giáo dục</span>
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Chamchi đi tiên phong trong việc thay đổi cách tiếp cận giáo dục
            tiếng Anh, từ học thuộc lòng sang học qua trải nghiệm thực tế.
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
              <div className="text-4xl mb-3">
                {traditionalVsModern.traditional.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                {traditionalVsModern.traditional.title}
              </h4>
            </div>
            <ul className="space-y-3">
              {traditionalVsModern.traditional.characteristics.map(
                (char, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 ${traditionalVsModern.traditional.textColor}`}
                  >
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 shrink-0"></span>
                    <span>{char}</span>
                  </li>
                )
              )}
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
              <div className="text-4xl mb-3">
                {traditionalVsModern.modern.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                {traditionalVsModern.modern.title}
              </h4>
            </div>
            <ul className="space-y-3">
              {traditionalVsModern.modern.characteristics.map((char, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 ${traditionalVsModern.modern.textColor}`}
                >
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
    </>
  );
};

const CoreValuesSection = () => {
  return (
    <>
      {/* <motion.div
              variants={container}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8"
            >
              {[
                {
                  icon: <BookOpen className="h-5 w-5 text-primary" />,
                  title: "Cá nhân hóa",
                  text: "Chương trình học thiết kế riêng cho từng học sinh.",
                  bg: "bg-primary/10",
                },
                {
                  icon: <Heart className="h-5 w-5 text-primary" />,
                  title: "Học vui vẻ",
                  text: "Lớp học tạo môi trường hấp dẫn, thú vị.",
                  bg: "bg-accent/20",
                },
                {
                  icon: <TrendingUp className="h-5 w-5 text-primary" />,
                  title: "Tiến bộ mỗi ngày",
                  text: "Theo dõi rõ ràng, cải thiện liên tục.",
                  bg: "bg-primary/10",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={item} // đây là `Variants`, không phải dữ liệu
                  className="bg-white p-4 rounded-2xl shadow hover:shadow-md transition-all hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`w-10 h-10 ${feature.bg} rounded-full flex items-center justify-center mb-3 mx-auto`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-center text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-center text-gray-700">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </motion.div> */}
    </>
  );
};

{
  /* Header */
}
{
  /* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Học viên nói gì về <span className="text-primary">Chamchi</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Rất nhiều học viên đã tin tưởng và đạt được thành công tại Chamchi
            </p>

            <div className="flex justify-center items-center gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  98%
                </div>
                <div className="text-sm text-gray-600">Tỷ lệ đỗ</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  4.9/5
                </div>
                <div className="text-sm text-gray-600">Đánh giá</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  200+
                </div>
                <div className="text-sm text-gray-600">Học viên</div>
              </div>
            </div>
          </motion.div> */
}
