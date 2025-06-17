"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, BookOpen, Lightbulb, Star, FileText, Phone, ChevronRight } from "lucide-react"

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu)
  }

  const menuItems = [
    { icon: Home, label: "Trang chủ", href: "/" },
    {
      icon: BookOpen,
      label: "Khóa học",
      href: "#courses",
      submenu: [
        { label: "Luyện thi KET", href: "/courses/luyen-thi-ket" },
        { label: "Luyện thi PET", href: "/courses/luyen-thi-pet" },
        { label: "Luyện thi IELTS", href: "/courses/luyen-thi-ielts" },
        { label: "Tiếng Anh STEAM", href: "/courses/tieng-anh-steam" },
      ],
    },
    { icon: Lightbulb, label: "Tính năng", href: "#features" },
    { icon: Star, label: "Đánh giá", href: "#testimonials" },
    { icon: FileText, label: "Blog", href: "#blog" },
    { icon: Phone, label: "Liên hệ", href: "#contact" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 bg-primary text-white p-2 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Đóng menu" : "Mở menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-primary to-blue-800 z-50 md:hidden overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white">Menu</h2>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={24} />
                </button>
              </div>

              <nav>
                <ul className="space-y-1">
                  {menuItems.map((item) => (
                    <li key={item.label}>
                      {item.submenu ? (
                        <div>
                          <button
                            onClick={() => toggleSubmenu(item.label)}
                            className="flex items-center justify-between w-full p-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <item.icon size={20} />
                              <span>{item.label}</span>
                            </div>
                            <ChevronRight
                              size={18}
                              className={`transition-transform ${activeSubmenu === item.label ? "rotate-90" : ""}`}
                            />
                          </button>

                          <AnimatePresence>
                            {activeSubmenu === item.label && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-8 pl-4 border-l border-white/20 overflow-hidden"
                              >
                                {item.submenu.map((subitem) => (
                                  <li key={subitem.label}>
                                    <Link
                                      href={subitem.href}
                                      className="flex items-center p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <span>{subitem.label}</span>
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 p-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon size={20} />
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-8 pt-6 border-t border-white/20">
                <Link
                  href="#contact"
                  className="block w-full py-3 px-4 bg-white text-primary font-bold rounded-lg text-center hover:bg-white/90 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Đăng ký tư vấn
                </Link>
              </div>

              <div className="mt-6 text-white/60 text-sm">
                <p>Hotline: 0123 456 789</p>
                <p className="mt-1">Email: info@chamchi.edu.vn</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar for Mobile */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 md:hidden z-30 transition-transform duration-300 ${
          scrolled ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="grid grid-cols-5 h-16">
          {menuItems.slice(0, 5).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors"
            >
              <item.icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
