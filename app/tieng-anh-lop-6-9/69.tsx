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

export default function ClassFrom6to9() {
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
                    Chương trình Tiếng Anh Cấp 2 – THCS
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Chương trình Tiếng Anh Cấp 2 – THCS
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Dành cho học sinh từ lớp 6 đến lớp 9, chương trình giúp học viên
                vừa <strong>đảm bảo điểm số trên lớp</strong> qua hệ thống ngữ
                pháp nền tảng, vừa{" "}
                <strong>phát triển tư duy ngôn ngữ theo chuẩn quốc tế</strong>{" "}
                (KET/PET). Ngoài ra, các em được{" "}
                <strong>luyện tập bài bản để thi vào lớp 10</strong> tại các
                trường THPT hàng đầu tại TP.HCM.
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
                <Link href="#contact" className="btn-primary text-center">
                  Đăng ký ngay
                </Link>
                <Link href="#curriculum" className="btn-accent text-center">
                  Xem chương trình học
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                <Image
                  src={"https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/2.png"}
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
                Chương Trình Tiếng Anh Toàn Diện
              </h2>
              <p className="text-gray-700 text-lg">
                Dành cho học sinh từ lớp 6 đến lớp 9, chương trình giúp học viên
                vừa <strong>đảm bảo điểm số trên lớp</strong> qua hệ thống ngữ
                pháp nền tảng, vừa{" "}
                <strong>phát triển tư duy ngôn ngữ theo chuẩn quốc tế</strong>{" "}
                (KET/PET). Ngoài ra, các em được{" "}
                <strong>luyện tập bài bản để thi vào lớp 10</strong> tại các
                trường THPT hàng đầu tại TP.HCM.
              </p>
            </div>

            {/* <StarterToFlyerRoadmap /> */}

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 mt-16">
                Thế mạnh của
                <span className="text-primary font-bold ml-1">
                  Anh Ngữ Chăm Chỉ
                </span>
              </h3>
              {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Vì sao nên thi Starters – Movers – Flyers?
              </h2> */}
              <ul className="list-disc text-gray-700 text-base space-y-3 ml-5">
                <li>
                  <strong>
                    Ngữ pháp song song với chương trình phổ thông:
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
                  <p className="text-sm text-gray-600">
                    Để được tư vấn miễn phí về chương trình, vui lòng để lại số
                    điện thoại. Anh Ngữ Chăm Chỉ sẽ liên hệ với quý phụ huynh
                    trong thời gian sớm nhất.
                  </p>

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

      <section className="py-20 bg-primary/25">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hình ảnh học viên */}
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
            <Image
              src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/thuyanh.png" // 👉 Thay bằng ảnh thật
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
              Điểm 9+ trong kỳ thi vào lớp 10
            </h2>
            <p className="text-base text-gray-700 mb-6">
              Thuỳ Anh, học sinh lớp 9 tại Chăm Chỉ, đã xuất sắc đạt điểm 9+
              trong kỳ thi vào lớp 10 môn Tiếng Anh. Với lộ trình học cá nhân
              hóa, em đã nắm vững ngữ pháp và từ vựng một cách chắc chắn, giúp
              em tự tin vượt qua kỳ thi quan trọng này. Chăm Chỉ tự hào về em!
            </p>

            <ul className="list-none space-y-2 text-gray-800 text-sm">
              <li>
                <strong>Kết quả:</strong> 9.25 điểm môn Tiếng Anh
              </li>
              <li>
                <strong>Thời gian học:</strong> 16 tháng tại Chăm Chỉ
              </li>
              <li>
                <strong>Phụ huynh đánh giá:</strong> Chăm Chỉ đã thực sự giúp
                con tôi tự tin hơn khi bước vào kỳ thi vào lớp 10. Lộ trình học
                rất rõ ràng và hiệu quả.
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="#register"
                className="inline-block bg-yellow-500 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
              >
                Đăng ký kiểm tra trình độ Ngữ Pháp
              </Link>
            </div>
          </div>
        </div>

        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Nội dung câu chuyện */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Điểm KET đạt chuẩn vào lớp Tích Hợp
            </h2>
            <p className="text-base text-gray-700 mb-6">
              Mạnh Tiến, học sinh lớp 7 trường THCS Trần Quốc Toản, đã xuất sắc
              hoàn thành bài thi KET với điểm số 127 / 150, vượt tiêu chuẩn vào
              lớp tích hợp của một trường điểm ở Quận Thủ Đức. Với lộ trình học
              cá nhân hoá và chiến thuật làm đề thi bài bản, em đã nắm vững ngữ
              pháp và từ vựng một cách chắc chắn, giúp em tự tin vượt qua kỳ thi
              này.
            </p>

            <ul className="list-none space-y-2 text-gray-800 text-sm">
              <li>
                <strong>Kết quả:</strong> KET điểm 127/150
              </li>
              <li>
                <strong>Thời gian học:</strong> 6 tháng tại Chăm Chỉ
              </li>
              <li>
                <strong>Phụ huynh đánh giá:</strong> Chúng tôi rất hài lòng kết
                quả học tập của con, đúng với mục tiêu đặt ra.
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="#register"
                className="inline-block bg-yellow-500 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
              >
                Tư Vấn Miễn Phí
              </Link>
            </div>
          </div>
          {/* Hình ảnh học viên */}
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
            <Image
              src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/KET-cert.png" // 👉 Thay bằng ảnh thật
              // image: "/2.png",
              alt="Học viên đạt Flyers tại Chăm Chỉ"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* <BookCarousel /> */}

      <CourseGallery />

      {/* <LearningRoadmap /> */}
      {/* <EducationalPhilosophy /> */}
      {/* Material & Book's marquee */}
      <TestimonialsGrid />

      {/* CTA */}
      <section className="py-16 bg-primary/10 text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Explore the full KET course or talk to our advisor to help you find
            the right level.
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Link href="/courses/luyen-thi-ket" className="btn-primary">
              View Full KET Course
            </Link>
            <Link href="/#contact" className="btn-accent">
              Register for Consultation
            </Link>
          </div>
        </div>
      </section>

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

