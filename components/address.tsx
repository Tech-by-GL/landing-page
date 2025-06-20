"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import RegisterNow from "./register";

export const Address = () => {
  return (
    <section className="relative py-16 bg-primary/10" id="contact">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Ảnh bên trái */}
        <div className="lg:col-span-6 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/chamchi.png" // thay bằng ảnh thật
            alt="Chamchi tư vấn tuyển sinh"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Nội dung bên phải */}
        <div className="lg:col-span-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Liên hệ & Tuyển sinh
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Hãy đến với{" "}
            <span className="font-semibold text-primary">Chamchi</span> – nơi
            học viên được định hướng và phát triển toàn diện từ nền tảng. Chúng
            tôi luôn đồng hành để bạn lựa chọn chương trình học phù hợp nhất.
          </p>

          {/* Thông tin liên hệ */}
          <div className="space-y-2 mb-6 text-sm md:text-base">
            <p>
              📍 <strong>Địa chỉ:</strong> 18 đường 8, Trường Thọ, Thủ Đức
            </p>
            <p className="ml-5 italic mb-1">
              (cách trường ĐH Sư Phạm Kỹ Thuật 5 phút đi xe máy)
            </p>
            <p>
              📞 <strong>Điện thoại:</strong>{" "}
              <a href="tel:0902336152" className="text-primary hover:underline">
                0902 336 152
              </a>
            </p>
            {/* <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@chamchi.vn"
                className="text-primary hover:underline"
              >
                team@chamchi.ai
              </a>
            </p> */}
          </div>

          {/* Lợi ích khi đăng ký */}
          <ul className="space-y-3 mb-6">
            {[
              "✔️ Kiểm tra đầu vào hoàn toàn miễn phí",
              "✔️ Tư vấn 1-1 lộ trình học phù hợp",
              "✔️ Học thử miễn phí tuần đầu tiên",
              "✔️ Học phí linh hoạt theo từng giai đoạn",
            ].map((item, index) => (
              <li key={index} className="text-gray-700 text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          {/* <div className="mt-6">
            <Link
              href="#register"
              className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-primary/90 transition-all duration-300"
            >
              Đăng ký tư vấn miễn phí
            </Link>
          </div> */}

          <RegisterNow title="Đăng ký tư vấn miễn phí" color="" />
        </div>
      </div>
    </section>
  );
};
