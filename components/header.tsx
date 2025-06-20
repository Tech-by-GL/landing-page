"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Chamchi - Trang chủ"
          >
            <Image
              src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/chamchi.jpg"
              alt="Chamchi Logo"
              width={150}
              height={200}
              className="h-10 w-auto"
            />
          </Link>

          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Menu chính"
          >
            <Link
              href="/"
              className="font-medium hover:text-primary transition-colors"
            >
              Trang chủ
            </Link>
            <Link
              href="/ve-chung-toi"
              className="font-medium hover:text-primary transition-colors"
            >
              Về chúng tôi
            </Link>
            <Link
              href="/#courses"
              className="font-medium hover:text-primary transition-colors"
            >
              Khóa học
            </Link>
            {/* <Link
              href="#features"
              className="font-medium hover:text-primary transition-colors"
            >
              Tính năng
            </Link> */}
            <Link
              href="#testimonials"
              className="font-medium hover:text-primary transition-colors"
            >
              Đánh giá
            </Link>
            {/* <Link
              href="#blog"
              className="font-medium hover:text-primary transition-colors"
            >
              Blog
            </Link> */}
            <Link
              href="#contact"
              className="font-medium hover:text-primary transition-colors"
            >
              Liên hệ
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="#courses" className="btn-primary rounded-xl">
              Khám phá khóa học
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white py-4 px-4 shadow-lg"
          id="mobile-menu"
          role="navigation"
        >
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="#courses"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Khóa học
            </Link>
            <Link
              href="#features"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tính năng
            </Link>
            <Link
              href="#testimonials"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Đánh giá
            </Link>
            <Link
              href="#blog"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>
            <Link
              href="#courses"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Khám phá khóa học
            </Link>
          </nav>
        </div>
      )}

      {/* Scroll to top button - only visible when scrolled down on mobile */}
      {typeof window !== "undefined" && (
        <motion.button
          className="fixed bottom-20 right-4 z-40 bg-primary text-white p-3 rounded-full shadow-lg md:hidden"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: window.scrollY > 300 ? 1 : 0,
            y: window.scrollY > 300 ? 0 : 20,
          }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
        >
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
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </header>
  );
}