const courseImages = [
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/class-large.jpg",
    alt: "Học sinh trong lớp học tương tác",
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/class-large.jpg",
    alt: "Học sinh trình bày dự án STEM",
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/class-large.jpg",
    alt: "Luyện thi KET PET cùng giáo viên",
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/class-large.jpg",
    alt: "Hoạt động nhóm tiếng Anh",
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/class-large.jpg",
    alt: "Hoạt động nhóm tiếng Anh",
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/class-large.jpg",
    alt: "Hoạt động nhóm tiếng Anh",
  },
];

export function CourseGallery() {
  return (
    <section className="w-screen bg-gradient-to-br from-primary/10 via-white to-accent/20 flex items-center justify-center px-4 py-12 overflow-hidden">
      <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Description */}
        <div className="lg:col-span-1 text-gray-700 text-base leading-relaxed text-center lg:text-left px-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Lớp học thân thiện - hiện đại
          </h2>
          <p>
            Những hình ảnh dưới đây phản ánh phương pháp học hiện đại tại Chăm
            Chỉ – nơi học sinh được truyền cảm hứng, rèn luyện toàn diện cả về
            kỹ năng tiếng Anh lẫn tư duy phản biện thông qua lớp học tương tác,
            dự án STEM, hoạt động nhóm và luyện thi cùng giáo viên. Mỗi trải
            nghiệm đều góp phần xây dựng nền tảng vững chắc cho sự phát triển
            học thuật và cá nhân.
          </p>
        </div>

        {/* Image Grid */}
        <div className="lg:col-span-2 grid grid-cols-3 gap-4 h-full auto-rows-[160px]">
          {courseImages.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-105 
        ${index === 0 ? "col-span-2 row-span-2" : ""}
        ${index === 1 ? "col-span-1 row-span-1" : ""}
        ${index === 2 ? "col-span-1 row-span-2" : ""}
        ${index === 3 ? "col-span-2 row-span-1" : ""}
      `}
            >
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
