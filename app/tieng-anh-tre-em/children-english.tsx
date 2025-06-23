"use client";

import CallbackForm from "@/components/call-back-form";
import { courses } from "@/components/courses";
// app/ket/page.tsx
import { EducationalPhilosophy } from "@/components/educational-philosophy";
import { LearningRoadmap } from "@/components/learning-roadmap";
import RegisterNow from "@/components/register";
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

export default function TiengAnhTreEm() {
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
                    Tiếng Anh Trẻ Em Lớp 1-5
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tiếng Anh Trẻ Em Lớp 1-5
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Chương trình thiết kế theo khung Cambridge quốc tế (Starters –
                Movers – Flyers), dành cho học sinh từ Lớp 1 đến Lớp 5. Mục tiêu
                là giúp học sinh xây nền tiếng Anh sớm, tự tin thi chứng chỉ và
                hội nhập chương trình tăng cường – tích hợp ở các cấp học sau.
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
                  className="btn-accent text-sm font-bold px-6 py-3 rounded-xl transition w-52"
                >
                  Xem chương trình học
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={
                    "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/1.png"
                  } // 👉 Thay bằng ảnh thật
                  alt={"Chương trình KET"}
                  fill
                  className="object-cover"
                />
              </div>

              {/* <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-accent/20 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{100}%</p>
                    <p className="text-sm text-gray-600">Tỷ lệ thành công</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="curriculum">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" >
                Chương trình Tiếng Anh trẻ em toàn diện
              </h2>
              <p className="text-gray-700 text-lg">
                Chương trình thiết kế theo khung Cambridge quốc tế (Starters –
                Movers – Flyers), dành cho học sinh từ{" "}
                <strong>Lớp 1 đến Lớp 5</strong>. Mục tiêu là giúp học sinh{" "}
                <strong>xây nền tiếng Anh sớm</strong>,{" "}
                <strong>tự tin thi chứng chỉ</strong> và{" "}
                <strong>hội nhập chương trình tăng cường – tích hợp</strong> ở
                các cấp học sau.
              </p>
            </div>

            <StarterToFlyerRoadmap />

            <div>
              <h3 className="text-2xl  font-bold text-gray-900 mb-5 mt-16">
                Vì sao nên thi Starters – Movers – Flyers?
              </h3>
              {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Vì sao nên thi Starters – Movers – Flyers?
              </h2> */}
              <ul className="list-none text-gray-700 text-base space-y-3 ml-2">
                <li>
                  ✔️{" "}
                  <span>
                    <strong>CHUẨN QUỐC TẾ:</strong> Chương trình hướng tới bằng
                    cấp quốc tế như <strong>STARTERS, MOVERS, FLYERS</strong>.
                  </span>
                </li>
                <li>
                  ✔️ <strong>ƯU TIÊN XÉT TUYỂN:</strong> Các trường THCS sử dụng
                  chứng chỉ này để tuyển sinh các lớp chọn & tăng cường.
                </li>
                <li>
                  ✔️{" "}
                  <span>
                    <strong>NỀN TẢNG TIẾNG ANH:</strong> Giúp học sinh xây dựng
                    nền tảng ngôn ngữ toàn diện, chuẩn quốc tế từ sớm.
                  </span>
                </li>
                {/* <li>
                  ✔️ <strong>LÀM QUEN VỚI KỲ THI QUỐC TẾ:</strong> Giúp học sinh
                  phát triển sự tự tin, chủ động thi các chứng chỉ cao hơn (KET,
                  PET, IELTS).
                </li> */}
                {/* <li>
                  ✔️ <strong>ĐƯỢC KHUYẾN KHÍCH TỪ GD&ĐT:</strong> Nhiều địa
                  phương đưa vào như một phần chuẩn đầu ra cấp tiểu học.
                </li> */}
              </ul>
            </div>

            <div>
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
            </div>

            <div className="space-y-4 mt-10">
              {[
                {
                  title: "📘 Chứng chỉ Cambridge có giá trị thế nào?",
                  content:
                    "Chứng chỉ Starters – Movers – Flyers do Cambridge cấp có giá trị toàn cầu, không hết hạn. Đây là bước đệm giúp học sinh sẵn sàng cho KET, PET, và các kỳ thi quốc tế sau này. Nhiều trường tại Việt Nam cũng sử dụng để xét tuyển đầu vào lớp tăng cường hoặc lớp tích hợp.",
                },
                {
                  title: "📊 Có đánh giá tiến độ trong quá trình học không?",
                  content:
                    "Có. Chúng tôi đánh giá định kỳ hàng tháng qua bài kiểm tra kỹ năng, báo cáo chi tiết về từ vựng – ngữ pháp – kỹ năng nghe nói đọc viết và gửi tới phụ huynh. Giáo viên sẽ tư vấn điều chỉnh lộ trình nếu cần thiết.",
                },
                {
                  title: "📚 Giáo trình sử dụng là gì?",
                  content:
                    "Chúng tôi sử dụng giáo trình Cambridge chuẩn quốc tế, kết hợp cùng tài liệu luyện đề thực tế và học liệu tương tác (flashcard, video, quiz...) để học sinh vừa học – vừa luyện – vừa kiểm tra.",
                },
                {
                  title:
                    "👨‍👩‍👧‍👦 Phụ huynh có được theo dõi quá trình học của con không?",
                  content:
                    "Phụ huynh được cập nhật qua sổ liên lạc điện tử, tin nhắn định kỳ và có thể gặp giáo viên tại các buổi họp phụ huynh hằng quý. Mọi tiến độ đều minh bạch và có phản hồi rõ ràng.",
                },
                {
                  title: "💰 Học phí phù hợp như thế nào?",
                  content:
                    "Chăm Chỉ thiết kế lộ trình tối ưu về chi phí – đảm bảo hiệu quả mà vẫn phù hợp với đa số gia đình. Có nhiều mức học phí theo hình thức học: lớp thường, lớp tăng tốc, học online hoặc trực tiếp.",
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

                {/* CTA */}
                <div className="pt-4 border-t">
                  <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Tư vấn miễn phí
                  </h5>

                  {/*INput phone number   */}
                  {/* <div>
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
                  </Link> */}
                  <CallbackForm />
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
              src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/starter.png" // 👉 Thay bằng ảnh thật
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
              Hành trình đến chứng chỉ Mover 15/15
            </h2>
            <p className="text-base text-gray-700 mb-6">
              Bé <strong>Minh Châu (10 tuổi)</strong> bắt đầu học tiếng Anh tại
              Chăm Chỉ khi chưa từng tham gia lớp tiếng Anh nào. Sau 12 tháng
              học theo chương trình Cambridge – dưới sự hướng dẫn tận tâm của
              giáo viên và lộ trình cá nhân hóa, em đã đạt chứng chỉ{" "}
              <strong>Cambridge MOVERS</strong> với kết quả xuất sắc, và hiện
              đang là học sinh lớp tăng cường tiếng Anh tại một trường công lập
              trọng điểm ở TP.HCM.
            </p>

            <ul className="list-none space-y-2 text-gray-800 text-sm mb-10">
              <li>
                <strong>Kết quả:</strong> Đạt 15/15 khiên MOVER
              </li>
              <li>
                <strong>Thời gian học:</strong> 12 tháng (2 buổi/tuần)
              </li>
              <li>
                <strong>Phụ huynh đánh giá:</strong> "Lộ trình rõ ràng, giáo
                viên hỗ trợ sát sao, con tự tin hơn từng ngày!"
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

            <RegisterNow title="Đăng ký ngay cho bé" color="yellow" />
          </div>
        </div>
      </section>

      {/* <LearningRoadmap /> */}
      {/* <EducationalPhilosophy /> */}
      {/* Material & Book's marquee */}

      <TestimonialsGrid />

      {/* CTA */}

      <OtherCourses name="Tiếng Anh Trẻ Em Lớp 1-5" />

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
    duration: "12 tháng",
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
    duration: "12+ tháng",
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
    duration: "12+ tháng",
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

interface OtherCourseProps {
  name: string;
}
export const OtherCourses = ({ name }: OtherCourseProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Các khóa học liên quan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses
            ?.filter((x) => x?.title !== name)
            .map((relatedCourse, index) => (
              <Link
                key={index}
                href={`/${relatedCourse.slug}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={relatedCourse.image || "/placeholder.svg"}
                    alt={relatedCourse.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {relatedCourse.title}
                  </h3>
                  <p className="text-gray-700">{relatedCourse.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};
