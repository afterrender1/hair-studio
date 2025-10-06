"use client";
import React from "react";
import Image from "next/image";
import Rev from "@/public/rev.png"; // ✅ make sure this image exists in /public

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-white py-20 md:py-28 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* ---------- LEFT TEXT CONTENT ---------- */}
        <div className="text-center md:text-left space-y-6">
          {/* Tagline */}
          {/* <p className="uppercase font-semibold text-sm tracking-widest text-[#0039FF]">
            The Ultimate Business Course for Independent
            <br className="hidden sm:block" />
            <span className="block mt-2">Stylists</span>
          </p> */}

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Build a six-figure styling business{" "}
            <br className="hidden sm:block" />
            without burning out behind the chair.
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Master goal-setting, mindset, and KPI tracking to skyrocket your
            styling business!
          </p>

          {/* CTA Button */}
          <a
            href="#learn"
            className="inline-block mt-6 px-22 py-4 text-white text-lg font-semibold rounded-xl bg-[#0039FF] shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        {/* ---------- RIGHT SIDE: VIDEO + IMAGE ---------- */}
        <div className="flex flex-col items-center space-y-6">
          {/* YouTube Video */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              className="absolute inset-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/TMfLA3fpGVo?si=joe_6CFo70bkQAKz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Image Below Video */}
          <div className="w-full flex r">
            <Image
            src={Rev}
              alt="Hair coaching session"
              width={310}
              height={10}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
