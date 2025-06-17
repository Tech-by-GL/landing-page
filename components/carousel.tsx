"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  { src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/KET-2.jpg", alt: "IELTS 1984 Building" },
  { src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/KET-2.jpg", alt: "Students with Certificates" },
  { src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/KET-2.jpg", alt: "Class Group Photo" },
  { src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/KET-2.jpg", alt: "Team at Chamchi Center" },
];

export default function CenterCarousel() {
  return (
    <div className="w-full py-8 bg-white">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
        className="px-4 md:px-8"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}