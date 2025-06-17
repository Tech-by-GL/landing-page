"use client";

import Image from "next/image";

const companyImages = [
  "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/khoi.jpg",
  "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/class-large.jpg",
  "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/chill-place.jpg",
  "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/selfie.jpg",
  "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/p-KET-2.jpg",
  "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/p-KET-1.jpg",
  "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/deep-work.jpg",
  "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/working-figma.jpg",
  "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/celebrating.jpg",
  "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/p-KET.jpg",
];
export default function CompanyMarquee() {
  return (
    <div className="w-full overflow-hidden bg-transparent py-10">
      <div className="relative w-full">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {[...companyImages, ...companyImages].map((src, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-[25vw] h-[14vw] min-w-[150px] max-w-[560px] bg-transparent rounded-2xl "
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Company logo ${idx + 1}`}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
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
  )
}
