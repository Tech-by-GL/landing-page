"use client";

// app/ket/page.tsx
import { EducationalPhilosophy } from "@/components/educational-philosophy";
import { LearningRoadmap } from "@/components/learning-roadmap";
import TestimonialsGrid from "@/components/testimonial-grid";
import { Testimonials } from "@/components/testimonials";
import {
  Badge,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Headphones,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GoogleAICert() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-20">
        <div className="container-custom">
          <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-gray-600 hover:text-primary"
                >
                  <svg
                    className="w-3 h-3 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-9-9-9 9 1.414 1.414L10 3.828l6.879 6.879 1.414-1.414Z" />
                    <path d="M10 6.172 3.879 12.293a1 1 0 0 0-.293.707V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4.586a1 1 0 0 0-.293-.707L10 6.172Z" />
                  </svg>
                  Trang chủ
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    href="/courses"
                    className="ml-1 text-gray-600 hover:text-primary md:ml-2"
                  >
                    Khóa học
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ml-1 text-gray-500 md:ml-2">
                    Khoá học AI với chứng chỉ Google AI Expert
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Khoá học AI với Google
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Khóa học AI dành cho học sinh từ lớp 5, giúp học viên nắm vững
                kiến thức và kỹ năng cần thiết để trở thành chuyên gia AI. Được
                thiết kế bởi các chuyên gia hàng đầu, khóa học cung cấp lộ trình
                học tập rõ ràng, từ cơ bản đến nâng cao, với chứng chỉ Google AI
                Essentials công nhận năng lực.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Thời gian: 1 tháng</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Khai giảng: 01/07/2025</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Sĩ số lớp: 10 - 15 bạn</span>
                </div>
                <div className="flex items-center">
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
                    className="text-primary mr-2"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  <span className="text-gray-700">
                    Chuẩn đầu ra: Chứng chỉ Google AI
                  </span>
                </div>
              </div>

              {/* <div className="space-y-4">
                <h3 className="text-base font-semibold text-gray-700 uppercase tracking-wide">
                  Các cấp độ Cambridge dành cho thiếu nhi
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link
                    href="#contact"
                    className="text-center px-4 py-2 rounded-xl bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition"
                  >
                    STARTERS
                  </Link>
                  <Link
                    href="#curriculum"
                    className="text-center px-4 py-2 rounded-xl bg-yellow-100 text-yellow-800 font-medium hover:bg-yellow-200 transition"
                  >
                    MOVERS
                  </Link>
                  <Link
                    href="#curriculum"
                    className="text-center px-4 py-2 rounded-xl bg-pink-100 text-pink-800 font-medium hover:bg-pink-200 transition"
                  >
                    FLYERS
                  </Link>
                </div>
              </div> */}
              <div className="flex flex-col sm:flex-row gap-4">
                <RegisterNow title="Đăng ký tư vấn miễn phí" color="" />
                <Link
                  href="#curriculum"
                  className="btn-accent text-sm font-bold px-6 py-3 rounded-xl transition  w-52"
                >
                  Xem chương trình học
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                <Image
                  src={
                    "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/student-with-ai.png"
                  }
                  alt={"Chương trình KET"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Khoá học Trí Tuệ Nhân Tạo với Google AI Essentials
              </h2>
              <p className="text-gray-700 text-lg">
                Với sự hỗ trợ từ học viện đào tạo Trí Tuệ Nhân Tạo dành cho các
                doanh nghiệp lớn Langcraft Education, khóa học này được thiết kế
                để giúp học viên nắm vững kiến thức và kỹ năng cần thiết để sử
                dụng AI hiệu quả trong học tập và công việc. Học viên sẽ được
                học từ cơ bản đến nâng cao, bao gồm các chủ đề như:
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>
                    <strong>Giới thiệu về AI:</strong> Hiểu rõ AI là gì, các ứng
                    dụng và xu hướng hiện tại.
                  </li>
                  <li>
                    <strong>Sử dụng ChatGPT hiệu quả:</strong> Cách đặt câu hỏi,
                    tối ưu hóa kết quả và ứng dụng trong học tập.
                  </li>
                  <li>
                    <strong>Sử dụng các công cụ AI để học tiếng Anh:</strong>{" "}
                    với các công cụ như Grammarly, Google Translate, và các ứng
                    dụng học tiếng Anh khác.
                  </li>
                  <li>
                    <strong>Chứng chỉ Google AI Essentials:</strong> Đạt được
                    chứng chỉ công nhận năng lực AI từ Google, với sự hướng dẫn
                    trực tiếp từ đội ngũ giáo viên.
                  </li>
                </ul>
              </p>
            </div>

            {/* <StarterToFlyerRoadmap /> */}

            <div>
              <h3 className="text-2xl  font-bold text-gray-900 mb-5 mt-16">
                Kế hoạch học tập tại
                <span className="text-primary font-bold ml-1">Chăm Chỉ</span>
              </h3>
              {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Vì sao nên thi Starters – Movers – Flyers?
              </h2> */}
              <ul className="list-none text-gray-700 text-base space-y-3 ml-2">
                <li>
                  <strong>Ngày 1:</strong> Học sử dụng ChatGPT cơ bản – cách đặt
                  câu hỏi và nhận câu trả lời.
                </li>
                <li>
                  <strong>Ngày 2:</strong> Học và thực hành các công cụ hỗ trợ,
                  chuẩn bị có kỳ thi chứng chỉ Google AI Essentials.
                </li>
                <li>
                  <strong>Ngày 3:</strong> Học sinh thi chứng chỉ Google AI
                  Essentials, nhận chứng chỉ và đánh giá kết quả.
                </li>
              </ul>
            </div>

            <div className="space-y-4 mt-10">
              {[
                {
                  title: "📘 Vì sao phải học cách dùng AI?",
                  content:
                    " AI đang trở thành công cụ không thể thiếu trong học tập và công việc. Việc biết cách sử dụng AI sẽ giúp học sinh nâng cao hiệu quả học tập, tiết kiệm thời gian và mở rộng khả năng sáng tạo. Học sinh sẽ được hướng dẫn cách sử dụng AI một cách an toàn và hiệu quả.",
                },
                {
                  title: "📊 Con tôi lớp 4 thì có đi học được không?",
                  content:
                    "Các học sinh từ lớp 5 sẽ được coi là phù hợp với chương trình. Tuy nhiên, nếu như học sinh có khả năng sử dụng máy tính thông thạo, thì hoàn toàn có thể tham gia chương trình! Phụ huynh vui lòng liên hệ với trung tâm qua số điện thoại để được tư vấn cụ thể.",
                },
                {
                  title: "📚 Tôi có thể tham gia cùng con không?",
                  content:
                    "Chương trình được thiết kế dành riêng cho học sinh, tuy nhiên phụ huynh có thể tham gia cùng con trong các buổi học để hỗ trợ và theo dõi quá trình học tập. Chúng tôi khuyến khích sự đồng hành của phụ huynh để tạo động lực cho học sinh.",
                },
                {
                  title: "💰 Học phí đã bao gồm tính chỉ chưa?",
                  content:
                    "Học phí cho khóa học AI với Google AI Essentials là 500.000đ, đã bao gồm toàn bộ chi phí học tập, các dụng cụ cần thiết như máy tính, và thi chứng chỉ Google AI Essentials. Học sinh sẽ nhận được chứng chỉ sau khi hoàn thành khóa học.",
                },
              ].map((item, index) => (
                <details
                  key={index}
                  className="group border border-gray-200 rounded-xl p-4 mt-16"
                >
                  <summary className="cursor-pointer list-none text-lg font-medium text-gray-800 flex justify-between items-center">
                    {item.title}
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-3 text-gray-700 text-sm leading-relaxed">
                    {item.content}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Sticky Summary Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-40">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 space-y-6">
                {/* Title */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">
                    Khoá học AI với Google
                  </h4>
                  <p className="text-sm text-gray-600">
                    Chứng chỉ Google AI Essentials – Nền tảng vững chắc cho các
                    bạn học sinh trong thời đại của Trí Tuệ Nhân Tạo.
                  </p>
                </div>

                {/* Section: Tổng quan */}
                <div className="border-t pt-4">
                  <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Thông tin khóa học
                  </h5>
                  <ul className="text-sm text-gray-800 space-y-1">
                    <li>
                      <strong>Độ tuổi:</strong> Từ lớp 4 trở lên
                    </li>
                    <li>
                      <strong>Trình độ:</strong> Không yêu cầu
                    </li>
                    <li>
                      <strong>Sĩ số lớp:</strong> Tối đa 15 học viên / Lớp
                    </li>
                    <li>
                      <strong>Học phí:</strong> 500.000đ / Khoá (đã bao gồm tính
                      chỉ)
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t">
                  <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Tư vấn miễn phí
                  </h5>

                  {/*INput phone number   */}
                  <CallbackForm />
                  {/* <Link
                    href=""
                    className=" mt-2 w-full block text-center px-6 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition"
                  >
                    Nhận tư vấn miễn phí
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hình ảnh học viên */}
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
            <Image
              src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/ket-ai-classroom.png" // 👉 Thay bằng ảnh thật
              alt="Học viên đạt Flyers tại Chăm Chỉ"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
              priority
            />
          </div>

          {/* Nội dung câu chuyện */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Câu chuyện của AI và học tiếng Anh
            </h2>
            <p className="text-base text-gray-700 mb-6">
              Tại Chăm Chỉ, chúng tôi không chỉ dạy tiếng Anh mà còn giúp học
              viên hiểu và sử dụng AI một cách hiệu quả. Khóa học AI với Google
              AI Essentials sẽ trang bị cho học viên những kỹ năng cần thiết để
              sử dụng AI trong học tập và cuộc sống hàng ngày. Học viên sẽ được
              hướng dẫn cách sử dụng các công cụ AI phổ biến như ChatGPT, Google
              Translate, và nhiều ứng dụng khác để nâng cao khả năng tiếng Anh
              của mình.
            </p>

            <ul className="list-none space-y-2 text-gray-800 text-sm mb-8">
              <li>
                <strong>Kết quả:</strong> Đầu ra chuẩn quốc tế: Chứng chỉ Google
                AI Essentials
              </li>
              <li>
                <strong>Thời gian học:</strong> 1 tháng
              </li>
            </ul>

            {/* <div className="mt-6">
              <Link
                href="#register"
                className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition"
              >
                Đăng ký ngay cho bé
              </Link>
            </div> */}
            <RegisterNow title="Đăng ký ngay" color="" />
          </div>
        </div>
      </section>

      <CourseGallery />

      {/* <LearningRoadmap /> */}
      {/* <EducationalPhilosophy /> */}
      {/* Material & Book's marquee */}
      <TestimonialsGrid />

      {/* CTA */}
      <OtherCourses name="Chứng Chỉ Google AI" />

      <style jsx>{`
        .animate-marquee {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

const starterToFlyerRoadmap = [
  {
    id: 1,
    name: "Starters",
    level: "Pre-A1",
    step: 1,
    duration: "4–6 tháng",
    icon: "🔤",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    description:
      "Làm quen tiếng Anh – học phát âm, từ vựng cơ bản và kỹ năng nghe nói đơn giản.",
    outcome:
      "Nhận biết từ vựng, trả lời câu hỏi đơn giản, làm quen bài thi quốc tế.",
  },
  {
    id: 2,
    name: "Movers",
    level: "A1",
    step: 2,
    duration: "5–7 tháng",
    icon: "📘",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    description:
      "Phát triển 4 kỹ năng – mở rộng ngữ pháp, giao tiếp tự tin trong tình huống cơ bản.",
    outcome:
      "Hiểu và dùng câu đơn giản, viết đoạn ngắn, giao tiếp tự nhiên hơn.",
  },
  {
    id: 3,
    name: "Flyers",
    level: "A2",
    step: 3,
    duration: "6–8 tháng",
    icon: "🚀",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    description:
      "Nâng cao kỹ năng – luyện phản xạ nhanh, đọc hiểu và viết ở mức độ học thuật nhẹ.",
    outcome:
      "Chuẩn bị cho KET – sử dụng tiếng Anh thành thạo trong học tập và đời sống.",
  },
];

export function StarterToFlyerRoadmap() {
  return (
    <section className=" bg-white">
      <div className="">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12"> */}
        <h3 className="text-2xl  font-bold text-gray-900 mb-5 mt-10">
          Lộ trình học Cambridge từ Starters đến Flyers
        </h3>
        {/* </h2> */}

        <div className="relative hidden lg:flex items-center justify-between gap-8">
          {/* Line connecting steps */}
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-500 top-1/2 z-0 rounded-full"></div>

          {/* Roadmap Items */}
          {starterToFlyerRoadmap.map((stage, idx) => (
            <div
              key={stage.id}
              className={`relative z-10 w-1/3 ${stage.bgColor} ${stage.borderColor} border-2 rounded-2xl p-6 shadow-md text-center transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="mb-2 text-4xl">{stage.icon}</div>
              <div className="text-sm font-semibold text-primary mb-1">
                Bước {stage.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {stage.name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Thời gian:</strong> {stage.duration}
              </p>
              {/* <p className="text-sm text-gray-700 italic">
                {stage.description}
              </p> */}
              <p className="text-xs text-gray-500 mt-2">🎯 {stage.outcome}</p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-8">
          {starterToFlyerRoadmap.map((stage) => (
            <div
              key={stage.id}
              className={`relative ${stage.bgColor} ${stage.borderColor} border-2 rounded-2xl p-6 shadow-md transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="mb-2 text-3xl">{stage.icon}</div>
              <div className="text-sm font-semibold text-primary mb-1">
                Bước {stage.step}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {stage.name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Trình độ:</strong> {stage.level}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Thời gian:</strong> {stage.duration}
              </p>
              <p className="text-sm text-gray-700 italic mb-1">
                {stage.description}
              </p>
              <p className="text-xs text-gray-500">🎯 {stage.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CourseGallery } from "../tieng-anh-lop-6-9/69";
import { sendTelegramMessage } from "@/components/telegram";
import CallbackForm from "@/components/call-back-form";
import RegisterNow from "@/components/register";
import { OtherCourses } from "../tieng-anh-tre-em/children-english";
// import Image from "next/image";

const books = [
  {
    title: "Grammar Friends A2",
    image: "/books/grammar-friends.jpg",
    note: "Ngữ pháp nền tảng cho cấp 2",
  },
  {
    title: "Vocabulary in Use A2",
    image: "/books/vocab-in-use.jpg",
    note: "Từ vựng theo chủ đề – chuẩn KET/PET",
  },
  {
    title: "Cambridge KET Trainer",
    image: "/books/ket-trainer.jpg",
    note: "Luyện đề thi chứng chỉ KET",
  },
  {
    title: "PET Practice Tests",
    image: "/books/pet-practice.jpg",
    note: "Luyện đề thực tế – chuẩn PET",
  },
  {
    title: "STEM English Projects",
    image: "/books/stem-projects.jpg",
    note: "Kết hợp tiếng Anh và tư duy STEM",
  },
  {
    title: "STEM English Projects",
    image: "/books/stem-projects.jpg",
    note: "Kết hợp tiếng Anh và tư duy STEM",
  },
  {
    title: "STEM English Projects",
    image: "/books/stem-projects.jpg",
    note: "Kết hợp tiếng Anh và tư duy STEM",
  },
  {
    title: "STEM English Projects",
    image: "/books/stem-projects.jpg",
    note: "Kết hợp tiếng Anh và tư duy STEM",
  },
  {
    title: "STEM English Projects",
    image: "/books/stem-projects.jpg",
    note: "Kết hợp tiếng Anh và tư duy STEM",
  },
  {
    title: "STEM English Projects",
    image: "/books/stem-projects.jpg",
    note: "Kết hợp tiếng Anh và tư duy STEM",
  },
  {
    title: "STEM English Projects",
    image: "/books/stem-projects.jpg",
    note: "Kết hợp tiếng Anh và tư duy STEM",
  },
  {
    title: "STEM English Projects",
    image: "/books/stem-projects.jpg",
    note: "Kết hợp tiếng Anh và tư duy STEM",
  },
];

export function BookCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-screen overflow-hidden bg-white py-10 relative">
      <div className="flex justify-between px-6 mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Tài liệu học nổi bật
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide px-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {books.map((book, index) => (
          <div
            key={index}
            className="min-w-[180px] flex-shrink-0 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-48 w-full mb-3 rounded overflow-hidden">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">
              {book.title}
            </h3>
            <p className="text-xs text-gray-500 italic">{book.note}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
