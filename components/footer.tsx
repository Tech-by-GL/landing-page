import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white" id="contact">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div itemScope itemType="https://schema.org/EducationalOrganization">
            <Link href="/" aria-label="Chamchi - Trang chủ">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo1-OTH9hrSxe4VkGetGm2RXhc9lWJlDbo.png"
                alt="Chamchi Logo"
                width={180}
                height={60}
                className="h-12 w-auto mb-4"
                itemProp="logo"
              />
            </Link>
            <p className="mt-4 text-white/80" itemProp="description">
              Chamchi là trung tâm Anh ngữ hiện đại dạy tiếng Anh thông qua
              phương pháp STEAM cho học sinh từ lớp 6 trở lên.
            </p>
            <meta itemProp="name" content="Chamchi English Center" />
            <meta itemProp="url" content="https://chamchi.edu.vn" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Khóa học
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Tính năng
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Đánh giá
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Khóa học</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Tiếng Anh Lớp 1-5
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/luyen-thi-pet"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Tiếng Anh Lớp 6-9
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/luyen-thi-ielts"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Tiếng Anh Lớp 10-12
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Tiếng Anh Cho Người Đi Làm
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/tieng-anh-steam"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Chứng chỉ IELTS
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Chứng Chỉ Google AI
                </Link>
              </li>
            </ul>
          </div>

          <div itemScope itemType="https://schema.org/EducationalOrganization">
            <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span
                  className="text-white/80"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">18 Đường 8</span>,{" "}
                  <span itemProp="addressLocality">Trường Thọ, Thủ Đức</span>,{" "}
                  <span itemProp="addressRegion">TP. Hồ Chí Minh</span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:0902336152"
                  className="text-white/80 hover:text-white"
                  itemProp="telephone"
                  content="+84902336152"
                >
                  0902 336 152
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@chamchi.edu.vn"
                  className="text-white/80 hover:text-white"
                  itemProp="email"
                  content="info@chamchi.edu.vn"
                >
                  team@chamchi.vn
                </a>
              </li>
            </ul>
            <meta itemProp="name" content="Chamchi English Center" />
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Chamchi. Tất cả quyền được bảo
            lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
