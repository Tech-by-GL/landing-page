"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Smartphone, BookOpen, BarChart, Layers } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { ElementType } from "react";

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

const features = [
  {
    icon: Smartphone,
    title: "Ứng dụng Chamchi",
    description:
      "Ứng dụng di động giúp học viên học tập mọi lúc, mọi nơi với các bài học tương tác và trò chơi học tập thú vị.",
    bg: "#38b6ff",
  },
  {
    icon: BookOpen,
    title: "Luyện Phát Âm với AI",
    description:
      "Hệ thống kiểm tra trực tuyến giúp học viên đánh giá trình độ và theo dõi tiến độ học tập của mình.",
    bg: "#a5d8ff",
  },
  {
    icon: Layers,
    title: "Cải Thiện Đọc Hiểu",
    description:
      "Phòng thực hành ngôn ngữ hiện đại giúp học viên phát triển kỹ năng nghe và nói một cách tự nhiên.",
    bg: "#38b6ff",
  },
  {
    icon: BarChart,
    title: "Cải Thiện Nghe Hiểu",
    description:
      "Hệ thống theo dõi tiến độ giúp học viên và phụ huynh nắm bắt được quá trình học tập và phát triển.",
    bg: "#a5d8ff",
  },
];

interface CompareAudioProps {
  beforeSrc: string;
  afterSrc: string;
}

export const CompareAudio: React.FC<CompareAudioProps> = ({
  beforeSrc,
  afterSrc,
}) => {
  return (
    <div className="w-full bg-white p-4 shadow-md space-y-4 rounded-xl">
      <div>
        <p className="font-semibold text-gray-700 mb-1">🎧 Trước khi luyện</p>
        <audio controls className="w-full rounded-md">
          <source src={beforeSrc} type="audio/mpeg" />
          Trình duyệt của bạn không hỗ trợ phát âm thanh.
        </audio>
      </div>
      <div>
        <p className="font-semibold text-gray-700 mb-1">✅ Sau khi luyện</p>
        <audio controls className="w-full rounded-md">
          <source src={afterSrc} type="audio/mpeg" />
          Trình duyệt của bạn không hỗ trợ phát âm thanh.
        </audio>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  index: number;
  activeTab: number;
  setActiveTab: (index: number) => void;
  Icon: ElementType;
  title: string;
  description: string;
  bg: string;
}

function FeatureCard({
  index,
  activeTab,
  setActiveTab,
  Icon,
  title,
  description,
  bg,
}: FeatureCardProps) {
  const isActive = activeTab === index;

  return (
    <motion.div
      variants={item}
      animate={isActive ? { scale: 1.05 } : { scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setActiveTab(index)}
      className={cn(
        "p-4 md:p-6 rounded-xl transition-all duration-300 cursor-pointer",
        isActive
          ? "bg-white border border-[#38b6ff] shadow-xl ring-1 ring-[#38b6ff]/30"
          : "bg-white shadow-md hover:shadow-lg hover:-translate-y-2"
      )}
    >
      <div
        className={cn(
          "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-colors duration-300",
          isActive ? "bg-[#38b6ff]/10" : "bg-[#38b6ff]/5"
        )}
      >
        <Icon
          className={cn(
            "h-5 w-5 md:h-6 md:w-6",
            isActive ? "text-[#38b6ff]" : "text-[#38b6ff]/80"
          )}
        />
      </div>

      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-700 p-0">{description}</p>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState(0);

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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      className="py-8 md:py-10 lg:py-10 bg-gradient-to-br from-blue-50 to-indigo-50"
      id="features"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-10">
            Giải pháp <span className="text-primary">đột phá</span>
          </h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
            Chamchi hiểu rõ những khó khăn mà học sinh gặp phải khi học tiếng
            Anh. Chúng tôi đã phát triển các giải pháp cụ thể, khoa học và hiệu
            quả để giúp học sinh vượt qua mọi rào cản.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate={controls}
              className={"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"}
            >
              <motion.div
                variants={item}
                animate={activeTab === 0 ? { scale: 1.05 } : { scale: 1.00 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveTab(0)}
                className={cn(
                  "p-4 md:p-6 rounded-xl transition-all duration-300 cursor-pointer",
                  activeTab === 0
                    ? "bg-white border border-[#38b6ff] shadow-xl ring-1 ring-[#38b6ff]/30"
                    : "bg-white shadow-md hover:shadow-lg hover:-translate-y-2"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-colors duration-300",
                    activeTab === 0 ? "bg-[#38b6ff]/10" : "bg-[#38b6ff]/5"
                  )}
                >
                  <Smartphone
                    className={cn(
                      "h-5 w-5 md:h-6 md:w-6 transition-colors",
                      activeTab === 0 ? "text-[#38b6ff]" : "text-[#38b6ff]/80"
                    )}
                  />
                </div>

                <h3
                  className={cn(
                    "text-base md:text-lg font-bold mb-2 transition-colors duration-300",
                    activeTab === 0 ? "text-gray-900" : "text-gray-900"
                  )}
                >
                  Ứng dụng Chamchi
                </h3>
                <p
                  className={cn(
                    "text-sm md:text-base transition-colors duration-300",
                    activeTab === 0 ? "text-gray-700" : "text-gray-700"
                  )}
                >
                  Ứng dụng di động giúp học viên học tập mọi lúc, mọi nơi với
                  các bài học tương tác và trò chơi học tập thú vị.
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                  Luyện Phát Âm với AI
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                  Hệ thống kiểm tra trực tuyến giúp học viên đánh giá trình độ
                  và theo dõi tiến độ học tập của mình.
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <Layers className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                  Cải Thiện Đọc Hiểu
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                  Phòng thực hành ngôn ngữ hiện đại giúp học viên phát triển kỹ
                  năng nghe và nói một cách tự nhiên.
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <BarChart className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                  Cải Thiện Nghe Hiểu
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                  Hệ thống theo dõi tiến độ giúp học viên và phụ huynh nắm bắt
                  được quá trình học tập và phát triển.
                </p>
              </motion.div>
            </motion.div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            >
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  index={index}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  Icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  bg={feature.bg}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className={
              activeTab === 0 ? "relative h-[400px] md:h-[550px] w-full pt-8" : "relative h-[400px] md:h-[550px] w-full pt-8"
            }>
              {activeTab === 0 && (
                <Image
                  src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/chamchi-app-14x10-t.png"
                  alt="Tính năng Chamchi"
                  fill
                  className="object-cover rounded-lg"
                />
              )}

              {activeTab === 1 && (
                <CompareAudio
                  beforeSrc="/audios/before.mp3"
                  afterSrc="/audios/after.mp3"
                />
              )}

              {activeTab === 2 || activeTab === 3 && (
                <Image
                  src="/AI-reading-2.jpg"
                  alt="Tính năng Chamchi"
                  fill
                  className="object-cover rounded-xl"

                />
              )}

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 bg-white p-3 md:p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-primary/20 p-2 rounded-full">
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
                      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base">
                      Công nghệ hiện đại
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      Hỗ trợ học tập hiệu quả
                    </p>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
