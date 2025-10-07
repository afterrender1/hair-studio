"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const DEFAULT_VIDEOS = [
  { id: "dEd65H0_2R4", title: "Intro to Salon Business" },
  { id: "BSVY0C8osbM", title: "Advanced Cutting Techniques" },
  { id: "5Fbwd_Pdykk", title: "Beard Shaping Tutorial" },
  { id: "9U7XJSJIxwg", title: "Styling for Events" },
  { id: "EmAuxaDAHA8", title: "Color Basics" },
  { id: "OjVoPJ07Wsc", title: "Client Consultation Tips" },
];

export default function LearnWithUs({ videos = DEFAULT_VIDEOS }) {
  const sectionRef = useRef(null);

  // Smooth parallax effect
  const handleMouseMove = (e) => {
    const section = sectionRef.current;
    if (!section) return;
    const { left, top, width, height } = section.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    section.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  };

  const handleMouseLeave = () => {
    if (sectionRef.current) sectionRef.current.style.transform = "translate(0, 0)";
  };

  return (
    <section
      id="learn"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-20 md:py-28 bg-gradient-to-br from-sky-50 to-blue-50 overflow-hidden transition-transform duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-sky-400">
            Learn With Luxe Hair Studio
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Master salon skills with expert tutorials, cutting-edge techniques, and insider tips.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1.1}
          loop={true}
          freeMode={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 35 },
            1024: { slidesPerView: 2.5, spaceBetween: 40 },
          }}
          className="py-6 md:py-10"
        >
          {videos.map((v, i) => (
            <SwiperSlide key={v.id + i} className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                {/* Video */}
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-t-3xl object-cover"
                  />
                </div>

                {/* Video Info */}
                <div className="px-6 md:px-8 py-5 md:py-6 text-center bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mt-2">By Luxe Studio Experts</p>
                  <div className="mt-3 md:mt-4 flex justify-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-sky-100 text-sky-800">
                      Tutorial
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
