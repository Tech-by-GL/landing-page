import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Không tìm thấy khóa học</h2>
      <p className="text-gray-600 mb-8">Khóa học bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
      <Link href="/courses" className="btn-primary">
        Xem tất cả khóa học
      </Link>
    </div>
  )
}
