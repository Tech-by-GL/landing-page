import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCourseBySlug, getAllCourses } from "@/lib/courses"
import { CheckCircle, Clock, Calendar, Users } from "lucide-react"
import { CourseSchema, BreadcrumbSchema } from "@/components/seo/structured-data"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = getCourseBySlug(params.slug)

  if (!course) {
    return {
      title: "Không tìm thấy khóa học | Chamchi",
      description: "Khóa học bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.",
    }
  }

  const title = `${course.title} | Chamchi - Trung tâm Anh ngữ STEAM`
  const description = course.fullDescription.substring(0, 160)

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `/courses/${params.slug}`,
    },
    keywords: [
      course.title,
      "khóa học tiếng Anh",
      "Chamchi",
      "STEAM",
      "luyện thi tiếng Anh",
      "chứng chỉ quốc tế",
      ...course.features,
    ],
    openGraph: {
      title: title,
      description: description,
      url: `https://chamchi.edu.vn/courses/${params.slug}`,
      type: "article",
      images: [
        {
          url: course.image || "https://chamchi.edu.vn/og-image.jpg",
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [course.image || "https://chamchi.edu.vn/og-image.jpg"],
    },
  }
}

export async function generateStaticParams() {
  const courses = getAllCourses()
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug)

  if (!course) {
    notFound()
  }

  const breadcrumbItems = [
    { name: "Trang chủ", url: "https://chamchi.edu.vn" },
    { name: "Khóa học", url: "https://chamchi.edu.vn/courses" },
    { name: course.title, url: `https://chamchi.edu.vn/courses/${params.slug}` },
  ]

  return (
    <div className="bg-gray-50">
      <CourseSchema name={course.title} description={course.fullDescription} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-20">
        <div className="container-custom">
          <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-gray-600 hover:text-primary">
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
                  <Link href="/courses" className="ml-1 text-gray-600 hover:text-primary md:ml-2">
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
                  <span className="ml-1 text-gray-500 md:ml-2">{course.title}</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{course.title}</h1>
              <p className="text-lg text-gray-700 mb-8">{course.fullDescription}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Thời gian: {course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Khai giảng: {course.startDate}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Sĩ số: {course.classSize}</span>
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
                  <span className="text-gray-700">Cấp độ: {course.level}</span>
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
              <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
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
                    <p className="font-bold text-gray-900">{course.successRate}%</p>
                    <p className="text-sm text-gray-600">Tỷ lệ thành công</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16" id="features">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Điểm nổi bật của khóa học</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {course.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 touch-manipulation"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-700">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white" id="curriculum">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Chương trình học</h2>

          <div className="max-w-3xl mx-auto">
            {course.curriculum.map((module, index) => (
              <div
                key={index}
                className="mb-6 bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-primary p-4">
                  <h3 className="text-xl font-bold text-white">
                    Module {index + 1}: {module.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{module.description}</p>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
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
                          className="text-primary mr-2 mt-1"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-primary/10" id="contact">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Đăng ký tư vấn khóa học</h2>
            <p className="text-lg text-gray-700 mb-8">
              Điền thông tin bên dưới, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất
            </p>

            <form className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Lời nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Gửi thông tin
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Các khóa học liên quan</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {course.relatedCourses.map((relatedCourse, index) => (
              <Link
                key={index}
                href={`/courses/${relatedCourse.slug}`}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedCourse.title}</h3>
                  <p className="text-gray-700">{relatedCourse.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
