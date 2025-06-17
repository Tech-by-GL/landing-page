"use client";

import Image from "next/image";

const images = [
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/KET-2.jpg",
    alt: "IELTS 1984 Building",
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/KET-2.jpg",
    alt: "Students with Certificates",
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/KET-2.jpg",
    alt: "Class Group Photo",
  },
  {
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/KET-2.jpg",
    alt: "Team at Chamchi Center",
  },
];

export default function TeamGallery() {
  return (
    <div className="w-full bg-transparent">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-8">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-full overflow-hidden rounded-xl shadow-md bg-white"
          >
            <p className="text-center text-sm py-2 text-gray-700">{img.alt}</p>
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
