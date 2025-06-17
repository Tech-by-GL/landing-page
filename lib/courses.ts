export type Course = {
  id: number
  slug: string
  title: string
  description: string
  fullDescription: string
  image: string
  features: string[]
  duration: string
  startDate: string
  classSize: string
  level: string
  successRate: number
  highlights: {
    title: string
    description: string
  }[]
  curriculum: {
    title: string
    description: string
    topics: string[]
  }[]
  relatedCourses: {
    slug: string
    title: string
    description: string
    image: string
  }[]
}

const courses: Course[] = [
  {
    id: 1,
    slug: "luyen-thi-ket",
    title: "Luyện thi KET",
    description: "Khóa học chuẩn bị cho kỳ thi Cambridge Key English Test (KET), chứng chỉ tiếng Anh cơ bản đầu tiên.",
    fullDescription:
      "Khóa học Luyện thi KET (Key English Test) của Chamchi được thiết kế để giúp học viên chuẩn bị toàn diện cho kỳ thi chứng chỉ tiếng Anh cơ bản đầu tiên của Cambridge. Với phương pháp giảng dạy hiện đại kết hợp STEAM, chúng tôi giúp học viên không chỉ nắm vững kiến thức mà còn tự tin trong kỳ thi.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Phát triển 4 kỹ năng", "Luyện đề thi thực tế", "Mô phỏng kỳ thi"],
    duration: "3 tháng",
    startDate: "Hàng tháng",
    classSize: "10-15 học viên",
    level: "Sơ cấp",
    successRate: 95,
    highlights: [
      {
        title: "Giáo trình chuẩn Cambridge",
        description:
          "Sử dụng giáo trình được thiết kế riêng theo chuẩn Cambridge, giúp học viên làm quen với cấu trúc và yêu cầu của kỳ thi KET.",
      },
      {
        title: "Luyện thi thực tế",
        description:
          "Học viên được làm quen với các dạng bài thi thực tế và được hướng dẫn các chiến lược làm bài hiệu quả.",
      },
      {
        title: "Đánh giá thường xuyên",
        description:
          "Hệ thống đánh giá thường xuyên giúp học viên và giáo viên nắm bắt được tiến độ và điều chỉnh phương pháp học tập kịp thời.",
      },
    ],
    curriculum: [
      {
        title: "Làm quen với KET",
        description: "Giới thiệu về cấu trúc kỳ thi KET và các kỹ năng cần thiết.",
        topics: [
          "Tổng quan về kỳ thi KET",
          "Cấu trúc bài thi và thang điểm",
          "Chiến lược học tập hiệu quả",
          "Bài kiểm tra đầu vào",
        ],
      },
      {
        title: "Phát triển kỹ năng Nghe và Nói",
        description: "Tập trung vào việc phát triển kỹ năng nghe và nói theo yêu cầu của KET.",
        topics: [
          "Nghe hiểu thông tin cơ bản",
          "Kỹ thuật ghi chú khi nghe",
          "Phát âm chuẩn và rõ ràng",
          "Giao tiếp trong các tình huống hàng ngày",
        ],
      },
      {
        title: "Phát triển kỹ năng Đọc và Viết",
        description: "Tập trung vào việc phát triển kỹ năng đọc và viết theo yêu cầu của KET.",
        topics: [
          "Đọc hiểu văn bản ngắn",
          "Kỹ thuật đọc lướt và đọc kỹ",
          "Viết email và tin nhắn đơn giản",
          "Sử dụng từ vựng và ngữ pháp cơ bản",
        ],
      },
      {
        title: "Ôn tập và Mô phỏng thi",
        description: "Ôn tập toàn diện và thực hành với các bài thi mô phỏng.",
        topics: [
          "Ôn tập tổng hợp 4 kỹ năng",
          "Làm bài thi mô phỏng",
          "Phân tích lỗi sai và cách khắc phục",
          "Chiến lược làm bài thi hiệu quả",
        ],
      },
    ],
    relatedCourses: [
      {
        slug: "luyen-thi-pet",
        title: "Luyện thi PET",
        description:
          "Khóa học chuẩn bị cho kỳ thi Cambridge Preliminary English Test (PET), chứng chỉ tiếng Anh trình độ trung cấp.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "tieng-anh-steam",
        title: "Tiếng Anh STEAM",
        description:
          "Khóa học tiếng Anh thông qua các dự án STEAM (Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học).",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: 2,
    slug: "luyen-thi-pet",
    title: "Luyện thi PET",
    description:
      "Khóa học chuẩn bị cho kỳ thi Cambridge Preliminary English Test (PET), chứng chỉ tiếng Anh trình độ trung cấp.",
    fullDescription:
      "Khóa học Luyện thi PET (Preliminary English Test) của Chamchi được thiết kế để giúp học viên chuẩn bị toàn diện cho kỳ thi chứng chỉ tiếng Anh trình độ B1 của Cambridge. Với phương pháp giảng dạy tích hợp STEAM, chúng tôi giúp học viên phát triển toàn diện các kỹ năng ngôn ngữ và tự tin chinh phục kỳ thi.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Ngữ pháp nâng cao", "Từ vựng học thuật", "Kỹ năng viết essay"],
    duration: "4 tháng",
    startDate: "Hàng tháng",
    classSize: "10-15 học viên",
    level: "Trung cấp",
    successRate: 92,
    highlights: [
      {
        title: "Phương pháp học tích hợp",
        description:
          "Kết hợp giữa học ngôn ngữ và ứng dụng thực tế thông qua các dự án STEAM, giúp học viên ghi nhớ và sử dụng tiếng Anh hiệu quả hơn.",
      },
      {
        title: "Giáo viên giàu kinh nghiệm",
        description:
          "Đội ngũ giáo viên có chứng chỉ CELTA/TESOL và nhiều năm kinh nghiệm luyện thi Cambridge, hiểu rõ yêu cầu và cấu trúc bài thi.",
      },
      {
        title: "Tài liệu học tập phong phú",
        description:
          "Học viên được cung cấp đầy đủ tài liệu học tập, bao gồm sách giáo trình, sách bài tập và các tài liệu bổ trợ khác.",
      },
    ],
    curriculum: [
      {
        title: "Tổng quan về PET",
        description: "Giới thiệu về cấu trúc kỳ thi PET và các kỹ năng cần thiết.",
        topics: [
          "Tổng quan về kỳ thi PET",
          "Cấu trúc bài thi và thang điểm",
          "Chiến lược học tập hiệu quả",
          "Bài kiểm tra đầu vào",
        ],
      },
      {
        title: "Phát triển kỹ năng Đọc và Viết",
        description: "Tập trung vào việc phát triển kỹ năng đọc và viết theo yêu cầu của PET.",
        topics: [
          "Đọc hiểu các loại văn bản",
          "Kỹ thuật đọc hiệu quả",
          "Viết email, bài luận ngắn",
          "Sử dụng từ vựng và ngữ pháp trung cấp",
        ],
      },
      {
        title: "Phát triển kỹ năng Nghe và Nói",
        description: "Tập trung vào việc phát triển kỹ năng nghe và nói theo yêu cầu của PET.",
        topics: [
          "Nghe hiểu các tình huống thực tế",
          "Kỹ thuật ghi chú khi nghe",
          "Giao tiếp hiệu quả",
          "Thảo luận và trình bày ý kiến",
        ],
      },
      {
        title: "Ôn tập và Mô phỏng thi",
        description: "Ôn tập toàn diện và thực hành với các bài thi mô phỏng.",
        topics: [
          "Ôn tập tổng hợp 4 kỹ năng",
          "Làm bài thi mô phỏng",
          "Phân tích lỗi sai và cách khắc phục",
          "Chiến lược làm bài thi hiệu quả",
        ],
      },
    ],
    relatedCourses: [
      {
        slug: "luyen-thi-ket",
        title: "Luyện thi KET",
        description:
          "Khóa học chuẩn bị cho kỳ thi Cambridge Key English Test (KET), chứng chỉ tiếng Anh cơ bản đầu tiên.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "luyen-thi-ielts",
        title: "Luyện thi IELTS",
        description: "Khóa học chuẩn bị cho kỳ thi IELTS, giúp học viên đạt được điểm số mục tiêu từ 5.5 đến 7.5.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: 3,
    slug: "luyen-thi-ielts",
    title: "Luyện thi IELTS",
    description: "Khóa học chuẩn bị cho kỳ thi IELTS, giúp học viên đạt được điểm số mục tiêu từ 5.5 đến 7.5.",
    fullDescription:
      "Khóa học Luyện thi IELTS của Chamchi được thiết kế để giúp học viên chuẩn bị toàn diện cho kỳ thi IELTS và đạt được điểm số mục tiêu. Với phương pháp giảng dạy độc đáo kết hợp STEAM, chúng tôi giúp học viên không chỉ nắm vững kiến thức mà còn phát triển tư duy phản biện và kỹ năng giải quyết vấn đề.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Chiến lược làm bài thi", "Luyện nói 1-1", "Phản hồi chi tiết"],
    duration: "6 tháng",
    startDate: "Hàng tháng",
    classSize: "8-12 học viên",
    level: "Trung cấp - Cao cấp",
    successRate: 90,
    highlights: [
      {
        title: "Lộ trình cá nhân hóa",
        description:
          "Mỗi học viên được đánh giá kỹ lưỡng và nhận lộ trình học tập cá nhân hóa, tập trung vào điểm mạnh và cải thiện điểm yếu.",
      },
      {
        title: "Luyện nói 1-1",
        description:
          "Học viên được luyện nói 1-1 với giáo viên bản ngữ, giúp cải thiện phát âm, ngữ điệu và sự tự tin khi giao tiếp.",
      },
      {
        title: "Mô phỏng thi thực tế",
        description:
          "Các buổi thi mô phỏng được tổ chức thường xuyên, giúp học viên làm quen với áp lực và môi trường thi thực tế.",
      },
    ],
    curriculum: [
      {
        title: "Làm quen với IELTS",
        description: "Giới thiệu về cấu trúc kỳ thi IELTS và các kỹ năng cần thiết.",
        topics: [
          "Tổng quan về kỳ thi IELTS",
          "Cấu trúc bài thi và thang điểm",
          "Chiến lược học tập hiệu quả",
          "Bài kiểm tra đầu vào",
        ],
      },
      {
        title: "IELTS Listening & Reading",
        description: "Phát triển kỹ năng nghe và đọc theo yêu cầu của IELTS.",
        topics: [
          "Chiến lược làm bài Listening",
          "Kỹ thuật đọc hiểu nhanh",
          "Phân tích các dạng câu hỏi",
          "Luyện tập với đề thi thực tế",
        ],
      },
      {
        title: "IELTS Writing",
        description: "Phát triển kỹ năng viết theo yêu cầu của IELTS.",
        topics: [
          "Writing Task 1: Mô tả biểu đồ, bảng biểu",
          "Writing Task 2: Viết luận",
          "Cấu trúc bài viết hiệu quả",
          "Mở rộng vốn từ vựng học thuật",
        ],
      },
      {
        title: "IELTS Speaking",
        description: "Phát triển kỹ năng nói theo yêu cầu của IELTS.",
        topics: [
          "Speaking Part 1: Giới thiệu bản thân",
          "Speaking Part 2: Nói về một chủ đề",
          "Speaking Part 3: Thảo luận",
          "Phát âm và ngữ điệu tự nhiên",
        ],
      },
      {
        title: "Ôn tập và Mô phỏng thi",
        description: "Ôn tập toàn diện và thực hành với các bài thi mô phỏng.",
        topics: [
          "Ôn tập tổng hợp 4 kỹ năng",
          "Làm bài thi mô phỏng",
          "Phân tích lỗi sai và cách khắc phục",
          "Chiến lược quản lý thời gian",
        ],
      },
    ],
    relatedCourses: [
      {
        slug: "luyen-thi-pet",
        title: "Luyện thi PET",
        description:
          "Khóa học chuẩn bị cho kỳ thi Cambridge Preliminary English Test (PET), chứng chỉ tiếng Anh trình độ trung cấp.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "tieng-anh-steam",
        title: "Tiếng Anh STEAM",
        description:
          "Khóa học tiếng Anh thông qua các dự án STEAM (Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học).",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: 4,
    slug: "tieng-anh-steam",
    title: "Tiếng Anh STEAM",
    description:
      "Khóa học tiếng Anh thông qua các dự án STEAM (Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học).",
    fullDescription:
      "Khóa học Tiếng Anh STEAM của Chamchi là sự kết hợp độc đáo giữa việc học tiếng Anh và các dự án STEAM (Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học). Học viên sẽ được học tiếng Anh một cách tự nhiên thông qua việc thực hiện các dự án thực tế, phát triển không chỉ kỹ năng ngôn ngữ mà còn tư duy sáng tạo và khả năng giải quyết vấn đề.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Học qua dự án", "Phát triển tư duy", "Làm việc nhóm"],
    duration: "Linh hoạt",
    startDate: "Hàng tháng",
    classSize: "10-15 học viên",
    level: "Nhiều cấp độ",
    successRate: 98,
    highlights: [
      {
        title: "Học tập trải nghiệm",
        description:
          "Học viên học tiếng Anh thông qua việc thực hiện các dự án thực tế, giúp ghi nhớ từ vựng và ngữ pháp một cách tự nhiên.",
      },
      {
        title: "Phát triển kỹ năng thế kỷ 21",
        description:
          "Khóa học không chỉ dạy tiếng Anh mà còn phát triển các kỹ năng quan trọng như tư duy phản biện, sáng tạo và hợp tác.",
      },
      {
        title: "Môi trường học tập vui vẻ",
        description:
          "Các hoạt động học tập được thiết kế sinh động và thú vị, tạo động lực và niềm vui trong việc học tiếng Anh.",
      },
    ],
    curriculum: [
      {
        title: "Khám phá STEAM",
        description: "Giới thiệu về STEAM và cách học tiếng Anh thông qua các dự án.",
        topics: [
          "Tổng quan về STEAM",
          "Từ vựng và ngữ pháp cơ bản",
          "Kỹ năng giao tiếp trong nhóm",
          "Dự án mini: Thiết kế poster khoa học",
        ],
      },
      {
        title: "Khoa học và Công nghệ",
        description: "Học tiếng Anh thông qua các dự án khoa học và công nghệ.",
        topics: [
          "Từ vựng về khoa học và công nghệ",
          "Cấu trúc câu mô tả quy trình",
          "Thuyết trình về một phát minh",
          "Dự án: Tạo video giải thích hiện tượng khoa học",
        ],
      },
      {
        title: "Kỹ thuật và Toán học",
        description: "Học tiếng Anh thông qua các dự án kỹ thuật và toán học.",
        topics: [
          "Từ vựng về kỹ thuật và toán học",
          "Cấu trúc câu so sánh và đối chiếu",
          "Thảo luận về giải pháp kỹ thuật",
          "Dự án: Thiết kế và trình bày một mô hình 3D",
        ],
      },
      {
        title: "Nghệ thuật và Sáng tạo",
        description: "Học tiếng Anh thông qua các dự án nghệ thuật và sáng tạo.",
        topics: [
          "Từ vựng về nghệ thuật và thiết kế",
          "Cấu trúc câu diễn đạt ý kiến",
          "Thuyết trình về một tác phẩm nghệ thuật",
          "Dự án cuối khóa: Triển lãm dự án STEAM bằng tiếng Anh",
        ],
      },
    ],
    relatedCourses: [
      {
        slug: "luyen-thi-ket",
        title: "Luyện thi KET",
        description:
          "Khóa học chuẩn bị cho kỳ thi Cambridge Key English Test (KET), chứng chỉ tiếng Anh cơ bản đầu tiên.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        slug: "luyen-thi-pet",
        title: "Luyện thi PET",
        description:
          "Khóa học chuẩn bị cho kỳ thi Cambridge Preliminary English Test (PET), chứng chỉ tiếng Anh trình độ trung cấp.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
]

export function getAllCourses() {
  return courses
}

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug)
}
