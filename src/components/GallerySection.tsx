import React, { useEffect, useRef, useState } from "react";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";


const images = [g1, g2, g3]; // Replace with GraphCMS later

const GallerySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 3; // Display 3 images at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % (images.length - imagesPerView + 1);
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            left: nextIndex * scrollRef.current.clientWidth / imagesPerView,
            behavior: "smooth",
          });
        }
        return nextIndex;
      });
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="gallery-section px-0 py-12 text-center">
      {/* Image Slider */}
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto mt-[-14.5rem] ">
        <div
          ref={scrollRef}
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            scrollBehavior: "smooth",
            overflowX: "hidden",
            width: "100%",
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-1/3 h-[500px] object-cover flex-shrink-0"
              style={{ minWidth: "33.33%" }}
            />
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2.5 justify-center mt-5" role="navigation">
        {Array.from({ length: images.length - imagesPerView + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-5.5 h-2.5 rounded-full ${
              currentIndex === index ? "bg-red-600" : "bg-red-600"
            } transition-all`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
