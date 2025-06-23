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

export default function IELTSPage() {
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
                    Chứng Chỉ IELTS
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Chứng Chỉ IELTS
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
                    Cấp độ: B1-C2 Chuẩn Cambridge
                  </span>
                </div>
              </div>

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
                    "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/4.png"
                  }
                  alt={"Chương trình KET"}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Chương Trình Tiếng Anh Toàn Diện
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

            {/* <StarterToFlyerRoadmap /> */}

            <div>
              <h3 className="text-2xl  font-bold text-gray-900 mb-5 mt-16">
                Thế mạnh của
                <span className="text-primary font-bold ml-1">
                  Anh Ngữ Chăm Chỉ
                </span>
              </h3>
              {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  Vì sao nên thi Starters – Movers – Flyers?
                </h2> */}
              <ul className="list-none text-gray-700 text-base space-y-3 ml-2">
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
                    <li>
                      <strong>Hình thức:</strong> Offline kết hợp Online
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
              src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/testimonials-khoi.png" // 👉 Thay bằng ảnh thật
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
              Đạt mục tiêu IELTS sau 12 tháng học
            </h2>
            <p className="text-base text-gray-700 mb-6">
              Bạn <strong>Anh Khôi (Lớp 11 - THPT Thủ Đức)</strong>
              đã xuất sắc hoàn thành lộ trình học IELTS tại Chăm Chỉ với mục
              tiêu đạt điểm AIM IELTS 6.5. Với sự hỗ trợ tận tình từ giáo viên,
              Khôi đã nắm vững ngữ pháp, từ vựng và kỹ năng làm bài thi IELTS.
            </p>

            <ul className="list-none space-y-2 text-gray-800 text-sm mb-8">
              <li>
                <strong>Kết quả:</strong> 6.5 IELTS
              </li>
              <li>
                <strong>Thời gian học:</strong> 12 tháng tại Chăm Chỉ
              </li>
              <li>
                <strong>Học viên đánh giá:</strong> Chăm Chỉ là môi trường học
                tập tuyệt vời, không chỉ học tiếng Anh, nơi đây còn có nhiều
                phần mềm tích hợp công nghệ để hỗ trợ học tập hiệu quả. Em rất
                hài lòng với kết quả học tập của mình.
              </li>
            </ul>

            <RegisterNow title="Đăng ký tư vấn miễn phí" color="" />
          </div>
        </div>

        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Nội dung câu chuyện */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              7.0 IELTS sau 16 tháng học
            </h2>
            <p className="text-base text-gray-700 mb-6">
              Bạn <strong>Anh Thư (Lớp 11 - THPT Thủ Đức)</strong>
              đã xuất sắc hoàn thành lộ trình học IELTS tại Chăm Chỉ với mục
              tiêu đạt điểm IELTS 7.0. Với sự hỗ trợ tận tình từ giáo viên, Thư
              đã nắm vững ngữ pháp, từ vựng và kỹ năng làm bài thi IELTS.
            </p>

            <ul className="list-none space-y-2 text-gray-800 text-sm mb-8">
              <li>
                <strong>Kết quả:</strong> 7.0 IELTS
              </li>
              <li>
                <strong>Thời gian học:</strong> 1 lộ trình 16 tháng tại Chăm Chỉ
              </li>
              <li>
                <strong>Học sinh đánh giá:</strong> Chăm Chỉ là nơi em đã học
                tập và rèn luyện tiếng Anh một cách hiệu quả nhất. Em đã có thể
                tự tin giao tiếp và làm bài thi IELTS với điểm số cao. Em rất
                cảm ơn các thầy cô đã giúp đỡ em trong suốt quá trình học tập
                này.
              </li>
            </ul>

            <RegisterNow
              title="Đăng kí kiểm tra đầu vào IELTS miễn phí"
              color=""
            />
          </div>
          {/* Hình ảnh học viên */}
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
            <Image
              src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/testimonials-thu.png" // 👉 Thay bằng ảnh thật
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

      {/* <CourseGallery /> */}

      {/* <LearningRoadmap /> */}
      {/* <EducationalPhilosophy /> */}
      {/* Material & Book's marquee */}
      <TestimonialsGrid />

      {/* CTA */}
      <OtherCourses name="IELTS" />

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
import { OtherCourses } from "../tieng-anh-tre-em/children-english";
import RegisterNow from "@/components/register";
import CallbackForm from "@/components/call-back-form";

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
