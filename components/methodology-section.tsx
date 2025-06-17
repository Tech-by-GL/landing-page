"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { OrbitingMethodology } from "@/components/orbiting-methodology";
import { Sparkles } from "lucide-react";

export function MethodologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      className="min-h-[60vh] md:min-h-[70vh] flex items-center py-8 md:py-12 lg:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      id="methodology"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              scale: Math.random() * 1 + 0.5,
            }}
            animate={{
              y: [
                null,
                Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 800),
              ],
              x: [
                null,
                Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1000),
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center max-w-4xl mx-auto mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-accent" />
            <span>Phương pháp độc đáo</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-6">
            Phương pháp giảng dạy <span className="text-accent">STEAM</span> tại
            Chamchi
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed">
            Khám phá phương pháp giảng dạy độc đáo kết hợp Khoa học, Công nghệ,
            Kỹ thuật, Nghệ thuật và Toán học vào việc học tiếng Anh, giúp học
            sinh phát triển toàn diện.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
          }}
          className="h-[400px] md:h-[500px]"
        >
          <OrbitingMethodology />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.6 },
            },
          }}
          className="mt-8 md:mt-12 text-center -translate-y-72"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
              Hiệu quả đã được chứng minh
            </h3>
            <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6">
              Phương pháp STEAM của Chamchi đã giúp hơn 1000 học sinh đạt được
              chứng chỉ quốc tế với tỷ lệ thành công lên đến 98%.
            </p>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div className="bg-white/10 rounded-lg p-3 md:p-4">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  98%
                </div>
                <div className="text-xs md:text-sm text-white/80">Tỷ lệ đỗ</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 md:p-4">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  1000+
                </div>
                <div className="text-xs md:text-sm text-white/80">Học viên</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 md:p-4">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                  5+
                </div>
                <div className="text-xs md:text-sm text-white/80">
                  Năm kinh nghiệm
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
