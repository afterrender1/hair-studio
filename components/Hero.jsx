"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Rebanner1 from "@/public/heroimg1.png";
import Rebanner2 from "@/public/heroimg2.png";
import Rebanner3 from "@/public/heroimg3n.png";

export default function Hero() {
  const slides = [
    {
      img: Rebanner1,
      title: `Experience the<br />Ultimate in Hair Care<br />at our <span class='text-sky-400'>Salon</span>`,
      desc: "Master goal-setting, mindset, and KPI tracking to skyrocket your styling business!",
      btn: "Get Started",
    },
    {
      img: Rebanner2,
      title: `Experience the<br />Ultimate in Hair Care<br />at our <span class='text-sky-400'>Salon</span>`,
      desc: "Learn proven systems to scale your beauty brand without burnout.",
      btn: "Get Started",
    },
    {
      img: Rebanner3,
      title: `Experience the<br />Ultimate in Hair Care<br />at our <span class='text-sky-400'>Salon</span>`,
      desc: "Discover the business and creative tools to become an elite independent stylist.",
      btn: "Get Started",
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full h-[700px] md:h-[750px] lg:h-[800px] overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.img}
                alt="Salon Hero Image"
                fill
                className="object-cover w-full h-full brightness-95"
                priority
              />
            </div>

            {/* Overlay Gradient & Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 md:px-20 lg:px-36 text-white bg-gradient-to-r from-black/60 via-black/30 to-transparent">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug max-w-full md:max-w-xl drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />
              <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-full md:max-w-md mb-6 opacity-95 drop-shadow-md">
                {slide.desc}
              </p>
              <a
                href="#learn"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-sky-400 text-white rounded-xl font-semibold hover:bg-sky-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-sm sm:text-base md:text-lg"
              >
                {slide.btn}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
