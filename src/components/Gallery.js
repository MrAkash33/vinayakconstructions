



"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
    "/photos/gallery1.jpg",
    "/photos/gallery2.jpg",
    "/photos/gallery3.jpg",
    "/photos/gallery4.jpg",
    "/photos/gallery5.jpg",
    "/photos/gallery6.jpg",
    "/photos/gallery7.jpg",
    "/photos/gallery8.jpg",
    "/photos/gallery9.jpg",
    "/photos/gallery10.jpg",
    "/photos/gallery11.jpg",
    "/photos/gallery12.jpg",
    "/photos/gallery13.jpg",
    "/photos/gallery14.jpg",
    "/photos/gallery15.jpg",
    "/photos/gallery16.jpg",
    "/photos/gallery17.jpg",
    "/photos/gallery18.jpg",
    "/photos/gallery19.jpg",
    "/photos/gallery20.jpg",
    "/photos/gallery21.jpg",
    "/photos/gallery12.jpg",
    "/photos/gallery23.jpg",
    "/photos/gallery24.jpg",
  ];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [currentIndex]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-10">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Gallery Image ${index + 1}`}
          className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform"
          onClick={() => openModal(index)}
          whileHover={{ scale: 1.05 }}
        />
      ))}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Full Image"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
            <button
              className="absolute left-5 text-white text-3xl"
              onClick={showPrev}
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute right-5 text-white text-3xl"
              onClick={showNext}
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
