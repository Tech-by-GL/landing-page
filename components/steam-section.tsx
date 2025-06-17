"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Atom,
  Cpu,
  Cog,
  Palette,
  Calculator,
  Clock,
  CheckCircle,
  BookOpen,
  Users,
  Zap,
} from "lucide-react";

const steamComponents = [
  {
    letter: "S",
    title: "Science",
    titleVi: "Khoa học đời sống",
    icon: Atom,
    color: "from-blue-500 to-blue-600",
    example: "Khoa học gần gũi với cuộc sống",
  },
  {
    letter: "T",
    title: "Technology",
    titleVi: "Công nghệ",
    icon: Cpu,
    color: "from-green-500 to-green-600",
    example: "Công nghệ mới nhất như AI, IoT",
  },
  {
    letter: "E",
    title: "Engineering",
    titleVi: "Kỹ thuật",
    icon: Cog,
    color: "from-orange-500 to-orange-600",
    example: "Học cách các mô hình hoạt động",
  },
  {
    letter: "A",
    title: "Arts",
    titleVi: "Nghệ thuật",
    icon: Palette,
    color: "from-purple-500 to-purple-600",
    example: "Sáng tác & biểu diễn",
  },
  {
    letter: "M",
    title: "Mathematics",
    titleVi: "Toán học",
    icon: Calculator,
    color: "from-red-500 to-red-600",
    example: "Phân tích dữ liệu",
  },
];

const benefits = [
  "Học tiếng Anh qua dự án thực tế",
  "Phát triển tư duy tích hợp",
  "Củng cố kiến thức sâu sắc",
  "Kỹ năng thế kỷ 21",
];

export function SteamBriefSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      className="min-h-screen flex items-center py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      id="steam-method"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                <Zap className="h-4 w-4" />
                <span>Phương pháp độc quyền</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Học tiếng Anh qua{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  STEAM
                </span>
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Mỗi dự án tích hợp <strong>5 lĩnh vực kiến thức</strong> giúp
                học sinh vận dụng toàn diện, phát triển tư duy đa chiều. Lộ
                trình học theo MÔN <strong>3–4</strong> tuần giúp kiến thức được
                tiếp thu sâu, ghi nhớ lâu và ứng dụng hiệu quả vào thực tế.
              </p>
            </div>

            {/* STEAM Components */}
            <div className="grid grid-cols-5 gap-3 mb-8 mt-16">
              {steamComponents.map((component, index) => {
                const IconComponent = component.icon;
                return (
                  <motion.div
                    key={component.letter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group text-center"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${component.color} rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-black text-gray-900 mb-1">
                      {component.letter}
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      {component.titleVi}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {component.example}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 mb-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center shadow-md">
                <div className="text-xl font-bold text-primary">3-4</div>
                <div className="text-xs text-gray-600">Tuần/Môn</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center shadow-md">
                <div className="text-xl font-bold text-primary">100%</div>
                <div className="text-xs text-gray-600">Tiếng Anh thực tiễn</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center shadow-md">
                <div className="text-xl font-bold text-primary">5</div>
                <div className="text-xs text-gray-600">Lĩnh vực tích hợp</div>
              </div>
            </motion.div>

            {/* Benefits */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-2 mb-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-sm text-gray-700"
                >
                  <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </motion.div> */}

            {/* CTA Buttons */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="h-4 w-4" />
                Học thử STEAM miễn phí
              </motion.button>
              <motion.button
                className="flex items-center justify-center gap-2 bg-white text-primary font-bold py-3 px-6 rounded-xl border-2 border-primary hover:bg-primary/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="h-4 w-4" />
                Tư vấn chương trình
              </motion.button>
            </motion.div> */}
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Project Image */}
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative h-64 md:h-96">
              {/* <div className="relative w-full aspect-[3/2] md:aspect-[16/9] max-h-[800px]"> */}
                <Image
                  src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/Mo%CC%82n%20Ho%CC%A3c%20%C4%90u%CC%9Bo%CC%9B%CC%A3c%20Ye%CC%82u%20Thi%CC%81ch-min.png"
                  alt="Học sinh thực hiện dự án STEAM - Smart Garden tại Chamchi"
                  fill
                  priority
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Project Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <h4 className="text-xl font-bold mb-1">
                      Môn học: Food & Nutrition
                    </h4>
                    <p className="text-sm opacity-90">
                      Học tiếng Anh thông qua việc khám phá các chủ đề về dinh
                      dưỡng và thực phẩm như Tháp Dinh Dưỡng (Food Pyramid), Ăn
                      Uống Lành Mạnh (Healthy Eating) và An Toàn Thực Phẩm (Food
                      Safety).
                    </p>
                  </div>
                </div>
              </div>

              {/* Module Timeline */}
              {/* <div className="p-4">
                <h5 className="font-bold text-gray-900 mb-3 text-center">
                  Tiến trình 4 tuần
                </h5>
                <div className="grid grid-cols-4 gap-2">
                  {["Khám phá", "Phát triển", "Thực hiện", "Trình bày"].map(
                    (phase, index) => (
                      <div key={index} className="text-center">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mb-1 mx-auto">
                          <span className="text-primary text-xs font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <div className="text-xs text-gray-600">{phase}</div>
                      </div>
                    )
                  )}
                </div>
              </div> */}
            </div>

            {/* Floating Benefits */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-pink-400 text-white px-4 py-2 rounded-xl shadow-lg"
            >
              <div className="text-sm font-bold">Môn Học Được Yêu Thích</div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-accent text-gray-900 px-4 py-2 rounded-xl shadow-lg"
            >
              <div className="text-sm font-bold">100% tiếng Anh</div>
              <div className="text-xs opacity-75">Môi trường học tập</div>
            </motion.div> */}

            {/* Knowledge Retention Indicator */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2"
            >
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-primary">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      3-4 tuần
                    </div>
                    <div className="text-xs text-gray-600">Củng cố sâu sắc</div>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
            <p className="text-gray-700 text-sm md:text-base">
              <strong>Tại sao STEAM hiệu quả?</strong> Thay vì học tiếng Anh một
              cách trừu tượng, học sinh sử dụng tiếng Anh như công cụ để khám
              phá, sáng tạo và giải quyết vấn đề thực tế. Thời gian 3-4 tuần cho
              mỗi môn đảm bảo kiến thức được lặp lại và củng cố đầy đủ.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
