"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Barberimg1 from "@/public/barberimg1.png";
import Barberimg2 from "@/public/barberimg2.png";
import Barberimg3 from "@/public/barberimg3.png";

export default function Hero() {
  const slides = [
    {
      img: Barberimg1,
      title: `Experience the<br />Ultimate in Hair Care<br />at our <span class='text-sky-400'>Salon</span>`,
      desc: "Master goal-setting, mindset, and KPI tracking to skyrocket your styling business!",
      btn: "Get Started",
    },
    {
      img: Barberimg2,
      title: `Experience the<br />Ultimate in Hair Care<br />at our <span class='text-sky-400'>Salon</span>`,
      desc: "Learn proven systems to scale your beauty brand without burnout.",
          btn: "Get Started",

    },
    {
      img: Barberimg3,
      title: `Experience the<br />Ultimate in Hair Care<br />at our <span class='text-sky-400'>Salon</span>`,
      desc: "Discover the business and creative tools to become an elite independent stylist.",
          btn: "Get Started",

    },
  ];

  return (
    <section
      id="home"
      className="relative w-full h-[700px] overflow-hidden bg-sky-400/20 mt-0"
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
            <Image
              src={slide.img}
              alt="Salon Hero Image"
              fill
              className="object-cover brightness-95"
              priority
            />

            {/* Overlay Gradient & Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-36 text-white bg-gradient-to-r from-black/60 via-black/40 to-transparent backdrop-blur-[1px] text-left">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-xl drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />
              <p className="text-lg max-w-md mb-6 opacity-95 drop-shadow-md">
                {slide.desc}
              </p>
              <a
                href="#learn"
                className="px-8 py-3 bg-sky-400 text-white rounded-xl font-semibold hover:bg-sky-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
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
