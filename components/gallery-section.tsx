"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Play,
  Eye,
  Grid3X3,
  LayoutGrid,
} from "lucide-react";

const galleryImages = [
  {
    id: 11,
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/khoi.jpg",
    alt: "Học sinh chụp hình cùng giáo viên",
    category: "classroom",
    title: "Bạn Anh Khôi IELTS 6.5 và giáo viên trung tâm",
    description:
      "Bạn Anh Khôi đã xuất sắc đạt được chứng chỉ IELTS 6.5, tạo tiền đề vững chắc cho hành trình học tập sau này.",
    featured: false,
  },
  // {
  //   id: 1,
  //   src: "/ghi-danh.jpg",
  //   alt: "Quầy ghi danh tại Anh Ngữ Chăm Chỉ",
  //   category: "services",
  //   title: "Quầy ghi danh tại Anh Ngữ Chăm Chỉ",
  //   description: "Nơi tiếp đón và hỗ trợ học viên mới",
  //   featured: false,
  // },
  {
    id: 2,
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/class-large.jpg",
    alt: "Các học sinh lớp KET đang học trên máy tính",
    category: "classroom",
    title: "Các học sinh lớp KET đang học trên máy tính",
    description:
      "Lớp học KET được thiết kế để các bạn có thể luyện tập các kỹ năng nghe, nói, đọc, viết trên máy tính, với sự hỗ trợ của Giáo Viên cùng Trí Tuệ Nhân Tạo.",
    featured: true,
  },

  // {
  //   id: 3,
  //   src: "/selfie.jpg",
  //   alt: "Các học sinh chụp selfie tại phòng luyện Speaking",
  //   category: "facilities",
  //   title: "Nghỉ giữa giờ",
  //   description:
  //     "Sau các giờ học căng thẳng, các bạn có thể thư giãn và chụp những bức ảnh selfie tại phòng luyện Speaking. Đây cũng là một truyền thống của Chăm Chỉ: đó là bạn phải Check-in tại phòng LAB xịn của trường.",
  //   featured: false,
  // },
  {
    id: 4,
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/chill-place.jpg",
    alt: "Khu vực thư giãn và giao lưu",
    category: "facilities",
    title: "Khu vực thư giãn",
    description:
      "Khu vực thư giãn được bố trí nước uống, sofa, và các trò chơi để học viên có thể thư giãn sau giờ học. Đồng thời, đây cũng là nơi để các bạn có thể nhờ sự tư vấn của Giáo Viên sau giờ học.",
    featured: true,
  },
  {
    id: 5,
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/deep-work.jpg",
    alt: "Các học sinh lớp IELTS đang tập trung làm bài",
    category: "activities",
    title: "Lớp học IELTS",
    description: "Lớp học IELTS với phương pháp học tập hiện đại và hiệu quả",
    featured: false,
  },
  {
    id: 6,
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/working-figma.jpg",
    alt: "Học sinh IELTS làm bài trên phần mềm do Chamchi phát triển",
    category: "activities",
    title: "Sử dụng phần mềm do Chamchi phát triển",
    description:
      "Học sinh sử dụng phần mềm Chamchi để luyện tập kỹ năng tiếng Anh, nhấn mạnh vào phát triển tư duy phản biện và kỹ năng giải quyết vấn đề.",
    featured: true,
  },
  {
    id: 7,
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/celebrating.jpg",
    alt: "Bạn Tina đạt thành tích 6.5 IELTS.",
    category: "achievements",
    title: "Chúc mừng thành tích 6.5 IELTS của bạn Tina",
    description:
      "Bạn Tina đã xuất sắc đạt được chứng chỉ IELTS 6.5, một thành tích đáng tự hào!",
    featured: false,
  },
  {
    id: 8,
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/p-KET.jpg",
    alt: "Học sinh lớp KET",
    category: "activities",
    title: "Học sinh lớp KET trong giờ học môn Body & Health",
    description:
      "Học sinh lớp KET đang học môn Body & Health, một trong những môn học thú vị và bổ ích tại Chamchi.",
    featured: false,
  },
  {
    id: 9,
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/p-KET-1.jpg",
    alt: "Phòng thi mô phỏng IELTS",
    category: "facilities",
    title: "Học sinh lớp KET trong giờ học môn Body & Health",
    description:
      "Giáo viên của lớp đang giải thích các thuật ngữ tiếng Anh các bạn cần biết.",
    featured: false,
  },
  {
    id: 10,
    src: "https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/p-KET-2.jpg",
    alt: "Các bạn làm bài kiểm tra kiến thức",
    category: "classroom",
    title: "Các bạn lớp KET làm bài kiểm tra kiến thức",
    description:
      "Việc có các bài test nhỏ trong quá trình học giúp các bạn có thể nắm vững kiến thức và tự tin hơn trong các bài thi lớn.",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "Tất cả", icon: LayoutGrid },
  { id: "classroom", label: "Lớp học", icon: Grid3X3 },
  { id: "activities", label: "Hoạt động", icon: Play },
  { id: "facilities", label: "Cơ sở", icon: Camera },
  { id: "teachers", label: "Giáo viên", icon: Eye },
  { id: "achievements", label: "Thành tích", icon: Camera },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((image) => image.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage
      );
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage
      );
      const prevIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const featuredImages = galleryImages
    .filter((img) => img.featured)
    .slice(0, 3);
  const regularImages = filteredImages.filter(
    (img) => !img.featured || selectedCategory !== "all"
  );

  return (
    <section
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      id="gallery"
      ref={ref}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Khám phá <span className="text-primary">Chamchi</span> qua hình ảnh
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Cùng nhìn lại những khoảnh khắc đáng nhớ tại Chamchi - nơi học sinh
            phát triển toàn diện
          </p>
        </motion.div>

        {/* Quick Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-6 md:gap-8 mb-8 md:mb-12"
        >
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-primary">100+</div>
            <div className="text-xs md:text-sm text-gray-600">Hình ảnh</div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-primary">5+</div>
            <div className="text-xs md:text-sm text-gray-600">Khu vực</div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-primary">1000+</div>
            <div className="text-xs md:text-sm text-gray-600">Học viên</div>
          </div>
        </motion.div> */}

        {/* Featured Images Showcase */}
        {selectedCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 md:mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {featuredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  onClick={() => setSelectedImage(image.id)}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div
                    className={`relative ${
                      index === 0 ? "h-64 md:h-96" : "h-32 md:h-44"
                    } w-full`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Featured Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-accent text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                        Nổi bật
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white ">
                      <h3 className="font-bold text-sm md:text-base mb-1">
                        {image.title}
                      </h3>
                      <p className="text-xs md:text-sm opacity-90 line-clamp-2">
                        {image.description}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <Eye className="h-5 w-5 text-gray-800" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8"
        >
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full font-medium transition-all duration-300 text-xs md:text-sm ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-primary/10 hover:text-primary shadow-md"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">{category.label}</span>
              </motion.button>
            )
          })}
        </motion.div> */}

        {/* Main Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`grid gap-3 md:gap-4 ${
                viewMode === "masonry"
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {(selectedCategory === "all"
                ? regularImages
                : filteredImages
              ).map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer bg-slate-300 ${
                    viewMode === "masonry" && index % 3 === 0
                      ? "md:row-span-2"
                      : ""
                  }`}
                  onClick={() => setSelectedImage(image.id)}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div
                    className={`relative ${
                      viewMode === "masonry"
                        ? index % 3 === 0
                          ? "h-40 md:h-full"
                          : "h-32 md:h-40"
                        : "h-32 md:h-48"
                    } w-full`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-semibold text-xs md:text-sm mb-1">
                        {image.title}
                      </h4>
                      <p className="text-xs opacity-90 line-clamp-1">
                        {image.description}
                      </p>
                    </div>

                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                        <Eye className="h-3 w-3 md:h-4 md:w-4 text-gray-800" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg max-w-md mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Muốn khám phá thêm?</h3>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Đăng ký tham quan để trải nghiệm trực tiếp không gian học tập tại Chamchi
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <motion.button
                className="btn-primary text-sm px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tham quan trung tâm
              </motion.button>
              <motion.button
                className="btn-accent text-sm px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Học thử miễn phí
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const currentImage = galleryImages.find(
                  (img) => img.id === selectedImage
                );
                if (!currentImage) return null;

                return (
                  <>
                    <div className="relative h-[50vh] md:h-[60vh] w-full">
                      <Image
                        src={currentImage.src || "/placeholder.svg"}
                        alt={currentImage.alt}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {currentImage.title}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        {currentImage.description}
                      </p>
                    </div>

                    {/* Navigation */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                    </button>

                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
                    >
                      <X className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
