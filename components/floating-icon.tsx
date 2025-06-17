"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type FloatingIcon = {
  src: string;
  alt: string;
  size?: number; // optional
  x: string;     // e.g., "10%"
  y: string;     // e.g., "20%"
  delay?: number;
};

type Props = {
  icons: FloatingIcon[];
};

export function FloatingIcons({ icons }: Props) {
  return (
    <>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{
            left: icon.x,
            top: icon.y,
            width: icon.size || 40,
            height: icon.size || 40,
            zIndex: 15,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: icon.delay || 0,
            ease: "easeInOut",
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={icon.size || 40}
            height={icon.size || 40}
            className="object-contain"
          />
        </motion.div>
      ))}
    </>
  );
}