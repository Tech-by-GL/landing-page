"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Star, X } from "lucide-react";
import { testimonials } from "./testimonials";

export default function TestimonialsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 })
  const controls = useAnimation();
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>();

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
    <section
      className="min-h-screen py-16 px-4 bg-gradient-to-br from-primary/5 via-white to-accent/5"
      ref={ref}
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Học viên nói gì về <span className="text-primary">Chamchi</span>
          </h2>
          <p className="text-lg text-gray-700">
            Những câu chuyện thành công đến từ trải nghiệm học tập thực tế và
            tích hợp
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials?.slice(0, 6)?.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              {/* <div className="relative h-80 w-full"> */}
              <div className="relative w-full min-h-[20rem]">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  // fill
                  width={400}
                  height={300}
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
                {/* <p className="text-sm text-gray-700 mb-4"> */}
                <p className="text-sm text-gray-700 mb-4 line-clamp-4 overflow-hidden">
                  "{testimonial.quote}"
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{testimonial.course}</span>
                  <span>{testimonial.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div
          className="flex justify-center mt-8"
          onClick={() => {
            // navigate to /testimonials
            window.location.href = "/testimonial";
          }}
        >
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-primary/10 hover:bg-primary/20 text-primary font-medium py-3 px-4 rounded-xl transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Xem tất cả đánh giá ({testimonials.length})
          </motion.button>
        </div>

        <AnimatePresence>
          {selectedTestimonial && (
            <motion.div
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTestimonial(null)}
            >
              <motion.div
                className="bg-white max-w-xl w-full rounded-xl p-6 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedTestimonial(null)}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="text-center mb-4">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <Image
                      src={selectedTestimonial.image || "/placeholder.svg"}
                      alt={selectedTestimonial.name}
                      // fill
                      width={168}
                      height={168}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {selectedTestimonial.name}
                  </h3>
                  <div className="text-sm text-primary font-semibold mb-2">
                    {selectedTestimonial.certificate}
                  </div>
                  <div className="flex justify-center mb-4">
                    {renderStars(selectedTestimonial.rating)}
                  </div>
                </div>
                <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
                  "{selectedTestimonial.quote}"
                </blockquote>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <div className="font-semibold">Khóa học</div>
                    <div>{selectedTestimonial.course}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Thời gian</div>
                    <div>{selectedTestimonial.duration}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

