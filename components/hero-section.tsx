"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ChevronRight,
  Star,
  Award,
  Users,
  BookOpen,
  Play,
  Sparkles,
  Globe,
  Brain,
  Zap,
} from "lucide-react";
import { ParticleSystem } from "@/components/particle-system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FloatingIcons } from "./floating-icon";

const floatingIcons = [
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/astros.png",
    alt: "planet",
    x: "5%",
    y: "10%",
    size: 68,
    delay: 0.5,
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/star.png",
    alt: "Star",
    x: "62%",
    y: "2%",
    size: 88,
    delay: 0.3,
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/saochoi.png",
    alt: "satellite",
    x: "80%",
    y: "10%",
    size: 200,
    delay: 0.5,
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/icon1.png",
    alt: "Rocket",
    x: "86%",
    y: "75%",
    size: 100,
    delay: 0.5,
  },
];


const mobileFloatingIcons = [
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/astros.png",
    alt: "planet",
    x: "5%",
    y: "5%",
    size: 50,
    delay: 0.5,
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/star.png",
    alt: "Star",
    x: "36%",
    y: "68%",
    size: 60,
    delay: 0.3,
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/saochoi.png",
    alt: "satellite",
    x: "70%",
    y: "35%",
    size: 65,
    delay: 0.5,
  },
  // {
  //   src: "/icon1.png",
  //   alt: "Rocket",
  //   x: "86%",
  //   y: "75%",
  //   size: 100,
  //   delay: 0.5,
  // },
];

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  
  return (
    <section
      ref={ref}
      className="relative h-9/10 flex items-center overflow-hidden bg-[#38b6ff] pt-2"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.4) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* <div style={{position: "absolute" , width: "100%", height: "100%", background: "transparent", zIndex: 1000}}> */}
      <ParticleSystem
        count={100}
        colors={["#0d99ff", "#ffde59", "#ffffff"]}
        className="absolute inset-0 pointer-events-none z-100"
      />

      {/* </div> */}

      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4) 0%, transparent 60%)`,
          }}
        />
      </div>

      <FloatingIcons icons={isMobile ? mobileFloatingIcons : floatingIcons} />

      {/* Main Content md:py-12 */}
      <div className="container-custom relative z-10 py-2 bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-transparent">
          {/* Text Content - 6 columns on large screens */}
          <motion.div
            className="lg:col-span-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6"
              initial={{ opacity: 0, scale: 1 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, delay: 0.2 },
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span>Trung Tâm Anh Ngữ & Trí Tuệ Nhân Tạo</span>
            </motion.div>

            {/* Main Title */}
            <div className="mb-4 md:mb-6">
              <motion.h1
                // mb-2 md:mb-8
                className="text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight "
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.3 },
                  },
                }}
              >
                <span className="bg-yellow-300 bg-clip-text text-transparent">
                  Yêu
                </span>
                <span className="block bg-yellow-300 bg-clip-text text-transparent">
                  Truyền Cảm Hứng
                </span>
                <span className="block bg-yellow-300 bg-clip-text text-transparent">
                  Nâng Tầm
                </span>
                <span className="block text-white mb-5 text-shadow-black-200">
                  Học Sinh Việt Nam
                </span>
              </motion.h1>

              <motion.div
                className="text-lg md:text-xl lg:text-2xl font-bold text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.5 },
                  },
                }}
              >
                với{" "}
                <span className="relative">
                  <span className="bg-yellow-300 bg-clip-text text-transparent">
                    STEAM{" "}
                  </span>
                  &
                  <span className="bg-yellow-300 bg-clip-text text-transparent">
                    {" "}
                    Trí Tuệ Nhân Tạo
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-300 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={controls}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: { duration: 0.8, delay: 0.7 },
                      },
                    }}
                  />
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-sm md:text-base lg:text-lg text-white/100 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { duration: 1, delay: 0.8 },
                },
              }}
            >
              Chăm Chỉ là nơi mà Giáo Viên không chỉ truyền đạt kiến thức, mà
              còn là nơi định hướng & truyền cảm hứng có các thế hệ học sinh
              Việt Nam tự tin, sáng tạo và sẵn sàng chinh phục thế giới.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 1 },
                },
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#courses"
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-xl hover:shadow-primary/25 text-sm md:text-base"
                >
                  <Award className="h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform" />
                  Các khóa học
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/steam"
                  className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-sm md:text-base"
                >
                  <Play className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                  Tìm hiểu về STEAM
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image - 6 columns on large screens */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              },
            }}
            style={{ y }}
          >
            <div className="relative h-[320px] md:h-[400px] lg:h-[720px] w-full">
              {/* Main Image */}

              <motion.div
                className="relative w-full h-full rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/hero-3.png"
                  alt="Học sinh Chamchi trong lớp học công nghệ STEAM hiện đại"
                  fill
                  className="object-cover"
                  priority
                  style={{
                    transform: isMobile ? "translateY(-60px)" : "translateY(28px)",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, transition: { duration: 1, delay: 2.5 } },
        }}
      >
        <motion.div
          className="flex flex-col items-center gap-1 text-white/60"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-xs font-medium">Khám phá thêm</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-0.5 h-2 bg-white/60 rounded-full mt-1"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// const achievements = [
//   {
//     icon: Award,
//     label: "Chứng chỉ quốc tế",
//     value: "98%",
//     color: "from-yellow-400 to-orange-500",
//   },
//   {
//     icon: Users,
//     label: "Học viên thành công",
//     value: "1000+",
//     color: "from-blue-400 to-purple-500",
//   },
//   {
//     icon: Star,
//     label: "Đánh giá trung bình",
//     value: "4.9/5",
//     color: "from-pink-400 to-red-500",
//   },
//   {
//     icon: BookOpen,
//     label: "Phương pháp",
//     value: "STEAM",
//     color: "from-green-400 to-teal-500",
//   },
// ];

{
  /* Achievement Stats */
}
{
  /* <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 1.2 },
                },
              }}
            >
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    variants={{
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, delay: 1.4 + index * 0.1 },
                      },
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div className="text-lg md:text-xl font-black text-white mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-xs text-white/70 font-medium">
                      {achievement.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div> */
}

{
  /* <div className="hidden md:block">
                  {floatingElements.map((element, index) => {
                    const IconComponent = element.icon;
                    return (
                      <motion.div
                        key={index}
                        className="absolute bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-3 shadow-xl"
                        style={{ left: element.x, top: element.y }}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={controls}
                        variants={{
                          visible: {
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            transition: { duration: 0.3, delay: element.delay },
                          },
                        }}
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <div className="text-white">
                            <div className="text-xs font-bold">
                              {element.label}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div> */
}

// {false && (
//   <Swiper
//     modules={[Autoplay]}
//     autoplay={{ delay: 6800, disableOnInteraction: false }}
//     loop
//     className="h-full w-full rounded-2xl overflow-hidden shadow-2xl"
//   >
//     {heroImages.map((img) => (
//       <SwiperSlide key={img.src}>
//         {/* Main Image */}
//         <motion.div
//           className="relative h-full w-full"
//           whileHover={{ scale: 1.02 }}
//           transition={{ duration: 0.3 }}
//         >
//           <Image
//             src={img.src}
//             alt={img.alt}
//             fill
//             className="object-cover"
//             priority
//           />

//           {/* Image Overlay (giữ nguyên nếu cần) */}
//           {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" /> */}

//           {/* Play Button Overlay (hiển thị trên mỗi slide) */}
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2 }}
//           >
//             <motion.button
//               className="bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full p-4 md:p-5 hover:bg-white/30 transition-all duration-300 group"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               animate={{
//                 boxShadow: [
//                   "0 0 0 0 rgba(255, 255, 255, 0.4)",
//                   "0 0 0 15px rgba(255, 255, 255, 0)",
//                   "0 0 0 0 rgba(255, 255, 255, 0)",
//                 ],
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               <Play className="h-6 w-6 md:h-7 md:w-7 ml-1 group-hover:scale-110 transition-transform" />
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </SwiperSlide>
//     ))}
//   </Swiper>
// )}
