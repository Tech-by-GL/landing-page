"use client";

import React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Brain,
  Lightbulb,
  Zap,
  Globe,
  Sparkles,
  Users,
  ChevronRight,
} from "lucide-react";

interface MethodologyPoint {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

export function OrbitingMethodology() {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const methodologyPoints: MethodologyPoint[] = [
    {
      id: 1,
      icon: BookOpen,
      title: "Học tập cá nhân hóa",
      description:
        "Chương trình học được thiết kế riêng cho từng học sinh dựa trên khả năng và tốc độ tiếp thu.",
      color: "#0d99ff",
    },
    {
      id: 2,
      icon: Brain,
      title: "Tư duy phản biện",
      description:
        "Phát triển khả năng phân tích, đánh giá và giải quyết vấn đề một cách sáng tạo.",
      color: "#ffde59",
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Sáng tạo không giới hạn",
      description:
        "Khuyến khích học sinh tìm tòi, khám phá và sáng tạo trong quá trình học tập.",
      color: "#ff6b6b",
    },
    {
      id: 4,
      icon: Zap,
      title: "Tiến bộ nhanh chóng",
      description:
        "Phương pháp học tập hiệu quả giúp học sinh tiến bộ nhanh chóng và bền vững.",
      color: "#4cd964",
    },
    {
      id: 5,
      icon: Globe,
      title: "Tiêu chuẩn quốc tế",
      description:
        "Chương trình học được thiết kế theo tiêu chuẩn quốc tế, giúp học sinh sẵn sàng cho tương lai toàn cầu.",
      color: "#5856d6",
    },
    {
      id: 6,
      icon: Users,
      title: "Học tập cộng tác",
      description:
        "Phát triển kỹ năng làm việc nhóm và giao tiếp hiệu quả thông qua các dự án cộng tác.",
      color: "#ff9500",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoRotate && !isHovering) {
      interval = setInterval(() => {
        setActivePoint((prev) => {
          if (prev === null) return 0;
          return (prev + 1) % methodologyPoints.length;
        });
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoRotate, isHovering, methodologyPoints.length]);

  const getOrbitPosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const radius = Math.min(dimensions.width, dimensions.height) * 0.3;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex w-full h-full -translate-y-6">
        {/* Left Part */}
        <div className="relative w-1/2 h-full flex items-center justify-center">
          {/* Center Circle */}
          <motion.div
            className="absolute z-10 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 0 rgba(13, 153, 255, 0.4)",
                "0 0 0 8px rgba(13, 153, 255, 0)",
                "0 0 0 0 rgba(13, 153, 255, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <Sparkles className="text-white h-8 w-8 md:h-10 md:w-10" />
            <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
          </motion.div>

          {/* Orbiting Points */}
          {methodologyPoints.map((point, index) => {
            const { x, y } = getOrbitPosition(
              index + (activePoint !== null ? activePoint : 0),
              methodologyPoints.length,
              radius
            );
            const IconComponent = point.icon;

            return (
              <motion.div
                key={point.id}
                className="absolute z-20 cursor-pointer"
                initial={false}
                animate={{
                  x,
                  y,
                  scale: activePoint === index ? 1.2 : 1,
                  zIndex: activePoint === index ? 30 : 20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                onClick={() => {
                  setActivePoint(index);
                  setAutoRotate(false);
                }}
                style={{
                  filter:
                    activePoint === index
                      ? `drop-shadow(0 0 20px ${point.color}) w-20` // highlight active point
                      : "none",
                }}
              >
                <motion.div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: point.color }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconComponent className="text-white h-6 w-6 md:h-7 md:w-7" />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Circle outline */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 120,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </svg>
        </div>

        {/* Right Part */}
        <div className="relative w-1/2 h-full flex items-center justify-center p-4 md:p-6">
          <AnimatePresence mode="wait">
            {activePoint !== null && (
              <motion.div
                key={`info-${activePoint}`}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/20 w-full max-w-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: methodologyPoints[activePoint].color,
                    }}
                  >
                    {React.createElement(methodologyPoints[activePoint].icon, {
                      className: "text-white h-5 w-5 md:h-6 md:w-6",
                    })}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      {methodologyPoints[activePoint].title}
                    </h3>
                    <p className="text-sm md:text-base text-white/80">
                      {methodologyPoints[activePoint].description}
                    </p>
                  </div>
                </div>
                <div className="mt-3 md:mt-4 flex justify-end">
                  <motion.button
                    className="flex items-center gap-1 text-white/80 hover:text-white text-xs md:text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Tìm hiểu thêm{" "}
                    <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Orbit Controls */}
      <div className="absolute top-0 right-0 flex gap-2">
        <button
          className={`px-2 py-1 rounded-full text-xs ${
            autoRotate ? "bg-primary text-white" : "bg-white/20 text-white/80"
          }`}
          onClick={() => setAutoRotate(!autoRotate)}
        >
          {autoRotate ? "Tự động" : "Thủ công"}
        </button>
      </div>
    </div>
  );
}
