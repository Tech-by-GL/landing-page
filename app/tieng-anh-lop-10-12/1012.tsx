"use client";

import BookCarousel from "@/components/book-carousel";
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
import { CourseGallery } from "../tieng-anh-lop-6-9/69";
import { OtherCourses } from "../tieng-anh-tre-em/children-english";
import RegisterNow from "@/components/register";

export default function From10to12() {
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
                    Chương trình Tiếng Anh Cấp 3 - THPT
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Chương trình Tiếng Anh Cấp 3 - THPT
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Chương trình tiếng Anh cấp 3 tại Chăm Chỉ được thiết kế đặc biệt
                để giúp học sinh lớp 10, 11, 12 phát triển toàn diện kỹ năng
                tiếng Anh, từ giao tiếp hàng ngày đến chuẩn bị cho các kỳ thi
                quan trọng Thi đại học và IELTS.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Thời gian: 12 tháng</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Khai giảng: Mỗi tháng</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Sĩ số lớp: 8 - 12 bạn</span>
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
                    Cấp độ: A1-B1 Chuẩn Cambridge
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <RegisterNow title="Đăng ký tư vấn miễn phí" color="" />
                <Link
                  href="#curriculum"
                  className="btn-accent text-sm font-bold px-6 py-3 rounded-xl transition"
                >
                  Xem chương trình học
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                <Image
                  src={
                    "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/3.png"
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

      <section className="py-20 bg-white" id="curriculum">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" id="curriculum">
                Chương trình Tiếng Anh Cấp 3 - THPT
              </h2>
              <p className="text-gray-700 text-lg">
                Chương trình tiếng Anh cấp 3 tại Chăm Chỉ được thiết kế đặc biệt
                để giúp học sinh lớp 10, 11, 12 phát triển toàn diện kỹ năng
                tiếng Anh, từ giao tiếp hàng ngày đến chuẩn bị cho các kỳ thi
                quan trọng như thi đại học và IELTS.
              </p>
            </div>

            {/* <StarterToFlyerRoadmap /> */}

            <div>
              <h3 className="text-2xl  font-bold text-gray-900 mb-5 mt-16">
                Thế mạnh của
                <span className="text-primary font-bold ml-1">
                  Anh Ngữ Chăm Chỉ
                </span>
              </h3>
              <ul className="list-none text-gray-700 text-base space-y-3 ml-2">
                <li>
                  <strong>
                    Ngữ pháp song song rvới chương trình phổ thông:
                  </strong>{" "}
                  đảm bảo điểm kiểm tra, học kỳ.
                </li>
                <li>
                  <strong>Chứng chỉ quốc tế:</strong> chuẩn bị và thi KET/PET
                  theo khung CEFR A2-B1.
                </li>
                <li>
                  <strong>Ôn luyện thi lớp 10:</strong> bám sát dạng đề, từ vựng
                  và kỹ năng đọc hiểu, viết bài luận.
                </li>
                <li>
                  <strong>Chương trình học tích hợp STEM:</strong> phát triển tư
                  duy logic – phản biện – trình bày.
                </li>
                <li>
                  <strong>Phù hợp mọi trình độ:</strong> từ mất gốc đến khá
                  giỏi, có lộ trình cá nhân hóa.
                </li>
              </ul>
            </div>

            {/* <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 mt-14">
                Thế mạnh của{" "}
                <span className="text-primary font-bold ml-1">Chăm Chỉ</span>
              </h3>
              <ul className="list-disc text-gray-700 text-base space-y-3 ml-6">
                <li>
                  <strong className="capitalize ">
                    ĐỘI NGŨ GIÁO VIÊN TẬN TÂM:
                  </strong>{" "}
                  Đội ngũ chuyên sâu và tận tâm, giàu kinh nghiệm.
                </li>
                <li>
                  <strong>THEO DÕI VÀ BÁO CÁO:</strong> Đánh giá định kỳ – báo
                  cáo chi tiết – điều chỉnh lộ trình riêng cho từng em.
                </li>
                <li>
                  <strong>CHI PHÍ HỢP LÝ:</strong> Mức học phí phù hợp, cam kết
                  chất lượng và dịch vụ vượt mong đợi.
                </li>
              </ul>
            </div> */}

            <div className="space-y-4 mt-10">
              {[
                {
                  title: "📘 Chứng chỉ KET/PET có thực sự cần thiết?",
                  content:
                    "KET và PET là hai chứng chỉ quốc tế của Cambridge tương ứng với trình độ A2 và B1. Đây là nền tảng vững chắc cho học sinh cấp 2 muốn xét tuyển vào các lớp tăng cường, lớp tích hợp, hoặc tiếp tục học lên IELTS sau này. Nhiều trường THCS và THPT ở TP.HCM xem đây là một lợi thế trong tuyển sinh.",
                },
                {
                  title: "📊 Làm sao biết con có tiến bộ?",
                  content:
                    "Chúng tôi đánh giá tiến độ hàng tháng thông qua các bài kiểm tra ngữ pháp – kỹ năng – từ vựng theo dạng đề thật. Phụ huynh được gửi báo cáo cá nhân định kỳ, kèm theo tư vấn từ giáo viên để điều chỉnh chiến lược học phù hợp.",
                },
                {
                  title: "📚 Học bằng giáo trình gì?",
                  content:
                    "Chương trình tích hợp giáo trình Cambridge chính thống (KET/PET), bài luyện thi tuyển sinh lớp 10, cùng học liệu học thuật và kỹ năng mềm. Ngoài ra, học sinh còn thực hành các dự án STEAM để nâng cao phản xạ và khả năng trình bày.",
                },
                {
                  title: "👨‍👩‍👧‍👦 Phụ huynh có thể đồng hành không?",
                  content:
                    "Chúng tôi tạo cầu nối chặt chẽ giữa giáo viên – phụ huynh – học sinh thông qua sổ liên lạc điện tử, đánh giá hàng tháng, họp phụ huynh định kỳ và kênh tư vấn trực tiếp. Phụ huynh hoàn toàn yên tâm theo dõi hành trình học tập của con.",
                },
                {
                  title: "💰 Học phí có phù hợp không?",
                  content:
                    "Chăm Chỉ cung cấp nhiều gói học phù hợp cho từng mục tiêu: lấy chứng chỉ quốc tế, ôn thi lớp 10, hoặc học tăng cường. Lộ trình rõ ràng, chi phí minh bạch và có chính sách hỗ trợ học sinh giỏi hoặc học sinh có hoàn cảnh đặc biệt.",
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
                    Tiếng Anh Trẻ Em Toàn Diện
                  </h4>
                  <p className="text-sm text-gray-600">
                    Chương trình thiết kế theo khung Cambridge, với môi trường
                    học tập giúp các em phát triển toàn diện, hướng tới các tính
                    chỉ quốc tế Starters – Movers – Flyers.
                  </p>
                </div>

                {/* Section: Tổng quan */}
                <div className="border-t pt-4">
                  <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Thông tin khóa học
                  </h5>
                  <ul className="text-sm text-gray-800 space-y-1">
                    <li>
                      <strong>Độ tuổi:</strong> 6–10 tuổi
                    </li>
                    <li>
                      <strong>Trình độ:</strong> A1 Starters đến A2 Flyers
                    </li>
                    <li>
                      <strong>Sĩ số lớp:</strong> Tối đa 12 học viên
                    </li>
                    <li>
                      <strong>Học phí:</strong> Từ 1.000.000đ / tháng
                    </li>
                  </ul>
                </div>

                {/* Section: Tổng quan */}
                {false && (
                  <div className="border-t pt-4">
                    <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      Thời gian và địa điểm
                    </h5>
                    <ul className="text-sm text-gray-800 space-y-1">
                      <li>
                        <strong>Lịch học:</strong> Trong tuần hoặc cuối tuần
                      </li>
                      <li>
                        <strong>Thời khoá biểu:</strong> 2 buổi / tuần
                      </li>
                      <li>
                        <strong>Thời lượng:</strong> 1 tiếng 15 phút / buổi
                      </li>
                      <li>
                        <strong>Hình thức học:</strong> Trực tiếp tại trung tâm
                      </li>
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <div className="pt-4 border-t">
                  <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Tư vấn miễn phí
                  </h5>

                  {/*INput phone number   */}
                  <div>
                    {/* <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1 mt-2"
                    >
                      Số điện thoại của bạn
                    </label> */}
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Nhập số điện thoại"
                      className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    />
                  </div>

                  <Link
                    href="#register"
                    className=" mt-2 w-full block text-center px-6 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition"
                  >
                    Nhận tư vấn miễn phí
                  </Link>
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
              src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/3.png" // 👉 Thay bằng ảnh thật
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
              Tốt Nghiệp THPT với điểm tiếng Anh 9.0+
            </h2>
            <p className="text-base text-gray-700 mb-6">
              Bạn <strong> Mỹ Lan (Lớp 12 - THPT Thủ Đức)</strong>
              đã xuất sắc tốt nghiệp THPT với điểm tiếng Anh 9.0, nhờ lộ trình
              học tập tại Chăm Chỉ. Với sự hỗ trợ tận tình từ giáo viên và
              chương trình học bài bản, bạn đã nắm vững ngữ pháp, từ vựng và kỹ
              năng giao tiếp cần thiết để vượt qua kỳ thi một cách tự tin.
            </p>

            <ul className="list-none space-y-2 text-gray-800 text-sm mb-8">
              <li>
                <strong>Kết quả:</strong> Điểm thi tốt nghiệp THPT môn tiếng Anh
                9.0
              </li>
              <li>
                <strong>Thời gian học:</strong> Từ Lớp 11 đến Lớp 12 tại Chăm
                Chỉ
              </li>
              <li>
                <strong> Học sinh đánh giá:</strong>
                Các thầy cô tại Chăm Chỉ rất nhiệt tình và tâm huyết. Chương
                trình học rất bài bản và giúp em tự tin hơn trong kỳ thi tốt
                nghiệp.
              </li>
            </ul>

            {/* <div className="mt-6">
              <Link
                href="#register"
                className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition"
              >
                Đăng ký ngay
              </Link>
            </div> */}

            <RegisterNow title="Đăng ký ngay cho bé" color="" />
          </div>
        </div>

        {false && (
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Nội dung câu chuyện */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Lấy lại gốc ngữ pháp tiếng Anh chỉ sau 6 tháng
              </h2>
              <p className="text-base text-gray-700 mb-8">
                Bạn <strong>Anh Thư (lớp 12)</strong>
                đã vượt qua khó khăn trong việc học tiếng Anh bằng cách tham gia
                khóa học ngữ pháp tại Chăm Chỉ.
              </p>

              {/* <ul className="list-none space-y-2 text-gray-800 text-sm">
              <li>
                <strong>Kết quả:</strong> 
              </li>
              <li>
                <strong>Thời gian học:</strong> 6 tháng
              </li>
            </ul> */}

              {/* <div className="mt-6">
                <Link
                  href="#register"
                  className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition"
                >
                  Đăng ký ngay cho bé
                </Link>
              </div> */}

              <RegisterNow title="Đăng ký ngay cho bé" color="" />
            </div>

            {/* Hình ảnh học viên */}
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 mt-10">
              <Image
                src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/nguphap.png" // 👉 Thay bằng ảnh thật
                alt="Học viên đạt Flyers tại Chăm Chỉ"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        )}
      </section>

      {/* <BookCarousel /> */}

      {/* <CourseGallery /> */}

      {/* <LearningRoadmap /> */}
      {/* <EducationalPhilosophy /> */}
      {/* Material & Book's marquee */}
      <TestimonialsGrid />

      {/* CTA */}
      <OtherCourses name="Tiếng Anh Lớp 10-12" />

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
