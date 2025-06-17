"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

export const testimonials = [
  {
    id: 1,
    name: "Vũ Lê Tường Vân",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/van-test.png",
    certificate: "IELTS 7.0",
    score: "7.0",
    course: "Khoá Học IELTS",
    quote: `Về chia sẻ của em thì anh Thắng (thầy Thắng, các học sinh thường gọi thầy là "Anh") là một giáo viên rất tốt, từ trình độ chuyên môn tới tâm huyết thì đối với em anh Thắng 10 điểm. Anh Thắng rất kĩ trong việc rèn luyện khả năng tiếng anh thật sự, chứ không chỉ để làm một bài kiểm tra. Chính vì thế sau khóá học ở trung tâm thì tiếng anh của em tốt hơn hẳn. Em có thể nói là giá trị của khoa học đem lại cho em vượt ra ngoài tấm bằng IELTS. 
      Ngoài ra thì học với anh Thắng rất thú vị, còn tại sao thú vị thì em khó diễn tả lắm nha chị`,
    rating: 5,
    duration: "12 tháng",
    featured: true,
    achievement: "Xuất sắc",
    beforeAfter: { before: "5.0", after: "7.0" },
  },
  {
    id: 2,
    name: "Nguyễn Đạt Khôi",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/datkhoi-test.png",
    certificate: "PET - Merit",
    score: "Merit",
    course: "Khoá Học IELTS",
    quote: `
      Theo cảm nhận của em thì học với anh Thắng ko chỉ được về Speaking và Writing mà còn là Thinking, được hướng dẫn viết và nghĩ rồi tự đưa ra giải pháp của riêng mình, ngoài ra thì còn được khai sáng, được think với speak sarcastically :)))

      P/s: Both Thắng đều tuyệt vời và nhớ các anh (lắm).
      `,
    rating: 5,
    duration: "4 tháng",
    featured: true,
    achievement: "Ưu tú",
    beforeAfter: { before: "A2", after: "B1" },
  },
  {
    id: 3,
    name: "Nguyễn Cao Khánh Nguyên",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/nguyen-test.png",
    certificate: "KET - Distinction",
    score: "Distinction",
    course: "Khoá Học IELTS",
    quote:
      "Dạ lúc dạy học anh Thắng dạy vui, dễ hiểu. mỗi lần đi học thì em được giải quyết hầu hết vấn đề gặp phải trong writing và cảm thấy được khai sáng.",
    rating: 5,
    duration: "3 tháng",
    featured: false,
    achievement: "Xuất sắc",
    beforeAfter: { before: "Beginner", after: "A2" },
  },
  {
    id: 4,
    name: "Trần Lê Anh Khôi",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/khoi-test.png",
    certificate: "IELTS 6.5",
    score: "6.5",
    course: "Khoá Học IELTS",
    quote: `
      Chăm Chỉ là môi trường học tập tuyệt vời, không chỉ học tiếng Anh, nơi đây còn có nhiều phần mềm tích hợp công nghệ để hỗ trợ học tập hiệu quả. Em rất hài lòng với kết quả học tập của mình.
      `,
    rating: 5,
    duration: "6 tháng",
    featured: false,
    achievement: "Giỏi",
    beforeAfter: { before: "4.5", after: "6.5" },
  },
  {
    id: 5,
    name: "Hồ Hoàng Vân Anh",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/tina-test.png",
    certificate: "STEAM Certificate",
    score: "A+",
    course: "Khoá Học IELTS",
    quote: `
      Chăm Chỉ là nơi em đã học tập và rèn luyện tiếng Anh một cách hiệu quả nhất. Em đã có thể tự tin giao tiếp và làm bài thi IELTS với điểm số cao. Em rất cảm ơn các thầy cô đã giúp đỡ em trong suốt quá trình học tập này.  
      
`,
    rating: 5,
    duration: "8 tháng",
    featured: false,
    achievement: "Sáng tạo",
    beforeAfter: { before: "A1", after: "B1" },
  },
  {
    id: 6,
    name: "Lưu Nguyễn Mạnh Tiến",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/tien-test.png",
    certificate: "PET - Pass",
    score: "Pass",
    course: "Khoá học KET",
    quote:
      "Phụ huynh: Tôi đã cải thiện đáng kể kỹ năng tiếng Anh của mình tại Chamchi. Môi trường học tập tích cực và phương pháp giảng dạy hiện đại đã giúp tôi đạt được mục tiêu.",
    rating: 4,
    duration: "5 tháng",
    featured: false,
    achievement: "Tiến bộ",
    beforeAfter: { before: "A2", after: "B1" },
  },
  {
    id: 7,
    name: "Nguyễn Lê Anh Thư",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/thu-test.png",
    certificate: "STEAM Certificate",
    score: "A+",
    course: "Khoá Học IELTS",
    quote:
      "Chăm Chỉ là nơi em đã học tập và rèn luyện tiếng Anh một cách hiệu quả nhất. Em đã có thể tự tin giao tiếp và làm bài thi IELTS với điểm số cao. Em rất cảm ơn các thầy cô đã giúp đỡ em trong suốt quá trình học tập này.",
    rating: 5,
    duration: "8 tháng",
    featured: false,
    achievement: "Sáng tạo",
    beforeAfter: { before: "A1", after: "B1" },
  },
  {
    id: 8,
    name: "Hồ Hồng Anh",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/honganh-test.png",
    certificate: "PET - Pass",
    score: "Pass",
    course: "Khoá Học IELTS",
    quote: `
      dạ trộm vía là điểm không thấp như em tưởng tại trước khi học là em nghĩ em 4.0=)))) for real luôn á bởi v em mới sợ mà trường em bắt nộp bằng gấp nên em mới hoang mang hơn à xong cái vô tình được học với mấy anh là cảm thấy ok hơn trước với học cũng dui=))) em sợ nhất là listening với riting tại write á là em kh biết phải làm gì với nó luôn kiểu mong lung luôn á, mấy giáo viên trước cũng chỉ dàn bài r này nọ mà thật sự em hong biết làm=)) có lần em vừa làm vừa khóc luôn mà. Cái học mấy anh rồi được chỉ chi tiết là bố cục như nào, bước đầu làm gì rồi sau đó là gì cái em mới biết mình phải viết gì nên em không có bị hoang mang ở phần viết nữa. Trời ơii từ đứa tốn 1h cho write task1 hoặc hơn 1h30 cho task2 mà trong 3 tháng em học xong bay lên 6.0 luôn phải gọi là trộm viáaaaaa. Còn listen á thì em cũng được chỉ mẹo nhiều nhưng mà do em yếu phần này, với thgian gấp quá nên em chưa ổn lúm nhma em cũng được chỉ mẹo nên 4.5 là kì tích với em rồi chứ lúc thi xong em tưởng 3.0 cho phân này=)))) tóm gọn là em thấy siêu ổnnnn lúc thi xong em sợ lắm mà ai ngờ đc 5.5 cái em la bể nhà.
      `,
    rating: 4,
    duration: "5 tháng",
    featured: false,
    achievement: "Tiến bộ",
    beforeAfter: { before: "A2", after: "B1" },
  },
  {
    id: 9,
    name: "Nguyễn Minh Châu",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/chau-test.png",
    certificate: "PET - Pass",
    score: "Pass",
    course: "Khoá Học IELTS",
    quote:
      "Phụ huynh: Lộ trình rõ ràng, giáo viên hỗ trợ sát sao, con tự tin hơn từng ngày",
    rating: 4,
    duration: "5 tháng",
    featured: false,
    achievement: "Tiến bộ",
    beforeAfter: { before: "A2", after: "B1" },
  },
  {
    id: 10,
    name: "Bùi Hữu Anh Đức",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/anhduc-test.png",
    certificate: "PET - Pass",
    score: "Pass",
    course: "Khoá Học IELTS",
    quote:
      "Tôi đã cải thiện đáng kể kỹ năng tiếng Anh của mình tại Chamchi. Môi trường học tập tích cực và phương pháp giảng dạy hiện đại đã giúp tôi đạt được mục tiêu.",
    rating: 4,
    duration: "5 tháng",
    featured: false,
    achievement: "Tiến bộ",
    beforeAfter: { before: "A2", after: "B1" },
  },
  {
    id: 11,
    name: "Nguyễn Ngọc Hương Thảo",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/thao-test.png",
    certificate: "IELTS 6.0",
    score: "Pass",
    course: "Khoá Học IELTS",
    quote:
      "Phụ huynh: Tôi đã cải thiện đáng kể kỹ năng tiếng Anh của mình tại Chamchi. Môi trường học tập tích cực và phương pháp giảng dạy hiện đại đã giúp tôi đạt được mục tiêu.",
    rating: 4,
    duration: "5 tháng",
    featured: false,
    achievement: "Tiến bộ",
    beforeAfter: { before: "A2", after: "B1" },
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(
    null
  );

  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const regularTestimonials = testimonials.filter((t) => !t.featured);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, featuredTestimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length
    );
  };

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

  return (
    <section>
      <section
        className="min-h-screen flex items-center py-12 md:py-16 bg-gradient-to-br from-primary/5 via-white to-accent/5"
        id="testimonials"
        ref={ref}
      >
        <div className="container-custom">
          {/* Header */}
          <motion.div
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
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Featured Testimonial Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Carousel Controls */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 transition-colors"
                    aria-label={isAutoPlay ? "Tạm dừng" : "Phát"}
                  >
                    {isAutoPlay ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 md:p-8"
                  >
                    {(() => {
                      const testimonial = featuredTestimonials[currentSlide];
                      if (!testimonial) return null;

                      return (
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Student Info */}
                          <div className="flex-shrink-0 text-center md:text-left">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto md:mx-0 mb-4">
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                fill
                                className="object-cover rounded-full"
                              />
                              <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-1">
                                <Award className="h-3 w-3" />
                              </div>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                              {testimonial.name}
                            </h3>
                            <div className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                              {testimonial.certificate}
                            </div>
                            <div className="flex justify-center md:justify-start mb-2">
                              {renderStars(testimonial.rating)}
                            </div>
                            <div className="text-sm text-gray-600">
                              {testimonial.course}
                            </div>
                          </div>

                          {/* Testimonial Content */}
                          <div className="flex-1">
                            <div className="relative">
                              <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                              <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 pl-6">
                                "{testimonial.quote}"
                              </blockquote>
                            </div>

                            {/* Achievement Metrics */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                              <div className="bg-primary/10 rounded-lg p-3 text-center">
                                <div className="text-lg font-bold text-primary">
                                  {testimonial.score}
                                </div>
                                <div className="text-xs text-gray-600">
                                  Kết quả
                                </div>
                              </div>
                              <div className="bg-accent/20 rounded-lg p-3 text-center">
                                <div className="text-lg font-bold text-gray-900">
                                  {testimonial.duration}
                                </div>
                                <div className="text-xs text-gray-600">
                                  Thời gian
                                </div>
                              </div>
                              <div className="bg-green-100 rounded-lg p-3 text-center">
                                <div className="text-lg font-bold text-green-700">
                                  {testimonial.achievement}
                                </div>
                                <div className="text-xs text-gray-600">
                                  Xếp loại
                                </div>
                              </div>
                            </div>

                            {/* Progress Indicator */}
                            <div className="mt-4 flex items-center justify-between text-sm">
                              <span className="text-gray-600">Tiến bộ:</span>
                              <div className="flex items-center gap-2">
                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
                                  {testimonial.beforeAfter.before}
                                </span>
                                <span className="text-gray-400">→</span>
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                                  {testimonial.beforeAfter.after}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    className="bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 transition-colors"
                    aria-label="Testimonial trước"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div className="flex gap-2">
                    {featuredTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? "bg-primary" : "bg-gray-300"
                        }`}
                        aria-label={`Đi tới testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 transition-colors"
                    aria-label="Testimonial tiếp theo"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Compact Testimonials Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Thêm đánh giá
              </h3>

              {regularTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedTestimonial(testimonial.id)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900 text-sm truncate">
                          {testimonial.name}
                        </h4>
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      <div className="text-xs text-primary font-medium mb-2">
                        {testimonial.certificate}
                      </div>

                      <p className="text-sm text-gray-700 line-clamp-2 mb-2">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center justify-between text-xs">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                          {testimonial.course}
                        </span>
                        <span className="text-gray-500">
                          {testimonial.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* View All Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
                className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-medium py-3 px-4 rounded-xl transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Xem tất cả đánh giá ({testimonials.length})
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Bạn cũng muốn thành công như các bạn trên?
              </h3>
              <p className="text-gray-700 mb-6">
                Đăng ký ngay để được tư vấn miễn phí và trải nghiệm buổi học thử
                không mất phí
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Đăng ký học thử miễn phí
                </motion.button>
                <motion.button
                  className="btn-accent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Tư vấn lộ trình học tập
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Testimonial Modal */}
        <AnimatePresence>
          {selectedTestimonial && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedTestimonial(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const testimonial = testimonials.find(
                    (t) => t.id === selectedTestimonial
                  );
                  if (!testimonial) return null;

                  return (
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-16 h-16">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {testimonial.name}
                          </h3>
                          <div className="text-primary font-medium">
                            {testimonial.certificate}
                          </div>
                          <div className="flex">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>

                      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">
                            Khóa học
                          </div>
                          <div className="font-semibold">
                            {testimonial.course}
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">
                            Thời gian
                          </div>
                          <div className="font-semibold">
                            {testimonial.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
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
