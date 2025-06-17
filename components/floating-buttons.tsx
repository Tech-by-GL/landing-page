"use client";

import { Phone, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingButtons() {
  const buttons = [
    {
      icon: Phone,
      label: "Gọi điện",
      href: "tel:0902336152",
      color: "bg-accent text-primary",
    },
    {
      icon: MessageCircle,
      label: "Zalo",
      image: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/zalo.png", // Thay bằng ảnh thật
      href: "https://zalo.me/2707748277388748551",
      color: "bg-primary text-white",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {buttons.map((button, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Link
              href={button.href}
              target={button.href.startsWith("http") ? "_blank" : undefined}
              rel={
                button.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`flex items-center gap-2 ${button.color} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group touch-manipulation`}
            >
              <div className="w-18 w-18 flex items-center justify-center p-2">
                {/* <button.icon className="h-5 w-5" /> */}
                {button.image ? (
                  <Image
                    src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/zalo.png" // thay bằng ảnh thật
                    alt="Chamchi tư vấn tuyển sinh"
                    height={32}
                    width={32}
                    // fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <button.icon className="h-6 w-6" />
                ) }
              </div>
              <span className="pr-4 font-bold text-sm">{button.label}</span>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
