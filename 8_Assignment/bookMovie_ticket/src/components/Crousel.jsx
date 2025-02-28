import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 3; // 3 images at a time

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-500 flex justify-center items-center mt-10">
      {/* Carousel Container */}
      <div className="relative w-[914px] h-[514px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`w-[60%] h-[514px] mx-2 flex-shrink-0 rounded-2xl shadow-lg ${
                index === currentIndex ? "w-full opacity-100" : "opacity-80"
              }`}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* Buttons - Bottom Center */}
        <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
