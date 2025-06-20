"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image, { type ImageProps } from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { OptimizedImage } from "@/components/optimized-image";
import RegisterNow from "./register";

export const courses = [
  {
    id: 1,
    slug: "tieng-anh-tre-em",
    title: "Tiếng Anh Trẻ Em Lớp 1-5",
    description:
      "Khóa học tiếng Anh dành cho trẻ em từ 6-10 tuổi, giúp các em làm quen với tiếng Anh thông qua các hoạt động vui nhộn và sáng tạo.",
    // image: "/KET-11.jpg",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/1-mini.png",
    features: [
      "Học từ vựng cơ bản qua trò chơi và hoạt động",
      "Phát triển toàn diện các kỹ năng nghe, nói, đọc, viết",
      "Hướng tới tính chỉ quốc tế",
    ],
    input: ["Học sinh từ tiểu học"],
    output: ["STARTER, MOVERS, FLYERS"],
    duration: "Linh hoạt",
  },
  {
    id: 2,
    slug: "tieng-anh-lop-6-9",
    title: "Tiếng Anh Lớp 6-9",
    description:
      "Khóa học chuẩn bị cho kỳ thi Cambridge Key English Test (KET), chứng chỉ tiếng Anh cơ bản đầu tiên.",
    // image: "/KET-2.jpg",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/2-mini.png",
    features: [
      "2.000+ từ vựng thông dụng trải dài 16 môn học",
      "Diễn đạt ý tưởng cá nhân & tự tin giao tiếp",
      "Các kiến thức nền tảng về đời sống và khoa học",
    ],
    output: ["KET, PET, Thi vào lớp 10"],
    duration: "12-14 tháng",
  },
  {
    id: 3,
    slug: "tieng-anh-lop-10-12",
    title: "Tiếng Anh Lớp 10-12",
    description:
      "Khóa học chuẩn bị cho kỳ thi IELTS, giúp học viên đạt được điểm số mục tiêu từ 5.5 đến 7.5.",
    // image: "/lop10-3.jpg",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/3-mini.png",
    features: [
      "Học thuật và giao tiếp tiếng Anh nâng cao",
      "Phát triển kỹ năng viết luận và thuyết trình",
      "Chuẩn bị cho bài thi IELTS Academic - General Training",
    ],
    output: ["Tiếng Anh Cấp THPT"],
    duration: "06-24 tháng",
  },
  {
    id: 4,
    slug: "tieng-anh-ielts",
    title: "IELTS",
    description:
      "Khóa học chuẩn bị cho kỳ thi Cambridge Preliminary English Test (PET), chứng chỉ tiếng Anh trình độ trung cấp.",
    // image: "/ielts2.png",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/4-mini.png",
    features: [
      "1.200+ từ vựng nâng cao trải dài 12 môn học",
      "Tiếp cận STEAM với độ phức tạp cao",
      "Phát triển tư duy phản biện và kỹ năng giải quyết vấn đề",
    ],
    output: ["IELTS"],
    duration: "12-16 tháng",
  },
  {
    id: 5,
    slug: "tieng-anh-cho-nguoi-di-lam",
    title: "Tiếng Anh Cho Người Đi Làm",
    description:
      "Khóa học ngữ pháp tiếng Anh cơ bản, giúp học viên nắm vững cấu trúc ngữ pháp và sử dụng chính xác trong giao tiếp & các bài thi ở trường học.",
    // image: "/ielts5.jpg",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/6-mini.png",
    features: [
      "Nắm vững các cấu trúc ngữ pháp cơ bản",
      "Cải thiện khả năng viết và nói tiếng Anh",
      "Chuẩn bị cho các bài kiểm tra ngữ pháp ở trường",
    ],
    output: ["Giao tiếp tiếng Anh linh hoạt"],
    duration: "Linh hoạt",
  },
  {
    id: 6,
    slug: "chung-chi-google-ai",
    title: "Chứng Chỉ Google AI",
    description:
      "Khoá học AI ngắn hạn, nơi Chăm Chỉ giúp các học sinh thực hành & ứng dụng AI, qua đó là các bạn sẽ có thể sử dụng AI để giải quyết các vấn đề thực tế trong cuộc sống và công việc. Đồng thời, các bạn sẽ được cấp chứng chỉ Google AI sau khi hoàn thành khoá học.",
    // image: "/ielts3.png",
    image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/7-mini.png",
    features: [
      "Nắm vững các cấu trúc ngữ pháp cơ bản",
      "Cải thiện khả năng viết và nói tiếng Anh",
      "Chuẩn bị cho các bài kiểm tra ngữ pháp ở trường",
    ],
    output: ["Chứng Chỉ Google AI"],
    duration: "Linh hoạt",
  },
];

export function Courses() {
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
        staggerChildren: 0.1,
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

  const getLinkHref = (slug: string) => {
    return "/" + slug;
  };

  return (
    <section
      // bg-gradient-to-br from-[#f0f8ff] to-[#ffffff]

      className="min-h-[60vh] md:min-h-[70vh] flex items-center py-8 md:py-12 lg:py-16 bg-gradient-to-br from-[#f0f8ff] to-[#ffffff]"
      id="courses"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Các khóa học tại <span className="text-primary">Chamchi</span>
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Chúng tôi cung cấp nhiều khóa học khác nhau để đáp ứng nhu cầu và
            mục tiêu của từng học viên
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // chứ không dùng controls
          // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto "
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={item}
              className=" bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation hover:cursor-pointer"
              onClick={() => {
                // window.location.href = `/courses/${course.slug}`;
                window.location.href = getLinkHref(course.slug);
              }}
            >
              {/* <OptimizedImage
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                loadingClassName="bg-primary/10"
              /> */}

              <div className="relative w-full h-48 md:h-56 lg:h-64">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="/placeholder.png" // hoặc bỏ dòng này nếu không cần placeholder
                />
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 line-clamp-2">
                  {course.description}
                </p>

                {false && (
                  <div className="mb-3 md:mb-4">
                    <ul className="space-y-1">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary mr-2 mt-0.5"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-xs md:text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex items-center mb-2">
                  ⏱️
                  <span className="text-xs md:text-sm text-gray-600 ml-2">
                    <strong> Thời gian</strong>: {course.duration}
                  </span>
                </div>

                <div className="flex items-center mb-2">
                  🎯
                  <span className="text-xs md:text-sm text-gray-600 ml-2">
                    <strong>Chuẩn đầu ra</strong>: {course.output?.[0]}
                  </span>
                </div>

                <div
                  className="flex justify-between items-center mt-4 gap-5"
                  onClick={(e) => {
                    e.stopPropagation(); // Ngăn chặn sự kiện click lan truyền lên motion.div
                  }}
                >
                  <Link
                    // href={`/courses/${course.slug}`}
                    href={getLinkHref(course.slug)}
                    className="w-1/2 btn block text-center py-2 px-4 bg-primary text-white hover:bg-primary/90 transition-colors text-sm md:text-base rounded-xl"
                  >
                    Tìm hiểu thêm
                  </Link>

                  <RegisterNow title="Đăng ký ngay" color="yellow" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 md:mt-16"
        >
          <Link href="#contact" className="btn-accent rounded-xl">
            Đăng ký tư vấn miễn phí
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}
