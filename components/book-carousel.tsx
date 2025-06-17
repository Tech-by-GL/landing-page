
"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

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

export default function BookCarousel() {
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
    <section className="w-screen overflow-hidden bg-white py-10 relative pb-20">
      <div className="flex justify-between px-6 mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-5 ml-28">
          Tài liệu học nổi bật
        </h2>
        
        <div className="mt-8 mr-28">
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="h-12 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-12  p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide px-6 bg-red-100 p-5"
        style={{ scrollBehavior: "smooth" }}
      >
        {books.map((book, index) => (
          <div
            key={index}
            className="min-w-[180px] flex-shrink-0 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition-transform duration-300 hover:scale-105 "
          >
            <div className="relative h-48 w-full mb-3 rounded ">
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
