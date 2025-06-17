"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Star, Award } from "lucide-react";
import { testimonials } from "@/components/testimonials";
import VideoTestimonialSection from "@/components/video-testimonials";

export default function FullPageTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const renderStars = (rating: any) => {
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
    <section>
      <VideoTestimonialSection />

      <div
        className="min-h-screen py-16 px-4 md:px-12 bg-white text-gray-900"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Câu chuyện thành công từ học viên Chamchi
          </h2>
          <p className="text-gray-600">
            Từ những khởi đầu khác nhau, họ đều tìm thấy thành công tại Chamchi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, visibleCount).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedTestimonial(index + 1)} // +1 to match id
            >
              <div className="relative h-80 w-full">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <div className="text-sm text-primary font-semibold mb-2">
                  {testimonial.certificate}
                </div>
                <div className="flex mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{testimonial.course}</span>
                  <span>{testimonial.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < testimonials.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="bg-primary text-white font-medium py-2 px-6 rounded-xl hover:bg-primary/90 transition"
            >
              Xem thêm
            </button>
          </div>
        )}

        <AnimatePresence>
          {selectedTestimonial && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTestimonial(0)}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 max-w-xl w-full overflow-y-auto"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const t = testimonials.find(
                    (x) => x.id === selectedTestimonial
                  );
                  if (!t) return null;
                  return (
                    <div>
                      {/* <div className="flex items-center gap-4 mb-4"> </div> */}
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={600}
                        height={600}
                        className="rounded-2xl object-cover"
                      />
                      <div className="mt-4">
                        <h3 className="text-xl font-bold">{t.name}</h3>
                        <p className="text-primary font-medium">
                          {t.certificate}
                        </p>
                        <div className="flex">{renderStars(t.rating)}</div>
                      </div>

                      <div
                        style={{
                          maxHeight: "200px",
                          overflowY: "auto",
                          marginTop: "1rem",
                          marginBottom: "1rem",
                          padding: "1rem",
                          border: "1px solid #e5e7eb",
                          borderRadius: "0.5rem",
                        }}
                      >
                        <blockquote className="text-gray-700 mb-4 italic">
                          "{t.quote}"
                        </blockquote>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Khóa học:</strong> {t.course}
                        </div>
                        <div>
                          <strong>Thời gian:</strong> {t.duration}
                        </div>
                        <div>
                          <strong>Kết quả:</strong> {t.score}
                        </div>
                        <div>
                          <strong>Xếp loại:</strong> {t.achievement}
                        </div>
                        <div className="col-span-2 flex items-center gap-2">
                          <strong>Tiến bộ:</strong>
                          <span className="bg-red-100 px-2 py-1 rounded">
                            {t.beforeAfter.before}
                          </span>
                          <span>→</span>
                          <span className="bg-green-100 px-2 py-1 rounded">
                            {t.beforeAfter.after}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
